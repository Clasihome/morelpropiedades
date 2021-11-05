<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('content-type: application/json; charset=utf-8, ');

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);


    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try{
        var_dump($_POST);
        $name = isset( $_POST['name'] ) ? $_POST['name'] : '';
        $email = isset( $_POST['email'] ) ? $_POST['email'] : '';
        $phone = isset( $_POST['phone'] ) ? $_POST['phone'] : '';
        $message = isset( $_POST['message']) ? $_POST['message'] : '';
        $email_agent = isset( $_POST['email_agent']) && $_POST['email_agent'] != "null" ? $_POST['email_agent']: '';
        $subject = isset( $_POST['subject']) ? $_POST['subject'] : 'contacto';
                
        $mensajeCompleto = 
        "Recibiste una consulta desde morelpropiedades.cl<br>
        <br>
        <b><u>Agente:</u> </b>".$nameAgent."<br/>
        <b><u>Asunto:</u> </b>Recibiste una consulta desde morelpropiedades.cl<br/>
        <b><u>Cliente:</u> </b>".$name."<br/>
        <b><u>Email:</u> </b><a href='mailto:".$email."'>".$email."</a><br/>
        <b><u>Celular:</u> </b>".$phone."<br/><br/>
        <b><u>Mensaje:</u> </b>".$message."<br/><br/>

        <a href='http://morelpropiedades.cl/'>www.morelpropiedades.cl</a>
        ";
        
        $mail->isSMTP();                     
        $mail->Host = 'mail.morelpropiedades.cl';  
        $mail->SMTPAuth = true;                
        $mail->Username = 'no-reply@morelpropiedades.cl';
        $mail->Password = 'Propiedades2021';            
        $mail->SMTPSecure = 'ssl';                            
        $mail->Port = 465;
        $mail->SetFrom( $email , 'Un cliente quiere contactar con morelpropiedades.cl' );
        $mail->addAddress( "no-reply@morelpropiedades.cl", 'Mensaje desde la web');   
        $mail->isHTML(true);                                 
        $mail->Subject = $subject;
        $body = "$mensajeCompleto";
        $mail->MsgHTML( $body );
        $mail->CharSet = 'UTF-8';
        if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
         } else {
            echo "success";
         }

        if($email_agent != ''){
            $mail->SetFrom( $email , 'Un cliente quiere contactar contigo' );
            $mail->addAddress( $email_agent, 'Mensaje desde la web');   
            $mail->isHTML(true);                                 
            $mail->Subject = $subject;
            $body = "$mensajeCompleto";
            $mail->MsgHTML( $body );
            $mail->CharSet = 'UTF-8';
            if(!$mail->Send()) {
                echo "Mailer Error: " . $mail->ErrorInfo;
             } else {
                echo "success";
             }  
        }

    }catch (Exception $e){
        echo "Error sending: " . $mail->ErrorInfo;
    }
?>