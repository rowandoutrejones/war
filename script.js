$(document).ready(function() {

	//It changes 11, 12 & 13 cards and changes them to strings. Calling them by their proper names.
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//This loops through the deck. Naming 1-13 a new suit name until 'hearts', 'diamonds', 'spades' and 'clubs' all have values from 1-13.

	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//it rearranges the deck array.
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	var deal = function(deck) {
		cards_player_1 = deck.slice(0, deck.length/2);
		cards_player_2 = deck.slice(deck.length/2);
	}
	
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war() {
		var card_1 = cards_player_1[0].number;
		var card_2 = cards_player_2[0].number;
		if(card_1 > card_2) {
			return card_1;
		} else if (card_2 > card_1) {
			return card_2;
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		war();
		if (war() === card_1) {
			cards_player_1.push(cards_player_1[0], cards_player_2[0]);
		} else if (war() === card_2) {
			cards_player_2.push(cards_player_1[0], cards_player_2[0]);
		}             
		
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});
