document.addEventListener('DOMContentLoaded', () => {
	createSquares();

	let guessWords = [[]];
	let availableSpace = 1;

	const keys = document.querySelectorAll('.keyboard-row button');

	for (let i = 0; i < keys.length; i++) {
		keys[i].onclick = ({ target }) => {
			const letter = target.getAttribute('data-key');

			updateGuessWords(letter);
		};
	}

	function getCurrentWordArr() {
		const numberOfGuessWords = guessWords.length;
		return guessWords[numberOfGuessWords - 1];
	}

	function updateGuessWords(letter) {
		const currentWordArr = getCurrentWordArr();

		if (currentWordArr && currentWordArr.length < 5) {
			currentWordArr.push(letter);

			const availableSpaceEl = document.getElementById(String(availableSpace));
			availableSpace = availableSpace + 1;

			availableSpaceEl.textContent = letter;
		}
	}

	function createSquares() {
		const gameBoard = document.getElementById('board');

		for (let index = 0; index < 30; index++) {
			let square = document.createElement('div');
			square.classList.add('square');
			square.setAttribute('id', index + 1);
			gameBoard.appendChild(square);
		}
	}
});
