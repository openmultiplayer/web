---
title: LimitPlayerMarkerRadius
sidebar_label: LimitPlayerMarkerRadius
description: "Defina o raio do marcador do jogador."
tags: ["player"]
---


## Descrição

Defina o raio do marcador do jogador.

| Nome | Descrição |
| ------------------ | ------------------------------------ |
| Float:markerRadius | O raio que os marcadores mostrarão em |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```
## Funções Relacionadas

- [ShowPlayerMarkers](ShowPlayerMarkers): Decida se o servidor deve mostrar marcadores no radar.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador.
- [LimitGlobalChatRadius](LimitGlobalChatRadius): Limite a distância necessária entre os jogadores para ver o chat.
