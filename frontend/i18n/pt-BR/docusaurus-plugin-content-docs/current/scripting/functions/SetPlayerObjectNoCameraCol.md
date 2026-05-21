---
title: SetPlayerObjectNoCameraCol
sidebar_label: SetPlayerObjectNoCameraCol
description: "Alterna a colisão da câmera do objeto do jogador."
tags: ["player"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Alterna a colisão da câmera do objeto do jogador.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O playerID ao qual o objeto pertence.      |
| objectid | O ID do objeto que você deseja alternar. |

## Retornos

1: A função foi executada com sucesso.

0: A função não foi executada. O objeto especificado não existe.

## Exemplos

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```
## Notas

:::tip

Isso não funciona dentro dos limites normais do mapa SA.

:::

## Funções Relacionadas

- [SetObjectNoCameraCol](SetObjectNoCameraCol): Desativa colisões entre câmera e objeto.
