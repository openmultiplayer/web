---
title: NPC_IsValidPath
sidebar_label: NPC_IsValidPath
description: "Verifica se um caminho ID é válido e existe."
tags: ["npc", "path", "validation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um caminho ID é válido e existe.

| Nome | Descrição |
| ------ | ------------------ |
| pathid | O ID do caminho |

## Retornos

Retorna `true` se o caminho for válido, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidpath ", true, 16))
    {
        new pathid = strval(cmdtext[16]);

        new bool:isValidPath = NPC_IsValidPath(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d is valid: %s", pathid, isValidPath ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Sempre verifique se um caminho é válido antes de usá-lo com NPCs
- Caminhos inválidos podem ter sido destruídos ou nunca criados corretamente
- Use isto antes de adicionar pontos ou atribuir caminhos a NPCs
- Caminho IDs são reutilizados quando caminhos são destruídos

## Funções Relacionadas

- [NPC_CreatePath](NPC_CreatePath): Crie um novo caminho
- [NPC_DestroyPath](NPC_DestroyPath): Destruir um caminho
- [NPC_GetPathCount](NPC_GetPathCount): Obtenha a contagem total de caminhos
- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar ponto ao caminho

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
