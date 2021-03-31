<?php 

class Team  {
    public $id;
    public $avengers = [];
    public $members;

    public function __construct($id, $avengers) {   
        $this->id = $id;
        $this->avengers = $avengers;     
        $this->members = count($avengers);
    }

    public function battle($damage) : void {

        foreach($this->avengers as $key) {
            $key->hp -= $damage;
            if ($key->hp <= 0) 
                unset($this->avengers[array_search($key, $this->avengers)]);
        }
    }

    public function calculate_losses($cloned_team) : void {

        if (count($this->avengers) == $this->members)
                echo "We haven't lost anyone in this battle!";
        else {
            $died = $this->members - count($this->avengers);
            echo "In this battle we lost ". $died . " Avenger(s).". "\n";
        }
    }
}