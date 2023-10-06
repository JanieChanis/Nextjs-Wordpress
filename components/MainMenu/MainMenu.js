import Link from 'next/link'
import { FaHouseUser, FaHeart } from 'react-icons/fa'
import { ButtonLink } from 'components/ButtonLink'

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
	console.log("MAIN MENU: ", items)
	return (
		<div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
			<div className="flex py-4 pl-5 text-pink-600">
				<FaHouseUser size={30} />
				<FaHeart size={30} />
			</div>
			<div className='flex justify-end flex-1'>
				{items?.map((item) => (
					<div
						key={item.id}
						className='relative cursor-pointer hover:bg-slate-700 group'
					>
						<div>
							<Link
								href={item.destination}
								className='block p-5'>
								{item.label}
							</Link>
						</div>
						{!!item.subMenuItems?.length && (
							<div className='absolute right-0 hidden -mt-3 text-right group-hover:block bg-slate-800 top-full'>
								{item.subMenuItems.map((subMenuItem) => (
									<Link key={subMenuItem.id} href={subMenuItem.destination} className='block p-5 whitespace-nowrap hover:bg-slate-700'>{subMenuItem.label}</Link>
								))}
							</div>
						)}
					</div>
				))}
				<div className='my-auto ml-3'>
					<ButtonLink destination={callToActionDestination} label={callToActionLabel} />
				</div>
			</div>
		</div>
	)
}