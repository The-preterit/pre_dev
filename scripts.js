
let zoneText = document.getElementById("textVariable");
console.log(zoneText)

let button = document.querySelector("button")

let cg = 0

function iteration(itr){
    switch(itr){
        case 0:
            zoneText.innerText = "Algorithmic"
            break

        case 1:
            zoneText.innerText = "C language"
            break
            
        case 2:
            zoneText.innerText = "Web Site developper(Backend junior)"
            break
            
        case 3:
            zoneText.innerText = "Mobile application developper"
            break
            
        case 4:
            zoneText.innerText = "Git and Github"
            break
            
        case 5:
            zoneText.innerText = "Dreaming to be Data scientist"
            cg = 0
            break
        default:
            break
    }
    cg++
}

button.addEventListener("click", () => {
    console.log("click")
    iteration(cg)
})

