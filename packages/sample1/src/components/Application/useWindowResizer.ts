import {useEffect} from 'react'
import {PerspectiveCamera, WebGLRenderer} from 'three'

export function useWindowResizer(renderer: WebGLRenderer, camera: PerspectiveCamera) {
	useEffect(() => {
		const onWindowResize = () => {
			const {innerWidth, innerHeight} = window
			renderer.setSize(innerWidth, innerHeight)
			camera.setViewOffset(innerWidth, innerHeight, 0, 0, innerWidth, innerHeight)
		}

		window.addEventListener('resize', onWindowResize)

		onWindowResize()

		return () => window.removeEventListener('resize', onWindowResize)
	}, [])
}