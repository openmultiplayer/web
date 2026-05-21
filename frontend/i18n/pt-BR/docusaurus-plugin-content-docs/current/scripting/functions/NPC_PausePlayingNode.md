---
title: NPC_PausePlayingNode
sidebar_label: NPC_PausePlayingNode
description: "Pausa a navegação do nó de um NPC."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Pausa a navegação do nó de um NPC, parando temporariamente seu movimento através do nó.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpausenode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_PausePlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d pause node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas quando NPC está reproduzindo ativamente um nó
- A navegação do nó pausado pode ser retomada com NPC_ResumePlayingNode
- Use NPC_IsPlayingNodePaused para verificar o estado de pausa

## Funções Relacionadas

- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Retomar a reprodução do nó
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Verifique se está pausado
- [NPC_PlayNode](NPC_PlayNode): Comece a reproduzir o nó
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Pare de reproduzir o nó

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
