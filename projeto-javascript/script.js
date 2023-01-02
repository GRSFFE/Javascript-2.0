function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem') 
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'morning.jpg'
        document.body.style.background = '#FA8D1F'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.jpeg'
        document.body.style.background = '#FE984F'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = '#242725'
    }
}
