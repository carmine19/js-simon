$(document).ready(function () {

	var punteggio = [];
	var card = 5;
	var numeri_utente = [];
	var numeri_pc = [];


	var counter = 29;

	//creo un array di 5 numeri random tutti diversi
	while (numeri_pc.length < card) {

		var numero_random = random(1, 100)

		if (numeri_pc.includes(numero_random)) {
			console.log('numero già inserito');
		} else {
			numeri_pc.push(numero_random);
			$('.pc-cards').append('<div class="card">' + numero_random + '</div>');
		}
	}


	var down = setInterval(function () {

		$('.count').text('' + counter + '');
		counter--;

		if (counter < 0) {
			clearInterval(down);
			$('.count').text('Tempo scaduto');
			$('.card').remove();
		}

	}, 1000);

	console.log(numeri_pc);

	//dopo 30 secondi faccio sparire i numeri e faccio partire i prompt
	setTimeout(function () {

		while (numeri_utente.length < card) {

			var number = parseInt(prompt('inserisci un mumero'));

			if (!numeri_utente.includes(number)) {
				numeri_utente.push(number);
			} else {
				alert('inserisci un altro numero');
			}
		}
		console.log(numeri_utente);

		//se nei numeri inseriti dall utente è presente un numero random lo salvo nell'array punteggio
		for (var i = 0; i < numeri_pc.length; i++) {

			if (numeri_pc.includes(numeri_utente[i])) {
				punteggio.push(numeri_utente[i]);
			}
		}
		// mostro quanti e quali numeri ha indovinato utente
		$('.result ').text(' ' + punteggio.length + ' numeri su 5!');

		if (punteggio.length === card) {
			$('.count').text('Hai vinto!')
		}

		for (var i = 0; i < numeri_pc.length; i++) {
			$('.pc-cards').append(numeri_pc[i] + '<br>');
		}

	}, 30000);

});

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}