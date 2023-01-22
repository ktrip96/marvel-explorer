import { memo } from 'react'
import { ComicType } from '../types/comic'

const Comic = ({ data }: { data: ComicType }) => {
	const { image, issueNumber, price, title, isSkeleton } = data

	return (
		<div
			className={`w-64 h-64 m-auto rounded-md shadow-sm border border-gray-300 group ${
				!isSkeleton && 'hover:shadow-lg cursor-pointer transition'
			}  overflow-hidden`}
		>
			<div className={`h-44 bg-gray-900 relative overflow-hidden`}>
				{isSkeleton ? (
					<div className='rounded-full w-20 h-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] animate-pulse' />
				) : (
					<>
						<div
							style={{
								backgroundImage: 'url(' + image + ')',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								filter: 'blur(8px)',
							}}
							className='w-64 h-44 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
						/>
						<img
							src={image}
							loading='lazy'
							className='h-44 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition duration-300 z-10'
							alt={title}
						/>
					</>

					// // Lazy load Images
					// <img
					// 	src={image}
					// 	loading='lazy'
					// 	className='h-44 m-auto group-hover:scale-150 transition duration-300 z-10'
					// 	alt={title}
					// />
				)}
			</div>
			<div className='h-20 relative py-1 px-3 bg-white'>
				{isSkeleton ? (
					<>
						<div className='h-6 w-3/4 bg-gradient-to-r from-[#8e9eab] to-[#dcdfdf] rounded-lg animate-pulse my-1' />
						<div className='h-4 w-1/2 bg-gradient-to-r from-[#8e9eab] to-[#dcdfdf] rounded-lg animate-pulse my-1' />
						<div className='h-4 w-1/2 bg-gradient-to-r from-[#8e9eab] to-[#dcdfdf] rounded-lg animate-pulse my-1' />
					</>
				) : (
					<>
						<h1 className='text-lg font-semibold truncate mb-1'>{title}</h1>
						<h4 className='font-semibold text-xs text-gray-600 truncate'>
							IssueNumber: <span className='font-normal'>{issueNumber}</span>
						</h4>
						<p className='font-semibold text-xs text-gray-600 truncate'>
							Price: <span className='font-normal'>{price}$</span>
						</p>
					</>
				)}
			</div>
		</div>
	)
}

export default memo(Comic)
