const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = [];
const list = document.querySelector('#ingredients');
for (const ingredient of ingredients) {
  // console.log(ingredient);
  const ingredientEl = document.createElement("li");
  ingredientEl.className = "item";
  ingredientEl.textContent = ingredient;
  // list.append(ingredientEl);
  // console.log(ingredientEl);
  // console.log(ingredientEl.className);
  // console.log(ingredientEl.textContent);
  ingredientsEl.push(ingredientEl);
};
// console.log(ingredientsEl);
list.append(...ingredientsEl);