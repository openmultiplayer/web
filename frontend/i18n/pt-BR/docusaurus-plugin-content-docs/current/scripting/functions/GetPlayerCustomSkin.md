---
title: GetPlayerCustomSkin
sidebar_label: GetPlayerCustomSkin
description: "Retorna a classe do skin personalizado do jogador baixado do servidor."
tags: ["player"]
---


<VersionWarn version='SA-MP 0.3.DL R1' />

## Descrição

Retorna a classe do skin personalizado do jogador baixado do servidor.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O jogador do qual você deseja obter a skin |

## Retornos

O ID de skin personalizado especificado em [AddCharModel](AddCharModel) newid.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/customskin", true))
    {
        new string[32];
        new customSkin = GetPlayerCustomSkin(playerid);

        format(string, sizeof(string), "Your custom skin id: %d", customSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerSkin](GetPlayerSkin): Obtenha a skin atual de um jogador.
- [SetPlayerSkin](SetPlayerSkin): Defina a skin de um jogador.
