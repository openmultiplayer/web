---
title: Modos de Espectador
sidebar_label: Modos de Espectador
description: Modos de espectador usados pelas funções PlayerSpectatePlayer e PlayerSpectateVehicle.
tags: []
---

:::info

Modos de espectador usados pelas funções [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) e [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle).

:::

| Type                 | Effect                                                                                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPECTATE_MODE_NORMAL | Modo espectador normal (visão em terceira pessoa). A câmera não pode ser alterada                                                                                                                                                                                        |
| SPECTATE_MODE_FIXED  | Use [SetPlayerCameraPos](../functions/SetPlayerCameraPos) depois disso para posicionar a câmera do jogador, e ela acompanhará o jogador/veículo definido com [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer)/[PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) |
| SPECTATE_MODE_SIDE   | A câmera será anexada à lateral do jogador/veículo (como quando você está em câmera de primeira pessoa numa moto e empina)                                                                                                                                                |
