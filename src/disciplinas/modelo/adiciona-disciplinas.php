<?php
//Iremos nos conectar ao banco de dados
//require_once é o memso que include
include('../../conexao/conn.php');

$disciplina = $_REQUEST['disciplina'];
$professor = $_REQUEST['professor'];
$nota = $_REQUEST['nota'];

session_start();
$id_alunos = $_SESSION['id'];

//Só o nome da disciplina vai ser obrigatória o nome do prof não
//isso é uma validação
if ($disciplina == "") {
    echo "O campo com o nome da disciplina não pode estar vazio, tente novamente";
}else{
    //Gerar um script SQL para cadastro de informações no banco de dados, em parentese os campos e values é os valores
    $sql = "INSERT INTO disciplinas (disciplina, professor, nota, id_alunos) VALUES ('".$disciplina."', '".$professor."', '".$nota."', ".$id_alunos.")";
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