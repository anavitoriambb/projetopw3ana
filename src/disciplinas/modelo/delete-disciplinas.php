<?php
//Iremos nos conectar ao banco de dados
//require_once é o memso que include
include('../../conexao/conn.php');

$id = $_REQUEST['id'];

if ($id == "") {
    $dados = array(
        'tipo' => 'alert-danger',
        'mensagem' => 'O id do registro não foi informado'
    );
}else{
    //Gerar um script SQL para cadastro de informações no banco de dados, em parentese os campos e values é os valores
    $sql = "DELETE FROM disciplinas WHERE id = ".$id." ";
    //Testar o comando SQL no banco de dados
    //Query = linha de comando no BD
    if (mysqli_query($conecta, $sql)) {
        $dados = array(
            'tipo' => 'alert-success',
            'mensagem' => 'Registro excluído com sucesso!'
        );

    }else {
        $dados = array(
            'tipo' => 'alert-danger',
            'mensagem' => 'Ocorreu um erro ao excluir o registro'
        );

    }
}
echo json_encode($dados);