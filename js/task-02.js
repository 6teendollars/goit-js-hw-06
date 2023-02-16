const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("ul");


//========первый спосою==================


// const liListRef = ingredients.map(name => {
//   const liRef = document.createElement('li')
//   liRef.textContent = name
//   return liRef
// })
// li.classList.add('item')

// ulRef.append(...liListRef)
// li.className = 'item'
// console.log(ulRef);
// document.body.append(ulRef)


//=============второй способ===========

ingredients.reduce((acc, name) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");

  liRef.textContent = name;
  acc.appendChild(liRef);
  return acc;
}, ulRef);

// console.log(result);
console.log(ulRef);
