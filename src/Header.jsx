import styled from 'styled-components'

export default function Header() {
	return (
		<HeaderContainer>
			<Logo>init apps.</Logo>
			{/* <Menu>
				<StyledLink href='/'>Accueil</StyledLink>
				<StyledLink href='/notre-methode'>Notre méthode</StyledLink>
				<StyledLink href='/#contact'>Contact</StyledLink>
			</Menu> */}
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0px 20px;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

const Logo = styled.div`
	font-family: 'League Spartan';
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	margin: 20px;
	letter-spacing: -1.5px;

	@media (min-width: 768px) {
		font-size: 28px;
		letter-spacing: -1.8px;
	}
`

const Menu = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const StyledLink = styled.a`
	text-decoration: none;
	color: #612a14;
	font-family: 'Epilogue', sans-serif;
	font-size: 13px;
	margin: 10px 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}

	@media (min-width: 768px) {
		font-size: 18px;
		margin: 0 30px;
	}
`
