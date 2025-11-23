---
title: Problemas Comunes
sidebar_label: Problemas Comunes
---

## El servidor se bloquea instantáneamente al iniciarse

Lo más común es que se deba a un error en tu archivo server.cfg o a la falta de un gamemode. Verifica el archivo server_log.txt y la razón debería estar ubicada en la parte inferior. Si no está ahí, verifica el archivo crashinfo.txt. La mejor solución para descubrir qué está causando el bloqueo es utilizar el plugin Crash Detect de Zeex/0x5A656578 ([clic aquí para acceder](https://github.com/Y-Less/samp-plugin-crashdetect)), que proporcionará más información, como números de línea, nombres de función, valores de parámetros, etc. Si el script está compilado en modo de depuración (-d3 flag) para que el compilador incluya información adicional en el archivo .amx de salida.

## El servidor no funciona: el firewall está desactivado

Necesitarás redirigir tus puertos para permitir que los jugadores se unan a tu servidor. Puedes redirigir tus puertos utilizando PF Port Checker. Descárgalo desde: www.portforward.com. Si los puertos no están redirigidos, significa que deberás abrirlos en tu enrutador. Puedes consultar la lista de enrutadores en [https://portforward.com/router.htm](https://portforward.com/router.htm). Allí encontrarás toda la información sobre cómo redirigir los puertos.

## 'Packet was modified'

El error comúnmente se muestra como:
```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```


Esto ocurre cuando un jugador tiene problemas de conexión o está experimentando un timeout.

## 'Warning: client exceeded 'messageslimit' (1)

El error comúnmente se muestra como:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```


Esto ocurre cuando el número de mensajes por segundo que un cliente envía al servidor se excede.

## 'Warning: client exceeded 'ackslimit'

El error comúnmente se muestra como:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```



Esto ocurre cuando se supera el límite de acks.

## 'Warning: client exceeded messageholelimit'

El error comúnmente se muestra como:

```
Warning: client exceeded messageholelimit
```


Esto ocurre cuando se excede el "message hole" límite.

## 'Warning: Too many out-of-order messages'

El error comúnmente se muestra como:

```
Warning: Too many out-of-order messages
```


Ocurre cuando los 'mensajes fuera de orden' reutilizan la configuración de límite de hueco de mensajes.

Para obtener más información al respecto, consulta [este enlace](https://open.mp/docs/server/ControllingServer#rcon-commands).

## Jugadores reciben constantemente el error de "Nombre de usuario inaceptable" aunque sea válido

Si estás seguro de que estás usando un nombre de usuario aceptable y el servidor se está ejecutando en Windows, intenta cambiar la opción de compatibilidad del samp-server.exe a Windows 98 y el problema debería resolverse después de reiniciar el servidor.

Los servidores de Windows con un tiempo de actividad prolongado también pueden causar este problema. Esto se ha observado después de aproximadamente 50 días de actividad del servidor. Para resolverlo, es necesario reiniciar el servidor.

## `MSVCR___.dll`/`MSVCP___.dll` no se encuentra

Este problema ocurre regularmente en servidores de Windows al intentar cargar un complemento desarrollado con una versión más reciente de las bibliotecas de Visual C++ de las que están instaladas actualmente en tu computadora. Para solucionarlo, descarga las bibliotecas apropiadas de Visual C++ de Microsoft. Ten en cuenta que el servidor SA-MP es de 32 bits, por lo que también deberás descargar la versión de 32 bits (x86) de las bibliotecas, independientemente de la arquitectura. La versión específica de las bibliotecas se indica por los números en el nombre del archivo (consulta la tabla a continuación), aunque no está de más instalar todas ellas. Estas bibliotecas no se acumulan, o en otras palabras: no obtendrás las bibliotecas para las versiones de 2013 y anteriores si solo instalas la versión de 2015.

| Número de Versión | Runtime                                         |
| ------------------ | ---------------------------------------------  |
| 10.0               | Microsoft Visual C++ 2010 x86 Redistribuible   |
| 11.0               | Microsoft Visual C++ 2012 x86 Redistribuible   |
| 12.0               | Microsoft Visual C++ 2013 x86 Redistribuible   |
| 14.0               | Microsoft Visual C++ 2015 x86 Redistribuible   |
