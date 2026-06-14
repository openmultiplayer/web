---
title: GetPlayerMarkerForPlayer
sidebar_label: GetPlayerMarkerForPlayer
description: "Obtenha a cor do crachá de um jogador e do sinal de radar de outro jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />
 
## Descrição

Obtenha a cor do **crachá** e do **ponto de radar** de outro jogador.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------- | --- |
| playerid | O jogador que pode ver a cor alterada do ícone/nome do jogador |     |
| targetid | O jogador cuja cor foi alterada.                        |

## Retornos

A cor do **crachá** e do **ponto de radar** do jogador alvo.

## Exemplos

```c
// Faça o jogador 42 ver o jogador 1 como um marcador vermelho
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

new markerColour = GetPlayerMarkerForPlayer(42, 1);
// marcadorCor = 0xFF0000FF
```
## Funções Relacionadas

- [ShowPlayerMarkers](ShowPlayerMarkers): Decida se o servidor deve mostrar marcadores no radar.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Limita o raio do marcador do jogador.
- [SetPlayerColor](SetPlayerColor): Defina a cor de um jogador.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Mostra ou oculta o crachá de um determinado jogador.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador para um jogador específico.
