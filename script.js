$(document).ready(function () {

    const pedra = "pedra"
    const papel = "papel"
    const tesoura = "tesoura"

    var player_select;

    var bot_select;
    var box_item_selecionado_bot;

    $(".papel_item").on("click", function () {

        player_select = papel

        console.log($(this))
        



    })

    $(".pedra_item").on("click", function () {

        player_select = pedra

        var box_add = $(this)

        Bot_select_item()

        $(".selecionar_item").css("display", "none")


        $(".box_item_selecionado .item_box").append(box_add)


    })

    $(".tesoura_item").on("click", function () {

        player_select = tesoura

    })


})

// Seleção do Bot
function Bot_select_item() {

    var ArrayItens = ['pedra', 'papel', 'tesoura'];
    var bot_select = ArrayItens[(Math.random() * ArrayItens.length) | 0]
    console.log(bot_select)

}

// Resultado do Jogo
function Calcular_resultado() {



}