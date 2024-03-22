import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import logo from '../assets/img/logo-white.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center pt-4">
					<Col sm={6} className='mb-4'>
						<img src={logo} alt="Logo Concept Evenement" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="#">
								<img src={navIcon1} alt='Nous suivre sur LinkedIn'/>
							</a>
							<a href="#">
								<img src={navIcon2} alt='Nous suivre sur Facebook'/>
							</a>
							<a href="#">
								<img src={navIcon3} alt='Nous suivre sur Instagram'/>
							</a>
						</div>
						<p>Copyright 2024. Concept Evenement . Siret 751 749 953 00012 </p>
						<p>
							Développé avec ❤️ par{' '}
							<a href="http://antipetoine.dev" target="_blank" className="text-white text-decoration-none">
								antipetoine.dev
							</a>
						</p>
						<p>
							<a href="#" target="_blank" className="text-white text-decoration-none">
								Mentions légales
							</a>
                            -
							<a href="#" target="_blank" className="text-white text-decoration-none">
								Politique de Confidentialité
							</a>
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
