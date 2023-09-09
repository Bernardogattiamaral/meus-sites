

//Busca a data no sistema
function carregar() {
    var agora = new Date()
    var jsdia = agora.getDate() 
    var jsmes = agora.getMonth() + 1
    var jsano= agora.getFullYear()
    if(jsdia < 10) { jsdia = "0" + jsdia}
    if(jsmes < 10) { jsmes = "0" + jsmes}
    dataFormat = jsdia + " / " + jsmes + " / " + jsano;
    document.getElementById("dia").innerHTML += dataFormat;
}
//Objeto
 var lista = {texto: aaaaa, data: 10/11/2023, textodata: aaaaaa}

 //Adiciona uma tarefa
function adicionar() {
    var job = document.getElementById("job")
    var data = document.getElementById("data")
    var listselect = document.getElementById("lista")
    var jobdata = `${job.value}. Para ${data.value}`
    //var data = String(data.value)
    var lista = []
    if (job.value.length == 0) {
        window.alert('Favor digitar antes de adicionar uma tarefa')
    } else if (data.value.length == 0) {
        var flista = document.createElement('li')
        flista.innerHTML = `${job.value}. Sem data`
        listselect.appendChild(flista) 
    } else {
        //var data = String(data.value)
        var flista = document.createElement('li')
        flista.innerHTML = `${jobdata}`
        listselect.appendChild(flista)
    }
    job.focus()
    data.focus()
}
