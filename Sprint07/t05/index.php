<?php session_start(); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        table {
            width: 100%;
            border: 2px solid black;
            
        }
        th, td {
            
            border: 1px solid black;
        }

        * {
            color: black;
            text-decoration: none;
        }
    </style>
    
</body>
</html>

<?php

    class Table {
        
        private $table;
        private $path;
        private $options = "";
        
        private $arr = Array('ID', 'Name', 'Alignment', 'Gender', 'EyeColor', 'Race', 
                            'HairColor', 'Publisher', 'SkinColor', 'Height', 'Weight');

        public function __construct($path) {
            $this->path = $path;
            foreach ($this->arr as $i) {
                $this->arr[$i] = Array();
            }  
        }

        public function get_table() {
            return $this->table;
        }

        public function print_table() {

            
            $file = fopen($this->path, 'r') or die("Unable to open file!"); $h = 0;

            
            while ($readed = fgetcsv($file)) {
                $this->table .= '<tr>';
                if ($h == 0) {               
                    foreach ($readed as $elem) {
                        $this->table .= "<th> <a href='?change=$elem'>$elem</a> </th>";
                    }
                }
                else {
                    
                    foreach ($readed as $elem) {

                        $this->table .= "<td>$elem</td>";
                        array_push($this->arr[$this->arr[array_search($elem, $readed)]], $elem);                 
                    }
                }
                $this->table .= '<tr>';
                $h++;
            }
            
            fclose($file);
            $this->table = "<table>" . $this->table . "</table>";
            return $this->table;        
        }

        public function sorting($change, $filter) { 

            $string = "<table> <tr>"; 
            foreach ($this->arr as $key) {
                if (gettype($key) != 'array')
                    $string .= "<th><a href='?change=$key'>$key</a></th>";
            }
            $string .= "</tr>"; 
            for ($i = 0; $i < count($this->arr['ID']); $i++) {
                if ($this->arr[$change][$i] == $filter) {
                    $string.="<tr>";

                    foreach ($this->arr as $elem) {
                        if (gettype($elem) != 'array')
                            $string .= "<td> " . $this->arr[$elem][$i] . "</td>";   
                    }
                    $string .= "</tr>";
                }
            }
            return $string;
        }

        public function options($change) {
            
            $uniq = array_unique($this->arr[$change]);
            unset($this->options);
            foreach ($uniq as $elem) {
                $this->options .= "<option name='$elem'>$elem</option>";
            }

            return $this->options;
        }
    }


    // $options;

    echo "<h1>Parsing CSV data</h1>
                <form action='index.php' method='POST' enctype='multipart/form-data'>
                    <label>Upload file: </label><input type='file' name='file' required>
                    <input type='submit' name='upload' value='Upload'>
                    </form>
                    <br><br>";

    if ($_POST['upload']) {

        $path = $_FILES['file']['tmp_name'];
        echo  "  <form action='index.php' method='POST'>
                    <select name='filter'><option>Not Selected</option></select> 
                    <input type='button' value='Apply' name=''>
                </form><br>";
        $obj = new Table($path);
        echo $obj->print_table();

        $_SESSION['path'] = $path;
        $_SESSION['obj'] = $obj;
    }
    if ($_POST['apply']) {
        
        $obj = $_SESSION['obj'];
        $change = $_SESSION['change'];
        $options = $_SESSION['options'];
        
        echo  "  <form action='index.php' method='POST'>
                        <select name='filter'>$options</select> 
                        <input type='submit' value='Apply' name='apply'>
                </form><br>";
        echo $obj->sorting($change, $_POST['filter']);
    }
    if ($_GET['change']) {

        $obj = $_SESSION['obj'];
        $_SESSION['change'] = $_GET['change'];
        $options = $obj->options($_GET['change']);
        $_SESSION['options'] = $options;

        echo  "  <form action='index.php' method='POST'>
                        <select name='filter'>$options</select> 
                        <input type='submit' value='Apply' name='apply'>
                </form><br>";
        echo $obj->get_table();       
    }
?>


