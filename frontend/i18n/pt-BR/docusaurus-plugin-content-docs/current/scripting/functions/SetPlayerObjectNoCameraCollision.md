---
title: SetPlayerObjectNoCameraCollision
sidebar_label: SetPlayerObjectNoCameraCollision
description: "Alterna a colisão da câmera do objeto do jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Alterna a colisão da câmera do objeto do jogador.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O playerID ao qual o objeto pertence.      |
| objectid | O ID do objeto que você deseja alternar. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCollision(playerid, objectid);
    }
    return 1;
}
```
## Notas

:::tip

Isso não funciona dentro dos limites normais do mapa SA.

:::

## Funções Relacionadas

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Desativa colisões entre câmera e objeto.
