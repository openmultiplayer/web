---
title: NPC_CloseNode
sidebar_label: NPC_CloseNode
description: "Fecha um nó NPC, tornando-o indisponível para uso."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Fecha um nó NPC, tornando-o indisponível para uso por NPCs.

| Nome | Descrição |
| ------ | --------------------------- |
| nodeid | O ID do nó a ser fechado |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodetype ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new nodetype = NPC_GetNodeType(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d type: %d", nodeid, nodetype);
        return 1;
    }
    return 0;
}
```
## Notas

- Fechar um nó impede que o novo NPCs o utilize
- NPCs atualmente usando o nó continuará até terminar
- Nós fechados não podem ser reproduzidos até serem reabertos com `NPC_OpenNode`

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Verifique se um nó está aberto
- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó
- [NPC_GetNodeType](NPC_GetNodeType): Obtenha informações do tipo de nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Chamado quando NPC muda de nós
