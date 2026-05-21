---
title: NPC_GetCustomSkin
sidebar_label: NPC_GetCustomSkin
description: "Obtém a aparência personalizada ID de um NPC."
tags: ["npc", "skin", "model"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a aparência personalizada ID de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a capa personalizada ID do NPC ou -1 se o NPC não tiver capa personalizada ou for inválido.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkcustomskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new customskinid = NPC_GetCustomSkin(npcid);

        if (customskinid == -1)
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d has no custom skin set", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d custom skin: %d", npcid, customskinid);
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Retorna -1 se NPC não tiver nenhum conjunto de skin personalizado ou se NPC for inválido.
- As skins personalizadas diferem das skins normais porque normalmente se referem a modelos personalizados adicionados ao jogo.
- Use [NPC_GetSkin](NPC_GetSkin) para obter o skin/modelo normal ID.

:::

## Funções Relacionadas

- [NPC_SetSkin](NPC_SetSkin): Definir skin/modelo NPC.
- [NPC_GetSkin](NPC_GetSkin): Obtenha o skin/modelo atual de NPC ID.
- [NPC_IsValid](NPC_IsValid): Verifique se NPC é válido.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
