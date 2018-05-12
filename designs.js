// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let width = document.querySelector('#inputWidth');
let height = document.querySelector('#inputHeight');
let canvas = document.querySelector('#pixelCanvas');
let button = document.querySelector('#submitButton');
let sizePicker = document.querySelector('#sizePicker');
let color = document.querySelector('#colorPicker');

function makeGrid() {
  for (let i = 0;i < width.value; i++){
    let tr = document.createElement('tr');
    canvas.appendChild(tr);
    for (let e = 0;e < height.value; e++){
      let td = document.createElement('td');
      tr.appendChild(td);
    };
  };
};

function clearGrid() {
canvas.innerHTML = "";
};

function changeCellColor() {
  canvas.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.nodeName === 'TD') {
      e.target.style.backgroundColor = color.value;
       e.target.style.border = color.value;
    }
  })};

// DOESENT WORK
// function changeTrColor(){
//   if (changeCellColor()){
//     let changeTr = document.querySelector('tr');
//     color.style.border = color.value;
//   }
// };

button.addEventListener('click', function(evt){
  evt.preventDefault();
  clearGrid();
  changeCellColor();
  makeGrid();
});


/* SAME AS button.addEventListener

sizePicker.addEventListener('submit', function(e) {
e.preventDefault();
clearGrid();
makeGrid();
changeCellColor();
});

*/
