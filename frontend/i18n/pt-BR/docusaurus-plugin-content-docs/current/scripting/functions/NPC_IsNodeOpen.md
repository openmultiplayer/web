---
title: NPC_IsNodeOpen
sidebar_label: NPC_IsNodeOpen
description: "Verifica se um nó NPC está aberto."
tags: ["npc", "node", "navigation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um nó NPC está aberto e disponível para uso.

| Nome | Descrição |
| ------ | ------------------ |
| nodeid | O ID do nó |

## Retornos

Retorna `true` se o nó estiver aberto, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeopen ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        new bool:isNodeOpen = NPC_IsNodeOpen(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Node %d is open: %s", nodeid, isNodeOpen ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Os nós devem ser abertos com NPC_OpenNode antes do uso
- Somente nós abertos podem ser reproduzidos por NPCs
- Use isto para verificar a disponibilidade do nó antes de atribuir a NPCs

## Funções Relacionadas

- [NPC_OpenNode](NPC_OpenNode): Abra um nó para uso
- [NPC_CloseNode](NPC_CloseNode): Fechar um nó
- [NPC_PlayNode](NPC_PlayNode): Faça NPC reproduzir um nó
- [NPC_GetNodeType](NPC_GetNodeType): Obter tipo de nó

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
