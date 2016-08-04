

<?php
if( 0 < $_FILES['file']['error'] ) 
	{
        echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    }
    else 
    {
        move_uploaded_file($_FILES['file']['tmp_name'], 'http://shannon.cs.umass.edu/sheldon/birdcast/AppProjectCopy/js-segment-annotator/data/annotations/Dan/' . $_FILES['file']['name']);
    }


?>

