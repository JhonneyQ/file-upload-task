const img = document.querySelector(".input")
const tbody = document.querySelector("tbody")

img.addEventListener("change", function(e){
    // console.log(img.files);

    Array.from(e.target.files).forEach(element => {
        const tr = document.createElement("tr")
        const image = document.createElement("td")
        const name = document.createElement("td")
        const size = document.createElement("td")
        const deletee = document.createElement("button")
        const imagee = document.createElement("img") 

        const imgURL = new FileReader()
        imgURL.readAsDataURL(element)
        imgURL.onload = function(event) {
            imagee.src= event.target.result
        };

        imagee.classList.add("img")

        image.appendChild(imagee)

        name.textContent= element.name
        size.textContent= element.size
        deletee.textContent= "delete"

       tr.append(image,name,size,deletee)
       tbody.appendChild(tr)

       deletee.addEventListener("click", ()=>{
        const closest = deletee .closest("tr")
        closest.remove()
       })

    });
})

const btnDel = document.querySelector(".delete")

btnDel.addEventListener("click", ()=>{
    const a = document.querySelectorAll("td")
    a.remove() 
})