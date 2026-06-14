---
title: ShowPlayerMarkers
sidebar_label: ShowPlayerMarkers
description: "Alterna marcadores de jogador (pontos no radar)."
tags: ["player"]
---


## Descrição

Alterna marcadores de jogador (pontos no radar). Deve ser usado quando o servidor for iniciado (OnGameModeInit). Para outras ocasiões, consulte [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer).

| Nome | Descrição |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| PLAYER_MARKERS_MODE:mode | O [modo](../resources/markermodes) a ser usado para marcadores. Eles podem ser transmitidos, o que significa que só são visíveis para jogadores próximos. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    // Marcadores de jogadores visíveis apenas para jogadores próximos
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```
## Modos de marcador

| ID | MODE |
| --- | ---------------------------- |
| 0 | PLAYER_MARKERS_MODE_OFF |
| 1 | PLAYER_MARKERS_MODE_GLOBAL |
| 2 | PLAYER_MARKERS_MODE_STREAMED |

## Notas

:::tip

Também é possível definir a cor de um jogador para uma cor que tenha transparência total (sem valor alfa). Isso torna possível mostrar marcadores por jogador.

:::

## Funções Relacionadas

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Limita o raio do marcador do jogador.
- [ShowNameTags](ShowNameTags): Ativa ou desativa etiquetas de nome.
- [SetPlayerColor](SetPlayerColor): Defina a cor de um jogador.

## Recursos relacionados

- [Modos de marcador](../resources/markermodes)
