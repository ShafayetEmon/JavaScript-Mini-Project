function changeText(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImgSource1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImgSource1);

    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var randomImgSource2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomImgSource2);

    var h1 = document.querySelector("h1");

    if(randomNumber1 > randomNumber2){
        h1.innerHTML = "Player 1 wins";
    }
    else if(randomNumber1 < randomNumber2){
        h1.innerHTML = "Player 2 wins";
    }
    else {
        h1.innerHTML = "Draw";
    }
};

document.querySelector("button").addEventListener("click", changeText)