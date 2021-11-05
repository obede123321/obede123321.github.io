function sorteio(){
  const min = document.getElementById("minimo").value;
  const max = document.getElementById("maximo").value;

  let sort = Math.floor(Math.random()*Math.floor(max))

  while(sort<min){

    sort = Math.floor(Math.random()*Math.floor(max));
  }

  document.getElementById("resultado").innerHTML=sort;
}