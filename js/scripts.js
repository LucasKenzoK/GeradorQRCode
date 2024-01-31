"use stricy"

const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")


const generateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value
    if(!qrCodeInput) return

    qrCodeBtn.innerHTML = "Gerando um Código"

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Codigo Criado!"
    })
}

qrCodeBtn.addEventListener("click", (e) => {
generateQrCode()
})
qrCodeInput.addEventListener("keydown", (e) => {
if(e.code === "Enter"){
    generateQrCode
}
})

qrCodeInput.addEventListener("keyup", (e) =>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerHTML = "Gerar QRcode"
    }
})