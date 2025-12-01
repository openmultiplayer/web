---
title: Common Issues
sidebar_label: Common Issues
---

## Contents

## Client

### Tengo constantemente el error "San Andreas cannot be found"

¡San Andreas Multiplayer **NO ES** un programa independiente! Solo añade funciones multijugador al GTA: San Andreas (y, por lo tanto, necesitas GTA:SA instalado en tu computadora). Tiene que ser, además, la versión **EU/US v1.0**, ya que otras versiones como 2.0, versiones de Steam o versiones de Direct2Drive no funcionarán. [Cliquea aquí para descargar un parche para downgradear tu GTA:SA a la version 1.0](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch)

### No veo ningún servidor en el buscador de servidores de SA:MP.

Primero que nada, asegúrate de seguir los procedimientos previstos en la [Guía de inicio rápido](https://sampwiki.blast.hk/wiki/Getting_Started). Si el problema persiste aún si verificaste lo anterior, debes permitir el acceso de SA:MP a través de tu cortafuegos. Desafortunadamente, debido a la gran cantidad de software cortafuego que existe, no podemos dar soporte con esto, pero sugerimos el revisar en el sitio del programa (o realizar una busqueda ante nuestro todo poderoso Google). Asegúrate además de tener la última versión de SA:MP.

### El modo un jugador inicia en vez de SA:MP

:::warning

No se supone que debas ver las opciones del modo un jugador (Iniciar Partida, Cargar Partida, etcétera) - SA:MP debería iniciarse por si solo y no presentar estas opciones. Si ves la opción de "Inciar Partida", se inició el modo de un jugador en ves de SA:MP.

:::

El modo un jugador puede iniciarse por 2 razones: Tienes SA:MP instalado en la carpeta incorrecta o no tienes una versión compatible de GTA:SA. Si tienes la versión incorrecta puedes reallizar un downgrade a tu juego utilizando el downgrader de GTA:SA. Cliquea [aquí](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) para descargarlo.

Existen ciertos casos en el que el menú del modo un jugador será mostrado, pero SA:MP habrá correctamente inciado. Para arreglar esto simplemente tienes que seleccionar un elemento en el menú, seguido de tocarla tecla Escape para salir de este. De esta forma, SA:MP procederá a cargar.

### Obtengo el error "Unacceptable Nickname" cuando conecto a un servidor.


Asegúrate de que no estas usando ningun carácter no permitido (solo puedes utilizar números del 0-9, letras de la A a la Z, \[\], (), \$, @, ., \_ y =), además de asegurarte que tu nombre no supera los 20 carácteres. Esto también podría ser causado cuando un jugador está conectado en el servidor con el mismo nombre que tú (que puede pasar si reconectas a un servidor de manera rápida antes de que el servidor registre tu desconexión). Un servidor de SA:MP corriendo en Windows durante mas de 50 días seguidos puede también ocasionar este bug.

### La pantalla se queda en "Connecting to  IP:Port..."

Esto puede ser causado porque el servidor no esta encendido. Si tienes este error con mas de 1 servidor y estas seguro que estos servidores no están apagados, deshabilita tu cortafuegos y comprueba si el error persiste. Caso contrario, reconfigura tu cortafuegos para aceptar el tráfico entrante-saliente de SA:MP. Puede ser también que estes ejecutando una versión obsoleta de SA:MP - Puedes encontrar la versión más reciente [Aquí](https://sa-mp.mp/downloads/).

### Tengo un GTA:SA modificado y SA:MP no inicia

Si SA:MP no inicia, intenta remover las modificaciones instaladas.

### Cuando ejecuto GTA con SA:MP no sucede nada (no inicia)

Borra gta_sa.set de tu carpeta "GTA San Andreas User Files", además de asegurarte de que no tienes ningun cheat o modificaciones.

### El juego crashea (se cierra) cuando un vehículo explota

Si tienes 2 monitores, hay 3 maneras de resolverlo:

1. Deshabilita tu segundo monitor cuando juegues SA:MP. (Quizás no sea lo mejor, pero es lo más rapido si no te importa el no poder utilizar el otro monitor).
2. Configura "Efectos Visuales" a Bajo (Escape > Opciones > Configuración de pantalla > Avanzados).
3. Renombra tu carpeta de GTA:SA (ejemplo "GTA San Andreas2") (Esto puede funcionar a veces, de todas maneras a veces puede dejar de funcionar nuevamente así que tienes que renombrarla de otra forma).

### Mi ratón no funciona luego de slair del menú de pausa

Si tu ratón no funciona en el juego y funciona de manera incompleta en el menú de pausa, deberías desactivar la función multinúcleo ("multicore") de tu[sa-mp.cfg](ClientCommands#file-sa-mpcfg "sa-mp.cfg") (Colocala en 0). Pulsar repetidamente la tecla Escape o mantenerla apretada hasta que el ratón responda de nuevo puede funcionar, pero no es una solución definitiva.

### El archivo dinput8.dll no existe

Este problema puede aparecer cuando DirectX no esta instalado correctamente. Intenta reinstalarlo (no olvides de reiniciar tu PC). Si el problema persiste, solo ve a C:\\Windows\\System32 y copia el archivo dinput.dll a tu carpeta de GTA.

### No puedo ver los nombres de los demás jugadores

Por favor comprender que algunos servidores tienen sus nametags desactivados de forma global. De todas formas, este problema puede ocurrir en computadores con procesadores que incluyen gráficos integrados Intel HD (Que no estarían exactamente hechos para gaming, aún así). Desafortunadamente, la causa exacta es desconocida y no parece haber ninguna forma de arreglarlo hasta ahora. Una solución sería el instalar un procesador gráfico dedicado (tarjeta de video) en tu computadora, siempre y cuando sea posible y tu presupuesto monetario te lo permita.
