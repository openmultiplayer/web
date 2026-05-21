---
title: NPC_SetVirtualWorld
sidebar_label: NPC_SetVirtualWorld
description: "Define o mundo virtual de um NPC."
tags: ["npc", "virtual world", "dimension"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o mundo virtual de um NPC, controlando quais jogadores podem ver e interagir com eles.

| Nome | Descrição |
| ----- | ---------------------------- |
| npcid | O ID do NPC.           |
| vw | O mundo virtual ID para definir. |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvirtualworld ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vw = strval(cmdtext[16]);
        if (vw < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Virtual world must be positive.");

        NPC_SetVirtualWorld(npcid, vw);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d virtual world set to %d", npcid, vw);

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- O mundo virtual 0 é o mundo padrão onde todos os jogadores começam.
- NPCs em diferentes mundos virtuais não podem ver ou interagir uns com os outros.
- Os jogadores devem estar no mesmo mundo virtual para ver NPCs.
- Use [NPC_GetVirtualWorld](NPC_GetVirtualWorld) para verificar o mundo virtual atual.

:::

## Funções Relacionadas

- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Obtenha o mundo virtual de NPC.
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Defina o mundo virtual do jogador.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Obtenha o mundo virtual do jogador.
- [NPC_SetInterior](NPC_SetInterior): Defina o interior do NPC.
