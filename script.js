
const nom=document.getElementById("name");
const nationalite=document.getElementById("nationality");
const club=document.getElementById("club");
let position=document.getElementById("position");


position.addEventListener("change", (event) => {
    if(position.value == "GK"){
        const positioning=document.querySelectorAll(".normal-joueur");
        for(let i=0;i<positioning.length;i++){
            positioning[i].setAttribute("hidden", "hidden"); //add class hidden   .hidden { display: "none" }
        }
        const physical=document.querySelectorAll(".goal-joueur");
        for(let i=0;i<physical.length;i++){
        physical[i].removeAttribute("hidden");// remove class hidden
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
    
function ajouter(){
    
    let select = document.getElementById(`${position.value}`);
    console.log(select);
    let joueur_profile = select.querySelectorAll('img');
    
    let input_profile=document.getElementById("profile");
    joueur_profile[0].setAttribute("src",input_profile.value);
    
    let input_drapeau=document.getElementById("flag");
    joueur_profile[2].setAttribute("src",input_drapeau.value);

    let input_club=document.getElementById("logo_club");
    joueur_profile[3].setAttribute("src",input_club.value);

    let input_name=document.getElementById("name");
    let name=select.querySelector(".nomJ");
    name.textContent=`${input_name.value}`;

    if(position.value == "GK"){
        let inputs=document.getElementsByTagName("input");//return html collection
        inputs = Array.from(inputs).filter((item)=> !item.hasAttribute("hidden"));
        console.log(inputs);
   
        let statistic=select.querySelectorAll("p");
        statistic[1].textContent=`${inputs[7].value}`
        statistic[3].textContent=`${inputs[8].value}`;
        statistic[5].textContent=`${inputs[9].value}`;
        statistic[7].textContent=`${inputs[10].value}`;
        statistic[9].textContent=`${inputs[11].value}`;
        statistic[11].textContent=`${inputs[12].value}`;
            
    }
    else{
        let inputs=document.getElementsByTagName("input");//return html collection
        inputs = Array.from(inputs).filter((item)=> !item.hasAttribute("hidden"));
        console.log(inputs);
   
        let statistic=select.querySelectorAll("p");
        statistic[1].textContent=`${inputs[7].value}`
        statistic[3].textContent=`${inputs[8].value}`;
        statistic[5].textContent=`${inputs[9].value}`;
        statistic[7].textContent=`${inputs[10].value}`;
        statistic[9].textContent=`${inputs[11].value}`;
        statistic[11].textContent=`${inputs[12].value}`;
            
    }

}



