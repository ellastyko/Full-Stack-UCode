<?php

    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    } 
    spl_autoload_register("autoload");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document</title>
</head>
<body>
    <style>
        table {
            width: 95%;
            margin: 0 auto;
        }
    </style>
<h1>Avenger Quote to XML</h1>

    <?php

        $q1 = new AvengerQuote(1, "Black widow", "sdfsdf", ["sdfsdf","sdfsdf","sdfsdf"]);
        $q1->addComment("Gsdfsdf");
        $q1->addComment("Cosdfsdf");
        $q1->addComment("sdfsdfsdf");

        $q2 = new AvengerQuote(2, "Iron Man", "assdfsdf", ["hsdfsd","sdfsdfsd"]);
        $q2->addComment("sdfsdfs");
        $q2->addComment("dfsdfsdf");

        $q3 = new AvengerQuote(3, "HULK", "sdfsd", ["sdf","sdfsd", "hsdfsdf"]);
        $q3->addComment("sdfsdf");
        $q3->addComment("sdfsdfsd");

        $q4 = new AvengerQuote(3, "sdfsdf", "sdfsdf", ["sdfsdf","sdfsdf"]);


        
        $q4->addComment("COMMENT1");
        $q4->addComment("COMMENT2");

        $list = new ListAvengerQuotes();
        $list->addAvengerQuote($q1);
        $list->addAvengerQuote($q2);
        $list->addAvengerQuote($q3);
        $list->addAvengerQuote($q4);

        $list->toXML("example.xml");

        echo '<table border="1"><tr>';
        echo '<td><pre>'; print_r($list); echo '</pre></td>';
        echo '<td><pre>'; print_r($list->fromXML("example.xml")); echo '</pre></td>';
        echo '</tr></table>';

    ?>

</body>
</html>