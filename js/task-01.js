const findElement = document.querySelectorAll('.item')
console.log(`Number of categories:${findElement.length}`);


const categoriesList = document.querySelector('ul#categories')
const categoryItem = categoriesList.querySelectorAll('li.item')

categoryItem.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent
    const categoryCount = item.querySelectorAll('li').length


    console.log(`Category:${categoryTitle} , Elements:${categoryCount}`);
})

