<?php
    

    class Tower extends Building {
        private $elevator;
        private $arc_capacity;
        private $height;


        public function hasElevator() {
            return $this->elevator;
        }

        public function setElevator(bool $elevator) {
            $this->elevator = $elevator;
        }

        public function getArcCapacity() {
            return $this->arc_capacity;
        }

        public function setArcCapacity(int $arc_capacity) {
            $this->arc_capacity = $arc_capacity;
        }

        public function getHeight() {
            return $this->height;
        }

        public function setHeight(int $height) {
            $this->height = $height;
        }

        public function getFloorHeight() {
            return $this->height / $this->floors;
        }


        public function toString() : string {
            $props = ["Floors : " . $this->floors,
                "Material : " . $this->material,
                "Address : " . $this->address,
                "Elevator : " . $this->elevator,
                "Arc reactor capacity : " . $this->arc_capacity,
                "Height : " . $this->height,
                "Floor Height : " . $this->getFloorHeight(),
            ];

            $str = "";

            foreach ($props as $p)
                $str = $str . $p . "\n";
            return $str;
        }
    } 
?>