---
title: NPC_AddPointToPath
sidebar_label: NPC_AddPointToPath
description: "Adiciona um waypoint a um caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Adiciona um waypoint a um caminho NPC.

| Nome | Descrição |
| --------- | ------------------------------------------------------- |
| pathid | O ID do caminho ao qual adicionar o ponto |
| x | A coordenada X do waypoint |
| y | A coordenada Y do waypoint |
| z | A coordenada Z do waypoint |
| stopRange | A distância do ponto em que se considera que atingiu |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/addpatrolpos", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // Tente adicionar ponto de patrulha
        if (NPC_AddPointToPath(PlayerPatrolPath[playerid], x, y, z, 1.5))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Added point to path %d at your current location", PlayerPatrolPath[playerid]);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed add point to path");
        }
        return 1;
    }
    return 0;
}

```
## Notas

- Os pontos são adicionados sequencialmente para formar a rota do caminho
- O parâmetro `stopRange` define o quão perto o NPC precisa chegar antes de passar para o próximo ponto
- Um `stopRange` menor faz com que o NPC siga o caminho com mais precisão
- O caminho deve ser criado com `NPC_CreatePath` antes de adicionar pontos

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): Remover um ponto de um caminho
- [NPC_GetPathPoint](NPC_GetPathPoint): Obtenha detalhes sobre um ponto específico
- [NPC_MoveByPath](NPC_MoveByPath): Faça NPC seguir um caminho
- [NPC_GetPathPointCount](NPC_GetPathPointCount): Obtenha o número de pontos em um caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePathPoint](../callbacks/OnNPCFinishMovePathPoint): Chamado quando NPC atinge cada ponto do caminho
- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina de se mover ao longo de um caminho
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza qualquer movimento
