import React from 'react';
import Image from 'next/image';
import Hamburger from '../public/assets/shared/icon-hamburger.svg';
import Logo from '../public/assets/shared/logo.svg';

function MobileNav() {
	return (
		<div className='fixed w-full h-full min-h-screen px-8 pt-4 md:hidden '>
			<div className='flex justify-between h-24 '>
				<Image src={Logo} alt='Logo' className='object-contain' />
				<Image
					src={Hamburger}
					alt='hamburger menu'
					className='object-contain '
				/>
			</div>
		</div>
	);
}

export default MobileNav;
