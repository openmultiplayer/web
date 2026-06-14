---
title: NPC_IsPlayingNode
sidebar_label: NPC_IsPlayingNode
description: "Verifica se um NPC está atualmente reproduzindo um nó."
tags: ["npc", "node"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está reproduzindo um nó no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver reproduzindo um nó, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingnode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlayingNode = NPC_IsPlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is playing node: %s", npcid, isPlayingNode ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna `false` se NPC não for válido

## Funções Relacionadas

- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Pare de reproduzir o nó
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Verifique se está pausado
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pausar a reprodução do nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando um NPC finaliza um nó
