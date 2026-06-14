---
title: NPC_Destroy
sidebar_label: NPC_Destroy
description: "Destrói um NPC."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Destrói um NPC.

| Nome | Descrição |
| ----- | ----------------------------- |
| npcid | O ID do NPC para destruir. |

## Retornos

Retorna `true` se NPC foi destruído com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroynpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "You don't have a valid NPC to destroy.");
            return 1;
        }

        if (NPC_Destroy(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your NPC (ID %d) was destroyed.", npcid);
            PlayerNPC[playerid] = INVALID_NPC_ID; // ou 0 se você não tiver INVALID_NPC_ID definido
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to destroy your NPC (ID %d).", npcid);
        }

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Isso removerá completamente o NPC do servidor e o ID se tornará inválido após a destruição.

:::

## Funções Relacionadas

- [NPC_Create](NPC_Create): Cria um novo NPC.
- [NPC_IsValid](NPC_IsValid): Verifica se um NPC ID é válido.

## Callbacks Relacionadas

- [OnNPCDestroy](../callbacks/OnNPCDestroy): Chamado quando um NPC é destruído.
