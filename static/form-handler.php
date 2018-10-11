<?php

$data = $_REQUEST;
$response = [];

$message = "Имя: " . $_REQUEST['name'] .
 "\r\n E-mail: " . $_REQUEST['email'] .
  "\r\n Телефон: " . $_REQUEST['phone'] .
   "\r\n Компания " . $_REQUEST['company'] .
    "\r\n Сообщение: " . $_REQUEST['message'];

$to      = 'info@ndrf.ru';
$subject = 'Заполнена форма на сайте | нашадоставка.рф';
$header = "From: noreply@нашадоставка.рф\r\n"; 
$header.= "MIME-Version: 1.0\r\n"; 
$header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
$header.= "X-Priority: 1\r\n"; 

$response['success'] = mail($to, $subject, $message, $header);


die(json_encode($response));

?>