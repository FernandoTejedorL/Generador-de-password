const lengthElement = document.getElementById('lengthElement');
const rangeBarElement = document.getElementById('rangeBarElement')

const getValue = () => {
    let lengthValue = rangeBarElement.value    
    lengthElement.textContent = lengthValue
}
rangeBarElement.addEventListener('mouseup', getValue)

let valuePass = lengthElement.textContent
console.log(valuePass)

const generateButtonElement = document.getElementById('generateButtonElement');
const finalPasswordElement = document.getElementById('finalPasswordElement')

const generatePassword = value => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/'
    let password = ''
    for (let counter = 0; counter < lengthElement.textContent; counter++) {
        let randomchar = characters.charAt(Math.floor(Math.random() * characters.length));
        password += randomchar
    }
    finalPasswordElement.textContent = password
}

generateButtonElement.addEventListener('click', generatePassword)


