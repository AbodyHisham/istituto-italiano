<?

$name =$_POST['name'];
$email =$_POST['email'];
$subject =$_POST['subject'];
$message =$_POST['message'];

$mailheader="from:".$name."<".$email.">\r\n";

$recipient= "mmatthewabdallah@gmail.com";

mail($recipient,$subject, $mailheader)
or die("Error!");

echo"message send"




?>
