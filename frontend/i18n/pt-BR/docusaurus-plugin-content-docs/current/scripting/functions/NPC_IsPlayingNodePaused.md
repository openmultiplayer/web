---
title: NPC_IsPlayingNodePaused
sidebar_label: NPC_IsPlayingNodePaused
description: "Verifica se a reprodução do nó de um NPC está atualmente pausada."
tags: ["npc", "node"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se a reprodução do nó de um NPC está pausada no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a reprodução do nó NPC estiver pausada, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isNodePaused = NPC_IsPlayingNodePaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d node paused: %s", npcid, isNodePaused ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna `false` se NPC não estiver reproduzindo um nó

## Funções Relacionadas

- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se o nó está sendo reproduzido
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pausar a reprodução do nó
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Retomar a reprodução do nó
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Pare de reproduzir o nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando um NPC finaliza um nó
