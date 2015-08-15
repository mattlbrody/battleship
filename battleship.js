var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

var model = {

	boardsize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
			{ locations: ["24", "34", "44"], hits: ["", "", ""] },
			{ locations: ["10", "11", "12"], hits: ["", "", ""] }],

	fire: function(guess) {
		for (i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var locations = ship.locations;
			var index = locations.indexOf(guess);
			if(index >= 0) {
				ship.hits[index] = "hit";
				return true;
			}
		}
		return false;
	}

};





// var randomloc = Math.floor(Math.random() * 5);
// var location1 = randomloc;
// var location2 = location1 + 1;
// var location3 = location2 + 1;

// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

// while (isSunk == false) {
// 	guess = prompt("what's your guess? enter a number from 0 - 6");
// 	if (guess > 6 || guess < 0) {
// 		alert("invalid guess, try again but from 0 - 6 this time");
// 	}else {
// 		guesses = guesses + 1;


// 		if (guess == location1 || guess == location2 || guess == location3) {
// 		hits = hits + 1;
// 		alert("Hit!")
// 			if(hits == 3) {
// 				isSunk = true;
// 				alert("you sunk my battleship");
// 			}
// 		} else {
// 			alert("Miss")
// 		}
// 	}
// }

// var stats = "you made " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);

// alert(stats);