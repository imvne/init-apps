import { useId } from 'react'

export default function GrainSvg({ shapePath, propStyle, className, color1, color2 }) {
	const uniqueId = useId()
	const gradId = `grad1-${uniqueId}`
	const grainyId = `grainy-${uniqueId}`
	const maskId = `shapeMask-${uniqueId}`
	const blurId = `blur-${uniqueId}`

	return (
		<svg
			className={className}
			style={propStyle}
			width='1200'
			height='600'
			viewBox='-100 -100 1200 600'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<linearGradient id={gradId} x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='20%' style={{ stopColor: color1, stopOpacity: 0.7 }} />
					<stop offset='50%' style={{ stopColor: color2, stopOpacity: 0.7 }} />
				</linearGradient>

				<filter id={grainyId}>
					<feTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' result='noise' />
					<feColorMatrix type='saturate' values='0' in='noise' result='monoNoise' />
					<feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
				</filter>

				<mask id={maskId}>
					<g filter={`url(#${blurId})`}>
						<path d={shapePath} fill='white' transform='translate(95 48) scale(0.8 0.8)' />
					</g>
				</mask>

				<filter id={blurId} x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
					<feGaussianBlur stdDeviation='50' />
				</filter>
			</defs>

			<rect
				width='100%'
				height='100%'
				fill={`url(#${gradId})`}
				filter={`url(#${grainyId})`}
				mask={`url(#${maskId})`}
			/>
		</svg>
	)
}
