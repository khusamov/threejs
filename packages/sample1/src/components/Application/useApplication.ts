import {useEffect, useRef} from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'

export function useApplication(camera: PerspectiveCamera, renderer: WebGLRenderer, scene: Scene) {
	const ref = useRef<HTMLDivElement>(null) // Ссылка на элемент, где будет отрисовываться 3D-сцена.
	const animationFrame = useRef(0)
	const canvasElement = renderer.domElement
	const orbitControls = new OrbitControls(camera, renderer.domElement)

	useEffect(() => {
		if (ref.current) {
			ref.current.appendChild(canvasElement)

			function animate() {
				orbitControls.update()
				renderer.render(scene, camera)
				animationFrame.current = requestAnimationFrame(animate)
			}

			animate()
		}

		return () => {
			cancelAnimationFrame(animationFrame.current)
			renderer.dispose()
			if (ref.current) {
				ref.current.removeChild(canvasElement)
			}
		}
	}, [])

	return {ref}
}