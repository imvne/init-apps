export default function GrainRect({ width = 499, height = 91, borderRadius = 3, propStyle, className }) {
	return (
		<svg
			className={className}
			style={propStyle}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				{/* Dégradé fixe */}
				<linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='0%' stopColor='#5ce1e6' stopOpacity='1' />
					<stop offset='90%' stopColor='#ff914d' stopOpacity='0' />
				</linearGradient>

				{/* Grain */}
				<filter id='grainy'>
					<feTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' result='noise' />
					<feColorMatrix type='saturate' values='0' in='noise' result='monoNoise' />
					<feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
				</filter>

				{/* Flou pour bords */}
				<filter id='blur' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
					<feGaussianBlur stdDeviation='50' />
				</filter>

				{/* Mask pour les bords flous */}
				<mask id='shapeMask'>
					<rect width={width} height={height} rx={borderRadius} fill='white' filter='url(#blur)' />
				</mask>
			</defs>

			{/* Rectangle avec gradient + grain + masque flou */}
			<rect width={width} height={height} fill='url(#grad1)' filter='url(#grainy)' mask='url(#shapeMask)' />
		</svg>
	)
}
