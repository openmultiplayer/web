---
title: TextDrawSetString
sidebar_label: TextDrawSetString
description: "Altera o texto em um textdraw."
tags: ["textdraw"]
---


## Descrição

Altera o texto em um textdraw.

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| Text:textid | O TextDraw para mudar |
| const format[] | A nova string para TextDraw |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(1.0, 5.6, "Hi, how are you?");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, sizeof playerName);

    format(string, sizeof(string), "Welcome %s!", playerName);
    TextDrawSetString(gMyTextdraw, string);

    // DICA PROFISSIONAL: Você não precisa de `format` em open.mp
    TextDrawSetString(gMyTextdraw, "Welcome %s!", playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```
## Notas

:::warning

Existem limites para o comprimento das strings textdraw - veja [aqui](../resources/limits) para mais informações.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): Altera o texto em um textdraw para um jogador específico.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Define a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
- [TextDrawGetString](TextDrawGetString): Obtém o texto de um textdraw.
