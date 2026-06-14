---
title: EndObjectEditing
sidebar_label: EndObjectEditing
description: "Cancele o modo de edição de objetos para um jogador."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Cancelar o modo de edição de objetos para um jogador

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O ID do jogador para cancelar a edição |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        EndObjectEditing(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [BeginObjectSelecting](BeginObjectSelecting): Selecione um objeto.
- [BeginObjectEditing](BeginObjectEditing): Edite um objeto.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edite um objeto de jogador.
- [EditAttachedObject](EditAttachedObject): Edite um objeto anexado.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [MoveObject](MoveObject): Mova um objeto.
