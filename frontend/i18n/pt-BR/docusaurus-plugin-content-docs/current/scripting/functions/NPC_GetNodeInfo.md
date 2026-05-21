---
title: NPC_GetNodeInfo
sidebar_label: NPC_GetNodeInfo
description: "Obtém informações sobre um nó NPC."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém informações sobre um nó NPC, incluindo dados de veículos, pedestres e navegação.

| Nome | Descrição |
| --------- | --------------------------------------------- |
| nodeid | O ID do nó |
| &vehnodes | Variável para armazenar contagem de nós de veículos |
| &pednodes | Variável para armazenar contagem de nós de pedestres |
| &navinode | Variável para armazenar informações do nó de navegação |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeinfo ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new vehnodes, pednodes, navinode;
        new bool:success = NPC_GetNodeInfo(nodeid, vehnodes, pednodes, navinode);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Node %d info - Vehicle nodes: %d, Ped nodes: %d, Navi node: %d", nodeid, vehnodes, pednodes, navinode);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to get node %d info", nodeid);
        return 1;
    }
    return 0;
}
```
## Notas

- O nó deve ser aberto com `NPC_OpenNode` antes de obter informações
- Os nós de veículos são para caminhos de navegação de veículos
- Nós pedestres são para caminhos pedestres
- Todos os parâmetros de contagem são passados por referência

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_CloseNode](NPC_CloseNode): Fechar um nó
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Verifique se o nó está aberto
- [NPC_GetNodeType](NPC_GetNodeType): Obter tipo de nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC termina o nó
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Chamado quando NPC muda de nós
