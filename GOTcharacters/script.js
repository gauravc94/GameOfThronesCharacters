 // Function to display characters
 function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters')
    const errorDisplay = document.getElementById('error-display')

    if (characters.length === 0) {
        errorDisplay.style.display = 'block'
        return
    }
    
    characters.forEach(character => {
        const characterDiv = document.createElement('div')
        characterDiv.classList.add('character')

        const characterImage = document.createElement('img')
        characterImage.classList.add('character-img')
        characterImage.src = character.imageUrl
        characterImage.alt = character.fullName

        const characterInfo = document.createElement('div')
        characterInfo.classList.add('character-info')

        const fullName = document.createElement('h2')
        fullName.classList.add('character-info-header')

        fullName.textContent = character.fullName

        const title = document.createElement('p')
        title.classList.add('character-info-para')
        title.textContent = 'Title: ' + character.title

        const family = document.createElement('p')
        family.classList.add('character-info-para')
        family.textContent = 'Family: ' + character.family

        characterInfo.appendChild(fullName)
        characterInfo.appendChild(title)
        characterInfo.appendChild(family)

        characterDiv.appendChild(characterImage)
        characterDiv.appendChild(characterInfo)

        charactersContainer.appendChild(characterDiv)
    })
}

// Function to fetch characters data from the API
function fetchCharacters() {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => displayCharacters(data))
    .catch(error => {
        console.error('Error fetching characters:', error)
        const errorDisplay = document.getElementById('error-display')
        errorDisplay.style.display = 'block'
    })
}


fetchCharacters()
