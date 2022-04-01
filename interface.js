document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
         square.addEventListener ('click', handleClick);
            
   })
   
})

function handleClick(event) {
    let square = event.target;
    let postion = square.id;

   if  (handleMove(postion)){

   setTimeout(() =>{
        alert('O jogo acabou,o Player ' +  playerTime);
   }, 10); 
};

    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbols = board[position];

  if ( symbols != '')
  square.innerHTML = `<div class='${symbols}'></div>`
})


}