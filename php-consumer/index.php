<?php
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method == "POST") {
    $resultBody = file_get_contents["php://input"];
    $json = json_decode($resultBody);

    $text = $json->result->parameters->text;

    switch ($text) {
      case 'hi':
        $speech = "Hi, Nice to meet you";
        break;
      case 'bye':
        $speech = "Bye, good night";
        break;
      case 'anything':
        $speech = "Yes, you can type anything here. ";
        break;
      default:
        $speech = "Sorry, I didnt get that. Please ask me something else."
        break;
    }

    $response = new \stdClass();
    $response->speech = "";
    $response->displayText = "";
    $response->source = "webhoock";
    echo json_encode($response);

  }else{
    echo "Não autorizado o método";
  }

?>
