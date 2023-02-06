$(document).ready(function () {

    const pedra = "pedra"
    const papel = "papel"
    const tesoura = "tesoura"

    var player_select;

    var bot_select;

    $(".papel_item").on("click", function () {

        player_select = papel

    })

    $(".pedra_item").on("click", function () {

        player_select = pedra

    })

    $(".tesoura_item").on("click", function () {

        player_select = tesoura

    })



})

// Seleção do Bot
function bot_select_item(){

    var ArrayItens = ['pedra', 'papel', 'tesoura'];
    var bot_select = ArrayItens[(Math.random() * ArrayItens.length) | 0]
    console.log(bot_select)

}