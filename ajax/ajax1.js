$(document).ready(function () {
    const apiUrl = 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php';
    let lastStockData = null;
    let lastNews = [];

    function fetchData() {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                updateStockData(data.stock);
                updateNews(data.news);
            },
            error: function (error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    function updateStockData(newStockData) {
        if (JSON.stringify(newStockData) !== JSON.stringify(lastStockData)) {
            lastStockData = newStockData;
            displayStockData(newStockData);
        }
    }

    function displayStockData(stockData) {
        const table = $('#stockTable');
        table.empty();

   
        const headerRow = '<tr><th>Company</th><th>Stock Price</th></tr>';
        table.append(headerRow);

       
        for (const company in stockData) {
            const row = `<tr><td>${company}</td><td>${stockData[company]}</td></tr>`;
            table.append(row);
        }
    }

    function updateNews(newNews) {
        if (newNews !== lastNews[0]) {
            lastNews.unshift(newNews);
            lastNews = lastNews.slice(0, 3); // 3nowe

            displayNewsRotator();
        }
    }

    function displayNewsRotator() {
        const rotator = $('#newsRotator');
        rotator.empty();

        for (const news of lastNews) {
            const newsItem = `<div>${news}</div>`;
            rotator.append(newsItem);
        }
    }

    // 10 seconds
    setInterval(fetchData, 10000);

    fetchData();
});
