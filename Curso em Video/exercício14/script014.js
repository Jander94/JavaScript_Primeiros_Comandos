function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong><br>`
    if(hora >= 0 && hora < 12) {
        imagem.src = 'manha.jpg'
        document.body.style.background = 'rgb(30, 114, 100)'
        msg.innerHTML += '<strong><BR>BOM DIA!!!</strong>'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'tarde.jpg'
        document.body.style.background = 'rgb(211, 126, 57)'
        msg.innerHTML += '<strong>BOA TARDE!!!</strong>'
    }else{
        imagem.src = 'noite.jpg'
        document.body.style.background = 'rgb(11, 11, 39)'
        msg.innerHTML += '<strong>BOA NOITE!!!</strong>'
    }
}
