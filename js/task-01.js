const categories = document.querySelector('#categories');
console.log(categories);
console.log(`Number of categories: ${categories.children.length}`);
const categoriesEl = document.querySelectorAll('li.item');
console.log(categoriesEl);
categoriesEl.forEach((category) => {
    console.log(`Category : ${category.firstElementChild.textContent}`);
    console.log(`Elements : ${category.lastElementChild.children.length}`);
});

