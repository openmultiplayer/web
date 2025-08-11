---
title: EditPlayerObject
sidebar_label: EditPlayerObject
description: Permite que jogadores editem um objeto de jogador (posição e rotação) através de uma interface gráfica e mouse.
tags: ["player"]
---

## Descrição

Permite que um jogador edite um objeto criado para ele (objeto de jogador) ajustando sua posição e rotação usando uma interface gráfica e o mouse.

| Parâmetro | Descrição |
|-----------|-----------|
| playerid  | ID do jogador que irá editar o objeto |
| objectid  | ID do objeto de jogador a ser editado |

## Retornos

**1**: A função foi executada com sucesso.

**0**: A função falhou ao executar (jogador ou objeto inválido).

## Exemplos

```c
// Variável para armazenar objetos por jogador
new playerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
// Cria um objeto exclusivo para o jogador
playerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
if (!strcmp(cmdtext, "/editar", true))
{
if (EditPlayerObject(playerid, playerObject[playerid]))
{
SendClientMessage(playerid, 0xFFFFFFFF, "SERVIDOR: Você está editando seu objeto!");
}
else
{
SendClientMessage(playerid, 0xFF0000FF, "ERRO: Objeto inválido ou não encontrado!");
}
return 1;
}
return 0;
}
```

## Observações

:::tip

Durante a edição, você pode mover a câmera mantendo pressionada a **barra de espaço** (ou **W** em veículos) enquanto move o mouse.

:::

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Cria um objeto exclusivo para um jogador
- [DestroyPlayerObject](DestroyPlayerObject): Remove um objeto de jogador
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador suavemente
- [EditAttachedObject](EditAttachedObject): Edita objetos anexados ao jogador
- [SelectObject](SelectObject): Permite selecionar objetos no mundo
- [CancelEdit](CancelEdit): Cancela o modo de edição atual

## Callbacks Relacionadas

- [OnPlayerEditObject](../callbacks/OnPlayerEditObject): Chamado quando o jogador termina de editar um objeto
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Chamado quando o jogador seleciona um objeto