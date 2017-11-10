<?php

require_once '../../vendor/autoload.php';

$faker = \Faker\Factory::create();

$array = [];
for($i = 0; $i < 10; $i++) {
    $array[] = [
        'name' => $faker->name(),
        'address' => $faker->address(),
    ];
}

header('Content-Type: application/json');
print json_encode($array);