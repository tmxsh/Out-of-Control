//These are the two types of cards
var types = ["stable", "unstable"];
//Names of the cards - shows on the front 
var names = ["Rift", "Exotic Matter", "Deflector", "Anomoly", 
"Wormhole", "Rewind", "Reactor", "Future Shift", "Dark Energy", "Singularity", 
"Antimatter", "Time Stop", "Nova"];

//different ranks for the cards - goes 1 through 10
var ranks = [1, 2, 3, 4, 4, 5,  5,6, 6, 7, 8, 9, 10]

//deck for player one, hand for player 1
var deck1 = new Array();
var hand1 = new Array();

//deck for player two, hand for player 2
var deck2 = new Array();
var hand2 = new Array();

//this board is where cards go when they get played 
var board = new Array();

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
        //generate some seeds to randomize
        let location1 = Math.floor(Math.random() * passedDeck.length);
        let location2 = Math.floor(Math.random() * passedDeck.length);

        //just a temp deck to swap the position
        let temp = passedDeck[location1];

        passedDeck[location1] = passedDeck[location2]
        passedDeck[location2] = temp;
    }
}

function render(passedDeck, deckId)
{
    document.getElementById(deckId).innerHTML = '';
	for(var i = 0; i < passedDeck.length; i++)
	{
		var card = document.createElement("div");

        //document.body.appendChild(card);

		var rank = document.createElement("div");
		var type = document.createElement("div");

        var select = document.createElement("select");
        document.body.appendChild(card);


		card.className = "card";
		rank.className = "rank";
		type.className = "type" + passedDeck[i].Type;

		rank.innerHTML = passedDeck[i].Name + " (" + passedDeck[i].Rank + ")";
		card.appendChild(rank);
		card.appendChild(type);
        card.appendChild(select);

        var s = rank.toString + type.toString;
        card.setAttribute("id", s);
        card.setAttribute("draggable", "true");
        card.setAttribute("ondragstart", "drag(event)");
        
        card.setAttribute("data-name", passedDeck[i].Name);
        card.setAttribute("data-rank", passedDeck[i].Rank);
        card.setAttribute("data-type", passedDeck[i].Type);
        //card.setAttribute("onclick", "console.log(true)");

        var option1 = document.createElement("option");
        //option1.setAttribute("value", playCard(passedDeck[i].Name, passedDeck[i].Rank, passedDeck[i].Type));
        
        //,card.getAttribute("data-rank"), card.getAttribute("data-type")))");

        //option1.setAttribute("onclick", "playcard")

        var option2 = document.createElement("option");
        option2.setAttribute("value", "Discard");

        var option3 = document.createElement("option");
        option3.setAttribute("value", "Discharge");

        var textNode = document.createTextNode("Play");
        option1.appendChild(textNode);

        textNode = document.createTextNode("Discard");

        option2.appendChild(textNode);

        textNode = document.createTextNode("Discharge");

        option3.appendChild(textNode);

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        /** 
        console.log(card.getAttribute("data-name"));
        console.log(card.getAttribute("data-rank"));
        console.log(card.getAttribute("data-type"));

        */

        //card.setAttribute("ondragend", )
        document.getElementById(deckId).appendChild(card);
	}
}

function draw(passedDeck, passedHand, deckName, handName)
{
    //console.log(hand.length);
    passedHand[passedHand.length] = passedDeck.pop();
    //renderHand(hand, handName);
    render(passedHand, handName);

    getScore(board, "score");
}

function getScore(passedHand, passedID)
{
    //initialized score - starts at 0, for obvious reasons
    var score = 0;

    for(var i = 0; i < passedHand.length; i++)
    {
        //walk through the board(I originally thought it was the hand where the score came from)
        score = score + passedHand[i].Rank;
        //update score
    }
    //append the score to the HTML
    document.getElementById(passedID).innerHTML = score.toString();
}

function findCard(passedDeck, name, rank, type, newDeck)
{
    for(var i = 0; i < passedDeck.length; i++)
    {
        //console.log(i)
        //console.log("rank is + " + rank);
        if(passedDeck[i].Rank == rank && passedDeck[i].Name == name && passedDeck[i].Type == type)
        {
            newDeck[newDeck.length] = passedDeck.splice(i,i);
            /**
            render(newDeck, 'board');
            render(passedDeck, 'hand1');
            */
        }
    }
}

function playCard(name, rank, type)
{
    console.log("playing card");
    findCard(hand1, name, rank, type, board);
}

function load()
{
    deck = createDeck();
    deck2 = createDeck();
    shuffle(deck, 'deck1');
    //shuffle(deck2, 'deck2');
    //render(deck, 'deck1');
    //render(deck2, 'deck2');
    //console.log(deck[0].type);
    //let x = deck[0];
    //console.log(x.Rank);
    //findCard(deck, "Rewind", 5, "unstable");
}


//const myInterval = setInterval(getScore(hand1, 'score1'), 1000);
window.onload = load;

