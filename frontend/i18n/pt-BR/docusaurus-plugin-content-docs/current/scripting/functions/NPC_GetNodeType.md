---
title: NPC_GetNodeType
sidebar_label: NPC_GetNodeType
description: "Obtém o tipo de um nó NPC."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o tipo de um nó NPC.

| Nome | Descrição |
| ------ | ------------------ |
| nodeid | O ID do nó |

## Retornos

Retorna o tipo de nó ID ou -1 se o nó for inválido.

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

- Retorna -1 se o nó for inválido ou não estiver aberto
- Diferentes tipos de nós são projetados para diferentes tipos de movimento
- Os nós de pedestres são para caminhar NPCs
- Os nós do veículo são para dirigir NPCs
- Escolha o tipo de nó apropriado para o estilo de movimento do seu NPC

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Verifique se o nó está aberto
- [NPC_GetNodeInfo](NPC_GetNodeInfo): Obtenha informações detalhadas do nó
- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Chamado quando NPC muda de nós
