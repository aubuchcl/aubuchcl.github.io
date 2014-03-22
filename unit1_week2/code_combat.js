// Code Combat

// Rescue Mission
	//plan()
//add a move for each section that gets you to ogre
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
//attack ogre 
this.attackNearbyEnemy();

//Grab the mushroom
	//plan()
//move to the mushroom
this.moveUp();
this.moveRight();
//move to the ogre
this.moveLeft();
this.moveUp();
//attack ogre
this.attackNearbyEnemy();

//Drink me  
	//plan()
// attack first enemy
this.attackNearbyEnemy();
//get to the potion
this.moveRight();
this.moveDown();
//move to the next enemy
this.moveUp();
this.moveRight();
//attack
this.attackNearbyEnemy();

//Taunt the Guards
	//plan()
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
// move to guard and taunt
this.moveRight();
this.say("Hey there!");
// move guard to trap
this.moveLeft();
this.moveLeft();
this.say("Attack!");


// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
//move to next taunt
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
//yell at guard
this.say('Over here');
//escape around the guard
this.moveDown();
this.moveDown();
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();

//Its a trap
	//plan()
//move close enough to taunt
this.moveDown();
this.moveDown();
//taunt
this.say('overhere');
//run away
this.moveUp();
this.moveUp();

//Taunt
	//plan()
this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
// move into range
this.moveUp();
this.moveUp();
//taunt
this.say("Your axe is small");
//move farther away
this.moveDown();
//taunt
this.say("your feet smell");
//move again
this.moveDown();
this.say('come down here');




//cowardly taunt
	//plan()
//move to correct range
this.moveXY(56, 36);
//taunt the ogres
this.say('your the ogre');
//go somewhere safe
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");


//commanding followers
	//plan
//move to troops
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
//have them follow
this.say("Hail, friends! Follow me");
//move to ogres
this.moveXY(62, 43);
//have troops attack
this.say('attack');


//mobile artillery
	//plan()
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(42, 44);
this.attackXY(50, 65);
this.attackXY(45, 50);
this.moveXY(54, 30);
this.attackXY(67, 54);
this.attackXY(64, 44);














