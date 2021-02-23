$(document).ready(function() {
    //Criar uma função para monitorar o clique em cima o botão com a classe btn-save
    $('.btn-update').click(function(e) {
        //O preventDefault faz o botao fazer o que eu quiser
        //e significa event
        e.preventDefault()
            //Iremos coletar todas as informações digitadas no formulário 
        var dados = $('#adiciona-alunos').serialize()
            // Criar uma requisição AJAX assincrona
        $.ajax({
            type: 'POST', //É o como as informações serão enviadas ao PH
            dataType: 'JSON', //Modo de transição de dados entre a visão e modelo
            assiync: true, //É somente para demonstrar que a requisição será assíncrona
            data: dados, // É as informações que serão enviadas ao PHP
            url: 'src/alunos/modelo/atualiza-alunos.php', //Para onde irá as informações
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide()
                    $('tbody').empty() //Limpando a tabela
                    $('body').append('<script src="src/alunos/controle/list-alunos.js"></script>') //Recarregando a tabela
                    $('.row').show()
                } else {
                    alert('Deu algo errado!')
                }
            }
        })


    })

})