const selectedEl = function(el, id){
    el.classList.add('selected-el')
    console.log(el);
    
    for (let sibling of el.parentNode.children) {
        if (sibling !== el) sibling.classList.add('hide-sibling');
    }

    let computerChoice = computerArray[Math.floor(Math.random()*computerArray.length)]
    document.querySelector('.computer-choice__image').src = ("assets/images/icon-"+computerChoice+".svg")
    document.querySelector('.computer-choice__image').classList.remove('hide-sibling');

    document.getElementById('playButton').classList.remove('hide-sibling');

    checkwhoWins(id, computerChoice)
}

const playAgain = function(){
    let images = document.querySelectorAll('.images-hand')
    for (let image of images) {
        if(image.classList.contains('selected-el')){
            image.classList.remove('selected-el')
        }
        else if(image.classList.contains('hide-sibling')){
            image.classList.remove('hide-sibling')
        }
    }
    document.querySelector('.computer-choice__image').classList.add('hide-sibling');
    document.getElementById('playButton').classList.add('hide-sibling');
   

}

const computerArray = [
    "rock",
    "paper",
    "scissors"
]


let result = 0
const checkwhoWins = function(player, computer) {

    if(player === "rock" && computer === "paper"){
        result -= 1
        console.log(result)
    }
    else if(player === "rock" && computer === "scissors"){
        result += 1
        console.log(result)
    }
    else if(player === "paper" && computer === "rock"){
        result += 1
        console.log(result)
    }
    else if(player === "paper" && computer === "scissors"){
        result -= 1
        console.log(result)
    }
    else if(player === "scissors" && computer === "paper"){
        result += 1
        console.log(result)
    }
    else if(player === "scissors" && computer === "rock"){
        result -= 1
        console.log(result)
    }
    else if(player === computer){
        result += 0
        console.log(result)
    }



}