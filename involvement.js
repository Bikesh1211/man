
// -----------for Involvement in other association-------------------
const add_involvement = document.querySelector("#addInvolvement")

add_involvement.addEventListener("click", addInvolvementDiv)
const involvement = document.getElementById('involvement')

function addInvolvementDiv(){
    const newInvolvementDiv = document.createElement("div")
    console.log("new involvement ");

    newInvolvementDiv.classList.add('div-container')

    involvement.appendChild(newInvolvementDiv)

    // for horizontal line
    const horizontal_involvement = document.createElement("hr");
    involvement.appendChild(horizontal_involvement)

    // for association  input
    const involvementlabelInput = document.createElement("label")
    involvementlabelInput.innerHTML= "Association"
    involvement.appendChild(involvementlabelInput)
    const involvementinputContainer = document.createElement("input")
    involvement.appendChild(involvementinputContainer)

    // for position  input
    const involvementlabelInput1 = document.createElement("label")
    involvementlabelInput1.innerHTML= "Position"
    involvement.appendChild(involvementlabelInput1)
    const involvementinputContainer1 = document.createElement("input")
    involvement.appendChild(involvementinputContainer1)

    // for from  input
    const involvementlabelInput2 = document.createElement("label")
    involvementlabelInput2.innerHTML= "From"
    involvement.appendChild(involvementlabelInput2)
    const involvementinputContainer2 = document.createElement("input")
    involvement.appendChild(involvementinputContainer2)

    // for line break
    const involvementlineBreak = document.createElement("br");
    involvement.appendChild(involvementlineBreak)



}


// -----------for Involvement in other association-------------------
