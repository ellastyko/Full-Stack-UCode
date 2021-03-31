<?php

    class LList implements IteratorAggregate {

        private $head;
        private $count;

        public function __constructor() {
            $head = null;
            $count = 0;           
        }


        public function getFirst() {
            return $this->head->data;
        }

        public function getLast() {
            while ($current->next != null) {
                $current = $current->next;
            }
            return $current->data;
        }

        public function add($value) {
            
            $node = new LLitem($value);

            if ($this->size == 0) {
                $this->head = $node;
            }
            else {
                $current = $this->head;

                while ($current->next != null) {

                    $current = $current->next;
                }
                $current->next = $node;
            }
            
            $this->size++;
        }

        public function addArr($array) {
            foreach ($array as $i) {
                $this->add($i);
            }
        }

        public function remove($value) {

            $current = $this->head;
            $previous = $current;
            while ($current->next != null) {
                
                if ($current->data == $value) {
                    if ($current == $this->head) {
                        $this->head = $this->head->next;
                    }
                    $previous->next = $current->next;
                    break;
                }          
                $previous = $current;
                $current = $current->next;
            }
            if ($current->data == $value) {
                if ($current == $this->head) {
                    $this->head = $this->head->next;
                }
                $previous->next = $current->next;
            }
        }

        public function removeAll($value) {
            while ($this->contains($value) == true) {
                $this->remove($value);
            }             
        }

        public function contains($value) {
            $current = $this->head;
            while ($current->next != null) {
                if ($current->data == $value)
                    return true;
                $current = $current->next;
            }
            return ($current->data == $value) ? true : false;
        }

        public function clear() {
            $this->count = 0;
            $this->head->next = null;   
            $this->head = null;     
        }

        public function count() {
            return $this->count;
        }

        public function toString() {
            $string = '';
            $current = $this->head;
            while ($current->next != null) {
                $string .= "$current->data, ";
                $current = $current->next;
            }
            $string .= $current->data;
            return $string;
        }

        public function toArray() {
            $array = [];
            $current = $this->head;
            while ($current->next != null) {
                $array[$i] = $current->data;
                $current = $current->next;
                $i++;
            }
            $array[$i] = $current->data;
            return $array;
        }

        public function getIterator() {
            return new ArrayIterator($this->toArray());
        }
    }