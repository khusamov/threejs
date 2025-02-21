import {PerspectiveCamera, Scene, WebGLRenderer} from 'three'
import {useFileLoaderEffect} from './useFileLoaderEffect'
import {parseGltf} from './parseGltf'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useWindowResizer} from './useWindowResizer'
import {useRenderer} from './useRenderer'
import {useOrbitControls} from './useOrbitControls'
import {useAnimation} from './useAnimation'

export function useApplication(renderer: WebGLRenderer, camera: PerspectiveCamera, scene: Scene) {
	useFileLoaderEffect(
		async file => {
			const gltf = await parseGltf(new GLTFLoader(), await file.arrayBuffer())
			scene.add(gltf.scene)
		}
	)
	useWindowResizer(renderer, camera)
	const {ref} = useRenderer(renderer)
	const {orbitControls} = useOrbitControls(renderer, camera)
	useAnimation(renderer, camera, scene, () => orbitControls.update())

	return {ref}
}