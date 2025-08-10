---
title: BeginPlayerObjectEditing
sidebar_label: BeginPlayerObjectEditing
description: Permite aos jogadores editar um objeto de jogador (posição e rotação) com uma GUI e o mouse.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite aos jogadores editar um objeto de jogador (posição e rotação) com uma GUI e o mouse.

| Nome     | Descrição                                         |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador que deve editar o objeto         |
| objectid | O objeto a ser editado pelo jogador              |

## Retorno

`true` - A função foi executada com sucesso.

`false` - A função falhou ao executar. Jogador ou objeto não válido.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        BeginPlayerObjectEditing(playerid, gPlayerObject[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Você agora edita seu objeto!");
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

Você pode mover a câmera enquanto edita pressionando e segurando a barra de espaço (ou W no veículo) e movendo o mouse.

:::

## Funções Relacionadas

- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [MoveObject](MoveObject): Move um objeto.
- [EditAttachedObject](EditAttachedObject): Edita um objeto anexado.
- [BeginObjectSelecting](BeginObjectSelecting): Seleciona um objeto.
- [EndObjectEditing](EndObjectEditing): Cancela a edição de um objeto.