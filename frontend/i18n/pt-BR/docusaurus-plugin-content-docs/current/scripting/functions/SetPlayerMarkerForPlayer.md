---
title: SetPlayerMarkerForPlayer
sidebar_label: SetPlayerMarkerForPlayer
description: "Altere a cor do crachá de um jogador e do sinal de radar de outro jogador."
tags: ["player"]
---


## Descrição

Altere a cor do crachá de um jogador e do sinal de radar de outro jogador.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------- |
| playerid | O jogador que verá a cor alterada do ícone/nome do jogador |
| targetid | O jogador cuja cor será alterada |
| colour | Nova cor. Suporta valores alfa.                                |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Faça o jogador 42 ver o jogador 1 como um marcador vermelho
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

// Faça com que o marcador do jogador fique branco invisível (o bate-papo ficará branco, mas o marcador desaparecerá).
SetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);

// Torne o marcador do jogador invisível para o jogador, mantendo a mesma cor do bate-papo. Só funcionará corretamente se SetPlayerColor tiver sido usado:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));

// Torne o marcador do jogador totalmente opaco (solid) para o jogador, mantendo a mesma cor do bate-papo. Só funcionará corretamente se SetPlayerColor tiver sido usado:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));
```
## Funções Relacionadas

- [ShowPlayerMarkers](ShowPlayerMarkers): Decida se o servidor deve mostrar marcadores no radar.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Limita o raio do marcador do jogador.
- [SetPlayerColor](SetPlayerColor): Defina a cor de um jogador.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Mostra ou oculta o crachá de um determinado jogador.
- [GetPlayerMarkerForPlayer](GetPlayerMarkerForPlayer): Obtém a cor do crachá de um jogador e do sinal de radar de outro jogador.
