let divResultado = document.getElementById("resultado")


function btn_quantidadeDeAlunos() {

    divResultado.innerHTML = ""
    divResultado.style.padding = '0px'
    document.getElementById("notaDosAlunos").innerHTML = "<label>aguardando quantidade ...</label>"

    let quantidadeDeAlunos = document.getElementById("tb_quantidadeDeAlunos").value
    if (isNumber(quantidadeDeAlunos)) {
        if (parseInt(quantidadeDeAlunos) > 0 && parseInt(quantidadeDeAlunos) <= 10) {
            let notaDosAlunos = document.getElementById("notaDosAlunos")
            let qda = parseInt(quantidadeDeAlunos)
            let htmlDeSelecao = ""

            notaDosAlunos.innerHTML = ""

            for (i = 0; i < qda; i++) {
                let num = i+1
                if (num < 10) {
                    num = '0' + num
                }
                notaDosAlunos.innerHTML += `<label>nota do ${num}° aluno </label><input type="number" id="tb_aluno${i+1}" class="tb_format"><br>`
            }

            notaDosAlunos.innerHTML += `<input type="button" id="btn_calcular" value="CALCULAR" onclick="btn_calcular()">`
        }
        else {
            alert('ERRO - a quantidade de alunos deve estar entre 1 e 10.')
        }
    }
    else {
        if (quantidadeDeAlunos == "") {
            alert('ERRO - é nessesario inserir uma quantidade valida de alunos antes de prosseguir.')
        }
        else {
            alert('ERRO - o valor passado em quantidade de alunos não é valido.')
        }
    }
    
}

function isNumber(str) {
    return !isNaN(parseFloat(str))
}

function btn_calcular() {
    let notaDosAlunos = document.getElementById("notaDosAlunos")
    let qda = parseInt(document.getElementById("tb_quantidadeDeAlunos").value)
    let notas = []

    for (let i = 0; i < qda; i++) {
        let nota = document.getElementById(`tb_aluno${i+1}`).value
        

        if (nota != "") {
            if (isNumber(nota)) {
                if (parseFloat(nota) >= 0 && parseFloat(nota) <= 10) {
                    notas.push(parseFloat(nota))
                }
                else {
                    alert(`ERRO - o ${i+1}º aluno contem uma nota que não é valida (insira uma nota de valida de 0 a 10)`)
                    return false
                }
            }
            else {
                alert(`ERRO - o ${i+1}º aluno contem uma nota que não é valida (insira uma nota de valida de 0 a 10)`)
                return false
            }
        }
        else {
            alert(`ERRO - o ${i+1}º aluno esta sem nota (nodos os campos de nota devem estar preenchidos)`)
            return false
        }
        

    }
    
    let somados = 0
    for (let valor in notas) {
        somados += notas[valor]
    }

    let resultado = somados / qda
    
    if (qda != 1) {
        divResultado.innerHTML += `a media dos ${qda} alunos é ${resultado}`
        divResultado.style.padding = '10px'
    }
    else {
        divResultado.innerHTML += `a media do alunos é ${resultado}`
        divResultado.style.padding = '5px'
    }    
}