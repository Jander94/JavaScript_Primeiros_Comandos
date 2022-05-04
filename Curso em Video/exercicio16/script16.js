function contar(){
    var inicio = Number(document.getElementById('txti').value)
    var fim = Number(document.getElementById('txtf').value)
    var passo = Number(document.getElementById('txtp').value)
    var resp = document.getElementById('res')
    if (inicio == '' || fim == '' || passo == ''){
        //window.alert('ERRO. Faltam dados!')
        resp.innerHTML = 'Impossível contar'
    }else{
        if (inicio<fim){
            resp.innerHTML = 'Contando: '
            for(inicio;inicio<=fim;inicio+=passo){
                resp.innerHTML += `${inicio} \u{1F449}`
            }                
            
        }else{
            resp.innerHTML = 'Contando: '
            for(inicio;inicio>=fim;inicio-=passo){
                resp.innerHTML += `${inicio} \u{1F449}`
            }          
        }
        resp.innerHTML += 'Fim'
    }
}