---
title: NPC_OpenNode
sidebar_label: NPC_OpenNode
description: "Abre um nó NPC para uso."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Abre um nó NPC para uso, disponibilizando-o para navegação por NPCs.

| Nome | Descrição |
| ------ | ------------------ |
| nodeid | O ID do nó |

## Retornos

Retorna `true` se o nó foi aberto com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcopennode ", true, 13))
    {
        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new bool:success = NPC_OpenNode(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Open node %d: %s", nodeid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Nó IDs varia de 0 a 63
- Os nós devem ser abertos antes que NPCs possa usá-los para navegação
- Abrir um nó carrega seus dados e os torna acessíveis
- Use NPC_IsNodeOpen para verificar se um nó já está aberto

## Funções Relacionadas

- [NPC_CloseNode](NPC_CloseNode): Fechar um nó
- [NPC_IsNodeOpen](NPC_IsNodeOpen): Verifique se o nó está aberto
- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó
- [NPC_GetNodeInfo](NPC_GetNodeInfo): Obtenha informações do nó

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
