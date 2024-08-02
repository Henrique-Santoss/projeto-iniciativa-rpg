var nome = document.querySelector('input#inome')
var cor = document.querySelector('input#icor')
var ini = document.querySelector('input#iini')
var lista = document.querySelector('select#plista')
var res = document.querySelector('output#ordemIni')
var person = []
var lperson = []

function enviar(){
    if (nome.value === ''){
        alert("Por favor digite os dados corretamente !!!")
    } else {
        person.push(nome.value, cor.value, ini.value)
        let item = document.createElement('option')
        item.text = (`${nome.value}`)
        lista.appendChild (item)
        nome.value = ''
        cor.value = ''
        ini.value = ''
    }
    lperson.push(person)
    res.innerHTML = (`${lperson}`)
}

function limpar(){
    lista.innerHTML = ''
}