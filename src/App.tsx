import { purrLog } from 'cats-are-love-cats-are-life';

export default function App() {
	const handlePurr = () => {
		purrLog('happy', { mood: 'happy' });
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-linear-65 from-pink-100 via-rose-50 to-purple-100 text-gray-800">
			<h1 className="mb-8 text-5xl font-bold">🐱 Cats Are Love 🐾</h1>
			<button
				onClick={handlePurr}
				className="rounded-2xl bg-pink-400 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-pink-500"
			>
				Purr at me
			</button>

			<footer className="mt-12 text-sm text-gray-500">
				using <code>cats-are-love-cats-are-life</code>
			</footer>
		</main>
	);
}
