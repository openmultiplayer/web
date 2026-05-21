---
title: NPC_SetNodePoint
sidebar_label: NPC_SetNodePoint
description: "Define um ponto em um nó NPC."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o índice de ponto atual para um nó NPC.

| Nome | Descrição |
| ------- | --------------------------- |
| nodeid | O ID do nó |
| pointid | O índice de pontos no nó |

## Retornos

Retorna `true` se o ponto foi definido com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcsetnodepoint ", true, 17))
    {
        new nodeid = strval(cmdtext[17]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new idx = 17;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcsetnodepoint [nodeid] [pointid]");

        new pointid = strval(cmdtext[idx]);

        new bool:success = NPC_SetNodePoint(nodeid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "Set node %d to point %d: %s", nodeid, pointid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- O nó deve ser aberto antes de definir pontos
- Os índices de pontos normalmente começam em 0
- Use NPC_GetNodePointPosition para recuperar coordenadas de ponto

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra o nó para edição
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): obter coordenadas do ponto
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Obter contagem de pontos
- [NPC_UpdateNodePoint](NPC_UpdateNodePoint): Atualizar ponto existente

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
