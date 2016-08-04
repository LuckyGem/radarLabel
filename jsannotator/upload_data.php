<?php
$upload_dir = "http://shannon.cs.umass.edu/sheldon/birdcast/AppProjectCopy/js-segment-annotator/data/annotations/Dan/";
$img = $_POST['hidden_data'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = $upload_dir . mktime() . ".png";
$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
?>