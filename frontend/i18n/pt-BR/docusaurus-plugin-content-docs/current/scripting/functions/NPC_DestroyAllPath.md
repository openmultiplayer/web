---
title: NPC_DestroyAllPath
sidebar_label: NPC_DestroyAllPath
description: "Destrói todos os caminhos NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Destrói todos os caminhos NPC existentes no servidor.

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnGameModeExit()
{
    // Obtenha o número de caminhos antes de limpar
    new total = NPC_GetPathCount();

    // Tente destruir todos eles
    if (NPC_DestroyAllPath())
    {
        printf("[NPC] Destroyed all NPC paths (%d removed).", total);
    }
    else
    {
        printf("[NPC] Failed to destroy NPC paths.");
    }

    return 1;
}

```
## Notas

- Esta função destrói os caminhos ALL no servidor e os caminhos NPCs atualmente seguindo irão parar de se mover
- Todos os caminhos IDs tornam-se inválidos após esta função ser chamada
- Isso é útil para limpeza durante o desligamento/reinicialização do modo de jogo

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_DestroyPath](NPC_DestroyPath): Destruir um caminho específico
- [NPC_GetPathCount](NPC_GetPathCount): Obtenha o número total de caminhos
- [NPC_ClearPath](NPC_ClearPath): Limpa todos os pontos de um caminho

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina um caminho
