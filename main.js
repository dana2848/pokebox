//mikes API coding hp - integer
// attack - integer
// defense - integer
// abilities - array of strings

pokemonPen = [];

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

// class Owner {
//   constructor() {
//     this.name = trainerName;
//     this.ownedPokemon = pokemonPen;
//
//     }
//     pokePush() {
//       pokemonPen.push(poke);
//   }
// }

// var bulbasaur = 1;
// var squirtle = 7;
// var metapod = 11;
//
//
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       //document.getElementById("info").innerHTML =
//       //JSON.parse(this.responseText)
//       //this.responseText;
//       var myObj = JSON.parse(this.responseText);
//       var poke = new Pokemon (
//         this.name = myObj.name,
//         this.hp = myObj.stats[5].base_stat,
//         this.attack = myObj.stats[4].base_stat,
//         this.defense = myObj.stats[1].base_stat,
//         this.abilities = myObj.abilities[0].ability.name,
//         this.img = myObj.sprites.front_default
//       );
//       document.getElementById('info').src = myObj.sprites.front_default;
//       document.getElementById("name").innerHTML = 'my name is ' + poke.name;
//       document.getElementById("hp").innerHTML = 'my help point is ' + poke.hp;
//       document.getElementById("attack").innerHTML = 'my attack is ' + poke.attack;
//       document.getElementById("defense").innerHTML = 'my defense is ' + poke.defense;
//       document.getElementById("ability").innerHTML = poke.abilities;
//       // console.log(bulbasaur.name);
//
//
//
//     }
//   }
//   xhttp.open("GET","https://raw.githubusercontent.com/dana2848/pokebox/master/poke1.json", true);
//
//   // xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/" + pokeId, true);
//   console.log(xhttp);
//   xhttp.send();
// }
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("info").innerHTML =
      //JSON.parse(this.responseText)
      //this.responseText;
      var myObj = JSON.parse(this.responseText);
      var bulbasaur = new Pokemon (
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
          this.abilities = myObj.abilities[0].ability.name,
          this.img = myObj.sprites.front_default
      );
      document.getElementById('info').src = myObj.sprites.front_default;
      document.getElementById("name").innerHTML = 'my name is ' + bulbasaur.name;
      document.getElementById("hp").innerHTML = 'my help point is ' + bulbasaur.hp;
      document.getElementById("attack").innerHTML = 'my attack is ' + bulbasaur.attack;
      document.getElementById("defense").innerHTML = 'my defense is ' + bulbasaur.defense;
      document.getElementById("ability").innerHTML = bulbasaur.abilities;
      // console.log(squirtle.name);

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
      var squirtle = new Pokemon (
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
          this.abilities = myObj.abilities[0].ability.name,
          this.img = myObj.sprites.front_default
      );
      document.getElementById('info').src = myObj.sprites.front_default;
      document.getElementById("name").innerHTML = 'my name is ' + squirtle.name;
      document.getElementById("hp").innerHTML = 'my help point is ' + squirtle.hp;
      document.getElementById("attack").innerHTML = 'my attack is ' + squirtle.attack;
      document.getElementById("defense").innerHTML = 'my defense is ' + squirtle.defense;
      document.getElementById("ability").innerHTML = squirtle.abilities;
      // console.log(squirtle.name);

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
      var metapod = new Pokemon (
        this.name = myObj.name,
        this.hp = myObj.stats[5].base_stat,
        this.attack = myObj.stats[4].base_stat,
        this.defense = myObj.stats[1].base_stat,
          this.abilities = myObj.abilities[0].ability.name,
          this.img = myObj.sprites.front_default
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



// function loadPokemon() {
//   var xhttp = new XMLHttpRequest();
//   console.log(xhttp);
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var myObj = JSON.parse(this.responseText);
//
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/1/", true);
//   xhttp.send();
// }
//
// function loadPokemon2() {
//   var xhttp = new XMLHttpRequest();
//   console.log(xhttp);
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var myObj = JSON.parse(this.responseText);
//
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/7/", true);
//   xhttp.send();
// }

// function loadPokemon3() {
//   var xhttp = new XMLHttpRequest();
//   console.log(xhttp);
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var myObj = JSON.parse(this.responseText);
//
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/11/", true);
//   xhttp.send();
// }
