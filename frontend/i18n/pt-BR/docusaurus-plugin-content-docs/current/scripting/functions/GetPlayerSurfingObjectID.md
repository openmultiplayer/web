---
title: GetPlayerSurfingObjectID
sidebar_label: GetPlayerSurfingObjectID
description: "Retorna o ID do objeto em que o jogador está navegando."
tags: ["player"]
---


## Descrição

Retorna o ID do objeto em que o jogador está navegando.

| Nome | Descrição |
| -------- | --------------------------------------- |
| playerid | O ID do jogador navegando no objeto |

## Retornos

O ID do objeto em movimento que o jogador está navegando. Se o jogador não estiver navegando em um objeto em movimento, ele retornará `INVALID_OBJECT_ID`

## Exemplos

```c
/* quando o jogador digitar 'objectsurfing' na caixa de bate-papo, ele verá isso. */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "objectsurfing", true) == 0)
    {
        new
            szMessage[30];

        format(szMessage, sizeof(szMessage), "You're surfing on object #%d.", GetPlayerSurfingObjectID(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerSurfingPlayerObjectID](GetPlayerSurfingPlayerObjectID): Obtenha o ID do objeto do jogador em que o jogador está navegando.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): Obtenha o ID do veículo que o jogador está navegando (preso no teto).
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): Obtém as compensações de surf de um jogador.
