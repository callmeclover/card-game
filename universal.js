let container = document.getElementById("containerappend");
let chance = new Chance();


class CardManagerClass {
  #memory = [];

  #httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  #getRandomSlug() {
    return (
      this.#httpGet("https://random-word-form.repl.co/random/adjective")
        .replace('["', "")
        .replace('"]', "") +
      " " +
      this.#httpGet("https://random-word-form.repl.co/random/noun")
        .replace('["', "")
        .replace('"]', "")
    );
  }

  constructor() {
    this.raritylist = [
      "common",
      "uncommon",
      "rare",
      "epic",
      "legendary",
      "evil",
    ];
    this.raritylistweights = [4, 2.5, 1.25, 1, 0.5, 1.15];
    this.typelist = ["immediate", "interjection", "action", "playable"];
    this.typelistweights = [1, 1, 1, 2];
    this.typelistmevil = ["immediate", "interjection", "action"];
    this.typelistweightsmevil = [1, 1, 1];
  }

  createRandomCard() {
    let rarity =
    chance.weighted(this.raritylist, this.raritylistweights);
    let type;
    if (rarity === "evil") {
      type =
        chance.weighted(this.typelistmevil, this.typelistweightsmevil);
    } else {
      type =
      chance.weighted(this.typelist, this.typelistweights);
    }
    let name = this.#getRandomSlug();
    let element;
  
    if (type !== "playable" || rarity === "evil") {
      let desc =
        "this would be a test string if i had one lmao\ndraw like, 11,054 cards.";
  
      if (rarity === "evil") {
        element =
          "<card class='evil' onclick='if (!this.classList.contains(\"flipped\")) { this.classList.add(\"flipped\") }'><div class='cardfront evilcardfront'></div><div class='cardback evilcardback'><span id='name'>" +
          name +
          "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" +
          type +
          "</span><br><span>" +
          desc +
          "</span></div></card>";
      } else {
        element =
          "<card class='" +
          rarity +
          "' onclick='if (!this.classList.contains(\"flipped\")) { this.classList.add(\"flipped\") }'><div class='cardfront'></div><div class='cardback'><span id='name'>" +
          name +
          "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" +
          type +
          "</span><br><span>" +
          desc +
          "</span></div></card>";
      }
    } else {
      let hp = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      let atk, def, defcha, critcha;
  
      if (rarity === "common") {
        atk = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        def = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        defcha = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        critcha = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      } else if (rarity === "uncommon") {
        atk = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        def = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        defcha = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        critcha = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
      } else if (rarity === "rare") {
        atk = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
        def = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
        defcha = Math.floor(Math.random() * (8 - 7 + 1)) + 7;
        critcha = Math.floor(Math.random() * (8 - 7 + 1)) + 7;
      } else if (rarity === "epic") {
        atk = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        def = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        defcha = Math.floor(Math.random() * (10 - 9 + 1)) + 9;
        critcha = Math.floor(Math.random() * (10 - 9 + 1)) + 9;
      } else if (rarity === "legendary") {
        atk = Math.floor(Math.random() * (16 - 13 + 1)) + 13;
        def = Math.floor(Math.random() * (16 - 13 + 1)) + 13;
        defcha = Math.floor(Math.random() * (12 - 11 + 1)) + 11;
        critcha = Math.floor(Math.random() * (12 - 11 + 1)) + 11;
      }
  
      element =
        "<card class='" +
        rarity +
        "' onclick='if (!this.classList.contains(\"flipped\")) { this.classList.add(\"flipped\") }'><div class='cardfront'></div><div class='cardback'><span id='name'>" +
        name +
        "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" +
        type +
        "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" +
        hp +
        "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" +
        atk +
        "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" +
        def +
        "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" +
        critcha +
        "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" +
        defcha +
        "/24</span></span></div></card>";
    }
    container.insertAdjacentHTML("afterend", element);
    this.#memory.push(element);
    document.getElementById('numberinput').max = this.#memory;
  }

  getCardFromMemory(number) {
    if (number == "random") {
      container.insertAdjacentHTML(
        "afterend",
        this.#memory[Math.floor(Math.random() * (this.#memory.length - 1 - 0 + 1)) + 0]
      );
    } else if (number == "last") {
      container.insertAdjacentHTML("afterend", this.#memory[this.#memory.length - 1]);
    } else {
      container.insertAdjacentHTML("afterend", this.#memory[number]);
    }
  }
  
}

let CardManager = new CardManagerClass()