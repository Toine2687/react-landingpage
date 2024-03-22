import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import responsiveData from '../config/responsiveData.jsx'
import musicplayer1 from '../assets/img/music-players/music-1.png'
import musicplayer2 from '../assets/img/music-players/music-2.png'
import musicplayer3 from '../assets/img/music-players/music-3.png'
import musicplayer4 from '../assets/img/music-players/music-4.png'
import musicplayer5 from '../assets/img/music-players/music-5.png'
import { Container, Row, Col } from 'react-bootstrap'

export const Musicians = () => {
	return (
		<section className="my-5 py-3">
			<Container>
				<Row>
					<Col>
						<h2>Musiciens</h2>
						<div className="skill-bx">
							<p>Accompagnez votre événement des meilleurs musiciens et faîtes passer l'ambiance de votre soirée au niveau supérieur</p>

							<Carousel responsive={responsiveData} infinite={true} className="skill-slider mt-4">
								<div className="item musicplayer">
									<a href="https://www.instagram.com/philippedevauchelle/" target="_blank" className="text-white text-decoration-none fs-6">
										<img src={musicplayer1} alt="DJ Amiens Instagram" />
										<h5 className="mt-3">Philippe</h5>
									</a>
									<p className="my-0">DJ</p>
								</div>
								<div className="item musicplayer">
									<a href="https://www.instagram.com/a_free_violon/" target="_blank" className="text-white text-decoration-none fs-6">
										<img src={musicplayer2} alt="Anne-France Violon" />
										<h5 className="mt-3">Anne-France</h5>
									</a>
									<p className="my-0">Violon</p>
								</div>
								<div className="item musicplayer">
									<a href="https://www.instagram.com/mokalande" target="_blank" className="text-white text-decoration-none fs-6">
										<img src={musicplayer3} alt="Morgan Percussions" />
										<h5 className="mt-3">Morgan</h5>
									</a>
									<p className="my-0">Percussions</p>
								</div>
								<div className="item musicplayer">
									<a href="https://www.instagram.com/eddsax_official/" target="_blank" className="text-white text-decoration-none fs-6">
										<img src={musicplayer4} alt="Ed Sax" />
										<h5 className="mt-3">Ed</h5>
									</a>
									<p className="my-0">Sax</p>
								</div>
								<div className="item musicplayer">
									<a href="https://www.instagram.com/juliette_djender_violoniste/" target="_blank" className="text-white text-decoration-none fs-6">
										<img src={musicplayer5} alt="Juliette Violon" />
										<h5 className="mt-3">Juliette</h5>
									</a>
									<p className="my-0">Violon</p>
								</div>
							</Carousel>
							<p className='mb-1 mt-5'>Contactez-nous pour en savoir plus</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
