import {useEffect, useRef} from 'react'
import {WebGLRenderer} from 'three'

export function useRenderer(renderer: WebGLRenderer) {
	const ref = useRef<HTMLDivElement>(null) // Ссылка на элемент, где будет отрисовываться 3D-сцена.
	const canvasElement = renderer.domElement

	useEffect(() => {
		if (ref.current) {
			ref.current.appendChild(canvasElement)
		}

		return () => {
			renderer.dispose()
			if (ref.current) {
				ref.current.removeChild(canvasElement)
			}
		}
	}, [])



	return {ref}
}