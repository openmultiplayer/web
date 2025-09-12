---
title: BeginObjectEditing
sidebar_label: BeginObjectEditing
description: Permite a um jogador editar um objeto (posição e rotação) usando o mouse em uma GUI (Interface Gráfica do Usuário).
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite a um jogador editar um objeto (posição e rotação) usando o mouse em uma GUI (Interface Gráfica do Usuário).

| Nome     | Descrição                                         |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador que deve editar o objeto.        |
| objectid | O ID do objeto a ser editado pelo jogador.       |

## Retorno

`true` - A função foi executada com sucesso. Sucesso é reportado quando um objeto inexistente é especificado, mas nada acontecerá.

`false` - A função falhou ao executar. O jogador não está conectado.

## Exemplos

```c
new objectid;

public OnGameModeInit()
{
    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        BeginObjectEditing(playerid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Você agora pode editar o objeto!");
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
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): Edita um objeto.
- [EditAttachedObject](EditAttachedObject): Edita um objeto anexado.
- [BeginObjectSelecting](BeginObjectSelecting): Seleciona um objeto.
- [EndObjectEditing](EndObjectEditing): Cancela a edição de um objeto.