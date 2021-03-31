<?php

    class HardWorker {

        private $name;
        private $age;
        private $salary;

        public function setName($name) {

            if (gettype($name) != "string")
                return false;
            $this->name = $name;
            return true;
        }

        public function getName() {
            return $this->name;
        }

        public function setAge($age) {
            if (gettype($age) != "integer")
                return false;
            $this->age = $age;
            return true;
        }

        public function getAge() {
            return $this->age;
        }

        public function setSalary($salary) {

            if (gettype($salary) != "integer")
                return false;
            $this->salary = $salary;
            return true;
        }

        public function getSalary() {
            return $this->salary;
        }

        public function toArray() {

            $arr['name'] = $this->name;
            $arr['age'] = $this->age;
            $arr['salary'] = $this->salary;
            return $arr;
        }

    }


    $Bruce= new HardWorker();
    $Bruce->setName("Bruce");
    echo $Bruce->getName() . "\n";
    $Bruce->setAge(50);
    $Bruce->setSalary(1500);
    print_r($Bruce->toArray());
    $Bruce->setName("Linda");
    $Bruce->setAge(140);
    print_r($Bruce->toArray());
?>