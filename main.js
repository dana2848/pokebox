//mikes API coding

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("info").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/data/master/data", true);
  xhttp.send();
}


// console.log ('I work')
//
// class Classic {
//   constructor(art_url){
//     this.art_url = art_url;
//     this.frame = 'borderframe';
//     this.render = function() {
//       var x = document.createElement('img');
//       var b = document.getElementById('container')
//       x.src = this.art_url;
//       x.classList.add(this.frame);
//       b.appendChild(x);
//     }
// }
//
// }
//
// class Meme extends Classic {
//   constructor(art_url){
//     super(art_url);
//     this.frame = 'frame1'
//     x.classList.add(this.frame);
//   }
// }
