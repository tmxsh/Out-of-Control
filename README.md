# What is Out-of-Control?

Out-of-Control is a card game inspired by the game Control, made by Keymaster games, meant to be played right in the browser between two people. In the future, we also plan on implementing a leaderboard for all users to track their wins and see who can rack up the most.

# Installation

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

Step 2: type node server.js - this will start the gameserver, and you are now ready to connect.

# If you are going to be playing on your own system
Step 1: Open a browser and enter localhost:3000/player1 in the URL bar. This will connect player 1.

Step 2: Open a browser and enter localhost:3000/player2 in the URL bar. This will connect player 2.

You are now ready to play!

# If you are going to be playing from another computer and connecting to the server running the game.

Step 1: Optain the IP address of the server running the game.

Step 2: Open a browser and enter that IP:3000/player1 in the URL bar. This will connect player 1.

Step 3: Open a browser and enter that IP:3000/player2 in the URL bar. This will connect player 2.

You are now ready to play!
