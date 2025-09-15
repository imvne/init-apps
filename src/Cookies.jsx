import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Cookies() {
	return (
		<Container>
			<StyledLink as={Link} to='/'>
				<ArrowIcon>
					<svg viewBox='0 0 24 24' fill='currentColor'>
						<path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
					</svg>
				</ArrowIcon>
			</StyledLink>
			<Content>
				<Title>Cookies</Title>
				<p>
					Notre site n'utilise pas directement de cookies. Cependant, le widget Calendly utilisé
					pour la prise de rendez-vous peut placer des cookies sur votre appareil.
				</p>
				<p>
					Ces cookies servent uniquement à :<li>Assurer le bon fonctionnement du widget.</li>
					<ul>
						<li>Gérer la session et vérifier la disponibilité des créneaux.</li>
						<li>
							Traiter les informations que vous saisissez pour prendre un rendez-vous
							(prénom, nom, adresse email, numéro de téléphone, détails du rendez-vous).
						</li>
					</ul>
				</p>
				<p>
					Les données collectées via ces cookies sont traitées par Calendly conformément à leur
					politique de confidentialité :{' '}
					<a href='https://calendly.com/privacy'>https://calendly.com/privacy</a>
				</p>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f6f6f6;
	padding: 40px 20px;

	@media (min-width: 768px) {
		padding: 40px 20px;
	}
`

const Content = styled.div`
	max-width: 800px;
	width: 100%;
	background: white;
	padding: 40px;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	margin-top: 50px;

	li {
		margin-left: 30px;
	}

	@media (min-width: 768px) {
		margin-top: 40px;
	}

	p {
		font-family: 'Epilogue', sans-serif;
		font-size: 16px;
		line-height: 1.6;
		color: #0f1449;
		margin: 20px 0;
	}
`

const Title = styled.h1`
	font-family: 'League Spartan', sans-serif;
	font-size: 22px;
	font-weight: bold;
	color: #121526;
	margin-bottom: 30px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 32px;
	}
`

const StyledLink = styled.a`
	position: absolute;
	cursor: pointer;
	text-decoration: none;
	left: 5%;
	top: 20px;
	color: #181461;
	transition: all 0.2s ease;

	@media (min-width: 768px) {
		top: 40px;
	}

	&:hover {
		color: #050921;
		transform: translateX(-3px);
	}
`

const ArrowIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 100%;
		height: 100%;
	}
`
