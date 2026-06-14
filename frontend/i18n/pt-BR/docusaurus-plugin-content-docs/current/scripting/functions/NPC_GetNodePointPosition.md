---
title: NPC_GetNodePointPosition
sidebar_label: NPC_GetNodePointPosition
description: "Obtém a posição do ponto atual em um nó NPC."
tags: ["npc", "node", "navigation", "position"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a posição do ponto atual em um nó NPC.

| Nome | Descrição |
| ------ | ---------------------------------- |
| nodeid | O ID do nó |
| &x | Variável para armazenar a coordenada X |
| &y | Variável para armazenar a coordenada Y |
| &z | Variável para armazenar a coordenada Z |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointpos ", true, 19))
    {
        new nodeid = strval(cmdtext[19]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new Float:x, Float:y, Float:z;
        new bool:success = NPC_GetNodePointPosition(nodeid, x, y, z);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Node %d point position: %.2f, %.2f, %.2f", nodeid, x, y, z);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to get node %d point position", nodeid);
        return 1;
    }
    return 0;
}
```
## Notas

- O nó deve ser aberto primeiro com `NPC_OpenNode`
- Um ponto deve ser definido com `NPC_SetNodePoint` antes de obter sua posição
- Todos os parâmetros de coordenadas são passados por referência

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_SetNodePoint](NPC_SetNodePoint): Definir ponto do nó atual
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Obter contagem de pontos
- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó

## Callbacks Relacionadas

- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Chamado quando NPC termina um ponto de nó
