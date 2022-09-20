//These are the two types of cards
var types = ["stable", "unstable"];
//Names of the cards - shows on the front 
var names = ["Rift", "Exotic Matter", "Deflector", "Anomoly", 
"Wormhole", "Rewind", "Reactor", "Future Shift", "Dark Energy", "Singularity", 
"Antimatter", "Time Stop", "Nova"];

//different ranks for the cards - goes 1 through 10
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

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

function shuffle1(deck1)
{
    for(let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);

        let temp = deck[location1];

        deck[location1] = deck[location2]
        deck[location2] = temp;
    }

    render1();
}

function shuffle2(deck2)
{
    for(let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);

        let temp = deck[location1];

        deck[location1] = deck[location2]
        deck[location2] = temp;
    }

    render2();
}
function render1()
{
    document.getElementById('deck').innerHTML = '';
    //console.log(deck.length);
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + deck[i].Type;

		rank.innerHTML = deck[i].Name;
		card.appendChild(rank);
		card.appendChild(type);

		document.getElementById("deck").appendChild(card);
	}
}


function render2()
{
    document.getElementById('deck2').innerHTML = '';
    //console.log(deck.length);
	for(var i = 0; i < deck2.length; i++)
	{
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + deck2[i].Type;

		rank.innerHTML = deck2[i].Name;
		card.appendChild(rank);
		card.appendChild(type);

		document.getElementById("deck2").appendChild(card);
	}
}

function draw1()
{
    return deck.pop();
}

function draw2()
{
    return deck2.pop();
}

function renderHand1()
{
    document.getElementById('hand1').innerHTML = '';
    //console.log(deck.length);
	for(var i = 0; i < hand1.length; i++)
	{
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + deck[i].Type;

		rank.innerHTML = hand1[i].Name;
		card.appendChild(rank);
		card.appendChild(type);

		document.getElementById("hand1").appendChild(card);
	}
}


function renderHand2()
{
    document.getElementById('hand2').innerHTML = '';
    //console.log(deck.length);
	for(var i = 0; i < hand2.length; i++)
	{
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + deck2[i].Type;

		rank.innerHTML = hand2[i].Name;
		card.appendChild(rank);
		card.appendChild(type);

		document.getElementById("hand2").appendChild(card);
	}
}


function load()
{
    deck = createDeck();
    deck2 = createDeck();
    shuffle1();
    shuffle2();
    render1();
    render2();

    //draw(deck2);

}

function draw1()
{
    hand1[hand1Count] = deck.pop();
    renderHand1();
    hand1Count += 1;
    render1();
}

function draw2()
{
    hand2[hand2Count] = deck2.pop();
    renderHand2();
    hand2Count += 1;
    render2();
}

window.onload = load;