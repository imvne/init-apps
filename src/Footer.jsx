import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<FooterContainer>
			<Line />
			<ContactInfo>
				<Mail href='mailto:contact@initapps.fr' target='_blank'>
					contact@initapps.fr
				</Mail>
				{/* <Links>
					<StyledLink href='/'>Accueil</StyledLink>
					<StyledLink href='/notre-methode'>Notre méthode</StyledLink>
				</Links> */}
				<Icons>
					<a href='https://github.com/imvne' target='_blank'></a>
					<a href='https://www.linkedin.com/in/imanebeaufils/' target='_blank'></a>
				</Icons>
			</ContactInfo>
			<LegalTexts>
				<Copyright>init apps. ©2025</Copyright>
				<StyledLink as={Link} to='/mentions-legales'>
					Mentions légales?
				</StyledLink>
				<StyledLink as={Link} to='/politique-confidentialite'>
					Politique de confidentialité
				</StyledLink>
			</LegalTexts>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`

const Line = styled.div`
	width: 100%;
	height: 1px;
	opacity: 30%;
`

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 100px 0px;
`

const Mail = styled.a`
	font-family: 'League Spartan', sans-serif;
	color: #180b2c;
	font-size: 25px;
	font-weight: bold;
	letter-spacing: -1.5px;
	text-decoration: none;
	opacity: 70%;

	@media (min-width: 768px) {
		font-size: 35px;
	}
`

const Links = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin: 16px 0px;
`

const StyledLink = styled.a`
	text-decoration: none;
	font-size: 10px;
	opacity: 80%;
	color: #8c95b8;
	font-family: 'League Spartan', sans-serif;
	margin: 10px;
	cursor: pointer;
	line-height: 1;

	&:hover {
		opacity: 60%;
	}

	@media (min-width: 768px) {
		font-size: 15px;
	}
`

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Copyright = styled.p`
	font-family: 'League Spartan', sans-serif;
	opacity: 80%;
	font-size: 14px;
	margin: 10px;
	line-height: 1;

	@media (min-width: 768px) {
		font-size: 17px;
	}
`

const LegalTexts = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`
