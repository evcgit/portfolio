import MemoryGame from '../components/MemoryGame';
import { motion } from 'framer-motion';

const Games = () => {
	return (
		<div className="min-h-screen px-5 py-10 md:p-10">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-8"
				>
					<h1 className="text-4xl font-bold mb-4">Fun & Games</h1>
					<p className="text-lg max-w-2xl mx-auto">
						Take a break and enjoy this simple memory matching game.
						Try to match all pairs with the fewest moves possible!
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto"
				>
					<MemoryGame />
				</motion.div>
			</div>
		</div>
	);
};

export default Games; 