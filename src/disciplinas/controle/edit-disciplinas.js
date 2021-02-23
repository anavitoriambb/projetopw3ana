// Criar a funcionalidade pra fechar o formulário na tela

function closeForm() {
    $('.btn-close').click(function(e) {
        e.preventDefault()
            //Primeiro iremos limpar a DIV
        $('#form').empty()

        //Depois iremos ocultar a DIV
        $('#form').hide(1000)
        $('.row').show(1000)
    })
}

$(document).ready(function() {

    //Monitorar o clique em cima dos botões com a classe btn-view
    //DEsenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
    $('.btn-edit').on('click', function(e) {
        e.preventDefault()

        //Criando uma variével para colocar o ID do botão clicar
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/view-disciplinas.php',
            success: function(dados) {
                $('#form').show(1000)
                $('.row').hide(1000)

                //Carregando nosso formulário dentro da DIV que deixamos em branco pra mostrar os dados
                $('#form').load('src/disciplinas/visao/adiciona-disciplinas.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i>Fechar</button>')
                    $('.btn-save').addClass('btn-update').removeClass('btn-save')
                    $('h2').empty()
                    $('h2').append('Edição Cadastro')
                    $('#disciplina').val(dados[0].disciplina)
                    $('#professor').val(dados[0].professor)
                    $('#professor').after(`<input type="hidden" name="id" id="id" value="${dados[0].id}">`)

                    closeForm()

                })
                $('body').append('<script src="src/disciplinas/controle/atualiza-disciplinas.js"></script>')
            }
        })
    })
})