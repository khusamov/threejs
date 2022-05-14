import styles from './Application.module.scss'
import {useEffect, useRef} from 'react';
import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new Scene
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const geometry = new BoxGeometry
const material = new MeshBasicMaterial({color: 0x00ff00})
const cube = new Mesh(geometry, material)
scene.add(cube)

export default function Application() {
	const ref = useRef<HTMLDivElement>()

	const frame = useRef(0)
	useEffect(() => {
		const renderer = new WebGLRenderer
		renderer.setSize(window.innerWidth, window.innerHeight)
		ref.current.appendChild(renderer.domElement)

		camera.position.z = 5

		const orbitControls = new OrbitControls(camera, renderer.domElement)

		function animate() {
			orbitControls.update()
			renderer.render(scene, camera)
			frame.current = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			cancelAnimationFrame(frame.current)
			renderer.dispose()
		}
	}, [])

	return (
		<div ref={ref} className={styles.Application}>

		</div>
	)
}