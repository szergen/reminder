<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(isset($_POST['emailAddress'])) {



// EDIT THE 2 LINES BELOW AS REQUIRED

$email_to = "elena@re-minder.ro, szergen@gmail.com";

$email_subject = "E-mail from re-minder";





function died($error) {

    echo "We are very sorry, but there were error(s) found with the form you submitted. ";

    echo "These errors appear below.<br /><br />";

    echo $error."<br /><br />";

    echo "Please go back and fix these errors.<br /><br />";

    die();

}



$firstName = $_POST['firstName'];

$email_from = $_POST['emailAddress'];

$email_text = $_POST['emailText'];

$email_message = "Form details below.\n\n";


function clean_string($string) {

  $bad = array("content-type","bcc:","to:","cc:","href");

  return str_replace($bad,"",$string);

}



$email_message .= "First Name: ".clean_string($firstName)."\n";

$email_message .= "Email: ".clean_string($email_from)."\n";

$email_message .= "Text: ".clean_string($email_text)."\n";



// create email headers

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>


Thank you for contacting us. We will be in touch with you very soon.

<?php

}

?>
