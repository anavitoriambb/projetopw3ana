<?php

session_start();

if(session_destroy()){
    $dados = array ('result' => true);
}else{
    $dados = array ('result' => false);
}

echo json_encode($dados);