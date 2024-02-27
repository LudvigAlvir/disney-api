import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		fetch("https://api.disneyapi.dev/character?pageSize=100&name=" + search)
			.then((res) => res.json())
			.then((data) => {
				if (data.info.count == 1) {
					setCharacters([data.data]);
				} else if (data.info.count == 0) {
					setCharacters([]);
				} else {
					setCharacters(data.data);
				}
			});
	}, [search]);

	function handleSearch(e) {
		e.preventDefault();
		setSearch(e.target.searchValue.value);
	}

	return (
		<>
			<div className="max-w-sm mx-auto text-center">
				<form
					className="my-5"
					action=""
					onSubmit={handleSearch}>
					<input
						className="shadow appearance-none border rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="searchValue"
						id="searchValue"
						placeholder="Mickey Mouse"
					/>
					<button
						className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
						type="submit">
						Search
					</button>
				</form>
				{characters.length >= 1 ? (
					characters.map((character) => (
						<Card
							character={character}
							key={character._id}
						/>
					))
				) : (
					<p>No results for query</p>
				)}
			</div>
		</>
	);
}

export default App;
