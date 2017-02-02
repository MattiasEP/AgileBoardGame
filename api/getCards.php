<?php
    include('./config.php');

    $query = "SELECT * FROM cards ORDER BY id ASC";
    $items = [];

    $result = mysqli_query($db, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $items[] = htmlspecialchars("<Card title='{$row['name']}' val='{$row['value']}'
        analysis='{$row['analysis']}' development='{$row['develop']}' testing='{$row['test']}'
        type='us' Click={this.handleCardClick} />");
    }

    json_encode($items);
