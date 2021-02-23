$(document).ready(function() {
    $('#logout').click(function(e) {
        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/alunos/modelo/logout-alunos.php',
            success: function(dados) {
                if (dados.result == true) {
                    $(location).attr('href', 'index.html')
                } else {
                    alert('Não existe usuário logado no sistema!')
                }
            }
        })
    })
})