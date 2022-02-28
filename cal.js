let display = document.getElementById("calculation");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
    button.addEventListener('click', e => {
        let buttonClicked = e.target.textContent;
        console.log(buttonClicked);
        switch (buttonClicked) {
        case 'Del':
            if (display.textContent)
              display.innerText = display.innerText.slice(0, -1); 
                break;
        case '=':
            try{
                if(display.innerText)
            display.innerText = eval(display.innerText)
            } catch(Exception){
                display.innerText='errrrrrr'
            }
            break;
        case 'C':
            display.textContent = "";
            break;
        default:
            if (display.innerText === "errrrrrr"){
                display.innerText = '';
            }
            display.innerText += buttonClicked;
        }
        
    })
})
