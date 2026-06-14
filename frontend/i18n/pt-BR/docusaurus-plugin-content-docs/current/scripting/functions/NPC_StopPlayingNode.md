---
title: NPC_StopPlayingNode
sidebar_label: NPC_StopPlayingNode
description: "Impede que um NPC reproduza um nó."
tags: ["npc", "node"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Impede que um NPC reproduza seu nó atual.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC foi interrompido com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopnode", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopPlayingNode(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop node: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC irá parar em sua posição atual no nó
- Se NPC não estiver reproduzindo um nó, esta função retorna `false`
- O nó permanece aberto e pode ser usado por outro NPCs
- Use `NPC_IsPlayingNode` para verificar se um NPC está reproduzindo um nó

## Funções Relacionadas

- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se NPC está reproduzindo o nó
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pausar a reprodução do nó
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Retomar a reprodução do nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
