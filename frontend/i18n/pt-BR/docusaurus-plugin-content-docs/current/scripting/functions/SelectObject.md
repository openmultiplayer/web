---
title: SelectObject
sidebar_label: SelectObject
description: "Exiba o cursor e permita que o jogador selecione um objeto."
tags: []
---


## Descrição

Exiba o cursor e permita que o jogador selecione um objeto. OnPlayerSelectObject é chamado quando o jogador seleciona um objeto.

| Nome | Descrição |
| -------- | ------------------------------------------------------------- |
| playerid | O ID do jogador que deverá ser capaz de selecionar o objeto |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [MoveObject](MoveObject): Mova um objeto.
- [EditObject](EditObject): Edite um objeto.
- [EditPlayerObject](EditPlayerObject): Edite um objeto.
- [EditAttachedObject](EditAttachedObject): Edite um objeto anexado.
- [CancelEdit](CancelEdit): Cancela a edição de um objeto.
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Chamado quando um jogador seleciona um objeto.
