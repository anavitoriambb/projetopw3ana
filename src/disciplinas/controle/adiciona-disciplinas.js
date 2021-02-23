$(document).ready(function() {
    //Criar uma função para monitorar o clique em cima o botão com a classe btn-save
    $('.btn-save').click(function(e) {
        //O preventDefault faz o botao fazer o que eu quiser
        //e significa event
        e.preventDefault()
            //Iremos coletar todas as informações digitadas no formulário 
        var dados = $('#adiciona-disciplinas').serialize()
            // Criar uma requisição AJAX assincrona
        $.ajax({
            type: 'POST', //É o como as informações serão enviadas ao PH
            dataType: 'JSON', //Modo de transição de dados entre a visão e modelo
            assiync: true, //É somente para demonstrar que a requisição será assíncrona
            data: dados, // É as informações que serão enviadas ao PHP
            url: 'src/disciplinas/modelo/adiciona-disciplinas.php', //Para onde irá as informações
            success: function(dados) {
                //Demontrar se deu certo ou errado...
                $('#adiciona-disciplinas').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                <strong>${dados.mensagem}</strong> 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)
                    //Limpando os campos do nosso formulário
                $('#disciplina').val('')
                $('#professor').val('')
            }
        })


    })

})