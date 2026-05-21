---
title: GetPlayerBuildingsRemoved
sidebar_label: GetPlayerBuildingsRemoved
description: "Obtém o número de edifícios removidos de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o número de edifícios removidos de um jogador.

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Retornos

Retorna o número de edifícios removidos.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    RemoveBuildingForPlayer(playerid, 700, 1192.1016, -1738.0000, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 700, 1204.4844, -1724.8516, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 673, 1192.5625, -1723.8828, 12.5234, 0.25);

    printf("Removed buildings: %d", GetPlayerBuildingsRemoved(playerid)); // Edifícios removidos: 3
    return 1;
}
```
## Funções Relacionadas

- [RemoveBuildingForPlayer](RemoveBuildingForPlayer): Remove um modelo padrão de San Andreas para um único jogador dentro de um intervalo especificado.
