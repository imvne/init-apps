import styled from 'styled-components'
import Footer from './Footer'
import OurMethod from './OurMethod.jsx'
import GrainSvg from './assets/grain'
import Form from './Form.jsx'
import PricesAndMarketing from './PricesAndMarketing.jsx'
import Calendly from './Calendly.jsx'

export default function App() {
	return (
		<AppContainer>
			<Logo>init apps.</Logo>
			<Tagline>
				<StyledGrainSvg
					shapePath={
						'M708 117C618 8.19997 95.5 -6.0002 46 88.5C-46 313.5 15.9 188.6 95.5 329C195 504.5 763 486 920 313.5C920 164 820.5 253 708 117Z'
					}
					color1={'#5ce1e6'}
					color2={'#ff914d'}
				/>

				<TaglineLeft>Transformez votre idée en un MVP fonctionnel et solide,</TaglineLeft>
				<TaglineRight> prêt à tester et à évoluer.</TaglineRight>
			</Tagline>
			<Div>
				<Description>
					<HighlightedText>
						Tout ce qu'il vous faut pour transformer <br />
						votre idée en future application :
					</HighlightedText>
				</Description>

				<Features>
					<FeatureItem>
						<Square />
						design moderne,
					</FeatureItem>
					<FeatureItem>
						<Square />
						développement sur mesure,
					</FeatureItem>
					<FeatureItem>
						<Square />
						suivi transparent.
					</FeatureItem>
				</Features>
			</Div>

			{/* <CtaButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Prendre rdv</CtaButton> */}

			<PricesAndMarketing />

			<OurMethod />

			<Calendly />

			<Form />

			<Footer />
		</AppContainer>
	)
}

const AppContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f6f6f6;
	overflow: hidden;
	gap: 40px;

	@media (min-width: 768px) {
		gap: 60px;
	}
`

const Logo = styled.div`
	font-family: 'League Spartan';
	font-size: 24px;
	font-weight: bold;
	letter-spacing: -1.5px;
	text-align: center;
	margin: 20px;
	color: #261812;

	@media (min-width: 768px) {
		font-size: 35px;
		letter-spacing: -1.8px;
	}
`

const Tagline = styled.div`
	font-family: 'Epilogue';
	font-variation-settings: 'wght' 500;
	width: 70%;
	margin: 50px 0;
	position: relative;
	min-height: 150px;
	z-index: 3;
	color: #2e201a;

	@media (min-width: 768px) {
		font-variation-settings: 'wght' 400;
		width: 70%;
		min-height: 200px;
		margin: 70px 0;
	}
`

const RondBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 1;
`

const TaglineLeft = styled.div`
	text-align: left;
	margin-bottom: 50px;
	font-size: 17px;

	@media (min-width: 768px) {
		font-size: 50px;
	}
`

const TaglineRight = styled.div`
	text-align: right;
	font-size: 17px;

	@media (min-width: 768px) {
		font-size: 50px;
	}
`

const Div = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-top: 12%;

	@media (min-width: 768px) {
		width: 70%;
	}
`

const Description = styled.div`
	font-family: 'Epilogue', sans-serif;
	font-weight: 400;
	font-style: italic;
	font-size: 15px;
	text-align: left;
	width: 100%;

	@media (min-width: 768px) {
		font-size: 33px;
		width: 100%;
	}
`

const HighlightedText = styled.span`
	background: linear-gradient(180deg, transparent 30%, #f5a17c 30%, #f5a17c 85%, transparent 85%);
	box-decoration-break: clone;
	-webkit-box-decoration-break: clone;
`

const Features = styled.div`
	text-align: right;
	font-family: 'Epilogue', sans-serif;
	font-weight: 300;
	font-style: italic;
	font-size: 15px;
	width: 100%;
	margin-top: 10px;

	@media (min-width: 768px) {
		font-size: 33px;
		width: 100%;
		margin-top: 20px;
	}
`

const FeatureItem = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: flex-end;

	@media (min-width: 768px) {
		gap: 15px;
	}
`

const Square = styled.div`
	width: 9px;
	height: 9px;
	background-color: #f5a17c;

	@media (min-width: 768px) {
		width: 20px;
		height: 20px;
	}
`

const CtaButton = styled.button`
	background-color: #5d8b9a;
	color: #f6f6f6;
	border: none;
	padding: 15px 30px;
	margin: 30px 0;
	font-family: 'Epilogue', sans-serif;
	font-weight: 500;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
	align-self: center;

	&:hover {
		opacity: 0.9;
	}

	@media (min-width: 768px) {
		font-size: 25px;
		padding: 20px 40px;
		margin: 60px 0;
	}
`

const StyledGrainSvg = styled(GrainSvg)`
	position: absolute;
	z-index: -1;
	top: -170%;
	left: 50%;
	transform: translateX(-50%) scaleX(0.3) scaleY(0.5);
	width: auto;
	height: auto;

	@media (min-width: 768px) {
		top: -90%;
		transform: translateX(-50%) scale(1);
	}
`
