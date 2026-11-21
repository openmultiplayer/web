---
title: Starting IDs
sidebar_label: Starting IDs
description: "Tudo como objetos, jogadores ou veículos usam IDs."
---


Esta página contém todos os IDs iniciais para várias entidades.  
Tudo como objetos, jogadores ou veículos usam IDs. Alguns IDs começam com 0, outros começam com 1.

| Tipo                                                                                          | Iniciando ID |
| --------------------------------------------------------------------------------------------- | ------------ |
| [3D Text Label](../functions/Create3DTextLabel)                                               | 0            |
| [Actor](../functions/CreateActor)                                                             | 0            |
| [File](../functions/fopen)                                                                    | 0            |
| [GangZone](../functions/GangZoneCreate)                                                       | 0            |
| [Object](../functions/CreateObject)                                                           | 1            |
| [Pickup](../functions/CreatePickup)                                                           | 0            |
| Player                                                                                        | 0            |
| [Player Class](../functions/AddPlayerClass)                                                   | 0            |
| [TextDraw](../functions/TextDrawCreate) / [PlayerTextDraw](../functions/CreatePlayerTextDraw) | 0            |
| [Timer](../functions/SetTimer)                                                                | 1            |
| [Vehicle](../functions/CreateVehicle)                                                         | 1            |

Veja bem, veículos e objetos começam a usar 1, não 0! Portanto, se você planeja usar um array para armazenar todos os IDs, você deve usar o ID de CreateObject/CreateVehicle/... e subtrair 1 para obter o elemento do array ID.
