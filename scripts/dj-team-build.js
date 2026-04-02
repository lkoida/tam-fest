/**
 *
 * @param {Array<{name: string, location:string, avatar:string, timeOfTheDay: string}>} djTeam
 */
export function djTeamBuild(djTeam) {
    const djContainer = document.querySelector('.djs')
    const cardTemplate = document.querySelector('#dj-card')


    for (let dj of djTeam) {
        const card = document.importNode(cardTemplate.content, true)
        const container = card.querySelector('.card')
        container.classList.add(dj.timeOfTheDay)
        const avatar = card.querySelector('.avatar')
        const name = card.querySelector('.name')
        const location = card.querySelector('.location')

        avatar.setAttribute('src', dj.avatar)
        avatar.setAttribute('alt', `${dj.name} avatar`)
        name.textContent = dj.name
        location.textContent = dj.location

        djContainer.appendChild(card)
    }
}
