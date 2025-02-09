import styles from './Application.module.scss'
import {useEffect, useRef} from 'react';
import {
	BoxGeometry, Color, DirectionalLight, DirectionalLightHelper,
	Mesh,
	MeshPhongMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new Scene
scene.background = new Color('silver')
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const geometry = new BoxGeometry
const material = new MeshPhongMaterial({
	color: 0xdaa520,
	emissive: 0x000000,
	specular: 0xbcbcbc,
})
const cube = new Mesh(geometry, material)
scene.add(cube)

const light = new DirectionalLight('white', 1)
light.position.set(10, 10, 0)
light.target.position.set(0, 0, 0)
scene.add(light)
scene.add(light.target)

scene.add(new DirectionalLightHelper(light))

export default function Application() {
	const ref = useRef<HTMLDivElement>(null)

	const frame = useRef(0)
	useEffect(() => {
		const renderer = new WebGLRenderer({antialias: true})
		const canvasElement = renderer.domElement
		if (ref.current) {
			ref.current.appendChild(canvasElement)

			camera.position.z = 5

			const orbitControls = new OrbitControls(camera, renderer.domElement)

			function animate() {
				renderer.setSize(window.innerWidth, window.innerHeight)
				camera.setViewOffset(window.innerWidth, window.innerHeight, 0, 0, window.innerWidth, window.innerHeight)
				orbitControls.update() // Не понятно зачем это нужно и без него все работает.
				renderer.render(scene, camera)
				frame.current = requestAnimationFrame(animate)
			}

			animate()
		}

		return () => {
			cancelAnimationFrame(frame.current)
			renderer.dispose()
			if (ref.current) {
				ref.current.removeChild(canvasElement)
			}
		}
	}, [])

	return (
		<div ref={ref} className={styles.Application}>

		</div>
	)
}