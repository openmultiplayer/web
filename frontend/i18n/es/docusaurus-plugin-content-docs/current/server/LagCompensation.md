---
title: "Compensación de latencia"
sidebar_label: "Compensación de latencia"
description: Explicación acerca de la compensación de latencia.
---

La compensación de latencia de los disparos esta habilitada por defecto en los servidores SA-MP.

Puede ser desactivada alterando la variable `lagcompmode` del servidor en [server.cfg](server.cfg) o `game.lag_compensation_mode` en [config.json](config.json).

Ajustar la variable a 0 deshabilitara la compensación completamente, y los jugadores tendrán que dirigir prematuramente sus disparos (disparar haciendo una predicción la proxima posición de su objetivo).

Deshabilitar la compensación de latencia previene que el callback [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) sea llamado.

Esta variable SOLO puede ser modificada en [server.cfg](server.cfg) o [config.json](config.json).