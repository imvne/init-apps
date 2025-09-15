import styled from 'styled-components'

export default function Form() {
	const onSubmit = event => {
		event.preventDefault()
		const form = event.target

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(form).toString(),
		})
			.then(() => {
				document.getElementById('form-success').style.display = 'block'
				form.reset()
			})
			.catch(error => alert('Une erreur est survenue : ' + error))
	}

	return (
		<>
			<FormContainer
				id='contact'
				name='contact'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
				onSubmit={event => onSubmit(event)}
				netlify>
				<input type='hidden' name='form-name' value='contact' />

				<p hidden>
					<label>
						Ne pas remplir : <input name='bot-field' />
					</label>
				</p>

				<FormTitle>Discutons de votre idée</FormTitle>
				<FormCategory>Qui êtes-vous ?</FormCategory>
				<FormRow>
					<Input name='prenom' placeholder='Prénom *' required />
					<Input name='nom' placeholder='Nom *' required />
				</FormRow>
				<FormRow>
					<Input name='email' placeholder='Email *' type='email' required />
					<Input name='telephone' placeholder='Numéro de téléphone' />
				</FormRow>
				<FormCategory>Quelle est votre idée ?</FormCategory>
				<FormRow>
					<Input name='project' placeholder='Décrivez votre projet en une phrase *' required />
				</FormRow>
				{/* 
			<FormRow>
				<Input placeholder='Date de lancement' />
				<Input placeholder='Entreprise' />
			</FormRow> */}

				<SendFormButton type='submit'>Envoyer mon idée</SendFormButton>
				<FromSentConfirmation id='form-success' style={{ display: 'none' }}>
					Merci ! Le formulaire a bien été envoyé.
				</FromSentConfirmation>
			</FormContainer>
		</>
	)
}

const FormContainer = styled.form`
	width: 100%;
	background-color: #e1e2e4;
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		padding: 50px;
	}
`

const FormTitle = styled.h3`
	font-family: 'League Spartan';
	color: #112250ed;

	@media (min-width: 768px) {
		font-size: 35px;
	}
`

const FormCategory = styled.div`
	font-family: 'Epilogue', sans-serif;
	font-weight: 500;
	font-style: italic;
	font-size: 14px;
	color: #0f366e;
	width: fit-content;
	margin: 40px 0px 10px 0px;
	align-self: flex-start;

	@media (min-width: 768px) {
		font-size: 18px;
		margin: 30px 0px 20px 0px;
	}
`

const FormRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	width: 100%;
	margin: 15px 0px;

	@media (min-width: 768px) {
		width: 90%;
		gap: 50px;
	}
`

const Input = styled.input`
	border: 1.5px solid #618dcb;
	padding: 10px;
	border-radius: 6px;
	font-family: 'Epilogue', sans-serif;
	flex: 1;
	background-color: transparent;
	width: 30%;
	font-size: 15px;

	&::placeholder {
		font-family: 'Epilogue', sans-serif;
		font-style: italic;
		font-size: 15px;
		color: #a5b7d2;

		@media (min-width: 768px) {
			font-size: 20px;
		}
	}

	@media (min-width: 768px) {
		padding: 14px;
		width: 90%;
		font-size: 24px;
	}
`

const SendFormButton = styled.button`
	background-color: #a5b7d2;
	color: #0b3165;
	border: none;
	padding: 15px 30px;
	margin: 40px 0;
	font-family: 'Epilogue', sans-serif;
	font-weight: 500;
	font-size: 14px;
	border-radius: 8px;
	cursor: pointer;
	align-self: center;

	&:hover {
		opacity: 0.9;
	}

	@media (min-width: 768px) {
		font-size: 20px;
		padding: 20px 40px;
		margin: 60px 0;
	}
`

const FromSentConfirmation = styled.div`
	font-family: 'League Spartan';
	color: #112250ed;

	@media (min-width: 768px) {
		font-size: 21px;
	}
`
