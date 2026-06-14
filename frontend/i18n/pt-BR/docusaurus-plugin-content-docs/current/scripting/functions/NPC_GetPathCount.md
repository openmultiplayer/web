---
title: NPC_GetPathCount
sidebar_label: NPC_GetPathCount
description: "Obtém o número total de caminhos NPC no servidor."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o número total de caminhos NPC existentes atualmente no servidor.

## Retornos

Retorna o número de caminhos existentes no servidor.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathcount", true))
    {
        new count = NPC_GetPathCount();

        SendClientMessage(playerid, 0x00FF00FF, "Total NPC paths: %d", count);
        return 1;
    }
    return 0;
}
```
## Notas

- Conta todos os caminhos, tenham pontos ou não
- Caminhos vazios (sem waypoints) ainda são contados

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_DestroyPath](NPC_DestroyPath): Destrua um caminho específico
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destrua todos os caminhos
- [NPC_IsValidPath](NPC_IsValidPath): Verifique se um caminho é válido

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina um caminho
