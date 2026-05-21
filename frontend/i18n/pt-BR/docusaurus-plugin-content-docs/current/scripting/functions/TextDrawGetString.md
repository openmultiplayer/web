---
title: TextDrawGetString
sidebar_label: TextDrawGetString
description: "Obtém o texto de um textdraw."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o texto de um textdraw.

| Nome | Descrição |
| ---------------------------- | ----------------------------------------------------------- |
| Text:textid | O ID do textdraw do qual obter o texto.                  |
| string[] | Uma matriz na qual armazenar o texto, passado por referência. |
| stringSize = sizeof (string) | O tamanho da string.                                     |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "Hello World!");

    new string[16];
    TextDrawGetString(gMyTextdraw, string, sizeof(string));
    // O `string` agora contém 'Hello World!'
    return 1;
}
```
## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
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
- [TextDrawSetString](TextDrawSetString): Altera o texto em um textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Obtém o texto de um player-textdraw.
