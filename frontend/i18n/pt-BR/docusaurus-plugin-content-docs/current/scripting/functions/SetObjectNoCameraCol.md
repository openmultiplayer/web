---
title: SetObjectNoCameraCol
sidebar_label: SetObjectNoCameraCol
description: "Desative as colisões entre as câmeras dos jogadores e o objeto especificado."
tags: ["camera"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Desative as colisões entre as câmeras dos jogadores e o objeto especificado.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| objectid | O ID do objeto no qual desativar as colisões de câmera. |

## Retornos

1: A função foi executada com sucesso.

0: A função não foi executada. O objeto especificado não existe.

## Exemplos

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}
```
## Notas

:::tip

Isso funciona apenas fora dos limites do mapa (após -3.000/3.000 unidades nos eixos x e/ou y).

:::

## Funções Relacionadas

- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): Desativa colisões entre a câmera e o objeto do jogador.
