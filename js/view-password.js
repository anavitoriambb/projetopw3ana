$(document).ready(function() {
    $('.mdi').click(function() {
        let status = $(this).attr('data-status')

        if (status == '0') {
            //Mostrar as senhas digitadas
            $('#senha').removeAttr('type', 'password');
            $('#senha').attr('type', 'text');

            $('.mdi').removeClass('mdi-eye-off')
            $('.mdi').addClass('mdi-eye');
            $('.mdi').removeAttr('data-status', '0')
            $('.mdi').attr('data-status', '1')

        } else {
            //ocultar a senha
            $('#senha').removeAttr('type', 'text');
            $('#senha').attr('type', 'password');

            $('.mdi').addClass('mdi-eye-off')
            $('.mdi').removeClass('mdi-eye');

            $('.mdi').removeAttr('data-status', '1')
            $('.mdi').attr('data-status', '0');



        }
    })

})