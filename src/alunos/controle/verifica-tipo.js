$(document).ready(function() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/alunos/modelo/verifica-tipo.php',
        success: function(dados) {
            if (dados.tipo == 2) {
                $('.alunos').hide()
            } else {
                $('.alunos').show()
            }

        }
    })
})