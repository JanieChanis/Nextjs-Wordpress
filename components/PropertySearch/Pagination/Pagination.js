export const Pagination = ({ totalPages, onPageClick }) => {
	return (
		<div className="flex justify-center max-w-5xl gap-2 mx-auto mb-10">
			{Array.from({ length: totalPages }).map((_, i) => (
				<div
					key={i}
					className="btn"
					onClick={() => {
						onPageClick(i + 1);
					}}
				>
					{i + 1}
				</div>
			))}
		</div>
	)
}