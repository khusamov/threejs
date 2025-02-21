import styles from './Application.module.scss'
import {PerspectiveCamera, WebGLRenderer} from 'three';
import {useApplication} from './useApplication'
import {createExampleScene} from './createExampleScene'
import {useFileLoaderEffect} from './useFileLoaderEffect'
import {parseGltf} from './parseGltf'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useWindowResizer} from './useWindowResizer'

const renderer = new WebGLRenderer({antialias: true})
const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 5

const scene = createExampleScene()

export default function Application() {
	useFileLoaderEffect(
		async file => {
			const gltf = await parseGltf(new GLTFLoader(), await file.arrayBuffer())
			scene.add(gltf.scene)
		}
	)
	useWindowResizer(camera, renderer)
	const {ref} = useApplication(camera, renderer, scene)
	return <div ref={ref} className={styles.Application}/>
}