import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/logo-white.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

// import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
			<Container className="navContainer">
				<Navbar.Brand href="#home" className="me-auto">
					<img src={logo} alt="Logo" id="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
							A Propos
						</Nav.Link>
						<Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>
							Prestations
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/philippe-devauchelle-85721015a/" target="_blank">
								<img src={navIcon1} alt="" />
							</a>
							<a href="https://www.facebook.com/philippe.devauchelle" target="_blank">
								<img src={navIcon2} alt="" />
							</a>
							<a href="https://www.instagram.com/philippedevauchelle/" target="_blank">
								<img src={navIcon3} alt="" />
							</a>
						</div>
						<button className="vvd" onClick={() => (window.location.href = '#connect')}>
							<span>Contactez-nous</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
