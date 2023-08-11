
const apiUri = "https://rickandmortyapi.com/api/character";

const title = document.getElementById("title")
const list = document.getElementById("list")
title.innerHTML = "Rick and Morty App"

fetch(apiUri)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach(element => {

      console.log(element)

      let list_items = document.createElement('li')

      let element_img = document.createElement('img')
      element_img.src = element.image

      let element_name = document.createElement('p')
      element_name.innerText = 'Name: ' + element.name

      let element_status = document.createElement('p')
      element_status.innerText = 'Status: ' + element.status

      let element_species = document.createElement('p')
      element_species.innerText = 'Species: ' + element.species

      let element_gender = document.createElement('p')
      element_gender.innerText = 'Gender: ' + element.gender

      list_items.append(element_img)
      list_items.append(element_name)
      list_items.append(element_gender)
      list_items.append(element_status)
      
      list.append(list_items)
    });

  })
  .catch((err) => {
    console.log('Hata Oluştu!', err.message)
  })