---
title: Starting IDs
sidebar_label: Starting IDs
description: "Tudo como objetos, jogadores ou veículos usam IDs. Alguns IDs começam com 0, outros começam com 1."
---


Esta página contém todos os IDs iniciais para várias entidades.  
Tudo como objetos, jogadores ou veículos usam IDs. Alguns IDs começam com 0, outros começam com 1.

| Tipo | Iniciando ID |
| ------------------------- | ----------- |
| 3D Text Label | 0 |
| Actor | 0 |
| File | 0 |
| GangZone | 0 |
| Object | 1 |
| Pickup | 0 |
| Player | 0 |
| Player Class | 0 |
| TextDraw / PlayerTextDraw | 0 |
| Timer | 1 |
| Vehicle | 1 |

Veja bem, veículos e objetos começam a usar 1, não 0! Portanto, se você planeja usar um array para armazenar todos os IDs, você deve usar o ID de CreateObject/CreateVehicle/... e subtrair 1 para obter o elemento do array ID.
