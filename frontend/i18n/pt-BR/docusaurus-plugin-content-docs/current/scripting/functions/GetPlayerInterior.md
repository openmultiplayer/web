---
title: GetPlayerInterior
sidebar_label: GetPlayerInterior
description: Obtém o interior atual de um jogador.
tags: ["player"]
---

## Descrição

Obtém o interior atual de um jogador. Uma lista com os interiores atualmente conhecidos, com as suas posições, podem ser encontrados nesta página.

| Nome     | Descrição                                        |
| -------- | ------------------------------------------------ |
| playerid | O ID do jogador do qual deseja obter o interior. |

## Retorno

O ID do interior onde o jogador está atualmente.

## Examples

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext,"/int",true) == 0)
    {
        new string[128];
        format(string, sizeof(string), "Você está no interior: %i",GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

Sempre retorna 0 para NPCs.

:::

## Funções Relacionadas

- [SetPlayerInterior](SetPlayerInterior): Define o interior de um jogador.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Verifica qual mundo virtual o jogador está.
