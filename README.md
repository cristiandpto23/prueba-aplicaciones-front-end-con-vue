# Prueba - Desarrollo de aplicaciones front-end con framework Vue


## Introducción

Validaremos nuestros conocimientos de Desarrollo de aplicaciones front-end con framework Vue. 

## Descripción

Aplicando los conceptos y herramientas aprendidas hasta ahora deberás desarrollar un conjunto de ejercicios que componen esta prueba. Para lograrlo, deberás contemplar las siguientes generalidades:

1. Integrar las dependencias de Vue Router, Vuex y Pruebas Unitarias con Jest.
2. Cada ejercicio que se plantea debe estar resuelto en un componente específico.
3. Documentar el código con comentarios que evidencien tus explicaciones y lógica implementada.

## Requerimientos

1. **Ejercicio 1 - Manejo del estado con Vuex**: En este ejercicio deberán configurar Vuex para gestionar el estado de un contador donde se deberá incrementar y decrementar su valor. Dicho valor partirá por defecto en 0. Además, deberás aplicar pruebas unitarias para:
    * Verificar que se reciba un valor inicial en el contador.
    * Probar la funcionalidad de incremento y decremento.

2. **Ejercicio 2 - Navegación con Vue Router**: Al crear la aplicación con Vue Router mediante CLI se nos crean por defecto algunas vistas. El objetivo de este ejercicio es que puedas validad mediante pruebas unitarias la existencia de componentes que controlen cada una de las vistas.

3. **Ejercicio 3 - Comunicación entre componentes**: Para este ejercicio deberán existir dos componentes, los cuales se pueden llamar *Parent.vue* y *Child.vue*. El objetivo de este ejercicio es que el componente Child va a tener un campo de ingreso de texto y un botón. Al dar clic en el botón el texto del input será enviado al Parent y este mostrará en pantalla el resultado. Además, deberás generar una prueba que permita validad que al dar clic sobre el botón del componente Child, se envíe algún texto.

4. Por último, genera el build de producción y súbelo a Firebase Hosting.


