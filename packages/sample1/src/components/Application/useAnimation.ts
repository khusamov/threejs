import {useEffect, useRef} from 'react'
import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'

export function useAnimation(renderer: WebGLRenderer, camera: PerspectiveCamera, scene: Scene, onUpdate = () => {}) {
	const animationFrame = useRef(0)

	useEffect(() => {
		if (renderer.domElement.parentElement) {
			function animate() {
				onUpdate()
				renderer.render(scene, camera)
				animationFrame.current = requestAnimationFrame(animate)
			}

			animate()
		}

		return () => {
			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current)
			}
		}
	}, [])
}