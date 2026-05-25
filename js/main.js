$(document).ready(function () {

    // Máscaras
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Impedir números no nome
$('#nome').on('input', function () {
    this.value = this.value.replace(/[0-9]/g, '');
});


    // Carrossel
    $('.carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    // Validação
    $('#form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true }
        },
        submitHandler: function (form) {
            alert('Sua requisição foi enviada para análise, parabéns pela aquisição!');
            form.reset();
        },
        invalidHandler: function () {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

});