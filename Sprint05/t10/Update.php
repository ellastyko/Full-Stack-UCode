<?php
    trait Update {

        
    private $array = array( "2 x Repulsors",
                            "M134 7.62mm Minigun",
                            "2 x FN F2000 Tacticals$",
                            "Sidewinder \"Ex-Wife\" Self-Guided Missile",
                            "M24 Shotgun",
                            "Milkor MGL 40mm Grenade Launcher",);

    public function makeBoom() : string {

        $output = "Array\n(\n";
        foreach ($this->array as $k => $v)  {
            $output .= "\t[$k] => $v\n";
        }
        $output .= ")\n";
        return $output;
    }
}
