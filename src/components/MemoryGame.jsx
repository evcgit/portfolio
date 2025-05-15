import { useState, useEffect } from 'react';

const MemoryGame = () => {
	const [cards, setCards] = useState([]);
	const [flipped, setFlipped] = useState([]);
	const [solved, setSolved] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [gameStarted, setGameStarted] = useState(false);
	const [moves, setMoves] = useState(0);

	const emojis = ['🚀', '🌟', '🎮', '🎨', '💻', '📱', '🎵', '📚'];

	const initialize = () => {
		// Create paired cards with emojis
		const duplicatedEmojis = [...emojis, ...emojis];
		const shuffledCards = duplicatedEmojis
			.sort(() => Math.random() - 0.5)
			.map((emoji, index) => ({ id: index, content: emoji, flipped: false, solved: false }));

		setCards(shuffledCards);
		setFlipped([]);
		setSolved([]);
		setDisabled(false);
		setGameStarted(true);
		setMoves(0);
	};

	const handleCardClick = (id) => {
		if (flipped.length === 0) {
			setFlipped([id]);
			setDisabled(false);
		} else if (flipped.length === 1) {
			if (flipped[0] === id) return; // Prevent clicking same card

			setFlipped([...flipped, id]);
			setDisabled(true);
			setMoves(moves + 1);
		}
	};

	// Check if the two flipped cards match
	useEffect(() => {
		if (flipped.length === 2) {
			const [first, second] = flipped;

			if (cards[first].content === cards[second].content) {
				setSolved([...solved, first, second]);
				setFlipped([]);
				setDisabled(false);
			} else {
				// If they don't match, flip back after delay
				const timer = setTimeout(() => {
					setFlipped([]);
					setDisabled(false);
				}, 1000);

				return () => clearTimeout(timer);
			}
		}
	}, [flipped, cards]);

	// Check for win condition
	useEffect(() => {
		if (gameStarted && solved.length === cards.length && cards.length > 0) {
			// Display win message or reset
			setDisabled(true);
		}
	}, [solved, cards, gameStarted]);

	return (
		<div className="flex flex-col items-center justify-center my-8 p-4 bg-primary">
			<h2 className="text-2xl font-bold mb-4 text-center">Memory Game</h2>

			{!gameStarted ? (
				<button
					onClick={initialize}
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-4"
				>
					Start Game
				</button>
			) : (
				<>
					<div className="flex justify-between w-full max-w-md mb-4">
						<p className="text-lg">Moves: {moves}</p>
						<button
							onClick={initialize}
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md"
						>
							Reset
						</button>
					</div>

					{solved.length === cards.length && cards.length > 0 && (
						<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
							Congratulations! You won in {moves} moves!
						</div>
					)}

					<div className="grid grid-cols-4 gap-3 w-full max-w-md">
						{cards.map((card) => (
							<div
								key={card.id}
								onClick={() => !disabled && !solved.includes(card.id) && !flipped.includes(card.id) && handleCardClick(card.id)}
								className={`
                  h-16 w-16 flex items-center justify-center rounded-md cursor-pointer text-3xl
                  ${flipped.includes(card.id) || solved.includes(card.id)
										? 'bg-white'
										: 'bg-blue-500'}
                  ${solved.includes(card.id) ? 'opacity-70' : ''}
                  transition-all duration-300 transform hover:scale-105
                `}
							>
								{(flipped.includes(card.id) || solved.includes(card.id)) ? card.content : ''}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default MemoryGame; 