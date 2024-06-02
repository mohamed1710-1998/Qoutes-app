var qouteOutput = document.getElementById("qoute");
var author = document.getElementById("author");
var qoutes = [
  {
    qouteText: "“Be yourself; everyone else is already taken.”",
    qouteAuthor: "Oscar Wilde",
  },
  {
    qouteText:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    qouteAuthor: "― Marilyn Monroe",
  },
  {
    qouteText: "“So many books, so little time.” ",
    qouteAuthor: "― Frank Zappa",
  },
  {
    qouteText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    qouteAuthor: "― Albert Einstein",
  },
  {
    qouteText: "“A room without books is like a body without a soul.”    ",
    qouteAuthor: "― Marcus Tullius Cicero",
  },
  {
    qouteText: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    qouteAuthor: "― Bernard M. Baruch",
  },

  {
    qouteText: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    qouteAuthor: "― Dr. Seuss",
  },

  {
    qouteText: "“You only live once, but if you do it right, once is enough.”",
    qouteAuthor: "― Mae West",
  },

  {
    qouteText: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    qouteAuthor: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  
  {
    qouteText: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    qouteAuthor: "― Albert Camus",
  },
];

function getQoute() {
  let qouteNumber = Math.floor(Math.random() * qoutes.length + 0);
  qouteOutput.innerHTML = qoutes[qouteNumber].qouteText;
  author.innerHTML = qoutes[qouteNumber].qouteAuthor;
}
