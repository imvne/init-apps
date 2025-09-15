import { useEffect } from 'react'
import styled from 'styled-components'

export default function Calendly() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://assets.calendly.com/assets/external/widget.js'
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<CalendlyContainer>
			<div
				className={'calendly-inline-widget'}
				data-url={
					'https://calendly.com/contact-initapps/30min?hide_event_type_details=1"background_color=f6f6f6&text_color=050921&primary_color=1999c4'
				}
				style={{ minWidth: '320px', height: '700px' }}></div>
		</CalendlyContainer>
	)
}

const CalendlyContainer = styled.div`
	width: 100%;
`
