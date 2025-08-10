---
title: BeginObjectSelecting
sidebar_label: BeginObjectSelecting
description: Exibe o cursor e permite ao jogador selecionar um objeto.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Exibe o cursor e permite ao jogador selecionar um objeto. OnPlayerSelectObject é chamado quando o jogador seleciona um objeto.

| Nome     | Descrição                                                     |
| -------- | ------------------------------------------------------------- |
| playerid | O ID do jogador que deve ser capaz de selecionar o objeto    |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        BeginObjectSelecting(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Por favor, selecione o objeto que você gostaria de editar!");
        return 1;
    }
    return 0;
}
```

## Funções Relacionadas

- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [MoveObject](MoveObject): Move um objeto.
- [BeginObjectEditing](BeginObjectEditing): Edita um objeto.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edita um objeto.
- [EditAttachedObject](EditAttachedObject): Edita um objeto anexado.
- [EndObjectEditing](EndObjectEditing): Cancela a edição de um objeto.

## Callbacks Relacionados

- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Chamado quando um jogador seleciona um objeto.