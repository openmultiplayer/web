---
title: TextDrawGetLetterSize
sidebar_label: TextDrawGetLetterSize
description: "Obtém a largura e a altura das letras."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a largura e a altura das letras.

| Nome | Descrição |
| ------------- | ----------------------------------------------------------------- |
| Text:textid | O ID do textdraw para obter o tamanho da letra.                     |
| &Float:width | Uma variável flutuante na qual armazenar a largura, passada por referência.  |
| &Float:height | Uma variável flutuante na qual armazenar a altura, passada por referência. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);

    new Float:width, Float:height;
    TextDrawGetLetterSize(gMyTextdraw, width, height);
    // O `width` será '3.2' e `height` será '5.1'
    return 1;
}
```
## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Define a largura e a altura das letras.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Defina a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Dimensione o espaçamento do texto em um textdraw para uma proporção proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
