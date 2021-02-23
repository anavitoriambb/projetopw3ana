$(document).ready(function() {


    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/alunos/modelo/verifica-login.php',
        success: function(dados) {
            if (dados.return == false) {
                $(location).attr('href', 'index.html')
            } else {
                $('#boasvindas').append(`Seja bem vindo ao sistema: ${dados.nome}`)
            }
        }
    })
})