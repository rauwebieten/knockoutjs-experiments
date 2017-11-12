<?php

require_once '../../vendor/autoload.php';

$faker = \Faker\Factory::create('nl_BE');

$array = [];
for($i = 0; $i < 3; $i++) {
    $array[] = [
        'fname' => $faker->firstName(),
        'lname' => $faker->lastName(),
        'address' => $faker->address(),
    ];
}

header('Content-Type: application/json');
print json_encode($array);