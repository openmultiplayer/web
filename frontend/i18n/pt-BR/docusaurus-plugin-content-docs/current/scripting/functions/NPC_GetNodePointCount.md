---
title: NPC_GetNodePointCount
sidebar_label: NPC_GetNodePointCount
description: "Obtém o número de pontos em um nó NPC."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o número de pontos em um nó NPC.

| Nome | Descrição |
| ------ | ------------------ |
| nodeid | O ID do nó |

## Retornos

Retorna o número de pontos no nó ou 0 se o nó for inválido.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointcount ", true, 21))
    {
        new nodeid = strval(cmdtext[21]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new count = NPC_GetNodePointCount(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d has %d points", nodeid, count);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna 0 se o nó for inválido ou não estiver aberto
- A contagem de pontos representa waypoints de navegação dentro do nó

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_SetNodePoint](NPC_SetNodePoint): Definir ponto do nó atual
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Obter posição do ponto
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Verifique se o nó está aberto

## Callbacks Relacionadas

- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Chamado quando NPC termina um ponto de nó
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
