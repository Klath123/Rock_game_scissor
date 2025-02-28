let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let human = document.querySelector("#green")
let comp = document.querySelector("#red")
let hum = 0
let coma = 0
function rand()
{
let option = ["scissor", "rock","paper"]
let random = Math.floor(Math.random()*3)
return option[random]
}
let result = document.querySelector(".result")
scissor.addEventListener('click',()=>{solve("scissor")})
rock.addEventListener('click',()=>{solve("rock")})
paper.addEventListener('click',()=>{solve("paper")})
function solve(e)
{
    let com = rand()
    if(e===com)
    {
        result.innerHTML = "Its A tie";
    }
    else if(
        e=="rock" && com == "paper" || 
        e=="scissor" && com == "rock" || 
        e=="paper" && com  == "scissor" 
    )
    {
        result.innerHTML = `You Lose,The computer played ${com}`;
        coma++;
    }
    else{
        result.innerHTML = `You Won,The computer played ${com}`;
        hum++;
    }
    human.innerHTML = hum
    comp.innerHTML = coma

}