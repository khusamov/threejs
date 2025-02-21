import styles from './Application.module.scss'
import {PerspectiveCamera, WebGLRenderer} from 'three'
import {createExampleScene} from './createExampleScene'
import {useApplication} from './useApplication'

const renderer = new WebGLRenderer({antialias: true})
const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 5

const scene = createExampleScene()

export default function Application() {
	const {ref} = useApplication(renderer, camera, scene)
	return <div ref={ref} className={styles.Application}/>
}

