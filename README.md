# What is Out-of-Control?

Out-of-Control is a card game inspired by the game Control, made by Keymaster games, meant to be played right in the browser between two people. In the future, we also plan on implementing a leaderboard for all users to track their wins and see who can rack up the most.

## Installation

Requirements:
Operating System: None
Browser: Mozilla Firefox, Google Chrome, Safari, or Microsoft Edge

Step 1:
  Go to https://nodejs.org/en/download/ and download the correct version of NodeJS for your operating system.
  
Step 2:
  After NodeJS has been installed, start by downloading the source files from the repository. This can be done through git by copying the URL and using the git clone command, or by downloading a ZIP file.
![firefox_Yl1CEjfb49](https://user-images.githubusercontent.com/49414542/207727007-cd536d31-503f-41e9-9ca2-9620dac9d30d.png)
  If you have downloaded the ZIP file, unzip the files in the directory you would like them to be stored.
  
Step 3: From a terminal or command line, navigate to where the Out-Of-Control files are stored, then change your directory to the Game/game_files directory.

Step 4: From the terminal, install Express by typing: npm install express. This will install express through Node, which is used in by Out-Of-Control.

At this point, Out-Of-Control and all of its preqrequisites are now installed on your system. You are ready to play!

# To Play

Step 1: Navigate to your Out-Of-Control/Game/game_files directory from a terminal or command prompt.

Step 2: type node server.js - this will start the gameserver, and you are now ready to connect. You can stop the server at any time by hitting CTRL-C in this same terminal. This will prevent you from playing the game, however!

# If you are going to be playing on your own system
Step 1: Open a browser and enter localhost:3000/player1 in the URL bar. This will connect player 1.

Step 2: Open a browser and enter localhost:3000/player2 in the URL bar. This will connect player 2.

You are now ready to play!

# While playing

- The game will automatically draw your first hand for you.
- At the beginning of each turn, you may draw a card.
- After that, you can choose to play, discard, or discharge a card from your hand.
- Playing a card will put it on the board, play an ability if the card is stable and has one, and add to your point total. Discarding a card will put it in your graveyard and activate its ability if it is unstable and has one. Discharging a card will allow you to remove a card of equal or lower value from your board.
- The first player to reach a point total of 21 wins!

# If you are going to be playing from another computer and connecting to the server running the game.

Step 1: Optain the IP address of the server running the game.

Step 2: Open a browser and enter that IP:3000/player1 in the URL bar. This will connect player 1.

Step 3: Open a browser and enter that IP:3000/player2 in the URL bar. This will connect player 2.

You are now ready to play!

# Things to watch out for when playing
1. The server will print IDs for player 1 and player 2 when they connect. If the server prints out 'too many connections!', that means that too many players have connected to the server. To resolve this, you will need to hit CTRL-C in the terminal to stop the server, and close out all of your browser windows. You can then start the server and play again. 
2. When a player has reached 21 points, an alert will pop up letting you both know that they have won. At that point, you will want to hit CTRL-C in the terminal where you started the server to stop the server, and close all browser windows. You can play again by going to the terminal where you stopped the server and typing in: node server.js 

# Implemented Features
1. HTML Web Framework: The very first feature we needed to implement was the web page itself. This was done through HTML and styled with CSS. It has gone through many revisions, but this is the final framework: ![firefox_bm9KGKw5Tx](https://user-images.githubusercontent.com/49414542/207735004-713685e5-c795-4624-ab86-37033fb4d08d.png)
2. Card Javascript Framework: Our next feature was to implement the cards, so that we could create a deck, shuffle it, and then draw cards. We originally had a shuffle button, but removed it in lieu of a button just to draw cards instead: 
![firefox_C8VgczJd8c](https://user-images.githubusercontent.com/49414542/207735356-85973af8-e0e6-4703-b68a-02c80c91fb52.png) All of the cards in the hand were generated and added to the page through Javascript. 
3. Homepage and SQL Database/Login: Our next feature was a Homepage and a very basic login system using SQL. Our plan was to eventually connect this database to the game so that wins and losses could be tracked and we could create a leaderboard, however at the moment that is a feature that is planned for the future. 
This is the homepage:

![firefox_cUF0g12qDq](https://user-images.githubusercontent.com/49414542/207737366-67584b25-4277-43fd-bf91-f6468ea50a3f.png)

The log in page:

![firefox_i1i0BSnLYv](https://user-images.githubusercontent.com/49414542/207737449-23a92267-a07c-4c39-8771-e72b7b2caf18.png)

The create an account page:

![firefox_rwKE9K1k9e](https://user-images.githubusercontent.com/49414542/207737495-a583f0a0-8a53-4ce7-9662-f71cb7435a27.png)

4: Options on cards to play, discard, and discharge from your hand: Our next feature was to implement the ability to play, discard, and discharge cards that are in your hand and have them go to the appropriate places on the board. For example: 

![firefox_AGkn4UAO4R](https://user-images.githubusercontent.com/49414542/207751564-1b17927e-5e65-47f6-a30c-610d644960ab.png)

The play option was chosen on the Deflector card, while the Rift and Rewind cards were discarded to the graveyard.

5: Networking Backend: Once we had a somewhat playable version of the game, our next feature was to implement a networking backend that would actually allow us to have the two instances of the game for player 1 and player 2 to communicate. 

![image](https://user-images.githubusercontent.com/49414542/207752008-395f95a1-3075-40d4-8a2b-4ca304832e57.png)

Our first ever version of this networking backend was a simple chat app to allow messages to be traded back and forth between two browser instances.

6: 1 vs 1 Gameplay with the card game: With networking implemented, we could move onto allowing players to actually play the game against one another. As you can see in this example, after the networking was implemented, players were able to play cards and have them replicated across both boards, with scores and turns updating as well.  

![firefox_uQnc4aJwYD](https://user-images.githubusercontent.com/49414542/207752255-c3b9cd3e-96ee-48e7-a413-0735e4a61504.png)

7: Card Abilities: The latest feature we have implemented is card abilities! Card abilities trigger on play for stable cards, and on discard for unstable cards. While not ever card has an ability, those that do create a variety of options for the person activating them. Our demo video, linked here, shows the card abilities in action: 


