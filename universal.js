// Imports
    memory = {
    	slot1: [],
      slot2: [],
      slot3: []
    };
    mapmemory = {};

class GameClass {
  constructor() {
    this.MapManager = {};
    this.CardManager = {
      raritylist: [
        "common",
        "uncommon",
        "rare",
        "epic",
        "legendary",
        "evil",
      ],
      raritylistweights: [4, 2.5, 1.25, 1, 0.5, 1.15],
      typelist: ["immediate", "interjection", "action", "playable"],
      typelistweights: [1, 1, 1, 3],
      typelistmevil: ["immediate", "interjection", "action"],
      typelistweightsmevil: [1, 1, 1],
      getRandomSlug() {
        return (
          adjectives[chance.integer({ min: 0, max: adjectives.length })] +
          " " +
          nouns[chance.integer({ min: 0, max: nouns.length })]
        );
      },
      createRandomCard() {
        let rarity = chance.weighted(this.raritylist, this.raritylistweights);
        let type;
        if (rarity === "evil") {
          type = chance.weighted(this.typelistmevil, this.typelistweightsmevil);
        } else {
          type = chance.weighted(this.typelist, this.typelistweights);
        }
        let name = this.getRandomSlug();
        let element;
    
        if (type !== "playable" || rarity === "evil") {
          let desc =
            "this would be a test string if i had one lmao\ndraw like, 11,054 cards.";
    
          if (rarity === "evil") {
            element =
              "<card class='evil' onclick='if (!this.classList.contains(\"flipped\")) { this.classList.add(\"flipped\") }'><div class='cardfront'></div><div class='cardback'><span id='name'>" +
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
          let hp = 100;
          let atk, def, defcha, critcha;
    
          if (rarity === "common") {
            atk = chance.integer({ min: 1, max: 3 });
            def = chance.integer({ min: 1, max: 3 });
            defcha = chance.integer({ min: 0, max: 3 });
            critcha = chance.integer({ min: 0, max: 3 });
          } else if (rarity === "uncommon") {
            atk = chance.integer({ min: 4, max: 6 });
            def = chance.integer({ min: 4, max: 6 });
            defcha = chance.integer({ min: 4, max: 6 });
            critcha = chance.integer({ min: 4, max: 6 });
          } else if (rarity === "rare") {
            atk = chance.integer({ min: 7, max: 9 });
            def = chance.integer({ min: 7, max: 9 });
            defcha = chance.integer({ min: 7, max: 8 });
            critcha = chance.integer({ min: 7, max: 8 });
          } else if (rarity === "epic") {
            atk = chance.integer({ min: 10, max: 12 });
            def = chance.integer({ min: 10, max: 12 });
            defcha = chance.integer({ min: 9, max: 10 });
            critcha = chance.integer({ min: 9, max: 10 });
          } else if (rarity === "legendary") {
            atk = chance.integer({ min: 16, max: 13 });
            def = chance.integer({ min: 16, max: 13 });
            defcha = chance.integer({ min: 12, max: 11 });
            critcha = chance.integer({ min: 12, max: 11 });
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
        memory.slot1.push(element);
        document.getElementById("numberinput").max = memory.slot1;
      },
      getCardFromMemory(number) {
        if (number == "random") {
          container.insertAdjacentHTML(
            "afterend",
            memory.slot1[
              chance.unique(chance.integer, 1, {
                min: 0,
                max: memory.slot1.length - 1,
              })
            ]
          );
        } else if (number == "last") {
          container.insertAdjacentHTML(
            "afterend",
            memory.slot1[memory.slot1.length - 1]
          );
        } else {
          container.insertAdjacentHTML("afterend", memory.slot1[number]);
        }
      }
    };
    this.LocalMemoryManager = {
      backupLocalMem(backupMap) {
        if (backupMap == true) {
          if (localStorage.getItem("mapmemory") == undefined) {
            localStorage.setItem("mapmemory", mapmemory);
          } else {
            localStorage.setItem("mapmemory", mapmemory);
          }
        }
        if (localStorage.getItem("memory") == undefined) {
          localStorage.setItem("memory", memory.slot1);
        } else {
          localStorage.setItem("memory", memory.slot1);
        }
      },
      loadLocalMem(intoContainer, loadMap) {
        // INCREDIBLY LAGGY
        if (loadMap == true) {
          // Add later
        } else {
          memory.slot1 = localStorage.getItem("memory");
          if (intoContainer == true) {
            localStorage.getItem("memory").forEach((element) => {
              container.insertAdjacentHTML("afterend", element);
            });
          }
        }
      },
      clearLocalMem(clearMap) {
        localStorage.setItem("memory", []);
    
        if (clearMap == true) {
          localStorage.setItem("mapmemory", {});
        }
      },
      clear(clearMap) {
        memory.slot1 = [];
        document.getElementById("container").innerHTML =
          '<div class="container" id="container"><div id="containerappend"></div></div>';
        container = document.getElementById("containerappend");
        if (clearMap == true) {
          mapmemory = {};
        }
      }
    }
  }
}

// Declarations
let container = document.getElementById("containerappend");
let chance = new Chance();

// Functions

// Init
let Game = new GameClass();