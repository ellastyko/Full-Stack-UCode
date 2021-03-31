<?php 
    class Ingestion {
        public $id, $meal_type = array(), $day_of_diet, $products = array();

        function __construct($meal_type, $id) {
            $this->meal_type = $meal_type;
            $this->id = $id;
        }

        function get_from_fridge($product) : void {
            if($this->products[$product]->getKcal() > 200) {
                throw new EatException("No more junk food, dumpling");
            }
        }

        function setProduct($product) {
            $this->products[$product->getName()] = $product;
        }

        function getProducts() {
            return $this->products;
        }
    }