import { purrLog } from 'cats-are-love-cats-are-life';

export default function App() {
	const handlePurr = () => {
		purrLog('happy', { mood: 'happy' });
	};

	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-linear-65 from-pink-100 via-rose-50 to-purple-100 text-gray-800">
			<h1 className="text-5xl font-bold mb-8">🐱 Cats Are Love 🐾</h1>
			<button
				onClick={handlePurr}
				className=" bg-pink-400 hover:bg-pink-500 px-6 text-white py-3 font-semibold rounded-2xl shadow-md transition-all duration-200"
			>
				Purr at me
			</button>

			<footer className="mt-12 text-sm text-gray-500">
				using <code>cats-are-love-cats-are-life</code>
			</footer>
		</main>
	);
}
