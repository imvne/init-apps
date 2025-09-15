import styled from 'styled-components'
import theme from './theme'

export default function OurMethod() {
	const svgBackground = `url("data:image/svg+xml,${encodeURIComponent(`
		<svg width="100%" height="100%" viewBox="0 0 960 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
		  <defs>
		    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color="#5ce1e6" stop-opacity="1"/>
			<stop offset="100%" stop-color="#ff914d" stop-opacity="1"/>
		    </linearGradient>
		
		    <filter id="grainy">
			<feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="3" result="noise"/>
			<feColorMatrix type="saturate" values="0" in="noise" result="monoNoise"/>
			<feBlend in="SourceGraphic" in2="monoNoise" mode="multiply"/>
		    </filter>
		
		    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse">
			<feGaussianBlur stdDeviation="25"/>
		    </filter>
		  </defs>
		
		  <!-- Rectangle centré dans la viewBox avec espace autour pour le flou -->
		  <rect x="40" y="40" width="880" height="380" rx="10" fill="url(#grad1)" filter="url(#blur)" />
		</svg>
		`)}")`

	return (
		<OurMethodContainer>
			<SectionTitle>Notre méthode</SectionTitle>
			<Intro>
				<p>
					Notre méthode vous accompagne pour transformer votre idée en MVP (Minimum Viable Product)
					: une première version fonctionnelle et testable de votre application, conçue pour
					répondre aux besoins essentiels de vos utilisateurs.
				</p>
				<h3>
					Chaque MVP est conçu comme une base solide et évolutive, testable rapidement, qui peut
					facilement évoluer et s’enrichir. Nous vous guidons pour définir la direction de votre
					produit, choisir les fonctionnalités essentielles et créer une première version qui ouvre
					la voie à son futur développement.
				</h3>
				<p>
					Chaque étape est pensée pour limiter les retours inutiles, sécuriser le projet et vous
					permettre d’avancer avec une vision claire. Notre mission est de vous accompagner de
					l’idée à la livraison, avec un processus transparent, des échanges réguliers et une
					priorité constante donnée à la valeur de votre future application.
				</p>
			</Intro>

			<Step>
				<NumTitle>
					<Number>1 </Number>
					<Title>Structurer le concept du produit</Title>
				</NumTitle>

				<Text>
					Nous posons les bases et clarifions la direction de votre produit. Pour ça, on doit
					pouvoir répondons à ces questions:
				</Text>

				<Questions>
					<Question>
						<Square />
						Quel est l’objectif principal de l’application et quel problème résout-elle ?
					</Question>
					<Question>
						<Square />
						Qui sont les utilisateurs cibles (âge, profession, localisation, besoins
						spécifiques) ?
					</Question>
					<Question>
						<Square />
						Quelles sont leurs habitudes d’utilisation de ce type d’application ?
					</Question>
					<Question>
						<Square />
						Qu’est-ce qui pourrait les inciter à utiliser votre app plutôt qu’une autre ?
					</Question>
				</Questions>

				<Text>
					Enfin, nous identifions les risques principaux et les contraintes afin de démarrer sur des
					bases solides.
				</Text>
				<Goal
					style={{
						backgroundImage: svgBackground,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
					}}>
					<b>Objectif :</b> avoir une vision claire de votre MVP et de ses fonctionnalités avant de
					commencer le design et le développement
				</Goal>
			</Step>

			<Step>
				<NumTitle>
					<Number>2</Number>
					<Title>Le design</Title>
				</NumTitle>

				<Text>Nous commençons par définir la charte graphique : </Text>

				<Questions>
					<Question>
						<Square />
						couleurs,
					</Question>
					<Question>
						<Square />
						typographie,
					</Question>
					<Question>
						<Square />
						icônes et images.
					</Question>
				</Questions>

				<Text>
					Ensuite on détermine les <b>écrans principaux</b>, ce qui va nous permettre de créer le
					squelette de votre <b>MVP</b> sous forme de <b>wireframes</b>. Ces wireframes permettent
					de valider le <b>parcours utilisateur</b> avant de passer à l’étape du design graphique
					complet.
				</Text>

				<Text>
					Une fois le squelette et la charte graphique définis, on valide ensemble le design du MVP.
					On proposera 2 versions au maximum par écran et une validation doit être faite sous 48
					heures afin d'être efficace.
				</Text>

				<Goal
					style={{
						backgroundImage: svgBackground,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
					}}>
					<b>Objectif :</b> obtenir un design validé et prêt pour le développement, sans perdre de
					temps sur des détails.
				</Goal>
			</Step>

			<Step>
				<NumTitle>
					<Number>3</Number>
					<Title>Le développement</Title>
				</NumTitle>

				<Text>
					Ça y est ! C'est le moment de construire le MVP, la première version fonctionnelle de
					l'application. Nous développons votre application étape par étape, en suivant le design
					validé. Vous êtes régulièrement informé de l’avancée, pour que tout soit clair et
					transparent.
				</Text>

				<Text>
					Nous vérifions que toutes les fonctionnalités fonctionnent parfaitement et corrigeons les
					éventuels problèmes avant de vous livrer la version finale. Vous recevez une application
					solide et prête à l’usage, avec la possibilité d’ajouter des fonctionnalités
					supplémentaires plus tard.
				</Text>

				<Goal
					style={{
						backgroundImage: svgBackground,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
					}}>
					<b>Objectif :</b> livrer une application fiable, testée et validée, tout en vous assurant
					un suivi simple et transparent.
				</Goal>
			</Step>
		</OurMethodContainer>
	)
}

const OurMethodContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 3;
	width: 100%;
`

const SectionTitle = styled.h2`
	font-family: 'Epilogue', sans-serif;
	margin-top: 50px;
	color: ${theme.colors.darkBlue3};
	font-variation-settings: 'wght' 600;
	font-size: 20px;

	@media (min-width: 768px) {
		margin-top: 50px;
		font-variation-settings: 'wght' 600;
		text-align: left;
		width: 70%;
		font-size: 26px;
	}
`

const Intro = styled.div`
	font-family: 'Epilogue', sans-serif;
	width: 80%;
	margin: 10px 0px 30px 0px;
	text-align: justify;
	color: ${theme.colors.brown2};
	font-size: 15px;

	p {
		margin: 30px 0px;
	}

	@media (min-width: 768px) {
		width: 60%;
		font-size: 20px;
		p {
			margin: 30px 0px;
		}
	}
`

const Step = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px 0px 50px 0px;
	width: 85%;

	@media (min-width: 768px) {
		width: 70%;
	}
`

const NumTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: baseline;
`

const Number = styled.h2`
	font-family: 'League Spartan';
	font-variation-settings: 'wght' 800;
	font-size: 40px;
	font-style: bold;
	color: ${theme.colors.darkBlue3};
	border-bottom: 3px solid ${theme.colors.darkBlue3};
	line-height: 50px;

	@media (min-width: 768px) {
		margin-top: 30px;
		font-size: 70px;
	}
`

const Title = styled.h3`
	font-family: 'League Spartan';
	font-size: 20px;
	font-style: bold;
	color: ${theme.colors.darkBlue3};
	margin: 20px 0px 20px 10px;

	@media (min-width: 768px) {
		margin: 20px 0px 50px 20px;
		font-size: 40px;
	}
`

const Text = styled.p`
	font-family: 'Epilogue', sans-serif;
	font-size: 14px;
	color: #451c0b;
	font-weight: 400;
	line-height: 20px;
	margin: 20px 0px;

	@media (min-width: 768px) {
		font-size: 19px;
		line-height: 26px;
		margin-bottom: 30px;
	}
`

const Questions = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	align-self: flex-end;
	margin: 10px 0px;

	@media (min-width: 768px) {
		margin: 40px 0px;
		width: 90%;
	}
`

const Question = styled.h3`
	font-family: 'Epilogue', sans-serif;
	color: #451c0b;
	display: flex;
	flex-direction: row;
	font-size: 14px;
	align-items: first baseline;
	gap: 15px;

	@media (min-width: 768px) {
		margin: 20px 0px;
		gap: 20px;
		font-size: 19px;
	}
`

const Square = styled.div`
	width: 5px;
	height: 5px;
	background-color: #f5a17c;

	@media (min-width: 768px) {
		width: 15px;
		height: 15px;
	}
`

const Goal = styled.div`
	font-family: 'Epilogue', sans-serif;
	/* background-color: #997c6d; */
	color: #fffbf5;
	margin: 20px 0px;
	font-size: 15px;
	padding: 40px 30px;
	font-weight: 700;
	border-radius: 10px;
	height: fit-content;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;

	@media (min-width: 768px) {
		font-size: 20px;
		border-radius: 10px;
		padding: 30px 80px;
	}
`
