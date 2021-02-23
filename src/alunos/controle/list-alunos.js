$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/alunos/modelo/list-alunos.php',
        success: function(dados) {
            //A crase deixa escrever em mais de uma linha
            for (var i = 0; i < dados.length; i++) {


                let resultado = `
            <tr>
                <td class="text-center">${dados[i].id}</td>
                <td>${dados[i].nome}</td>
                <td>${dados[i].curso}</td>
                <td>${dados[i].tipo == 1 ? 'Administrador' : 'Aluno'}</td>
                <td class="text-center">
                    <button id="${dados[i].id}" class="btn btn-info btn-view btn-sm"><i class="mdi mdi-eye"></i></button>
                    <button id="${dados[i].id}" class="btn btn-primary btn-edit btn-sm"><i class="mdi mdi-pencil"></i></button>
                    <button id="${dados[i].id}" class="btn btn-danger btn-delete btn-sm"><i class="mdi mdi-trash-can"></i></button>
                </td>
            </tr>`
                $('tbody').append(resultado)
            }

            $('body').append('<script src="src/alunos/controle/view-alunos.js"></script>')
            $('body').append('<script src="src/alunos/controle/edit-alunos.js"></script>')
            $('body').append('<script src="src/alunos/controle/delete-alunos.js"></script>')

        }
    })
})