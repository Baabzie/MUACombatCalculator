let renderAddPlayerDiv = () => {
    let addPlayerDiv = document.createElement("div");
    addPlayerDiv.setAttribute("id", "addPlayerDiv");
    addPlayerDiv.classList.add("add-player-div")
    let playersDiv = document.createElement("div");
    playersDiv.classList.add("players-div")

    let addPlayerInput = document.createElement("input");
    addPlayerInput.setAttribute("placeholder", "Karaktärens namn");

    let addPlayerBtn = document.createElement("button");
    addPlayerBtn.innerText = "Lägg till karaktär";
    addPlayerBtn.addEventListener("click", () => {
        addPlayerFunction(addPlayerInput.value,playersDiv);
    })

    addPlayerDiv.append(addPlayerInput, addPlayerBtn);

    document.querySelector("main").append(addPlayerDiv, playersDiv);
};

let addPlayerFunction = (name, output) => {
    let playerDiv = document.createElement("div");
    playerDiv.classList.add("player-div");

    let characterNameDiv = document.createElement("div");
    characterNameDiv.classList.add("character-name-div")

    let characterName = document.createElement("h2");
    characterName.innerText = name;

    let removeBtn = document.createElement("button");
    removeBtn.innerText= "Ta bort";
    removeBtn.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove();
    })

    characterNameDiv.append(characterName, removeBtn)
    //------------------------------------------------
    let attackRollDiv = document.createElement("div");
    attackRollDiv.classList.add("attack-roll-div");

    let attackRollHeading = document.createElement("h3");
    attackRollHeading.innerText = "Slå för attack:"

    let diceSkillDiv = document.createElement("div");
    diceSkillDiv.classList.add("dice-skill-div");

    let numberOfDice = document.createElement("input");
    numberOfDice.setAttribute("type", "number");
    numberOfDice.setAttribute("value", "1");

    let diceP = document.createElement("p")
    diceP.innerText = "T";

    let diceType = document.createElement("input");
    diceType.setAttribute("type", "number");
    diceType.setAttribute("value", "100");

    diceSkillDiv.append(numberOfDice, diceP, diceType)

    let relevantSkillDiv = document.createElement("div");
    relevantSkillDiv.classList.add("relevant-skill-div");

    let onSkillP = document.createElement("p")
    onSkillP.innerText = "På relevent färdighetsnivå:";

    let skillNumber = document.createElement("input");
    skillNumber.setAttribute("type", "number");
    skillNumber.setAttribute("placeholder", "-");

    relevantSkillDiv.append(onSkillP, skillNumber);
    
    let modifierDiv = document.createElement("div");
    modifierDiv.classList.add("modifier-div");
    
    let modifierP = document.createElement("p")
    modifierP.innerText = "Med svårighetsmodifikator:";
    
    let modifierNumber = document.createElement("input");
    modifierNumber.setAttribute("type", "number");
    modifierNumber.setAttribute("value", "0");
    
    modifierDiv.append(modifierP, modifierNumber);

    attackRollDiv.append(attackRollHeading, diceSkillDiv, relevantSkillDiv, modifierDiv);
    //------------------------------------------------
    let enemyDefenseRollDiv = document.createElement("div");
    enemyDefenseRollDiv.classList.add("enemy-defense-roll-div");

    let enemyDefenseRollHeading = document.createElement("h3");
    enemyDefenseRollHeading.innerText = "Mot fiendens försvar:"

    let enemyName = document.createElement("input");
    enemyName.setAttribute("placeholder", "Fiendens Namn")
    enemyName.classList.add("enemy-name")

    let enemyDiceSkillDiv = document.createElement("div");
    enemyDiceSkillDiv.classList.add("enemy-dice-skill-div");

    let enemyNumberOfDice = document.createElement("input");
    enemyNumberOfDice.setAttribute("type", "number");
    enemyNumberOfDice.setAttribute("value", "1");

    let enemyDiceP = document.createElement("p")
    enemyDiceP .innerText = "T";

    let enemyDiceType = document.createElement("input");
    enemyDiceType.setAttribute("type", "number");
    enemyDiceType.setAttribute("value", "100");

    enemyDiceSkillDiv.append(enemyNumberOfDice , enemyDiceP, enemyDiceType)

    let enemyRelevantSkillDiv = document.createElement("div");
    enemyRelevantSkillDiv.classList.add("enemy-relevant-skill-div");

    let enemyOnSkillP = document.createElement("p")
    enemyOnSkillP.innerText = "På relevent färdighetsnivå:";

    let enemySkillNumber = document.createElement("input");
    enemySkillNumber.setAttribute("type", "number");
    enemySkillNumber.setAttribute("placeholder", "-");

    enemyRelevantSkillDiv.append(enemyOnSkillP, enemySkillNumber);

    let enemyModifierDiv = document.createElement("div");
    enemyModifierDiv.classList.add("enemy-modifier-div");

    let enemyModifierP = document.createElement("p")
    enemyModifierP.innerText = "Med svårighetsmodifikator:";

    let enemyModifierNumber = document.createElement("input");
    enemyModifierNumber.setAttribute("type", "number");
    enemyModifierNumber.setAttribute("value", "0");

    enemyModifierDiv.append(enemyModifierP, enemyModifierNumber);

    enemyDefenseRollDiv.append(enemyDefenseRollHeading, enemyName, enemyDiceSkillDiv, enemyRelevantSkillDiv, enemyModifierDiv);
    //------------------------------------------------
    let weaponRollDiv = document.createElement("div");
    weaponRollDiv.classList.add("weapon-roll-div");

    let weaponRollHeading = document.createElement("h3");
    weaponRollHeading.innerText = "Med vapenskada:"

    let weaponName = document.createElement("input");
    weaponName.setAttribute("placeholder", "Vapnets Namn")
    weaponName.classList.add("weapon-name");

    let weaponDiceDiv = document.createElement("div");
    weaponDiceDiv.classList.add("weapon-dice-div");

    let weaponNumberOfDice = document.createElement("input");
    weaponNumberOfDice.setAttribute("type", "number");
    weaponNumberOfDice.setAttribute("placeholder", "-");

    let weaponDiceP = document.createElement("p")
    weaponDiceP.innerText = "T";

    let weaponDiceType = document.createElement("input");
    weaponDiceType.setAttribute("type", "number");
    weaponDiceType.setAttribute("placeholder", "-");

    let weaponAddedDamP = document.createElement("p")
    weaponAddedDamP.innerText = "+";

    let weaponAddedDam = document.createElement("input");
    weaponAddedDam.setAttribute("type", "number");
    weaponAddedDam.setAttribute("value", "0");

    weaponDiceDiv.append(weaponNumberOfDice , weaponDiceP, weaponDiceType, weaponAddedDamP, weaponAddedDam)
    weaponRollDiv.append(weaponRollHeading, weaponName, weaponDiceDiv)
    
    //------------------------------------------------

    let rollBtn = document.createElement("button");
    rollBtn.innerText = "Räkna ut!"
    let outputDiv = document.createElement("div");
    outputDiv.classList.add("output-div")

    rollBtn.addEventListener("click", () => {
        outputDiv.innerHTML = "";
        let error = document.createElement("p");
        error.innerText = "Fyll i alla relevanta siffror!";
        if (numberOfDice.value === "" || diceType.value === "" || enemyNumberOfDice.value === "" || enemyDiceType.value === "" || skillNumber.value === "" || enemySkillNumber.value === "") {
            outputDiv.append(error)
        }
        else {
            let enemyDisplayName = enemyName.value;
    
            if (name === "") {
                name = "Karaktären"
            }
    
            if (enemyDisplayName === "") {
                enemyDisplayName = "Fienden"
            }
            
            let yourRoll = diceRollFunction(numberOfDice, diceType);
    
            let yourRollP = document.createElement("p");
            yourRollP.innerText = `${name} slår för attack: ${yourRoll}.`;
            outputDiv.append(yourRollP);


            if (yourRoll + modifierNumber.valueAsNumber > (skillNumber.valueAsNumber)) {
                console.log("fail")
                let failOnSkillP = document.createElement("p");
                failOnSkillP.innerText = `${name} misslyckas, ${yourRoll} är över ${skillNumber.value}.`
                if (modifierNumber.value !=="0" ) {
                    failOnSkillP.innerText = `${name} misslyckas, ${yourRoll} + ${modifierNumber.value} är över ${skillNumber.value}.`
                }
                outputDiv.append(failOnSkillP)
                return
            }
            else if (yourRoll + modifierNumber.valueAsNumber < (skillNumber.valueAsNumber)) {
                let succesOnSkillP = document.createElement("p");
                succesOnSkillP.innerText = `${name} lyckades, ${yourRoll} är under ${skillNumber.value}.`
                if (modifierNumber.value !=="0" ) {
                    succesOnSkillP.innerText = `${name} lyckades, ${yourRoll} + ${modifierNumber.value} är under ${skillNumber.value}.`
                }
                outputDiv.append(succesOnSkillP)
            }
    
            let enemyRoll = diceRollFunction(enemyNumberOfDice, enemyDiceType);
            let enemyRollP = document.createElement("p");
            enemyRollP.innerText = `${enemyDisplayName} slår för försvar: ${enemyRoll}.`;
            outputDiv.append(enemyRollP);

            if (enemyRoll + enemyModifierNumber.valueAsNumber > (enemySkillNumber.valueAsNumber)) {
                let failOnSkillP = document.createElement("p");
                failOnSkillP.innerText = `${enemyDisplayName} misslyckas, ${enemyRoll} är över ${enemySkillNumber.value}.`
                if (modifierNumber.value !=="0" ) {
                    failOnSkillP.innerText = `${enemyDisplayName} misslyckas, ${enemyRoll} + ${enemyModifierNumber.value} är över ${skillNumber.value}.`
                }
                let charHit = document.createElement("p");
                charHit.innerText = `${name} träffar ${enemyDisplayName}.`
                outputDiv.append(failOnSkillP, charHit)
            }
            else if (enemyRoll + enemyModifierNumber.valueAsNumber < (enemySkillNumber.valueAsNumber)) {
                let succesOnSkillP = document.createElement("p");
                succesOnSkillP.innerText = `${enemyDisplayName} lyckades, ${enemyRoll} är under ${enemySkillNumber.value}.`
                if (modifierNumber.value !=="0" ) {
                    succesOnSkillP.innerText = `${enemyDisplayName} lyckades, ${enemyRoll} + ${enemyModifierNumber.value} är under ${skillNumber.value}.`
                }
                let charMiss = document.createElement("p");
                charMiss.innerText = `${name} träffar inte ${enemyDisplayName}.`
                outputDiv.append(succesOnSkillP , charMiss)
                return
            }

            let damageRoll = diceRollFunction(weaponNumberOfDice, weaponDiceType, weaponAddedDam);
            let damageP = document.createElement("p");
            damageP.innerText = `${name} gör ${damageRoll}kp skada på ${enemyDisplayName}.`
            outputDiv.append(damageP);
        }

    })

    playerDiv.append(characterNameDiv, attackRollDiv, enemyDefenseRollDiv, weaponRollDiv, rollBtn, outputDiv);
    output.append(playerDiv);
}

let calculation = (typeOfDice) => {
    let result = ((Math.floor(Math.random() * typeOfDice)) + 1);
    return result
}

let diceRollFunction = (numberOfDice, diceType, plus) => {
    let arrayCalc = [];
        let arrayString = [];
        for ( let j=0; j < parseInt(numberOfDice.value, 10); j++) {
            let result = calculation(parseInt(diceType.value, 10))
            arrayCalc.push(result);
            arrayString.push(result);
            if (parseInt(numberOfDice.value, 10) === 1) {
    
            }
            else if (j !== (parseInt(numberOfDice.value, 10) - 1)) {
                arrayString.push(" + ");
            }
            else {
                arrayString.push(" = ");
            }
        }
    
        let sum = 0;
    
        arrayCalc.forEach((number) => {
            sum += number;
        })
    
        if (arrayString.length > 1) {
            arrayString.push(sum);
        }

        if (plus) {
            sum = sum + plus.valueAsNumber;
        }
    
        let resultP = "";
        resultP = arrayString.join("");
        return sum;
}

renderAddPlayerDiv();