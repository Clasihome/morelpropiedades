<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('content-type: application/json; charset=utf-8');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);
    $empresa = "Morel Propiedades";

    //EMAIL HOSTING
    $username = "no-reply@morelpropiedades.cl";
    $pass = "Propiedades2021";
    $host = "mail.morelpropiedades.cl";
    // PARA PRUEBAS $_GET['email_agent'] = 'ivan.solaro3@gmail.com';


    if( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
        
        $name = isset( $_GET['name'] ) ? $_GET['name'] : 'No ingresado';
        $email = isset( $_GET['email'] ) || $_GET['email'] == '' ? $_GET['email'] : 'contacto@morelpropiedades.cl';
        $phone = isset( $_GET['phone'] ) ? $_GET['phone'] : 'No ingresado';
        $subject = isset( $_GET['subject'] ) ? $_GET['subject'] : 'No ingresado';
        $message = isset( $_GET['message'] ) ? $_GET['message'] : 'No ingresado';
        $email_to = isset( $_GET['email_agent']) ? $_GET['email_agent'] : 'ivan.solaro3@gmail.com';

        $mensajeCompleto = 
        "Recibiste una consulta desde morelpropiedades.cl<br>
        <br>
        <b><u>Asunto:</u> </b>".$subject."<br/>
        <b><u>Cliente:</u> </b>".$name."<br/>
        <b><u>Email:</u> </b><a href='mailto:".$email."'>".$email."</a><br/>
        <b><u>Celular:</u> </b>".$phone."<br/><br/>
        <b><u>Mensaje:</u> </b>".$message."<br/><br/>

        <a href='http://morelpropiedades.cl/'>www.morelpropiedades.cl</a>
        ";

      

        try {
            $mail->isSMTP();                     
            $mail->Host = $host; //ingresar el host de mail  
            $mail->SMTPAuth = true;                              
            $mail->Username = $username; //ingresar nombre de usuario                 
            $mail->Password = $pass; //ingresar pass de usuario                          
            $mail->SMTPSecure = 'ssl';                            
            $mail->Port = 465;                                    

            $mail->SetFrom( $email , $name );
            $mail->addAddress($email_to, $empresa);     
            $mail->Subject = $subject;
            $mail->isHTML(true);                                 

            $body = "$mensajeCompleto";
            $mail->MsgHTML( $body );

            $mail->CharSet = 'UTF-8';

            $mail->MsgHTML( $body );
            $sendEmail = $mail->Send();
     
            echo json_encode(['msj' => 'Mensaje enviado, gracias por su interés!', 'status' => 1]);
        } catch (Exception $e) {
            echo json_encode(['msj' => 'Hubo un error al enviar el formulario. Inténtelo nuevamente más tarde'.$e, 'status' => 0]);
        }
    }else{
        echo json_encode(['msj' => 'Disculpe, hubo un error. Inténtelo nuevamente más tarde', 'status' => 0]);
    }
?>


