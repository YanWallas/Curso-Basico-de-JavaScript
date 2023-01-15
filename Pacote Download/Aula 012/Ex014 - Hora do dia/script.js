function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 20

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'manha.jpg'
    document.body.style.background = '#745616'}

    else if (hora >= 12 && hora <= 18) {
    //boa tarde 
    img.src = 'tarde.jpg'
    document.body.style.background = '#164a745'}

    else { 
    //Boa Noite
    img.src = 'noite.jpg'
    document.body.style.background = '#6a3ca5'}


}
