---
title: SetPlayerHoldingObject
sidebar_label: SetPlayerHoldingObject
description: "Anexa um objeto a um osso."
tags: ["player"]
---


## Descrição

Anexa um objeto a um osso.

| Nome | Descrição |
| -------- | ----------------------------------------------------------------- |
| playerid | ID do jogador ao qual você deseja anexar o objeto.                |
| modelid | O modelo que você deseja usar.                                        |
| bone | O [osso](../resources/boneid) ao qual você deseja anexar o objeto. |
| fOffsetX | (opcional) Deslocamento do eixo X para a posição do objeto.                 |
| fOffsetY | (opcional) Deslocamento do eixo Y para a posição do objeto.                 |
| fOffsetZ | (opcional) Deslocamento do eixo Z para a posição do objeto.                 |
| fRotX | (opcional) Rotação do eixo X do objeto.                         |
| fRotY | (opcional) Rotação do eixo Y do objeto.                         |
| fRotZ | (opcional) Rotação do eixo Z do objeto.                         |

## Retornos

1 em sucesso, 0 em falha

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerHoldingObject(playerid, 1609, 2); //Anexe uma tartaruga à cabeça do playerid!
    return 1;
}
```
## Notas

:::tip

Apenas um objeto pode ser anexado por jogador. Esta função é separada dos pools CreateObject/CreatePlayerObject.

:::

:::warning

Esta função foi removida em SA-MP 0.3c. Consulte [SetPlayerAttachedObject](SetPlayerAttachedObject)

:::

## Funções Relacionadas

- [StopPlayerHoldingObject](StopPlayerHoldingObject): Remove objetos anexados.
