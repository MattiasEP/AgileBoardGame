<?php
    include('./config.php');

    $query = "SELECT * FROM cards ORDER BY id ASC";
    $items = [];

    $result = mysqli_query($db, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $items[] = htmlspecialchars("<Card title='{$row['name']}' val='{$row['value']}'
        analysis='{$row['analysis']}' development='{$row['develop']}' testing='{$row['test']}'
        type='us' Click={this.handleCardClick} />");

        // Gör ovan till objekt istället

        // Släng in dessa objekt i $items
    }

    print_r(json_encode($items));
    // Skriv ut json_encode($items)
    // echo json_encode($items);
    // echo json_encode("['HEJSAN', 'BLABLA']");
    // I JS tar du emot med JSON.parse(response)
