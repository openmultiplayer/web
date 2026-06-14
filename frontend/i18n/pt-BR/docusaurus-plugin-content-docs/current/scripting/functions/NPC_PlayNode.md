---
title: NPC_PlayNode
sidebar_label: NPC_PlayNode
description: "Faz um NPC navegar por nós de navegação predefinidos."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC navegar por nós de navegação predefinidos usando o sistema de navegação integrado do jogo.

| Nome | Descrição |
| ------------- | ---------------------------------------------------------------------- |
| npcid | O ID do NPC |
| nodeId | O ID do nó a ser navegado |
| moveType | Tipo de movimento (padrão: NPC_MOVE_TYPE_JOG) |
| Float:speed | Velocidade de movimento (padrão: NPC_MOVE_SPEED_AUTO) |
| Float:radius | Raio em torno dos nós a considerar como alcançado (padrão: 0,0) |
| bool:setangle | Se deve atualizar o ângulo de visão de NPC durante a navegação (padrão: true) |

## Retornos

Retorna `true` se NPC começou a reproduzir o nó, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcplaynode ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new bool:success = NPC_PlayNode(npcid, nodeid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.0, true);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d play node %d: %s", npcid, nodeid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Os nós são pontos de navegação predefinidos dos arquivos de nós do jogo (IDs 0-63)
- O nó deve ser aberto com `NPC_OpenNode` antes de poder ser usado
- O NPC navegará automaticamente entre pontos dentro do nó especificado
- Use o parâmetro `setAngle` para controlar se o NPC gira na direção do movimento frontal
- O parâmetro `radius` determina o quão perto o NPC precisa chegar de cada ponto
- A navegação do nó pode ser pausada, retomada ou interrompida usando funções relacionadas

## Funções Relacionadas

- [NPC_StopPlayingNode](NPC_StopPlayingNode): Interrompe a navegação do nó NPC
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pausar a navegação do nó NPC
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Retomar navegação do nó pausado
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se NPC está navegando em um nó
- [NPC_ChangeNode](NPC_ChangeNode): Mude para um nó diferente durante a navegação
- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC termina de navegar em um nó
- [OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): Chamado quando NPC atinge um ponto dentro de um nó
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Chamado quando NPC muda de um nó para outro
