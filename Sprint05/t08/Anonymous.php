<?php

    function get_anonymous($name, $alias, $affilication) {
        
        return new class ($name, $alias, $affilication) {

            private $name;
            private $alias;
            private $affilication;

            public function __construct($name, $alias, $affilication) {
                $this->name = $name;
                $this->alias = $alias;
                $this->affilication = $affilication;
            }

            public function getName() {
                return $this->name;
            }

            public function getAlias() {
                return $this->alias;
            }

            public function getAffiliation() {
                return $this->affilication;
            }
        };  
        
    }   
?>