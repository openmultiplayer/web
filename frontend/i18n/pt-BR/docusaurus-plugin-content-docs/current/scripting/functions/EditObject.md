---
title: EditObject
sidebar_label: EditObject
description: Permite que um jogador edite um objeto (posição e rotação) usando o mouse em uma interface gráfica (GUI).
tags: []
---

## Descrição

Permite que um jogador edite um objeto (posição e rotação) utilizando o mouse em uma interface gráfica (GUI).

| Nome     | Descrição                                       |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador que irá editar o objeto. |
| objectid | O ID do objeto a ser editado pelo jogador.  |

## Retornos

1: A função foi executada com sucesso. O sucesso é reportado mesmo se um objeto inexistente for especificado, porém nada acontecerá.

0: A função falhou ao executar. O jogador não está conectado.

## Exemplos

```c
new objeto;
public OnGameModeInit()
{
objeto = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
if (!strcmp(cmdtext, "/editarobj", true))
{
EditObject(playerid, objeto);
SendClientMessage(playerid, 0xFFFFFFFF, "SERVIDOR: Agora você pode editar o objeto!");
return 1;
}
return 0;
}
```

## Observações

:::tip

Você pode mover a câmera durante a edição pressionando e segurando a barra de espaço (ou W em veículo) e movendo o mouse.

:::

## Funções Relacionadas

- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [MoveObject](MoveObject): Move um objeto.
- [EditPlayerObject](EditPlayerObject): Edita um objeto de jogador.
- [EditAttachedObject](EditAttachedObject): Edita um objeto anexado.
- [SelectObject](SelectObject): Seleciona um objeto.
- [CancelEdit](CancelEdit): Cancela a edição de um objeto.