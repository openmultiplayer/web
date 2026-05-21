---
title: NPC_ResumePlayingNode
sidebar_label: NPC_ResumePlayingNode
description: "Retoma a navegação do nó pausado para um NPC."
tags: ["npc", "node"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Retoma a navegação do nó pausado para um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcresumenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_ResumePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d resume node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Só funciona se a navegação do nó do NPC foi pausada anteriormente
- O NPC continuará de onde foi pausado

## Funções Relacionadas

- [NPC_PausePlayingNode](NPC_PausePlayingNode): pausar navegação do nó
- [NPC_PlayNode](NPC_PlayNode): Comece a reproduzir um nó
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Verifique se está pausado
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se o nó está sendo reproduzido

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
