let string = ""
let buttons = document.querySelectorAll('.btn')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('#result').value = string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ''
            document.querySelector('#result').value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = string.slice(0, string.length-1);
            document.querySelector('#result').value = string;
        }

        else{
            string += e.target.innerHTML
            document.querySelector('#result').value = string
        }
        
    })
})