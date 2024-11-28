
const nom=document.getElementById("name");
const nationalite=document.getElementById("nationality");
const club=document.getElementById("club");
const position=document.getElementById("position");

position.addEventListener("change", (event) => {
    if(position.value == "GK"){
        const positioning=document.querySelectorAll(".normal-joueur");
        for(let i=0;i<positioning.length;i++){
            positioning[i].setAttribute("hidden", "hidden"); //add class hidden   .hidden { display: "none" }
        }
        const physical=document.querySelectorAll(".goal-joueur");
        for(let i=0;i<physical.length;i++){
        physical[i].removeAttribute("hidden"); // remove class hidden
        }
    }else{
        const positioning=document.querySelectorAll(".normal-joueur")//nodeliste ==array
        for(let i=0;i<positioning.length;i++){
        positioning[i].removeAttribute("hidden");
        }
        const physical=document.querySelectorAll(".goal-joueur");
        for(let i=0;i<physical.length;i++){
        physical[i].setAttribute("hidden","hidden");
        }
    }
});
let joueurs = [];
function ajouter(){
    const position=document.getElementById("position");
    let inputs=document.getElementsByTagName("input");//return html collection
    inputs = Array.from(inputs).filter((item)=> !item.hasAttribute("hidden"));
    if(position.value !=="GK"){
    let joueur ={
        name : inputs[0].value,
        nationality :inputs[1].value,
        club :inputs[2].value,
        profile :inputs[3].value,
        flag :inputs[4].value ,
        logo :inputs[5].value,
        position :position.value,
        rating : inputs[6].value,
        pace :inputs[7].value ,
        shooting : inputs[8].value,
        passing : inputs[9].value,
        driblling : inputs[10].value,
        defending : inputs[11].value,
        physical : inputs[12].value,
    };
       joueurs.push(joueur);
    
}else{
    let joueur={
        "name":inputs[0].value,
        "nationality":inputs[1].value,
        "club":inputs[2].value,
        "profile":inputs[3].value,
        "flag":inputs[4].value ,
        "logo":inputs[5].value,
        "position":position.value,
        "rating": inputs[6].value,
        "diving":inputs[7].value ,
        "handling": inputs[8].value,
        "kicking": inputs[9].value,
        "reflexes": inputs[10].value,
        "speed": inputs[11].value,
        "positioning": inputs[12].value,
    }
        joueurs.push(joueur);
    
}

}


