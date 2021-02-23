<?php
//Iremos nos conectar ao banco de dados
//require_once é o memso que include
include('../../conexao/conn.php');

$nome = $_REQUEST['nome'];
$curso = $_REQUEST['curso'];
$senha = $_REQUEST['senha'];
$tipo = $_REQUEST['tipo'];

//A função strlen do PHP conta a quantidade de caracter existente dentro da variavel
if (strlen($nome) <= 0 && strlen($curso) <= 0 && strlen($senha) <= 0 && strlen($tipo) <= 0) {
    echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
}else{
    //Gerar um script SQL para cadastro de informações no banco de dados, em parentese os campos e values é os valores
    //Quando trabalhamos com senha, é muito importante criptografar a senha, no PHP podemos usar o base64 e MD5
    $sql = "INSERT INTO alunos (nome, curso, senha, tipo) VALUES ('".$nome."', '".$curso."', '".md5($senha)."', ".$tipo.")";
    //Testar o comando SQL no banco de dados
    //Query = linha de comando no BD
    if (mysqli_query($conecta, $sql)) {
        $dados = array(
            'tipo' => 'alert-success',
            'mensagem' => 'Dados cadastrados com sucesso!'
        );

    }else {
        $dados = array(
            'tipo' => 'alert-danger',
            'mensagem' => 'Ocorreu um erro no momento do cadastro'
        );

    }
}
echo json_encode($dados);