---
title: NPC_ClearAnimations
sidebar_label: NPC_ClearAnimations
description: "Limpa todas as animações de um NPC."
tags: ["npc", "animation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Limpa todas as animações de um NPC, retornando-o ao seu estado padrão.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been applied animation.", npcid);

        SetTimerEx("ClearNPCAnimations", 25000, false, "ii", playerid, npcid);

        return 1;
    }
    return 0;
}

forward ClearNPCAnimations(playerid, npcid);
public ClearNPCAnimations(playerid, npcid)
{

    NPC_ClearAnimations(npcid);
    SendClientMessage(playerid, 0x00FF00FF, "NPC %d animations were cleared.", npcid);
}

```
## Notas

- Esta função interrompe todas as animações em reprodução, incluindo as em loop
- O NPC retornará à sua posição inativa padrão

## Funções Relacionadas

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animação a NPC
- [NPC_SetAnimation](NPC_SetAnimation): Definir animação por ID
- [NPC_ResetAnimation](NPC_ResetAnimation): Redefinir estado de animação
- [NPC_GetAnimation](NPC_GetAnimation): Obtenha dados de animação atuais

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
