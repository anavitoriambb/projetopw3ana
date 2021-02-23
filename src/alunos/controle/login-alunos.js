$(document).ready(function() {
    $('.btn-login').click(function(e) {
        e.preventDefault()
        var dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST', //É o como as informações serão enviadas ao PH
            dataType: 'JSON', //Modo de transição de dados entre a visão e modelo
            assiync: true, //É somente para demonstrar que a requisição será assíncrona
            data: dados, // É as informações que serão enviadas ao PHP
            url: 'src/alunos/modelo/login-alunos.php', //Para onde irá as informações
            success: function(dados) {

                if (dados.result == true) {
                    $(location).attr('href', 'painel.html');
                } else {

                    //Demontrar se deu certo ou errado...
                    $('#form-login').after(`
                <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                <strong>id ou senha informado incorreto... Por favor tente novamente</strong> 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)
                }

                //Limpando os campos do nosso formulário
                $('#id').val('')
                $('#senha').val('')
            }
        })
    })
})