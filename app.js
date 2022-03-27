//QID (Quick id) universally unique identifiers
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const QID = {
   id: function (idlength = 50){
    let currentid = "";
    for (let i = 0; i < idlength; i++) {
      let isLetter = Math.floor(Math.random() * 3); // 1 in 3 chance of a letter
      if (isLetter == 1) {
        let pickedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        currentid = currentid + pickedLetter;
      } else {
        currentid = currentid + Math.floor(Math.random() * 10).toString(); //random digit 0-9
      }
    }
    document.body.innerHTML = currentid.toLowerCase();
    return currentid;
  },
  letterid: function(idlength = 50){
    let currentid = "";
    for (let i = 0; i < idlength; i++) {
        let pickedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        currentid = currentid + pickedLetter;
  }
  document.body.innerHTML = currentid.toLowerCase();
},
numberid: function(idlength = 50){
  let currentid = "";
  for (let i = 0; i < idlength; i++) {
    currentid = currentid + Math.floor(Math.random() * 10).toString(); //random digit 0-9
}
document.body.innerHTML = currentid.toLowerCase();
}
}






