---
title: NPC_GetVirtualWorld
sidebar_label: NPC_GetVirtualWorld
description: "Obtém o mundo virtual em que um NPC está."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o mundo virtual em que um NPC está.

| Nome | Descrição |
| ----- | ------------------ |
| npcid | O ID do NPC. |

## Retornos

Retorna o mundo virtual ID ou 0 em caso de erro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvirtualworld", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vw = NPC_GetVirtualWorld(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d virtual world: %d", npcid, vw);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Os mundos virtuais permitem a separação de NPCs e jogadores.
- NPCs em mundos virtuais diferentes não podem se ver.
- O mundo virtual 0 é o mundo padrão.

:::

## Funções Relacionadas

- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Defina o mundo virtual NPC.
- [NPC_GetInterior](NPC_GetInterior): Obtenha o interior NPC.
- [NPC_SetInterior](NPC_SetInterior): Defina o interior de NPC.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
