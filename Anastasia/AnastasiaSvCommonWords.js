var wordData = [
            
  { svenska: "att säga", engelska: "to say" },
  { svenska: "att öppna", engelska: "to open" },
  { svenska: "att stänga", engelska: "to close" },            
  { svenska: "att leva", engelska: "to live" },
  { svenska: "att vara", engelska: "to be" },
  { svenska: "att bli", engelska: "to become" },
  { svenska: "att tro*", engelska: "to believe", extra: "Often used as 'I think' as in 'I think that i will have a good day.'"},
  { svenska: "att veta", engelska: "to know" },
  { svenska: "att göra", engelska: "to make" },
  { svenska: "att komma", engelska: "to come" },
  { svenska: "att göra", engelska: "to do" },
  { svenska: "att jobba", engelska: "to work" },
  { svenska: "att titta", engelska: "to look" },
  { svenska: "att se", engelska: "to see" },
  { svenska: "att höra", engelska: "to hear" },
  { svenska: "att lyssna", engelska: "to listen", extra: "'på' comes after 'lyssna''Jag lyssnar på musik' is 'I'm listening on music' if translated verbatum." },
  { svenska: "att ge", engelska: "to give" },
  { svenska: "att ta", engelska: "to take" },
  { svenska: "att hämta", engelska: "to bring, to fetch" },
  { svenska: "att vilja", engelska: "to will" },
  { svenska: "att önska", engelska: "to wish" },

  { svenska: "att skapa", engelska: "to create" },
  { svenska: "att avslöja*", engelska: "to reveal", extra: 'Titta på *¹. Here you can see a nice example of 2 words concatenated.'},
  { svenska: "att förneka", engelska: "to deny" },
  { svenska: "att avslå", engelska: "to reject" },
  { svenska: "att ringa", engelska: "to call*", extra: "to call/to ring one's phone"},
  { svenska: "att ropa", engelska: "to call*", extra: "to call/shout to somebody across the street"},
  { svenska: "att bjuda", engelska: "to invite" },
  { svenska: "att be till", engelska: "to pray to" },
  { svenska: "att be*", engelska: "to ask", extra: "att säga 'Jag ber dig' är inte ordagrant*² 'I ask you', ett bättre exempel är 'Я прошу тебя'"},
  { svenska: "att älska", engelska: "to love" },
  { svenska: "att hata", engelska: "to hate" },
  { svenska: "att bry sig om", engelska: "to care about*", extra: "ordagrant är det 'to care self/yourself about', 'Jag bryr MIG om dig' är 'I care ME about you'."},
  { svenska: "att sova", engelska: "to sleep" },
  { svenska: "att vakna", engelska: "to wake up" },
  
  { svenska: "att vilja", engelska: "to want" },
  { svenska: "att leda", engelska: "َto lead" },
  { svenska: "att följa", engelska: "to follow" },
  { svenska: "att vara rädd", engelska: "to be afraid" },
  { svenska: "att skicka", engelska: "to send" },


  { svenska: "att trycka på knappen", engelska: "to press the button*", extra: "ordagrant är det 'to press on the button'"},
  { svenska: "att förtrycka", engelska: "to oppress" },
  { svenska: "att fråga", engelska: "to ask" },
  { svenska: "att hitta", engelska: "to find" },
  { svenska: "att köra", engelska: "to drive" },
  { svenska: "att äta", engelska: "to eat" },
  { svenska: "att konsumera", engelska: "to consume" },
  { svenska: "att glömma", engelska: "to forget" },
  { svenska: "att komma ihåg", engelska: "to remember" },
  { svenska: "att nämna", engelska: "to mention, to name*", extra: "'to name' as in 'can you name 5 countries?' not as in 'what should we name the dog?'"},
  { svenska: "att döda", engelska: "to kill" },
  { svenska: "The prefix 'åter'", engelska: "The prefix 're'" },
  { svenska: "att vända", engelska: "to turn" },
  { svenska: "att vända tillbaka", engelska: "to turn back*", extra: "ordagrant är det typ*³ 'to turn to the back'"},
  { svenska: "att återvända*", engelska: "to return", extra: "see *⁴"},
  { svenska: "att använda*", engelska: "to use", extra: "Has nothing to do with the word 'vända', just so you know, its not a concatination, just a word as far as i know."},
  { svenska: "att återanvända", engelska: "to reuse" },
  { svenska: "att beställa", engelska: "to order*", extra: "'to order' as in 'to order food'"},
  { svenska: "att ge order, att beordra", engelska: "to command" },

];
var wordData2 = [  
  { svenska: "Upp", engelska: "Upp" },
  { svenska: "Ner", engelska: "Down" },
  { svenska: "Höger", engelska: "Right" },
  { svenska: "Vänster", engelska: "Left" },
  { svenska: "Hand", engelska: "Hand" },
  { svenska: "Arm", engelska: "Arm" },
  { svenska: "Kropp", engelska: "Body" },
  { svenska: "Själ", engelska: "Soul" },
  { svenska: "Själv", engelska: "Self" },
  { svenska: "Skinn*", engelska: "Skinn", extra: "lyssna på hur 'skinn' uttalas på svenska"},
  { svenska: "Stjärna", engelska: "Star" },
  { svenska: "Solen", engelska: "The Sun" },
  { svenska: "Månen", engelska: "The Moon" },
  { svenska: "Fågel", engelska: "Bird" },
  { svenska: "Fisk", engelska: "Fish" },
  { svenska: "Bord", engelska: "Table" },
  { svenska: "Stol", engelska: "Chair" },
  { svenska: "Papper", engelska: "Pen" },
  { svenska: "Food", engelska: "Mat" },
  { svenska: "Vapen", engelska: "Weapon" },
  { svenska: "Sten", engelska: "Stone, rock" },
  { svenska: "Mountain", engelska: "Berg" },
  { svenska: "Himmel", engelska: "Sky" },
  { svenska: "Jorden", engelska: "Earth, world" },
  { svenska: "Jord", engelska: "Earth, dirt" },
  { svenska: "Vatten", engelska: "Water" },
  { svenska: "Eld", engelska: "Fire" },
  
];

