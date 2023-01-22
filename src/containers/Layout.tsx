import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	return <div className='max-w-[1200px] m-auto p-2 md:p-10 flex justify-center items-center'>{children}</div>
}

export default Layout
