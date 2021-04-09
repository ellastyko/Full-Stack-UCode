
<?php

    class Heroes extends Model {

        public $id;
        public $name;
        public $description;
        public $race;
        public $class_role;
        
        public function __construct() {
            parent::__construct();
        }

        public function find($id) {

            if ($this->connection->getConnectionStatus()) {

                $command = $this->connection->connection->query("SELECT * FROM heroes WHERE id=$id");

                $result = $command->fetch(PDO::FETCH_ASSOC);

                $this->id = $result['id'];
                $this->name = $result['name'];
                $this->description = $result['description'];
                $this->race = $result['race'];
                $this->class_role = $result['class_role'];
            }
        }

        public function delete() {

            if ($this->connection->getConnectionStatus()) {

                $comm = $this->connection->connection->query("SELECT * FROM heroes WHERE id=$this->id");
                $result = $comm->fetch(PDO::FETCH_ASSOC);

                if ($result) {
                    $sql = "DELETE FROM heroes WHERE id=\"$this->id\";";
                    echo $sql;
                    $command = $this->connection->connection->query($sql);

                    $command->execute();
                    echo "DELETED!\n";
                }
                else {
                    echo "ISN`T EXISTS!\n";
                }
                $this->id = null;
                $this->name = null;
                $this->description = null;
                $this->race = null;
                $this->class_role = null;         
            }
        }

        public function save() {

            if ($this->connection->getConnectionStatus()) {

                $command = $this->connection->connection->query("SELECT * FROM heroes WHERE id=$this->id");
                $result = $command->fetch(PDO::FETCH_ASSOC);
                if ($result) {

                    $sql = "UPDATE heroes SET name=\"$this->name\", description=\"$this->description\", race=\"$this->race\",  class_role=\"$this->class_role\" WHERE id=\"$this->id\";";

                    $command = $this->connection->connection->prepare($sql);
                    $command->execute();
                    echo "UPDATED!\n";
                }
                else {
                    $sql = 'INSERT INTO heroes(`Name`, `Description`, `Race`, `class_role`) VALUES ("' . $this->name . '","' . $this->description . '","' . $this->race . '","' . $this->class_role . '");';
  
                    $command = $this->connection->connection->prepare($sql);
                    $command->execute();
                    echo "INSERTED!\n";                
                }
                $this->id = null;
                $this->name = null;
                $this->description = null;
                $this->race = null;
                $this->class_role = null;
            }        
        }


    
    }    
?>