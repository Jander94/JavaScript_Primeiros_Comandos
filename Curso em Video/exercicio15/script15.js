function verificar() {
    var data = new Date()
    var ano = Number(data.getFullYear())
    var anodig = Number(document.getElementById('txtano').value)
    var idade = Number(ano)-Number(anodig)
    var resp = document.getElementById('res')
    
    if (anodig == '' || anodig > ano){
        window.alert('ERRO. Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Masculino'
            if (idade <= 10){
                imagem.setAttribute('src', 'menino.jpg')
            }else if(idade <= 21){
                imagem.setAttribute('src','jovemM.jpg')
            }else if(idade <= 55){
                imagem.setAttribute('src','homem.jpg')
            }else{
                imagem.setAttribute('src','idoso.jpg')
            }
        }else{
            genero = 'Feminio'
            if (idade <= 10){
                imagem.setAttribute('src', 'menina.jpg')
            }else if(idade <= 21){
                imagem.setAttribute('src','jovemF.jpg')
            }else if(idade <= 55){
                imagem.setAttribute('src','mulher.jpg')
            }else{
                imagem.setAttribute('src','idosa.jpg')
            }
        }
         
    }
    resp.style.textAlign = 'center'
    resp.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
    resp.appendChild(imagem)

    
}
