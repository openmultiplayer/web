---
title: CancelEdit
sidebar_label: CancelEdit
description: Cancela o modo de edição de objeto para um jogador.
tags: []
---

## Descrição

Cancela o modo de edição de objeto para um jogador

| Nome     | Descrição                                      |
| -------- | ---------------------------------------------- |
| playerid | O ID do jogador para cancelar a edição        |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Você parou de editar o objeto!");
        return 1;
    }
    return 0;
}
```

## Funções Relacionadas

- [SelectObject](SelectObject): Seleciona um objeto.
- [EditObject](EditObject): Edita um objeto.
- [EditPlayerObject](EditPlayerObject): Edita um objeto.
- [EditAttachedObject](EditAttachedObject): Edita um objeto anexado.
- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [MoveObject](MoveObject): Move um objeto.