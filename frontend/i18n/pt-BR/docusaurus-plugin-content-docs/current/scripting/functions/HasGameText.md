---
title: HasGameText
sidebar_label: HasGameText
description: "O jogador atualmente exibe texto no estilo de texto do jogo exibido?"
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

O jogador atualmente exibe texto no estilo de texto do jogo exibido?

| Nome | Descrição |
| -------- | ---------------------------------------------------------- |
| playerid | O ID do jogador cujo texto do jogo deve ser verificado.            |
| style | O [estilo](../resources/gametextstyles) do texto a ser verificado. |

## Retornos

Esta função retorna **true** se o jogador tiver gametext, ou **false** se não tiver.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    if (HasGameText(playerid, 3))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [GameTextForPlayer](GameTextForPlayer): Exibe o texto do jogo para um jogador.
- [HideGameTextForPlayer](HideGameTextForPlayer): Pare de mostrar um estilo de texto de jogo para um jogador.
- [GameTextForAll](GameTextForAll): Exibe o texto do jogo para todos os jogadores.
- [HideGameTextForAll](HideGameTextForAll): Para de mostrar um estilo de texto de jogo para todos os jogadores.
- [GetGameText](GetGameText): Obtém todas as informações sobre o estilo de texto do jogo determinado.
