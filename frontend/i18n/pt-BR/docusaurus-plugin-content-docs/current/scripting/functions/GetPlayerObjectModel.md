---
title: GetPlayerObjectModel
sidebar_label: GetPlayerObjectModel
description: "Recupere o modelo ID de um objeto de jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Recupere o modelo ID de um objeto de jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador deseja obter o modelo |
| objectid | O ID do objeto player do qual recuperar o modelo ID |

## Retornos

O modelo ID do objeto player.

Se o jogador ou objeto não existir, retornará **-1** ou **0** se o jogador ou objeto não existir.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new objectid = CreatePlayerObject(playerid, 19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);

    new modelid = GetPlayerObjectModel(playerid, objectid);
    printf("Object model: %d", modelid); // Saída: "Modelo de objeto: 19609"
    return 1;
}
```
## Funções Relacionadas

- [GetObjectModel](GetObjectModel): Obtenha o modelo ID de um objeto.
