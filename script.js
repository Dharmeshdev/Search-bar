document.getElementById('userinput').addEventListener('keyup',(event)=>{

    let searchQuery = event.target.value.toLowerCase()
    let allDOMElements = document.getElementsByClassName('name');
    
    for (let counter = 0; counter < allDOMElements.length; counter++) {
        let currentName = allDOMElements[counter].textContent.toLowerCase()

        if(currentName.includes(searchQuery)){
            allDOMElements[counter].style.display = "block"
        }
        else{
            allDOMElements[counter].style.display = "none"
        }

    }
    

})

// javaScript challenges #2