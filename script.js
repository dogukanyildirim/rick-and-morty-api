const apiUri = "https://rickandmortyapi.com/api/character";

fetch(apiUri)
.then((response) => response.json())
.then((data) => {
    if (data !==200) {
        throw new Error(data.message)
    }
    
    const characters = data.results
    characters.forEach(character => {
        console.log(character)
    });
})
.catch((err) => {
    console.log(err.message)
})