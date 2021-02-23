$(document).ready(function() {

    //Monitorar o clique em cima dos botões com a classe btn-view
    //DEsenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
    $('.btn-delete').on('click', function(e) {
        e.preventDefault()

        //Criando uma variével para colocar o ID do botão clicar
        var dados = `id=${$(this).attr('id')}`

        console.log(dados);


        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/delete-disciplinas.php',
            success: function(dados) {
                //Limpo a nossa div chamada FORM pra receber o retorno do delete-disciplinas.php
                $('#form').empty()
                    //Incluimos o retorno do JSON na DIV
                $('#form').append(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                <strong>${dados.mensagem}</strong> 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)
                    //Limpamos o corpo da nossa tabela
                $('tbody').empty()
                    //Atualizamos a nossa tabela
                $('body').append('<script src="src/disciplinas/controle/list-disciplinas.js"></script>')

            }
        })
    })
})