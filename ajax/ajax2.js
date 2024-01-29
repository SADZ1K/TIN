$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/albums", function (data) {
        data.forEach(function (album) {
            $("#gallery-list").append(`<div class="album" data-album-id="${album.id}">${album.title}</div>`);
        });

        $(".album").click(function () {
            var albumId = $(this).data("album-id");
            var clickedAlbum = $(this); 

            $.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function (photos) {
                
                $("#gallery-title").text(clickedAlbum.text()); 
                $("#gallery-details").show();

                $("#thumbnails").empty();
                photos.forEach(function (photo) {
                    $("#thumbnails").append(`<img src="${photo.thumbnailUrl}" data-image-url="${photo.url}" alt="Photo">`);
                });

                $("#thumbnails img").click(function () {
                    var imageUrl = $(this).data("image-url");
                    $("#lightbox-image").attr("src", imageUrl);
                    $("#lightbox").show();
                });
            });
        });
    });

    $("#close-lightbox").click(function () {
        $("#lightbox").hide();
    });
});
