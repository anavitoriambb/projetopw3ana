<?php
//Iremos nos conectar ao banco de dados
//require_once é o memso que include
include('../../conexao/conn.php');

$nome = $_REQUEST['nome'];
$curso = $_REQUEST['curso'];
$tipo = $_REQUEST['tipo'];
$senha = $_REQUEST['senha'];
$id = $_REQUEST['id'];

//Só o nome da disciplina vai ser obrigatória o nome do prof não
//isso é uma validação
if ($nome == "" || $curso == "" || $tipo == "") {
    echo "Os campos nomes, curso e tipo não pode estar vazio, tente novamente";
}else{
    //Gerar um script SQL para cadastro de informações no banco de dados, em parentese os campos e values é os valores
    $sql = "UPDATE alunos SET nome = '".$nome."', curso = '".$curso."', senha = '".md5($senha)."', tipo = '.$tipo.' WHERE id = ".$id."";
    //Testar o comando SQL no banco de dados
    //Query = linha de comando no BD
    if (mysqli_query($conecta, $sql)) {
        $dados = array('return' => true);
    }else {
        $dados = array('return' => false);

    }
}
echo json_encode($dados);