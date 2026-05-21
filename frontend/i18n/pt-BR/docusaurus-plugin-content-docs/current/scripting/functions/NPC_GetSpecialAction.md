---
title: NPC_GetSpecialAction
sidebar_label: NPC_GetSpecialAction
description: "Obtém a ação especial atual de um NPC."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a ação especial atual de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a ação especial ID ou `SPECIAL_ACTION_NONE` se nenhuma ação especial estiver ativa.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspecialaction", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new action = NPC_GetSpecialAction(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d special action: %d", npcid, action);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna a constante de ação especial atual
- Use isto para verificar qual ação o NPC está executando atualmente

## Funções Relacionadas

- [NPC_SetSpecialAction](NPC_SetSpecialAction): Definir ação especial NPC
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar todas as animações
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animação a NPC

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
