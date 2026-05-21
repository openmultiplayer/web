---
title: TextDrawLetterSize
sidebar_label: TextDrawLetterSize
description: "Define a largura e a altura das letras."
tags: ["textdraw"]
---


## Descrição

Define a largura e a altura das letras.

| Nome | Descrição |
| ------------ | ---------------------- |
| Text:textid | O TextDraw para mudar |
| Float:width | Largura de um caractere.       |
| Float:height | Altura de um char.      |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);
    return 1;
}
```
## Notas

:::tip

Ao usar esta função apenas para afetar a caixa TextDraw, multiplique 'Y' por 0,135 para converter para medições semelhantes a TextDrawTextSize.

Dica: é mais fácil e extremamente preciso usar o sprite **LD_SPAC:white** para desenhos de texto somente em caixa, TextDrawTextSize terá deslocamentos regulares.

:::

:::tip

- Se quiser alterar o tamanho da letra de um textdraw que já está mostrado, não é necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.
- As fontes parecem ter melhor aparência com uma proporção de X para Y de 1 para 4 (por exemplo, se x for 0,5, y deverá ser 2).

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawGetLetterSize](TextDrawGetLetterSize): Obtém a largura e altura das letras.
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
