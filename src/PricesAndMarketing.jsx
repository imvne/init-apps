import styled from 'styled-components'
import theme from './theme'
import GrainSvg from './assets/grain'

export default function Prices() {
	return (
		<PricesContainer>
			<StyledGrainSvg1
				shapePath={
					'M708 117C618 8.19997 95.5 -6.0002 46 88.5C-46 313.5 15.9 188.6 95.5 329C195 504.5 763 486 920 313.5C920 164 820.5 253 708 117Z'
				}
				color1={'#5ce1e6'}
				color2={'#5ce1e6'}
			/>
			<StyledGrainSvg2
				shapePath={
					'M708 117C618 8.19997 95.5 -6.0002 46 88.5C-46 313.5 15.9 188.6 95.5 329C195 504.5 763 486 920 313.5C920 164 820.5 253 708 117Z'
				}
				color1={'#5ce1e6'}
				color2={'#5ce1e6'}
			/>
			<Phrase>
				Votre MVP prêt en 3 semaines
				<br /> pour <b>1500€.</b>
			</Phrase>
			<Arguments>
				<Question>
					Pourquoi construire un MVP avec <Logo>init apps</Logo> ?
				</Question>
				<Answers>
					<Answer>
						<br />
						passer de l'abstrait au concret : <b>donner vie a son idée</b>
					</Answer>
					<Answer>
						<br /> <br />
						pouvoir la <b>tester</b> et la <b>faire tester</b>
					</Answer>
					<Answer>
						<br />
						avoir <b>une base solide</b> pour intégrer des nouvelles fonctionnalités
					</Answer>
					<Answer>
						<br />
						<b>déléguer</b> afin de ne pas perdre de temps sur la partie technique
					</Answer>
				</Answers>
			</Arguments>
		</PricesContainer>
	)
}

const PricesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 50px 0px 0px 0px;
	font-variation-settings: 'wght' 400;
	overflow-x: hidden !important;

	@media (min-width: 768px) {
		margin: 140px 0px 60px 0px;
	}
`

const Phrase = styled.h3`
	font-family: 'Epilogue', sans-serif;
	font-size: 30px;
	color: ${theme.colors.darkBlue3};
	text-align: center;
	line-height: 40px;
	z-index: 3;
	width: 83%;
	margin-top: 50px;

	@media (min-width: 768px) {
		font-size: 50px;
		line-height: 60px;
		width: 70%;
		margin-top: 50px;
	}
`

const StyledGrainSvg1 = styled(GrainSvg)`
	position: absolute;
	z-index: 1;
	top: 51%;
	/* left: 50%; */
	transform: translateX(-20%) scaleX(0.4) scaleY(0.5);
	width: auto;
	height: auto;

	@media (min-width: 768px) {
		transform: translateX(-60%) scaleX(1.6) scaleY(1);
		top: 125%;
		/* transform: translateX(-50%) scale(1); */
	}
`

const StyledGrainSvg2 = styled(GrainSvg)`
	position: absolute;
	z-index: 1;
	top: 53%;
	/* left: 50%; */
	transform: translateX(27%) scaleX(0.6) scaleY(0.5);
	width: auto;
	height: auto;

	@media (min-width: 768px) {
		transform: translateX(60%) scaleX(1.3) scaleY(1);
		top: 125%;
		/* transform: translateX(-50%) scale(1); */
	}
`

const Arguments = styled.div`
	display: flex;
	width: 83%;
	flex-direction: column;
	align-items: center;
	margin-top: 150px;

	@media (min-width: 768px) {
		width: 80%;
		margin-top: 200px;
	}
`

const Question = styled.h1`
	font-family: 'Epilogue', sans-serif;
	font-variation-settings: 'wght' 500;
	font-size: 24px;
	line-height: 35px;

	@media (min-width: 768px) {
		font-size: 35px;
	}
`

const Logo = styled.span`
	font-family: 'League Spartan';
	font-size: 30px;
	font-variation-settings: 'wght' 700;
	letter-spacing: -1.5px;
	color: #261812;

	@media (min-width: 768px) {
		font-size: 45px;
		letter-spacing: -1.8px;
	}
`

const Answers = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	margin-top: 30px;
	width: fit-content;

	@media (min-width: 768px) {
		flex-direction: row;
		margin-top: 30px;
	}
`

const Answer = styled.h2`
	font-family: 'Epilogue', sans-serif;
	margin: 20px;
	border: 3px dashed #5ce1e6;
	border-radius: 600px;

	text-align: center;

	width: 200px;
	height: 200px;
	font-size: 20px;
	padding: 20px;

	b {
		font-variation-settings: 'wght' 700;
	}

	@media (min-width: 768px) {
		width: 230px;
		height: 230px;
		font-size: 24px;
		flex-shrink: 0;
		padding: 20px;
	}
`
