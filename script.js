const apiUri = "https://rickandmortyapi.com/api/character";

fetch(apiUri)
.then((response) => response.json())
.then((data) => {
    if (data.code !== 200) {
        throw new Error(data.message)
    }
})
.catch((err) => console.log(err.message))