
// -----------for academic qualitifaction-------------------
const add_work_experience = document.querySelector("#add")

add_work_experience.addEventListener("click", addDiv)
const past_work = document.getElementById('past-work')

function addDiv(){
    const newDiv = document.createElement("div")
    console.log("new past work experience section has been added");


    newDiv.classList.add('div-container')

    past_work.appendChild(newDiv)

    // for horizontal line
    const horizontal = document.createElement("hr");
    past_work.appendChild(horizontal)

    // for academic  input
    const labelInput = document.createElement("label")
    labelInput.innerHTML= "Academic Qualification"
    past_work.appendChild(labelInput)
    const inputContainer = document.createElement("input")
    past_work.appendChild(inputContainer)

    // for line break
    const lineBreak = document.createElement("br");
    past_work.appendChild(lineBreak)



    // training input
    const labelInput1 = document.createElement("label")
    labelInput1.innerHTML= "Training"
    past_work.appendChild(labelInput1)
    const inputContainer1 = document.createElement("input")
    past_work.appendChild(inputContainer1)

    // topic input
    const labelInput2 = document.createElement("label")
    labelInput2.innerHTML= "Topic"
    past_work.appendChild(labelInput2)
    const inputContainer2 = document.createElement("input")
    past_work.appendChild(inputContainer2)

        // for line break
        const lineBreak1 = document.createElement("br");
        past_work.appendChild(lineBreak1)

    // institute input
    const labelInput3 = document.createElement("label")
    labelInput3.innerHTML= "Institute"
    past_work.appendChild(labelInput3)
    const inputContainer3 = document.createElement("input")
    past_work.appendChild(inputContainer3)

    // duration input
    const labelInput4 = document.createElement("label")
    labelInput4.innerHTML= "Institute"
    past_work.appendChild(labelInput4)
    const inputContainer4 = document.createElement("input")
    past_work.appendChild(inputContainer4)

}


// -----------for academic qualitifaction-------------------
