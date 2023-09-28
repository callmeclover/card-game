let containerReal = document.getElementById('container')
let container = containerReal.append('div')

class Card {
    constructor(mem, rarity, name, type, flipped, stats) {
        if (mem.ismem == true) {

        } else {
        let [def, atk, hp, critcha, defcha] = stats;
        this.def = def;
        this.atk = atk;
        this.hp = hp;
        this.critcha = critcha;
        this.defcha = defcha;

        this.name = name;
        this.rarity = rarity;
        this.type = type;

        if (this.rarity == "evil") {
            if (this.flipped == true) {
                this.element = "<card class='" + this.rarity + " flippedevil'><div class='cardfront'></div><div class='cardback'><span id='name'>" + this.name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + this.type + "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" + this.hp + "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" + this.atk + "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" + this.def + "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" + this.critcha + "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" + this.defcha + "/24</span></span></div></card>";
            } else {
            this.element = "<card class='" + this.rarity + "' onclick='this.classList.add(\'flippedevil\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + this.name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + this.type + "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" + this.hp + "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" + this.atk + "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" + this.def + "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" + this.critcha + "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" + this.defcha + "/24</span></span></div></card>";
            }
        } else {
            if (this.flipped == true) {
                this.element = "<card class='" + this.rarity + "' onclick='this.classList.add(\'flipped\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + this.name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + this.type + "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" + this.hp + "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" + this.atk + "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" + this.def + "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" + this.critcha + "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" + this.defcha + "/24</span></span></div></card>";
            } else {
                this.element = "<card class='" + this.rarity + "' onclick='this.classList.add(\'flipped\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + this.name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + this.type + "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" + this.hp + "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" + this.atk + "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" + this.def + "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" + this.critcha + "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" + this.defcha + "/24</span></span></div></card>";
            }
        }
        }
        this.createElement = function(element) {
            container.insertAdjacentHTML('afterend', element)
        }
    }
}

    let rarity = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'evil'];
    let type =   ['playable', 'immediate', 'interjection', 'action', 'utility'];

function createRandomCard() {
    let rarity = rarity[Math.floor(Math.random() * (6 - 0 + 1) ) + 0];
    let type = type[Math.floor(Math.random() * (5 - 0 + 1) ) + 0];
    let element;

    if (type != 'playable' || rarity == 'evil') {
        let desc = 'this would be a test string if i had one lmao\ndraw like, 11,054 cards.';

        if (rarity == 'evil') {
            element = "<card class='" + rarity + "' onclick='this.classList.add(\'flippedevil\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + type + "</span><br><span>" + desc + "</span></div></card>";
        } else {
            element = "<card class='" + rarity + "' onclick='this.classList.add(\'flipped\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + type + "</span><br><span>" + desc + "</span></div></card>";
        }
    } else {
        let name = 'wacky name';
        let hp = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;
        let atk, def, defcha, critcha;

        if (rarity == 'common') {
        atk = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
        def = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
        defcha = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
        critcha = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
        } else if (rarity == 'uncommon') {
            atk = Math.floor(Math.random() * (6 - 4 + 1) ) + 4;
            def = Math.floor(Math.random() * (6 - 4 + 1) ) + 4;
            defcha = Math.floor(Math.random() * (6 - 4 + 1) ) + 4;
            critcha = Math.floor(Math.random() * (6 - 4 + 1) ) + 4;
        } else if (rarity == 'rare') {
            atk = Math.floor(Math.random() * (9 - 7 + 1) ) + 7;
            def = Math.floor(Math.random() * (9 - 7 + 1) ) + 7;
            defcha = Math.floor(Math.random() * (8 - 7 + 1) ) + 7;
            critcha = Math.floor(Math.random() * (8 - 7 + 1) ) + 7;
        } else if (rarity == 'epic') {
            atk = Math.floor(Math.random() * (12 - 10 + 1) ) + 10;
            def = Math.floor(Math.random() * (12 - 10 + 1) ) + 10;
            defcha = Math.floor(Math.random() * (10 - 9 + 1) ) + 9;
            critcha = Math.floor(Math.random() * (10 - 9 + 1) ) + 9;
        } else if (rarity == 'legendary') {
            atk = Math.floor(Math.random() * (16 - 13 + 1) ) + 13;
            def = Math.floor(Math.random() * (16 - 13 + 1) ) + 13;
            defcha = Math.floor(Math.random() * (12 - 11 + 1) ) + 11;
            critcha = Math.floor(Math.random() * (12 - 11 + 1) ) + 11;
        }

            element = "<card class='" + rarity + "' onclick='classList.add(\'flipped\')'><div class='cardfront'></div><div class='cardback'><span id='name'>" + name + "</span><br><span id='type' style='color: fuchsia; font-size: small;'>" + type + "</span><br><span><i style='color: greenyellow; padding-right: 10px;' class='fa-sharp fa-solid fa-plus'></i><span id='hp' tooltip='The health of this card. If it reaches 0, the card is removed permanently.'>" + hp + "</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-hand-fist'></i><span id='atk' tooltip='The base attack of this card. This card will deal more damage the higher this value is.'>" + atk + "</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-shield'></i><span id='def' tooltip='The base defense of this card. This card will block more damage the higher this value is.'>" + def + "%</span></span><br><span><i style='color: red; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='critcha' tooltip='The crit chance of this card. Will be more likely to crit if this value is higher.'>" + critcha + "/24</span></span><br><span><i style='color: cornflowerblue; padding-right: 10px;' class='fa-sharp fa-solid fa-percent'></i><span id='defcha' tooltip='The defense chance of this card. Will be more likely to block if this value is higher.'>" + defcha + "/24</span></span></div></card>";
    }
    container.insertAdjacentHTML('afterend', element)
}