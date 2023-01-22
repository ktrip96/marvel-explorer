import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Header: React.FC<Props> = ({ children }: Props) => {
	return (
		<>
			<header className='text-center p-4 pt-8'>
				<h1 className='text-3xl font-extrabold text-gray-800 md:text-5xl'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r to-[#ED213A] from-[#93291E]'>
						MARVEL
					</span>{' '}
					comics
				</h1>
				<p className='text-lg font-normal text-gray-500'>
					A comics catalog where users can see a list of comics by Marvel.
				</p>
			</header>
			{children}
		</>
	)
}

export default Header
