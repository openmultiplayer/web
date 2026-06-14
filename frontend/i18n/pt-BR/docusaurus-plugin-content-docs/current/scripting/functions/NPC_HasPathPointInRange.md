---
title: NPC_HasPathPointInRange
sidebar_label: NPC_HasPathPointInRange
description: "Verifica se um caminho tem algum ponto dentro do intervalo especificado a partir de determinadas coordenadas."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um caminho tem algum ponto dentro do intervalo especificado a partir de determinadas coordenadas.

| Nome | Descrição |
| ------ | ------------------------------------------ |
| pathId | O ID do caminho a ser verificado |
| x | A coordenada X da posição central |
| y | A coordenada Y da posição central |
| z | A coordenada Z da posição central |
| radius | O raio para verificar pontos de caminho dentro de |

## Retornos

Retorna `true` se o caminho tiver pelo menos um ponto dentro do intervalo especificado, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointinrange ", true, 23))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pathid = strval(cmdtext[23]);

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        new bool:hasPoint = NPC_HasPathPointInRange(pathid, x, y, z, 50.0);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d has point near your position (%.2f, %.2f, %.2f): %s", pathid, x, y, z, hasPoint ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Esta função é útil para verificar se um caminho NPC cruza com uma área ou local específico antes de iniciar o movimento do caminho
- A função verifica a distância 3D entre a posição dada e cada ponto do caminho
- Somente caminhos válidos com pelo menos um ponto podem retornar `true`

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Cria um novo caminho para o movimento NPC
- [NPC_AddPointToPath](NPC_AddPointToPath): Adiciona um ponto a um caminho
- [NPC_GetPathPoint](NPC_GetPathPoint): Obtém informações sobre um ponto específico em um caminho
- [NPC_MoveByPath](NPC_MoveByPath): Faz com que um NPC siga um caminho predefinido

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
