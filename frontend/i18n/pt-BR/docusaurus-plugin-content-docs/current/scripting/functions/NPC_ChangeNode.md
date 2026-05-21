---
title: NPC_ChangeNode
sidebar_label: NPC_ChangeNode
description: "Altera o nó que um NPC está reproduzindo atualmente."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Altera o nó que um NPC está reproduzindo atualmente para um nó diferente.

| Nome | Descrição |
| ------ | ------------------------------------- |
| npcid | O ID do NPC |
| nodeid | O ID do novo nó para mudar para |
| linkid | O link ID a ser usado para a transição |

## Retornos

Retorna o novo ponto ID no nó.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcchangenode ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new idx = 15;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcchangenode [nodeid] [linkid]");

        new linkid = strval(cmdtext[idx]);

        NPC_ChangeNode(npcid, nodeid, linkid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d changed to node %d via link %d", npcid, nodeid, linkid);
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC deve estar reproduzindo um nó antes de alterar
- O nó de destino deve ser aberto primeiro com `NPC_OpenNode`
- Link ID determina o caminho de transição entre nós
- Use isto para criar padrões de navegação complexos

## Funções Relacionadas

- [NPC_PlayNode](NPC_PlayNode): Comece a reproduzir um nó
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Interrompe a reprodução do nó atual
- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se NPC está reproduzindo um nó

## Callbacks Relacionadas

- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Chamado quando NPC muda de nós
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
