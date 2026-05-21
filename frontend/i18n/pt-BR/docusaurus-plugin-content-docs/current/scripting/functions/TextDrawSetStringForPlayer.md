---
title: TextDrawSetStringForPlayer
sidebar_label: TextDrawSetStringForPlayer
description: "Altera o texto em um textdraw para um jogador específico."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Altera o texto em um textdraw para um jogador específico.

| Nome | Descrição |
| ---------------- | ----------------------------------------- |
| Text:textid | O ID do TextDraw para alterar |
| playerid | O ID do jogador |
| const format[] | A nova string para TextDraw |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(317.799987, 331.475006, "Hi, how are you?");
    TextDrawLetterSize(gMyTextdraw, 0.238997, 1.250000);
    TextDrawTextSize(gMyTextdraw, 505.000000, 202.000000);
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);
    TextDrawColor(gMyTextdraw, 0xFFFFFFFF);
    TextDrawSetShadow(gMyTextdraw, 0);
    TextDrawSetOutline(gMyTextdraw, 1);
    TextDrawBackgroundColor(gMyTextdraw, 255);
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_1);
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}

public OnPlayerConnect(playerid)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, sizeof playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);

    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "Welcome %s!", playerName);
    return 1;
}

public OnPlayerRequestClass(playerid, classid)
{
    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "You chose class %d", classid);
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
- [TextDrawSetString](TextDrawSetString): Altera o texto em um textdraw.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
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
