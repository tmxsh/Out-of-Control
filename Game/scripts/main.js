//These are the two types of cards
var types = ["stable", "unstable"];
//Names of the cards - shows on the front 
var names = ["Rift", "Exotic Matter", "Deflector", "Anomoly", 
"Wormhole", "Rewind", "Reactor", "Future Shift", "Dark Energy", "Singularity", 
"Antimatter", "Time Stop", "Nova"];

//different ranks for the cards - goes 1 through 10
var ranks = [1, 2, 3, 4, 4, 5,  5,6, 6, 7, 8, 9, 10]

var deck1 = new Array();
var hand1 = new Array();

var deck2 = new Array();
var hand2 = new Array();

var hand1Count = 0;
var hand2Count = 0;

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

function shuffle(passedDeck, deckId)
{
    for(let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor(Math.random() * passedDeck.length);
        let location2 = Math.floor(Math.random() * passedDeck.length);

        let temp = passedDeck[location1];

        passedDeck[location1] = passedDeck[location2]
        passedDeck[location2] = temp;
    }

    render(passedDeck, deckId);
}

function render(passedDeck, deckId)
{
    document.getElementById(deckId).innerHTML = '';
	for(var i = 0; i < passedDeck.length; i++)
	{
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + passedDeck[i].Type;

		rank.innerHTML = passedDeck[i].Name + " (" + passedDeck[i].Rank + ")";
		card.appendChild(rank);
		card.appendChild(type);

		document.getElementById(deckId).appendChild(card);
	}
}

function draw(passedDeck, passedHand, deckName, handName)
{
    //console.log(hand.length);
    passedHand[passedHand.length] = passedDeck.pop();
    //renderHand(hand, handName);
    render(passedHand, handName);

    getScore(passedHand, "score");
}

function getScore(passedHand, passedID)
{
    //document.getElementById(passedID)
    var score = 0;
    for(var i = 0; i < passedHand.length; i++)
    {
        score = score + passedHand[i].Rank;
        console.log(hand1[i].Rank);
    }
    document.getElementById(passedID).innerHTML = score.toString();
}

function load()
{
    deck = createDeck();
    deck2 = createDeck();
    shuffle(deck, 'deck1');
    shuffle(deck2, 'deck2');
    render(deck, 'deck1');
    render(deck2, 'deck2');
    //console.log(deck[0].type);
    let x = deck[0];
    console.log(x.Rank);
}


//const myInterval = setInterval(getScore(hand1, 'score1'), 1000);
window.onload = load;
