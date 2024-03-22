import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

import photobooth from '../assets/img/photobooth.png'
import photographer from '../assets/img/photographer.png'

export const Projects = () => {
	const projects = [
		{
			title: 'Prestation DJ',
			description: 'Animation & ambiance',
			imgUrl: projImg1,
		},
		{
			title: 'Sonorisation',
			description: 'Profesionnelle sur mesure',
			imgUrl: projImg2,
		},
		{
			title: 'Eclairage',
			description: 'Pour illuminer vos soirées',
			imgUrl: projImg3,
		},
	]

	return (
		<section className="project mt-5" id="project">
			<Container>
				<Row>
					<Col>
						<h2>Prestations</h2>

						<Tab.Container id="projects-tab" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item className="w-50">
									<Nav.Link eventKey="first">Prestations</Nav.Link>
								</Nav.Item>{' '}
								<Nav.Item className="w-50">
									<Nav.Link eventKey="second">Photographies</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										<Col>
											<p>Notre parc est composé de matériel professionnel dernière génération de marques référencées et il est constamment amélioré et contrôlé régulièrement afin de vous faire profiter d'un matériel innovant et performant.</p>
											<br />
											<p>Nous garantissons la réussite de votre projet, mais aussi une puissance sonore contrôlée et adaptée au public ainsi qu'à l'environnement.</p>
											<br />
											<p>Nous créons une ambiance lumineuse en fonction de votre réception, nous innovons pour mettre en valeur le lieu de votre événement.</p>
										</Col>
									</Row>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row className="align-items-center p-5  photoDiv m-3">
										<Col xs={12} md={9}>
											<h3>Photobooth </h3>
											<p className='w-sm-auto w-md-56'>Offrez à vos invités des souvenirs inoubliables de votre événement avec notre photobooth interactif. Capturez chaque instant mémorable et créez des souvenirs durables pour tous.</p>
											<p>Réservez dès maintenant pour une expérience photo amusante et unique !</p>
										</Col>
										<Col className='mb-4'>
											<img src={photobooth} alt="Photobooth" />
										</Col>
									</Row>
									<Row className="align-items-center p-5 photoDiv m-3">
										<Col>
											<a href="https://antoinepetit.com" target="_blank">
												<img src={photographer} alt="Photographe Amiens" className="photographerImg mb-4" />
											</a>
										</Col>
										<Col xs={12} md={9}>
											<h3>Photographe</h3>
											<p>Choisissez l'authenticité avec un photographe professionnel spécialisé dans l'événementiel. Capturez des vrais moments significatifs pour créer des souvenirs durables. </p>
											<p>Comme Concept Evénement, faites confiance à Antoine pour immortaliser votre événement avec sincérité</p>
											<a href="https://antoinepetit.com" target="_blank" className="text-white text-decoration-none fs-4">
												En savoir plus
											</a>
										</Col>
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp2} className="background-image-right" alt='background image'/>
		</section>
	)
}
