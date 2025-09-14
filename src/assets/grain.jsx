export default function GrainSvg({ shapePath, propStyle, className }) {
	return (
		<svg
			className={className}
			style={propStyle}
			width='1150'
			height='583'
			viewBox='-100 -100 1150 583'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='20%' style={{ stopColor: '#5ce1e6', stopOpacity: 0.7 }} />
					<stop offset='50%' style={{ stopColor: '#ff914d', stopOpacity: 0.7 }} />
				</linearGradient>

				<filter id='grainy'>
					<feTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' result='noise' />
					<feColorMatrix type='saturate' values='0' in='noise' result='monoNoise' />
					<feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
				</filter>

				<mask id='shapeMask'>
					<g filter='url(#blur)'>
						<path d={shapePath} fill='white' transform='translate(95 48) scale(0.8 0.8)' />
					</g>
				</mask>

				<filter id='blur' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
					<feGaussianBlur stdDeviation='50' />
				</filter>
			</defs>

			<rect width='100%' height='100%' fill='url(#grad1)' filter='url(#grainy)' mask='url(#shapeMask)' />
		</svg>
	)
}
