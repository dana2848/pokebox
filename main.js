//mikes API coding hp - integer
// attack - integer
// defense - integer
// abilities - array of strings

console.log('linked')

class Trainer {
  constructor() {
    this.pokemon = [];
  }
    add(poke) {
      this.pokemon.push(poke);
  }
    all(){
      return this.pokemon
  }
    get(name){
      for (let i = 0; i < this.pokemon.length; i++){
        if (name === this.pokemon[i].name){
          return this.pokemon[i]
        }
      }
    }
}

let minji = new Trainer();


class Pokemon {
  constructor(name, hp, attack, defense, abilities, img){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.img = img;
  }
}


// var bulbasaur = 1;
// var squirtle = 7;
// var metapod = 11;

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);

      bulbasaur = new Pokemon (
        myObj.name,
        myObj.stats[5].base_stat,
        myObj.stats[4].base_stat,
        myObj.stats[1].base_stat,
        myObj.abilities[0].ability.name,
        myObj.sprites.front_default
      );
      document.getElementById('info').src = myObj.sprites.front_default;
      document.getElementById("name").innerHTML = 'my name is ' + bulbasaur.name;
      document.getElementById("hp").innerHTML = 'my help point is ' + bulbasaur.hp;
      document.getElementById("attack").innerHTML = 'my attack is ' + bulbasaur.attack;
      document.getElementById("defense").innerHTML = 'my defense is ' + bulbasaur.defense;
      document.getElementById("ability").innerHTML = bulbasaur.abilities;
      console.log(bulbasaur);

    }
  }
  xhttp.open("GET","https://raw.githubusercontent.com/dana2848/pokebox/master/poke1.json", true);
  console.log(xhttp);
  xhttp.send();
}


function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("info").innerHTML =
      //JSON.parse(this.responseText)
      //this.responseText;
      var myObj = JSON.parse(this.responseText);

    squirtle = new Pokemon (
        myObj.name,
        myObj.stats[5].base_stat,
        myObj.stats[4].base_stat,
        myObj.stats[1].base_stat,
        myObj.abilities[0].ability.name,
        myObj.sprites.front_default
      );
      document.getElementById('info').src = myObj.sprites.front_default;
      document.getElementById("name").innerHTML = 'my name is ' + squirtle.name;
      document.getElementById("hp").innerHTML = 'my help point is ' + squirtle.hp;
      document.getElementById("attack").innerHTML = 'my attack is ' + squirtle.attack;
      document.getElementById("defense").innerHTML = 'my defense is ' + squirtle.defense;
      document.getElementById("ability").innerHTML = squirtle.abilities;
      console.log(squirtle);

    }
  }
  xhttp.open("GET","https://raw.githubusercontent.com/dana2848/pokebox/master/poke7.json", true);
  console.log(xhttp);
  xhttp.send();
}


function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("info").innerHTML =
      //JSON.parse(this.responseText)
      //this.responseText;
      var myObj = JSON.parse(this.responseText);

      metapod = new Pokemon (
        myObj.name,
        myObj.stats[5].base_stat,
        myObj.stats[4].base_stat,
        myObj.stats[1].base_stat,
        myObj.abilities[0].ability.name,
        myObj.sprites.front_default
      );
      document.getElementById('info').src = myObj.sprites.front_default;
      document.getElementById("name").innerHTML = 'my name is ' + metapod.name;
      document.getElementById("hp").innerHTML = 'my help point is ' + metapod.hp;
      document.getElementById("attack").innerHTML = 'my attack is ' + metapod.attack;
      document.getElementById("defense").innerHTML = 'my defense is ' + metapod.defense;
      document.getElementById("ability").innerHTML = metapod.abilities;
      // console.log(squirtle.name);

    }
  }
  xhttp.open("GET","https://raw.githubusercontent.com/dana2848/pokebox/master/poke11.json", true);
  console.log(xhttp);
  xhttp.send();
}
