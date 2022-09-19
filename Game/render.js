//These are the two types of cards
var types = ["stable", "unstable"];
//Names of the cards - shows on the front 
var names = ["Rift", "Exotic Matter", "Deflector", "Anomoly", 
"Wormhole", "Rewind", "Reactor", "Future Shift", "Dark Energy", "Singularity", 
"Antimatter", "Time Stop", "Nova"];

//different ranks for the cards - goes 1 through 10
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function createDeck()
{
    //Each player gets 26 cards in their deck - two of each card
    let deck = new Array();
    //create the stable cards
    for(let i = 0; i < 2; i++)
    {
        for(let j = 0; j < types.length;j++)
        {
            if(j == 0) //stable loop
            {
                for(let k = 0; k < 4; k++) //first four ranks are stable
                {
                    let card = {Type: types[j], Name: names[k], Rank: ranks[k]};
                    deck.push(card);
                }
                
            }
            else //unstable loop
            {
                for(let k = 4; k < names.length; k++)
                {
                    let card = {Type: types[j], Name: names[k], Rank: ranks[k]};
                    deck.push(card);
                }
            }
        }
    }

    return deck;
}

function shuffle(deck)
{
    for(let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);

        let temp = deck[location];

        deck[location1] = deck[location2]
        deck[location2] = temp;
    }
}

function render(deck)
{
    document.getElementById("deck").innerHTML = "";

    for(let i = 0; i < deck.length; i++)
    {
        let card = document.createElement("div");
        let name =  document.createElement("div");
        let type = document.createElement("div");
        let rank = document.createElement("div");
        card.className = "card";
        name.className = "name";
        type.className = "type";
        rank.className = "rank";

        name.innerHTML = deck[i].Name;
        card.appendChild(type);
        card.appendChild(rank);

        document.getElementById("deck").appendChild(card);
    }
}
console.log("test");