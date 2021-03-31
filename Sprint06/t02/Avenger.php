<?php
    class Avenger {
        public $name;
        public $alias;
        public $gender;
        public $age;
        public $power;
        public $hp;

        public function __construct(string $name, string $alias, string $gender, int $age, $power, $hp) {
            $this->name = $name;
            $this->alias = $alias;
            $this->gender = $gender;
            $this->age = $age;
            $this->power = $power;
            $this->hp = $hp;
        }

        public function __toString() {
            return "name: $this->name\ngender: $this->gender\nage: $this->age\n";
        }

        public function __invoke() {
            echo "$this->alias\n";
            foreach ($this->power as $i) {
                echo "$i \n";
            }
            echo "\n";
        }
    }