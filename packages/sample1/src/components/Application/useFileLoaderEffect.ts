import {useEffect} from "react";

function stop(event: DragEvent) {
    event.stopPropagation()
    event.preventDefault()
}

/**
 * Загрузка одного файла путем скидывания файла на узел body.
 * @param onLoadFunction
 */
export function useFileLoaderEffect(onLoadFunction: (file: File) => void) {
    useEffect(() => {
        document.body.addEventListener('dragenter', stop)
        document.body.addEventListener('dragover', stop)

        function onBodyDrop(event: DragEvent) {
            event.stopPropagation()
            event.preventDefault()

            if (event.dataTransfer) {
                if (event.dataTransfer.files.length > 0 && event.dataTransfer.files[0]) {
                    onLoadFunction(event.dataTransfer.files[0])
                }
            }
        }

        document.body.addEventListener('drop', onBodyDrop)

        return () => {
            document.body.removeEventListener('dragenter', stop)
            document.body.removeEventListener('dragover', stop)
            document.body.removeEventListener('drop', onBodyDrop)
        }
    }, [])
}