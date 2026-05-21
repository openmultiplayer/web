---
title: SetPlayerWorldBounds
sidebar_label: SetPlayerWorldBounds
description: "Defina os limites mundiais para um jogador."
tags: ["player"]
---


## Descrição

Defina os limites mundiais para um jogador. Os jogadores não podem sair dos limites (serão empurrados de volta).

| Nome | Descrição |
| ---------- | ---------------------------------------------------- |
| playerid | O ID do jogador para definir os limites mundiais. |
| Float:maxX | A coordenada X máxima que o jogador pode atingir.       |
| Float:minX | A coordenada X mínima que o jogador pode ir.       |
| Float:maxY | A coordenada Y máxima que o jogador pode atingir.       |
| Float:minY | A coordenada Y mínima para a qual o jogador pode ir.       |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```
```
               (North)
                ymax
            |----------|
            |          |
(West) xmin |          | xmax (East)
            |          |
            |----------|
                ymin
               (South)
```
## Notas

:::tip

Os limites mundiais de um jogador podem ser redefinidos definindo-os para 20.000,0000, -20000.0000, 20000.0000, -20000.0000. Estes são os valores padrão. Você também pode usar [ClearPlayerWorldBounds](ClearPlayerWorldBounds).

:::

:::warning

Esta função não funciona em interiores!

:::

## Funções Relacionadas

- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): Redefina os limites mundiais do jogador para os limites mundiais padrão.
- [GetPlayerWorldBounds](GetPlayerWorldBounds): Obtenha os limites mundiais de um jogador.
- [GangZoneCreate](GangZoneCreate): Crie uma gangzone.
