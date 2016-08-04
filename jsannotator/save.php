

<?php
$file_data = $_POST['file_data'];
$user_name = $_POST['userName'];
// working on the file
$Dan_dir = 'http://shannon.cs.umass.edu/sheldon/birdcast/AppProjectCopy/js-segment-annotator/data/annotations/Dan';

$uploadfile = Dan_dir . basename($_FILE['fd']['name']);


$Yuzhi_dir = 'http://shannon.cs.umass.edu/sheldon/birdcast/AppProjectCopy/js-segment-annotator/data/annotations/Yuzhi';

// new unique name
$new_name = time() . '_' . $file_data['name'];

// copy?
if (copy($temp_dir . $file_data['name'], $new_dir . $new_name)) {
    unlink($temp_dir . $file_data['name']);
}
?>

