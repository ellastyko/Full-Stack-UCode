<?php

    class Note {

        private $note;
        public function __construct(string $note) {
            if (!is_dir('notes')) {
                mkdir('notes');
            }
            $this->note = $note;
        }

        public function save(string $name, string $priority, string $textarea) {
            $array = Array("date" => date("Y/m/d/h/m/s"), "name" => $name, 
                                "priority" => $priority, "textarea" => $textarea);

            $file = fopen("./notes/$this->note.json", "a+") or die("Unable to open file!");
            fwrite($file, json_encode($array));
            fclose($file);
        }

        public function toList() {

            $file = fopen("./notes/$this->note", "a+") or die("Unable to open file!");   
            
            $readed = fread($file, filesize("./notes/$this->note"));
            fclose($file);

            
            $arr = json_decode($readed);
            $string = "<h1>Details of \"" . $this->note . "\"</h1> <ul>";
            $date = explode('/', $arr->date);
            $string .= "<ul> <li> date: " . $date[0] . "-" .$date[1]."-" .$date[2]. " " .$date[3] .":" .$date[4]. ":" .$date[5] . "</li>";
            $string .= "<li> name: " . $arr->name . "</li>";
            $string .= "<li> importance: " . $arr->priority . "</li>";
            $string .= "<li> text: " . $arr->textarea . "</li> </ul>";
            return $string;
        }


        public function delete() {
            
            unlink(glob("notes/".$this->note)[0]); // delete file
        }

    }
?>