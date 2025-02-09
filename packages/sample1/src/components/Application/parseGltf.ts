import type {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const path = ''

export async function parseGltf(loader: GLTFLoader, data: ArrayBuffer): Promise<GLTF> {
    return (
        new Promise<GLTF>(
            async (resolve, reject) => {
                loader.parse(data, path, resolve, reject)
            }
        )
    )
}