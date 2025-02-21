import {BoxGeometry, Color, DirectionalLight, DirectionalLightHelper, Mesh, MeshPhongMaterial, Scene} from 'three'

export function createExampleScene() {
	const scene = new Scene
	scene.background = new Color('silver')

	scene.add(createExampleCube())

	const light = createExampleDirectionalLight()
	scene.add(light)
	scene.add(light.target)

	scene.add(new DirectionalLightHelper(light))

	return scene
}

function createExampleCube() {
	const geometry = new BoxGeometry
	const material = new MeshPhongMaterial({
		color: 0xdaa520,
		emissive: 0x000000,
		specular: 0xbcbcbc,
	})
	return new Mesh(geometry, material)
}

function createExampleDirectionalLight() {
	const light = new DirectionalLight('white', 1)
	light.position.set(10, 10, 0)
	light.target.position.set(0, 0, 0)
	return light
}