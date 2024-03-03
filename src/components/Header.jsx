import React from 'react';
import { createClient } from '@/prismicio';
import Navbar from '@/components/Navbar';

const Header = async () => {
	const client = createClient();
	const settings = await client.getSingle('settings');

	return (
		<center>
			<header className="top-0 z-50 mx-quto max-w-7xl md:sticky md:top-4">
				<Navbar settings={settings} />
			</header>
		</center>
	);
};

export default Header;
