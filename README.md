# beerator.js

## What Is It?

Beerator.js is a simple terminal-based beer rating program built using JavaScript with Node.js. All anyone needs to run this program is a terminal, Node.js, and Node Package Manager (npm).

## Features

This simple program features a seven-part rating system that composes the final beer rating. Each part has its own menu within the terminal. See below to better understand the parts

## How To Use

### Installation:

1. Clone this repo.
2. Run ```npm install```.
3. Run ```node main.js```.
4. Have fun!

### Usage:

1. Upon running the program, you'll be taken to a menu showing seven questions corresponding to the seven parts of the final beer rating. 
2. Each question is numbered. Choose the right number to enter into the menu corresponding to the target question.
3. In each menu, there are answer options presented, each with their own number. Choose the number based upon your answer to the question and press enter. This will take you back to the main menu.
4. The final beer rating is at the bottom of the main menu.

**Note**: Errors will present themselves if given the wrong input. All you need to do is give the right input. The error will go away on its own.

### Rating Criteria Explained

1. *Pleasing Appearance?*: How good/cool/beautiful/amazing does the beer look? Consider anything that catches the eye and makes you say "Wow!" or "Boring."
2. *Discernible Taste?*: How strong is the taste? Is it barely there or does it punch you in the palate?
3. *Good Taste?*: How good do you think the beer is?
4. *Standout Taste?*: How does the taste compare to other beers you've tried, be it of the same type or of other types?
5. *Complex Taste?*: How many different flavors and tasting notes do you taste?
6. *Notable Mouthfeel?*: Does the beer feel thick, foamy, oily, or does it impart any specific notable feel on your mouth? Or, is it just watery and boring?
7. *Overall Experience*: How did the beer strike you overall, regardless of the above rating criteria?

#### *Example:* 

Suppose I purchase a lager brewed with honey and orange peel. Here is how I might rate it using this program:

* *Pleasing Appearance?*: Yes (I chose this because I believe the color stands out above other beers I've seen.)
* *Discernible Taste?*: Very (I chose this because the beer's flavor is strong and lingers, even after it goes down.)
* *Good Taste?*: Yes (I chose this because it tastes good and is neither boring nor good enough to make an impression.)
* *Standout Taste?*: Somewhat (I chose this because it tastes almost like all the lagers I've had before aside for one unique tasting note.)
* *Complex Taste?*: Somewhat (I chose this because I taste the typical lager taste and small hints of honey and orange, though nothing else.)
* *Notable Mouthfeel?*: No (I chose this because it feels like watery beer and nothing more.)
* *Overall Experience*: Like (I chose this because, though the beer is basic, I still really liked it.)
##### * *Final Rating*: 3.25/5

## Dependencies

* npm
* Node.js