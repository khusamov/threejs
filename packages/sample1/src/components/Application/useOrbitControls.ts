import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {PerspectiveCamera, WebGLRenderer} from 'three'

export function useOrbitControls(renderer: WebGLRenderer, camera: PerspectiveCamera) {
	const orbitControls = new OrbitControls(camera, renderer.domElement)

	return {orbitControls}
}