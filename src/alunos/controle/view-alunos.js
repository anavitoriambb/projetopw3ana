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
    $('.btn-view').on('click', function(e) {
        e.preventDefault()

        //Criando uma variével para colocar o ID do botão clicar
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/view-alunos.php',
            success: function(dados) {
                $('#form').show(1000)
                $('.row').hide(1000)

                //Carregando nosso formulário dentro da DIV que deixamos em branco pra mostrar os dados
                $('#form').load('src/alunos/visao/adiciona-alunos.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i>Fechar</button>')
                    $('.btn-save').hide()
                    $('h2').empty()
                    $('h2').append('Visualização de Cadastro')
                    $('#nome').val(dados[0].nome)
                    $('#nome').attr('disabled', true)
                    $('#curso').val(dados[0].curso)
                    $('#curso').attr('disabled', true)
                    $('#senha').val(dados[0].senha)
                    $('#senha').attr('disabled', true)
                    $('#tipo').empty()
                    $('#tipo').append(`<option>${dados[0].tipo == 1 ? 'Administrador' : 'Aluno'}</option>`)
                    $('#tipo').attr('disabled', true)

                    closeForm()

                })
            }
        })
    })
})