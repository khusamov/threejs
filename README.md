# threejs
Исследование библиотеки Three.js

Вывод - надо использовать babylonjs.com
В нем и редактор более навороченный http://editor.babylonjs.com/
У Three.js редактор есть, но его возможности почти нулевые.
https://threejs.org/editor/


Статья сравнение Three.js vs Babylon.js
https://habr.com/ru/post/246259/

.yarnrc.yml
-----------

Файла .yarnrc.yml недостаточно. Мало того, он даже мешает. В нем приходится удалять информацию о плагинах и заново их устанавливать.
Отсюда вывод, что файл .yarnrc.yml по идее нельзя хранить в репозитории. Это очень странно.

```
yarn plugin import typescript
yarn plugin import workspace-tools
```