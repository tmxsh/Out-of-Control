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

function selectOption(value, name, rank, type)
{
    console.log("hehe");
    if(value == "0")
    {
        console.log("hoho");
        playCard(name, rank, type);
    }
}
function render(passedDeck, deckId)
{
    //console.log(document.getElementById(deckId));
    document.getElementById(deckId).innerHTML = '';
	for(var i = 0; i < passedDeck.length; i++)
	{
        //console.log(passedDeck.keys({passedDeck})[0]);
        //creates HTML elements for the card, its rank, and its type
		var card = document.createElement("div");
		var rank = document.createElement("div");
		var type = document.createElement("div");

        //creates the select option on the cards 
        var select = document.createElement("select");
        var s = "selectOption(this.value," + "'" + passedDeck[i].Name + "'" + "," + passedDeck[i].Rank + "," + "'" + passedDeck[i].Type + "'" + ")";

        console.log(s);
        select.setAttribute("onchange", s);
        //creates a body for us to put the options for the select button
        document.body.appendChild(select);

        //sets the classname for the formerly created HTML divs
		card.className = "card";
		rank.className = "rank";
		type.className = "type" + passedDeck[i].Type;


        //sets rank based on the rank of the card
		rank.innerHTML = passedDeck[i].Name + " (" + passedDeck[i].Rank + ")" + "( " + passedDeck[i].Type + ")";

        //appends the rank type and select button to the card element
		card.appendChild(rank);
		card.appendChild(type);
        card.appendChild(select);
        //used to set the id
        var s = rank.toString + type.toString;

        //set the id of the card
        card.setAttribute("id", s);

        //make it dragable and set the event - this may be removed from production
        card.setAttribute("draggable", "true");
        card.setAttribute("ondragstart", "drag(event)");


        //set attribute names for the html so they can be retrieved
        card.setAttribute("data-name", passedDeck[i].Name);
        card.setAttribute("data-rank", passedDeck[i].Rank);
        card.setAttribute("data-type", passedDeck[i].Type);

        //create option to play

        var blank = document.createElement("option");
        blank.setAttribute("value", "Select a move");
        blank.setAttribute("selected", "selected");

        var option1 = document.createElement("option");
        option1.setAttribute("value", "0");
        //option1.setAttribute("onclick", playCard(passedDeck[i].Name, passedDeck[i].Rank, passedDeck[i].Type));
    
        //option to discard
        var option2 = document.createElement("option");
        option2.setAttribute("value", "1");


        //option to discharge
        var option3 = document.createElement("option");
        option3.setAttribute("value", "2");

        var textNode = document.createTextNode("Select an Option");
        blank.appendChild(textNode);
        //setting the text on the select box
        textNode = document.createTextNode("Play");
        option1.appendChild(textNode);

        //setting the text on the select box
        textNode = document.createTextNode("Discard");
        option2.appendChild(textNode);

        //setting the text on the select box
        textNode = document.createTextNode("Discharge");
        option3.appendChild(textNode);

        //appending the different options to our select box so one can be chosen
        select.appendChild(blank);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        //appends the created card to the correct deckID
        document.getElementById(deckId).appendChild(card);
        getScore(board, "score");
	}
}

function draw(passedDeck, passedHand, deckName, handName)
{
    //console.log(hand.length);
    passedHand[passedHand.length] = passedDeck.pop();
    //renderHand(hand, handName);
    render(passedHand, handName);

    
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
        /**
        console.log("name is " + name);
        console.log("rank is " + rank);
        console.log("type is " + type);
        console.log(passedDeck[i]);
        */

        if(passedDeck[i].Rank == rank && passedDeck[i].Name == name && passedDeck[i].Type == type)
        {
            newDeck[newDeck.length] = passedDeck[i];
            passedDeck.splice(i, 1);
            //console.log(newDeck[newDeck.length - 1]);
            //
            return;
        }
        else
        {
            console.log("failed to find card");
        }
    }
}

function playCard(name, rank, type)
{
    console.log("playing card");
    findCard(hand1, name, rank, type, board);
    render(board, 'board');
    render(hand1, 'hand1');
}

function load()
{
    //deck for user 1
    deck = createDeck();
    //deck for user 2
    deck2 = createDeck();
    //shuffle deck1
    shuffle(deck, 'deck1');
}
//executes load function when the browser window loads 
window.onload = load;

