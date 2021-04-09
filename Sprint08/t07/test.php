<?php
    function autoload($pClassName) { 
        include(__DIR__. '/' . $pClassName. '.php'); 
    }
    spl_autoload_register("autoload");

    $heroes = new Heroes();

    $heroes->find(3);

    // $heroes->id = 3;
    // $heroes->delete();

    $heroes->id = 9;
    $heroes->name = "ob";
    $heroes->description = "Dsdsdfsdfg and nothing";
    $heroes->race = "dsdfsdf";
    $heroes->class_role = "dps";
    $heroes->save();