
const nom = document.getElementById("name");
const nationalite = document.getElementById("nationality");
const club = document.getElementById("club");
let position = document.getElementById("position");

//commentaire
position.addEventListener("change", (event) => {
    if (position.value == "GK") {
        const positioning = document.querySelectorAll(".normal-joueur");
        for (let i = 0; i < positioning.length; i++) {
            positioning[i].setAttribute("hidden", "hidden"); 
        }
        const physical = document.querySelectorAll(".goal-joueur");
        for (let i = 0; i < physical.length; i++) {
            physical[i].removeAttribute("hidden");
        }
    } else {
        const positioning = document.querySelectorAll(".normal-joueur");
        for (let i = 0; i < positioning.length; i++) {
            positioning[i].removeAttribute("hidden");
        }
        const physical = document.querySelectorAll(".goal-joueur");
        for (let i = 0; i < physical.length; i++) {
            physical[i].setAttribute("hidden", "hidden");
        }
    }
});
        let input_name = document.getElementById("name");
        
        let input_club = document.getElementById("logo_club");
        let input_drapeau = document.getElementById("flag");
        let input_profile = document.getElementById("profile");
function ajouter() {


    let inputs = document.getElementsByTagName("input");//return html collection
    inputs = Array.from(inputs).filter((item) => !item.hasAttribute("hidden"));
    console.log(inputs);
    let regex = /^[a-zA-Z]+$/;
    let trouveErreur = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            alert("il faut remplir toutes les champs");
            trouveErreur = true;
            break;
        }
        else if (inputs[i].getAttribute("type") == "number" && (inputs[i].value < 0 || inputs[i].value > 100)) {
            alert("il faut remplir toutes les champs");
            trouveErreur = true;
            break;
        }
        else if (!regex.test((inputs[0].value))) {
            alert("il faut saisir le nom ou prenom pas les deux");
            trouveErreur = true;
            break;
        }
    }

    if (!trouveErreur){
        
        let select = document.getElementById(`${position.value}`);
        let h5Element = select.querySelector('h5');
        if (h5Element.textContent.trim() !== "") {
            let parent_res=document.getElementsByClassName("joueur-reserve")[0];
            
            let card_reserve=document.createElement("div");
            card_reserve.setAttribute("id","resCard");
            card_reserve.setAttribute("class","cad-reserve");
            parent_res.appendChild(card_reserve);

           

            let imageD=document.createElement("img");
            imageD.setAttribute("src",input_profile.value);
            imageD.setAttribute("class","profile-res");
            card_reserve.appendChild(imageD);

            let nameR=document.createElement("h6");
            nameR.setAttribute("class","name-res nomJ");
            nameR.textContent=input_name.value;
            card_reserve.appendChild(nameR);

            let posR=document.createElement("h5");
            posR.setAttribute("class","pos_jr");
            posR.textContent=position.value;
            card_reserve.appendChild(posR);

            let card=document.createElement("img");
            card.setAttribute("src","./imgs/badge_ballon_dor.webp");
            card.setAttribute("class","joeur-res");
            card_reserve.appendChild(card);

            let flagRes=document.createElement("div");
            flagRes.setAttribute("class","drapeau_res");
            let nat=document.createElement("img");
            nat.setAttribute("src",input_drapeau.value);
            let logoC=document.createElement("img");
            logoC.setAttribute("src",input_club.value);
            flagRes.appendChild(nat);
            flagRes.appendChild(logoC);
            card_reserve.appendChild(flagRes);
            let sta=document.createElement("div");
            sta.setAttribute("class","statistique-res");
            card_reserve.appendChild(sta);

            if(position.value=="GK"){
                let diving=document.createElement("div");
                sta.appendChild(diving);
                let divGoal=document.createElement("p");
                divGoal.textContent="DIV";
                diving.appendChild(divGoal);
                let divCon=document.createElement("p");
                divCon.textContent=`${inputs[7].value}`;
                diving.appendChild(divCon);
                
                let handling=document.createElement("div");
                sta.appendChild(handling);
                let hanGoal=document.createElement("p");
                hanGoal.textContent="HAN";
                handling.appendChild(hanGoal);
                let handCon=document.createElement("p");
                handCon.textContent=`${inputs[8].value}`;
                handling.appendChild(handCon);

                let kicking=document.createElement("div");
                sta.appendChild(kicking);
                let kicGoal=document.createElement("p");
                kicGoal.textContent="KIC";
                kicking.appendChild(kicGoal);
                let kicCon=document.createElement("p");
                kicCon.textContent=`${inputs[9].value}`;
                kicking.appendChild(kicCon);

                let reflexes=document.createElement("div");
                sta.appendChild(reflexes);
                let refGoal=document.createElement("p");
                refGoal.textContent="REF";
                reflexes.appendChild(refGoal);
                let refCon=document.createElement("p");
                refCon.textContent=`${inputs[10].value}`;
                reflexes.appendChild(refCon);

                let speed=document.createElement("div");
                sta.appendChild(speed);
                let speedGoal=document.createElement("p");
                speedGoal.textContent="SP";
                speed.appendChild(speedGoal);
                let speedCon=document.createElement("p");
                speedCon.textContent=`${inputs[11].value}`;
                speed.appendChild(speedCon);

                let positi=document.createElement("div");
                sta.appendChild(positi);
                let positiGoal=document.createElement("p");
                positiGoal.textContent="POS";
                positi.appendChild(positiGoal);
                let positiCon=document.createElement("p");
                positiCon.textContent=`${inputs[12].value}`;
                positi.appendChild(positiCon);
                
                console.log("gool");
            }else {
                let pacing=document.createElement("div");
                sta.appendChild(pacing);
                let pac=document.createElement("p");
                pac.textContent="PAC";
                pacing.appendChild(pac);
                let pacCont=document.createElement("p");
                pacCont.textContent=`${inputs[7].value}`;
                pacing.appendChild(pacCont);
                
                let shooting=document.createElement("div");
                sta.appendChild(shooting);
                let shot=document.createElement("p");
                shot.textContent="SHO";
                shooting.appendChild(shot);
                let shotCon=document.createElement("p");
                shotCon.textContent=`${inputs[8].value}`;
                shooting.appendChild(shotCon);

                let passing=document.createElement("div");
                sta.appendChild(passing);
                let pas=document.createElement("p");
                pas.textContent="PAS";
                passing.appendChild(pas);
                let pasCon=document.createElement("p");
                pasCon.textContent=`${inputs[9].value}`;
                passing.appendChild(pasCon);

                let dribling=document.createElement("div");
                sta.appendChild(dribling);
                let drib=document.createElement("p");
                drib.textContent="DRI";
                dribling.appendChild(drib);
                let dribCon=document.createElement("p");
                dribCon.textContent=`${inputs[10].value}`;
                dribling.appendChild(dribCon);

                let defending=document.createElement("div");
                sta.appendChild(defending);
                let def=document.createElement("p");
                def.textContent="DEF";
                defending.appendChild(def);
                let defCon=document.createElement("p");
                defCon.textContent=`${inputs[11].value}`;
                defending.appendChild(defCon);

                let physi=document.createElement("div");
                sta.appendChild(physi);
                let phy=document.createElement("p");
                phy.textContent="PYS";
                physi.appendChild(phy);
                let phyCon=document.createElement("p");
                phyCon.textContent=`${inputs[12].value}`;
                physi.appendChild(phyCon);
                  
             }
             let icone_un=document.createElement("i");
             icone_un.setAttribute("class","fa-solid fa-pen-to-square fa-lg");
             icone_un.setAttribute("onclick","modifier(event)");
             icone_un.setAttribute("id","iconeRes1");
             card_reserve.appendChild(icone_un);
 
             let icone_deux=document.createElement("i");
             icone_deux.setAttribute("class","fa-solid fa-trash fa-lg");
             icone_deux.setAttribute("id","iconeRes2");
             icone_deux.setAttribute("onclick","supprimer(event)");
             card_reserve.appendChild(icone_deux);
         } else {

            
            let joueur_profile = select.querySelectorAll('img');

            
            joueur_profile[0].setAttribute("src", input_profile.value);

            joueur_profile[2].setAttribute("src", input_drapeau.value);

            joueur_profile[3].setAttribute("src", input_club.value);

            
            let name = select.querySelector(".nomJ");
            name.textContent = input_name.value;

            let value_position = select.getElementsByTagName("h5")[0];
            value_position.textContent =position.value;

            let statistic = select.querySelectorAll("p");
            statistic[1].textContent = `${inputs[7].value}`
            statistic[3].textContent = `${inputs[8].value}`;
            statistic[5].textContent = `${inputs[9].value}`;
            statistic[7].textContent = `${inputs[10].value}`;
            statistic[9].textContent = `${inputs[11].value}`;
            statistic[11].textContent = `${inputs[12].value}`;
        }

    }
}
function modifier(e){
    
    let parentElement=e.currentTarget.parentElement;
    console.log(parentElement);
    let def=parentElement.getAttribute("id");
    console.log(def);
    let nameMod=parentElement.getElementsByTagName("h6")[0].textContent;
    input_name.value=nameMod;

    let flagMod=parentElement.getElementsByTagName("img")[2];
    let sourceDr=flagMod.getAttribute("src");
    input_drapeau.value=sourceDr;

    let profilMod=parentElement.getElementsByTagName("img")[0];
    let sourcePr=profilMod.getAttribute("src");
    input_profile.value=sourcePr;

    let logoMod=parentElement.getElementsByTagName("img")[3];
    let sourceLg=logoMod.getAttribute("src");
    input_club.value=sourceLg;

    let posMod=parentElement.getElementsByTagName("h5")[0].textContent;
    console.log(posMod);
    position.value=posMod;
    let statMod=parentElement.querySelectorAll("p");
    let inputs = document.getElementsByTagName("input");//return html collection
    inputs = Array.from(inputs).filter((item) => !item.hasAttribute("hidden"));
    console.log(inputs);
    inputs[6].value="";
    inputs[7].value=statMod[1].textContent;
    inputs[8].value=statMod[3].textContent;
    inputs[9].value=statMod[5].textContent;
    inputs[10].value=statMod[7].textContent;
    inputs[11].value=statMod[9].textContent;
    inputs[12].value=statMod[11].textContent;
    let butMod=document.getElementById("btn1");
    butMod.textContent="MODIFIER";
    
    if(def == "resCard"){
        butMod.setAttribute("onclick",`update(${def})`);
         
    }else{
        butMod.setAttribute("onclick",`update(${posMod})`);
    }
}
function update(posMod){
            console.log(posMod);
            let inputs = document.getElementsByTagName("input");//return html collection
            inputs = Array.from(inputs).filter((item) => !item.hasAttribute("hidden"));
    
            let joueur_profile = posMod.querySelectorAll('img');
            joueur_profile[0].setAttribute("src", input_profile.value);

            joueur_profile[2].setAttribute("src", input_drapeau.value);

            joueur_profile[3].setAttribute("src", input_club.value);

            
            let name = posMod.querySelector(".nomJ");
            name.textContent = input_name.value;

            let value_position = posMod.getElementsByTagName("h5")[0];
            value_position.textContent = position.value;

            let statistic = posMod.querySelectorAll("p");
            statistic[1].textContent = `${inputs[7].value}`
            statistic[3].textContent = `${inputs[8].value}`;
            statistic[5].textContent = `${inputs[9].value}`;
            statistic[7].textContent = `${inputs[10].value}`;
            statistic[9].textContent = `${inputs[11].value}`;
            statistic[11].textContent = `${inputs[12].value}`;

            let butMod=document.getElementById("btn1");
            butMod.textContent="AJOUTER";
            butMod.setAttribute("onclick",`AJOUTER()`);
}

function supprimer(e){
    let parentElement=e.currentTarget.parentElement;
    let difference=parentElement.getAttribute("class");
    if(difference=="cad-reserve"){
        parentElement.remove();
    }else{
        let nameMod=parentElement.getElementsByTagName("h6")[0];
        nameMod.textContent="";
        let posMod=parentElement.getElementsByTagName("h5")[0];
        posMod.textContent="";
        let logoMod=parentElement.getElementsByTagName("img")[3];
        logoMod.setAttribute("src","./imgs/vide.png");
        let profilMod=parentElement.getElementsByTagName("img")[0];
        profilMod.setAttribute("src","./imgs/Untitled.png");
        let flagMod=parentElement.getElementsByTagName("img")[2];
        flagMod.setAttribute("src","./imgs/vide.png");

        let statistic = parentElement.querySelectorAll("p");
            statistic[1].textContent = "";
            statistic[3].textContent = "";
            statistic[5].textContent = "";
            statistic[7].textContent = "";
            statistic[9].textContent = "";
            statistic[11].textContent="";

    }
}
