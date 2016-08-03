/**
 * Created by primeadmin on 8/3/16.
 */
$(document).ready(function(){
    welcome();
    createBlocks();
    $('.container').on('click', '.box', click);
});

var randomColor;
var colorArray = ['blue', 'yellow', 'green', 'red', 'purple', 'orange'];

function welcome(){
    chooseColor();
    $('.welcome').text("Welcome, pick the box that is the color " + randomColor);
}

function click(){
    console.log($(this));
    console.log(this);
    var el = $(this).data('id');
    if(el === randomColor){
        alert("CORRECT!! YOU ARE AMAZING!!!!");
        $(".answer").empty();
        welcome();
    }else{
        $(".answer").append("So wrong. That is so wrong <br/>");
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseColor(){
    var number = randomNumber(0, colorArray.length-1);
    randomColor = colorArray[number];
    console.log(randomColor);
}

function createBlocks(){
    for(var i = 0; i < colorArray.length; i++){
        $('.container').append("<div class ='box' style='background-color: " + colorArray[i] + "'></div>");
        $('.container').children().last().data('id', colorArray[i]);
    }
}