const optImages = document.querySelectorAll(".option-img")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const pcResult = document.querySelector(".pc-result img")

const computerSrcImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

const winner= {
    RR: 'Empate',
    RP: 'Computador',
    RS: 'Você',
    PP: 'Empate',
    PR: 'Você',
    PS: 'Computador',
    SS: 'Empate',
    SR: 'Computador',
    SP: 'Você',
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.innerHTML = `<img src="img/03.gif" alt="Carregando" style="height: 200px;">`
    


    userResult.src = pcResult.src = computerSrcImg [0]

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImg[clickedIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        pcResult.src = computerSrcImg[randomNumber]

        const userValeu = ['R' ,'P', 'S'] [clickedIndex]
        const computerValeu = ['R' ,'P', 'S'] [randomNumber]
        const userComputerResult = userValeu + computerValeu
        const finalResult = winner[userComputerResult]

        resultText.textContent =  userValeu === computerValeu ?'Empate' : finalResult + ' Ganhou'

    }, 5000); // 2000 equivale a 5s

}


optImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)

})

