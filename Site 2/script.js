



function Carregar() {
    const NCS = document.getElementById('NCS')
    const SCS = document.getElementById('SCS')
    const ECS = document.getElementById('ECS')
    const WCS = document.getElementById('WCS')
    var NC = document.getElementById('NCtext')
    var SC = document.getElementById('SCtext')
    var EC = document.getElementById('ECtext')
    var WC = document.getElementById('WCtext')
    var SS = document.getElementById('SStext')
    NCS.addEventListener('mouseenter', EntrarNC)
    NCS.addEventListener('mouseout', Sair)
    SCS.addEventListener('mouseenter', EntrarSC)
    SCS.addEventListener('mouseout', Sair)
    ECS.addEventListener('mouseenter', EntrarEC)
    ECS.addEventListener('mouseout', Sair)
    WCS.addEventListener('mouseenter', EntrarWC)
    WCS.addEventListener('mouseout', Sair)
    SS.addEventListener('mouseenter', EntrarSS)
}
function EntrarNC() {
    NCS.innerHTML = '<img src="imagens/northerncontinent-pq.webp" alt=""></img>'
}
function EntrarSC() {
    SCS.innerHTML = '<img src="imagens/southerncontinent-pq.webp" alt=""></img>'
}
function EntrarEC() {
    ECS.innerHTML = '<img src="imagens/easterncontinent-pq.webp" alt=""></img>'
}
function EntrarWC() {
    WCS.innerHTML = '<img src="imagens/westerncontinent-pq.webp" alt=""></img>'
}
function EntrarSS() {
    const SSS = document.getElementById('SSS')
    SSS.innerHTML = '<img src="imagens/soniasea.webp" alt=""></img>'
}
function Sair() {
    SCS.innerHTML = ''
    SCS.innerHTML = '<p>Visualizar mapa</p>'
    NCS.innerHTML = ''
    NCS.innerHTML = '<p>Visualizar mapa</p>'
    ECS.innerHTML = ''
    ECS.innerHTML = '<p>Visualizar mapa</p>'
    WCS.innerHTML = ''
    WCS.innerHTML = '<p>Visualizar mapa</p>'
    SSS.innerHTML = ''
}