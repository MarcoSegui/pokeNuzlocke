const check1 = document.getElementById('switch1'); //1 a 151
const check2 = document.getElementById('switch2'); //152 a 251
const check3 = document.getElementById('switch3'); //252 a 386
const check4 = document.getElementById('switch4'); //sin 11, 14, 266, 268
const check5 = document.getElementById('switch5'); //sin 129, 349
const button = document.getElementById('go');

let min = 0
let max = 0

//Excepciones 11, 14, 129 (Magikarp), 266, 268, 349(Feebas)____________

excepA = false //sin 11, 14, 266, 268
excepB = false //sin 129, 349

check4.addEventListener('change', function(){
    (excepA == false) ? excepA = true : excepA = false;
    console.log(excepA)}) 

check5.addEventListener('change', function(){
    (excepB == false) ? excepB = true : excepB = false;
    console.log(excepB)}) 

//Selección de generacion ______________________________________________
    
function genCheck (){
    if(check1.checked){
        min = 1
        max =151
    }if(check2.checked){
        min = 152
        max =251
    }if(check3.checked){
        min = 252
        max =386
    }if ((check1.checked) && (check2.checked)) {
        min = 1
        max = 251
    }if ((check1.checked) && (check3.checked)) {
        min = 0
        max = 0
        alert("No puedes elegir la 3ra generacion sin seleccionar la segunda generación")
        clearInterval(pokeRandom)
    }if ((check1.checked) && (check2.checked) && (check3.checked)) {
        min = 1
        max = 386
} console.log(min,max)};

//Recargar pagina_____________________________________________________

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})

//______________________________________________

const numeroRandom = (max, min)=>{
    return Math.ceil(Math.random()*(max-min)+min)
  }

let index = 0

button.onclick = () => {
    if ((check1.checked) || (check2.checked) || (check3.checked)) {
    genCheck()
    const pokeRandom = setInterval(()=> {
        if (index < 6) {
            index++ 
            console.log(index)
            let num = numeroRandom(max,min)

            if ((excepA == true) && (index==1) && ((num == 11)||(num == 14)||(num == 266)||(num == 268))){
                let numR = num--
                document.getElementById(`poke${index}`).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numR}.png`
            } if ((excepB == true) && (index==1) && ((num == 129)||(num == 349))) {
                let numR = num--
                document.getElementById(`poke${index}`).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numR}.png`
            } else {
                document.getElementById(`poke${index}`).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}

        } else {clearInterval(pokeRandom)}}, 2000);
} else {
    alert("Por favor elige una generación primero")
}}  

