import { Col, Image } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl }) => {
	return (
		<Col sm={12} md={4}>
			<div className="proj-imgbx">
				<Image src={imgUrl} alt='Prestations DJ'/>
				<div className="proj-txt mt-4">
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
	)
}
