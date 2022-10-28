let isIgnite = true

function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite ? "url(./assets/ignite.svg)" : "url(./assets/explorer.svg)" 
    isIgnite = !isIgnite   

    card.style.backgroundImage = backgroundImage
}