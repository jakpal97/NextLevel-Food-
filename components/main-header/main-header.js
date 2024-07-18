

import Link from 'next/link'
import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-backgroud'

import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import NavLink from './nav-link'


export default function MainHeader() {
	

	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logoImg} alt="A plate with some food on it" priority />
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
						  <NavLink href='/community'>Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
