import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import icon1 from '../assets/img/icons/icon-wedding.png'
import icon2 from '../assets/img/icons/icon-party.png'
import icon3 from '../assets/img/icons/icon-birthday.png'
import icon4 from '../assets/img/icons/icon-31.png'
import colorSharp from '../assets/img/color-sharp.png'
import responsiveData from '../config/responsiveData.jsx'

export const Skills = () => {
	return (
		<section className="skills" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2 className="mb-4">Marquer l'événement de votre vie</h2>
							<div className="mb-5">
								<p>Professionnel spécialisé dans les domaines de l'Animation, de la Sonorisation et de l'Eclairage de vos Evénements,</p>
								<p>on vous conseille et vous accompagne dans la préparation de vos soirées et événements qu'ils soient privés ou publics en prestation intérieure, extérieure.</p>
							</div>
							<p>Nous mettons tout en oeuvre afin que votre événement reste un moment inoubliable et une réussite pour vos invités.</p>
							<p>Nous réalisons des événements capables de rassembler plusieurs centaines de personnes, avec une sonorisation à la fois discrète et esthétique.</p>

							<br />
							<br />
							<p className="mb-5">
								{' '}
								<strong>Notre engagement : la qualité et la réussite de votre événement à des tarifs compétitifs</strong>
							</p>

							<Carousel responsive={responsiveData} infinite={true} className="skill-slider mb-5">
								<div className="item">
									<img src={icon1} alt="Icone Mariage" />
									<h5>Mariage</h5>
								</div>
								<div className="item">
									<img src={icon2} alt="Icone Soirée" />
									<h5>Soirée Privée</h5>
								</div>
								<div className="item">
									<img src={icon3} alt="Icone Anniversaire" />
									<h5>Anniversaire</h5>
								</div>
								<div className="item">
									<img src={icon4} alt="Icone fête de fin d'anéne" />
									<h5>Fête de fin d'année</h5>
								</div>
							</Carousel>

							<h3>CONCEPT EVENEMENT : DJ & Animation à Amiens</h3>
						</div>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp} alt="background" className="background-image-left" />
		</section>
	)
}
