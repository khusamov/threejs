import styles from './Application.module.scss'
import {useEffect, useRef} from 'react';
import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';

export default function Application() {
	const ref = useRef<HTMLDivElement>()

	useEffect(() => {
		const scene = new Scene
		const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		const renderer = new WebGLRenderer
		renderer.setSize(window.innerWidth, window.innerHeight)
		ref.current.appendChild(renderer.domElement)

		const geometry = new BoxGeometry
		const material = new MeshBasicMaterial({color: 0x00ff00})
		const cube = new Mesh(geometry, material)
		scene.add(cube)

		camera.position.z = 5

		function animate() {
			requestAnimationFrame(animate)
			cube.rotation.x += 0.01
			cube.rotation.y += 0.01
			renderer.render(scene, camera)
		}

		animate()
	}, [])

	return (
		<div ref={ref} className={styles.Application}>

		</div>
	)
}