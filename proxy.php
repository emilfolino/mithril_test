<?php

print("proxy");

// create curl resource
$ch = curl_init();
print("init");
// set url
curl_setopt($ch, CURLOPT_URL, "https://polisen.se/api/events?locationname=Karlskrona");
print("setopt");
//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
print("setopt");
// $output contains the output string
$output = curl_exec($ch);
var_dump($output);
// close curl resource to free up system resources
curl_close($ch);

print("HEJ HOPP I'm done");
