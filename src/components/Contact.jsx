import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import emailjs from 'emailjs-com'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Contact = () => {
	emailjs.init('ant.petit@pm.me')
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	}

	const [formDetails, setFormDetails] = useState(formInitialDetails)
	const [buttonText, setButtonText] = useState('Envoyer')
	const [status, setStatus] = useState({})

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setButtonText('Envoi en cours...')

		try {
			await emailjs.sendForm('service_2687', 'template_7wqzb0g', e.target, 'olADdkV-Qdi3ygPlS')
			setFormDetails(formInitialDetails)
			setStatus({ success: true, message: 'Merci pour votre message ! On vous répondra très bientôt' })
		} catch {
			setStatus({ success: false, message: "Oups, erreur lors de l'envoi 🤔" })
		}

		setButtonText('Envoyer')
	}

	return (
		<section className="contact pb-5" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={contactImg} alt="Contactez-nous" />
					</Col>
					<Col md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeInUp' : ''}>
									<h2>Contactez-nous</h2>
								</div>
							)}
						</TrackVisibility>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formDetails.firstName}
										name="firstName"
										placeholder="Votre prénom"
										onChange={(e) => {
											onFormUpdate('firstName', e.target.value)
										}}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formDetails.lastName}
										name="lastName"
										placeholder="Votre nom"
										onChange={(e) => {
											onFormUpdate('lastName', e.target.value)
										}}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="email"
										value={formDetails.email}
										name="email"
										placeholder="Votre mail"
										onChange={(e) => {
											onFormUpdate('email', e.target.value)
										}}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="tel"
										value={formDetails.phone}
										name="phone"
										placeholder="Votre numéro"
										onChange={(e) => {
											onFormUpdate('phone', e.target.value)
										}}
									/>
								</Col>
								<Col>
									<textarea
										rows="6"
										value={formDetails.message}
										name="message"
										placeholder="Votre message"
										onChange={(e) => {
											onFormUpdate('message', e.target.value)
										}}
									/>
									<button type="submit">
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col>
										<p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
