import Image from 'next/image'

export const Cover = ({ children, background }) => {
	return (
		<div className="h-screen bg-slate-800 text-white relative min-h-[400px] flex justify-center items-center">
			<Image
				alt="Cover"
				src={background}
				fill
				className="object-cover mix-blend-soft-light"
				priority
			/>
			<div className='z-10 max-w-5xl'>
				{children}
			</div>
		</div>
	)
}