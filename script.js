function togglemode() {
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector ("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/cacto.jpg')
        alt.setAttribute('cacto com óculos de sol e chapéu de praia na cama de estampa de cacto')
    } else {
        img.setAttribute('src', './assets/Sem título.png')
    }
}