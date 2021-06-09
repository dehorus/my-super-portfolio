import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { debounce } from '../Helper';
import './NavBar.scss';
import LinkeDin from '../draws/LinkeDin.svg';
import CodePen from '../draws/CodePen.svg';
import GitHub from '../draws/Github.svg';
import Instagram from '../draws/Instagram.svg';
import Behance from '../draws/Behance.svg';
import BehanceBlack from '../draws/Behance-black.svg';
import GithubBlack from '../draws/Github-black.svg';
import LinkedinBlack from '../draws/LinkeDin-black.svg';

export default function NavBar() {
	const [open, setOpen] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<header
			className='header'
			style={{
				top: visible ? '0' : '-20em',
				background: visible ? '#fed9b700' : '#fed9b7',
			}}
		>
			<div className='container'>
				<button
					onClick={handleToggle}
					className={`hamburger hamburger--arrow ${open ? 'is-active' : ''}`}
					type='button'
				>
					<span className='hamburger-box'>
						<span className={` hamburger-inner ${open ? 'whiteLines' : ''}`}></span>
					</span>
				</button>
				<nav className={`navbar ${open ? 'active-nav' : ''}`}>
					<ul>
						<li>
							<NavLink to='/' exact>
								{' '}
								Home{' '}
							</NavLink>
						</li>
						<li>
							<NavLink to='/post'> Blog </NavLink>
						</li>
						<li>
							<NavLink to='/portfolio'> Portfolio </NavLink>
						</li>
						<li>
							<NavLink to='/contact'> Contact </NavLink>
						</li>
						<h3 className='title-social'>My social media. </h3>
						<div className='icons'>
							<a
								href='https://www.linkedin.com/in/angelruiz95/'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<img src={LinkeDin} alt='' />
							</a>
							<a
								href='https://www.instagram.com/angelus_dev/'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<img src={Instagram} alt='' />
							</a>
							<a
								href='https://codepen.io/_josueangel'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<img src={CodePen} alt='' />
							</a>
							<a href='https://github.com/dehorus' target='_blank' rel='noreferrer'>
								{' '}
								<img src={GitHub} alt='' />
							</a>
							<a
								href='https://www.behance.net/angelruiz12'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<img src={Behance} alt='' />
							</a>
						</div>
					</ul>
					<div className='icons-desktop'>
						<a
							href='https://www.linkedin.com/in/angelruiz95/'
							target='_blank'
							rel='noreferrer'
						>
							{' '}
							<img src={LinkedinBlack} alt='linkedin' />
						</a>
						<a href='https://github.com/dehorus' target='_blank' rel='noreferrer'>
							{' '}
							<img src={GithubBlack} alt='github' target='_blank' />
						</a>
						<a
							href='https://www.behance.net/angelruiz12'
							target='_blank'
							rel='noreferrer'
						>
							{' '}
							<img src={BehanceBlack} alt='behance' target='_blank' />
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
