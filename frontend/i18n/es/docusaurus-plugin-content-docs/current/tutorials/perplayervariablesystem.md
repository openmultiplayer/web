---
title: Sistema de Varibles de Jugador
sidebar_label: Sistema de Varibles de Jugador
description: El sistema de variables de jugador (abreviado, PVar) es una nueva forma de crear variables de jugador en un método eficiente creado dinámicamente de forma global, lo que significa que se pueden utilizar en el gamemode y en los filterscripts al mismo tiempo.
---

El sistema de variables de jugador (abreviado, PVar) es una nueva forma de crear variables de jugador en un método eficiente creado dinámicamente de forma global, lo que significa que se pueden utilizar en el gamemode y en los filterscripts al mismo tiempo.

Son similiares a [SVars](servervariablesystem), pero son por jugador. Ver los 2 últimos posts en este hilo para leer sobre la diferencia entre propiedades de pawn y PVars.

## Ventajas

El nuevo sistema introducido en SA-MP 0.3a R5, tiene varias ventajas importantes sobre la creación de un array de tamaño MAX_PLAYERS.

- Los PVars pueden ser compartidos/accesibles entre de gamemode y filterscripts, haciendo más fácil modularizar tu código.

- Las PVars se borran automáticamente cuando un jugador abandona el servidor (después de OnPlayerDisconnect), lo que significa que no tienes que reiniciar manualmente las variables para el siguiente jugador que se una.

- No hay necesidad de complejos enums o estructuras de información de jugador.

- Ahorra memoria al no asignar elementos de pawn array para los playerids que probablemente nunca se utilizarán.

- Puedes enumerar e imprimir/almacenar fácilmente la lista PVar. Esto facilita tanto la depuración como el almacenamiento de la información del jugador.

- Incluso si un PVar no ha sido creado, devolverá un valor por defecto de 0.

- Los PVars pueden contener cadenas muy grandes utilizando memoria asignada dinámicamente.

- Puedes establecer, obtener y crear PVars en el juego.

## Desventajas

- Las PVars son mucho más lentas que las variables normales. Por lo general, es mejor cambiar memoria por velocidad que al revés.

## Funciones

Las funciones para establecer y obtener las variables de jugador son:

- [SetPVarInt](../scripting/functions/SetPVarInt) Establece un valor de tipo Int para una variable de jugador.
- [GetPVarInt](../scripting/functions/GetPVarInt) Obtiene un valor de tipo Int de una variable de jugador.
- [SetPVarString](../scripting/functions/SetPVarString) Establece un valor de tipo String para una variable de jugador.
- [GetPVarString](../scripting/functions/GetPVarString) Obtiene un valor de tipo String de una variable de jugador.
- [SetPVarFloat](../scripting/functions/SetPVarFloat) Establecer un valor de tipo Float para una variable de jugador..
- [GetPVarFloat](../scripting/functions/GetPVarFloat) Obtiene una variable de tipo float de una variable de jugador.
- [DeletePVar](../scripting/functions/DeletePVar) Elimina una variable de jugador.

```c
#define PLAYER_VARTYPE_NONE   (0)
#define PLAYER_VARTYPE_INT    (1)
#define PLAYER_VARTYPE_STRING (2)
#define PLAYER_VARTYPE_FLOAT  (3)
```
