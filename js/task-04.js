const valueEl = document.getElementById("value");
//-
const decrementBtn = document.querySelector('button[data-action="decrement"]');
//+
const incrementBtn = document.querySelector('button[data-action="increment"]');

//create start value
let valueCount = 0;
valueEl.textContent = valueCount;

//callbacks
const decrementCallback = () => {
  valueCount--;
  valueEl.textContent = valueCount;
};

const incrementCallback = () => {
  valueCount++;
  valueEl.textContent = valueCount;
};
//addListener
decrementBtn.addEventListener("click", decrementCallback);
incrementBtn.addEventListener("click", incrementCallback);



//!!!!!!!!second solution, but first better !!!!!!!!!!
 
// decrementBtn.addEventListener('click', () =>{
//     valueCount--
//     valueEl.textContent = valueCount
// })

// incrementBtn.addEventListener('click',() => {
//     valueCount++
//     valueEl.textContent = valueCount
// })
