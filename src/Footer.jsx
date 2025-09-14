import styled from 'styled-components'

export default function Footer() {
	return (
		<FooterContainer>
			<Line />
			<ContactInfo>
				<Mail href='mailto:imanebeaufils@gmail.com' target='_blank'>
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
			<Copyright>init apps. ©2025</Copyright>
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
	font-family: 'Epilogue', sans-serif;
	color: #612a14;
	font-size: 25px;
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
	font-size: 18px;
	opacity: 80%;
	color: #612a14;
	font-family: 'Epilogue', sans-serif;
	margin: 8px 20px 12px 0px;
	cursor: pointer;

	&:hover {
		opacity: 60%;
	}

	@media (min-width: 768px) {
		font-size: 25px;
	}
`

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Copyright = styled.p`
	font-family: 'Epilogue', sans-serif;
	opacity: 80%;
	font-size: 13px;
	margin: 10px;
`
