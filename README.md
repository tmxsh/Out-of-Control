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
3. Homepage and SQL Database/Login: Our next e
