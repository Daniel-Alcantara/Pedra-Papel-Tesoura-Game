$(document).ready(function(){


    var player_select;

    $(".papel_item").on("click", function(){

        player_select = "papel"

    })

    $(".pedra_item").on("click", function(){

        player_select = "pedra"

    })

    $(".tesoura_item").on("click", function(){

        player_select = "tesoura"

    })

})