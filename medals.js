
// -----------for academic qualitifaction-------------------
const add_medals = document.querySelector("#add_medals")

add_medals.addEventListener("click", addMedalsDiv)
const medals = document.getElementById('medals')

function addMedalsDiv(){
    const newMedalsDiv = document.createElement("div")
    console.log("new medels, honours, cication ");

    newMedalsDiv.classList.add('div-container')

    medals.appendChild(newMedalsDiv)

    // for horizontal line
    const horizontal_Medals = document.createElement("hr");
    medals.appendChild(horizontal_Medals)

    // for type  input
    const medalslabelInput = document.createElement("label")
    medalslabelInput.innerHTML= "Type"
    medals.appendChild(medalslabelInput)
    const medalsinputContainer = document.createElement("input")
    medals.appendChild(medalsinputContainer)



    // for organization  input
    const medalslabelInput1 = document.createElement("label")
    medalslabelInput1.innerHTML= "Organization"
    medals.appendChild(medalslabelInput1)
    const medalsinputContainer1 = document.createElement("input")
    medals.appendChild(medalsinputContainer1)


        // for line break
        const medalslineBreak = document.createElement("br");
        medals.appendChild(medalslineBreak)

    // for year  input
    const medalslabelInput2 = document.createElement("label")
    medalslabelInput2.innerHTML= "Year"
    medals.appendChild(medalslabelInput2)
    const medalsinputContainer2 = document.createElement("input")
    medals.appendChild(medalsinputContainer2)




}


// -----------for academic qualitifaction-------------------