var wordData3 =[
  //{ svenska: "Varm", engelska: "Hot" },
  //{ svenska: "Kall", engelska: "Cold" },
  { svenska: "adekvat", engelska: "adequate" },
]



function generateTableRows1() {
  var tableBody = document.getElementById("wordTableBody");

  wordData.forEach(function (word) {
      var row = document.createElement("tr");
      var svenskaCell = document.createElement("td");
      var engelskaCell = document.createElement("td");
      var extraCell = document.createElement("td");

      svenskaCell.textContent = word.svenska;
      engelskaCell.textContent = word.engelska;
      extraCell.textContent = word.extra;

      row.appendChild(svenskaCell);
      row.appendChild(engelskaCell);
      row.appendChild(extraCell);

      tableBody.appendChild(row);
  });
}
function generateTableRows2() {
  var tableBody = document.getElementById("wordTableBody2");

  wordData2.forEach(function (word) {
      var row = document.createElement("tr");
      var svenskaCell = document.createElement("td");
      var engelskaCell = document.createElement("td");
      var extraCell = document.createElement("td");

      svenskaCell.textContent = word.svenska;
      engelskaCell.textContent = word.engelska;
      extraCell.textContent = word.extra;

      row.appendChild(svenskaCell);
      row.appendChild(engelskaCell);
      row.appendChild(extraCell);

      tableBody.appendChild(row);
  });
}

function generateTableRows3() {
  var tableBody = document.getElementById("wordTableBody3");

  wordData3.forEach(function (word) {
      var row = document.createElement("tr");
      var svenskaCell = document.createElement("td");
      var engelskaCell = document.createElement("td");
      var extraCell = document.createElement("td");

      svenskaCell.textContent = word.svenska;
      engelskaCell.textContent = word.engelska;
      extraCell.textContent = word.extra;

      row.appendChild(svenskaCell);
      row.appendChild(engelskaCell);
      row.appendChild(extraCell);

      tableBody.appendChild(row);
  });
}


generateTableRows1();

generateTableRows2();

generateTableRows3();
