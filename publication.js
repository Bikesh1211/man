
// -----------for publication -------------------
const add_publication = document.querySelector("#addpublicatoin")

add_publication.addEventListener("click", addpublicationDiv)
const publication = document.getElementById('publication')

function addpublicationDiv(){
    const newpublicationDiv = document.createElement("div")
    console.log("new publication ");

    newpublicationDiv.classList.add('div-container')

    publication.appendChild(newpublicationDiv)

    // for horizontal line
    const horizontal_publication = document.createElement("hr");
    publication.appendChild(horizontal_publication)

    // for title  input
    const PublicationlabelInput = document.createElement("label")
    PublicationlabelInput.innerHTML= "Title"
    publication.appendChild(PublicationlabelInput)
    const PublicationinputContainer = document.createElement("input")
    publication.appendChild(PublicationinputContainer)


    // for type  input
    const PublicationlabelInput1 = document.createElement("label")
    PublicationlabelInput1.innerHTML= "Type"
    publication.appendChild(PublicationlabelInput1)
    const PublicationinputContainer1 = document.createElement("input")
    publication.appendChild(PublicationinputContainer1)

        // for line break
        const publicaionlineBreak2 = document.createElement("br");
        publication.appendChild(publicaionlineBreak2)

    // for publisher  input
    const PublicationlabelInput2 = document.createElement("label")
    PublicationlabelInput2.innerHTML= "Publisher"
    publication.appendChild(PublicationlabelInput2)
    const PublicationinputContainer2 = document.createElement("input")
    publication.appendChild(PublicationinputContainer2)

    // for year
    const PublicationlabelInput3 = document.createElement("label")
    PublicationlabelInput3.innerHTML= "Year"
    publication.appendChild(PublicationlabelInput3)
    const PublicationinputContainer3 = document.createElement("input")
    publication.appendChild(PublicationinputContainer3)




    // -------------------------------

    // for line break
    const publicaionlineBreak = document.createElement("br");
    publication.appendChild(publicaionlineBreak)





}


// -----------for Publication-------------------
