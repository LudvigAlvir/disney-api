export function Card({ character }) {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg my-7">
			{character.imageUrl ? (
				<img
					className="w-full"
					src={character.imageUrl}
					alt={"Image of " + character.name}
				/>
			) : (
				<img
					className="w-full"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1050px-Disney_wordmark.svg.png?20171113041617"
					alt={"Image missing for " + character.name}
				/>
			)}

			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{character.name}</div>
				<a
					href={character.sourceUrl}
					className="text-blue-700 text-base font-bold">
					Wiki
				</a>
			</div>
			<div className="px-6  pb-2">
				{character.films[0] && (
					<>
						<p className="pb-2 font-semibold">Appears in:</p>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{character.films[0]}
						</span>
					</>
				)}

				{character.films[1] && (
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{character.films[1]}
					</span>
				)}
				{character.films[2] && (
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{character.films[2]}
					</span>
				)}
			</div>
		</div>
	);
}
