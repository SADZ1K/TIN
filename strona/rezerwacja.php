<div id="rezerwacja">
    <h2>Formularz Rezerwacji Stolika</h2>
    <form action="proces.php" method="post">
        <label for="name">Imię:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="date">Data:</label>
        <input type="date" id="date" name="date" required>
        
        <label for="time">Godzina:</label>
        <input type="time" id="time" name="time" required>

        <input type="submit" value="Zarezerwuj">
    </form>
</div>