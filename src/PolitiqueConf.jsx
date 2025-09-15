import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function PolitiqueConf() {
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
				<Title>Politique de confidentialité</Title>
				<p>
					Les informations que vous envoyez via le formulaire de contact ou via Calendly sont
					utilisées uniquement pour répondre à vos demandes et prendre rendez-vous. Vos données sont
					conservées pendant 12 mois maximum et ne sont jamais transmises à des tiers.{' '}
				</p>
				<p>
					Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de
					vos données à tout moment en nous contactant à{' '}
					<a href='mailto:contact@initapps.fr' target='_blank' style={{ color: 'black' }}>
						contact@initapps.fr
					</a>
					.
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

const Content = styled.div`
	max-width: 800px;
	width: 100%;
	background: white;
	padding: 40px;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	margin-top: 50px;

	@media (min-width: 768px) {
		margin-top: 40px;
	}

	p {
		font-family: 'Epilogue', sans-serif;
		font-size: 16px;
		line-height: 1.6;
		color: #170c37;
		margin: 20px 0;
	}
`

const Title = styled.h1`
	font-family: 'League Spartan', sans-serif;
	font-size: 22px;
	font-weight: bold;
	color: #261812;
	margin-bottom: 30px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 32px;
	}
`
