---
title: TextDrawSetProportional
sidebar_label: TextDrawSetProportional
description: "Parece dimensionar o espaçamento do texto para uma proporção proporcional."
tags: ["textdraw"]
---


## Descrição

Parece dimensionar o espaçamento do texto para uma proporção proporcional. Útil ao usar TextDrawLetterSize para garantir que o texto tenha espaçamento uniforme entre caracteres.

| Nome | Descrição |
| ----------------- | ----------------------------------------------------- |
| Text:textid | O ID do textdraw para definir a proporcionalidade de |
| bool:proportional | 'true' para ativar a proporcionalidade, 'false' para desativar. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}
```
## Notas

:::tip

- A proporcionalidade é definida como **true** por padrão. Você pode ignorar esta função se não quiser desativá-la.
- Se quiser alterar a proporcionalidade de um textdraw que já está mostrado, não é necessário recriá-lo. Basta usar [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) após modificar o textdraw e a alteração ficará visível.

:::

## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Crie um desenho de texto.
- [TextDrawDestroy](TextDrawDestroy): Destrua um textdraw.
- [TextDrawIsProportional](TextDrawIsProportional): Verifica se um textdraw é proporcional.
- [TextDrawColor](TextDrawColor): Defina a cor do texto em um textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Defina a cor da caixa em um textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Define a cor de fundo de um textdraw.
- [TextDrawAlignment](TextDrawAlignment): Define o alinhamento de um textdraw.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Defina o tamanho da letra do texto em um textdraw.
- [TextDrawTextSize](TextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto.
- [TextDrawSetOutline](TextDrawSetOutline): Escolha se o texto possui contorno.
- [TextDrawSetShadow](TextDrawSetShadow): Alterna sombras em um textdraw.
- [TextDrawUseBox](TextDrawUseBox): Alterna se o textdraw possui caixa ou não.
- [TextDrawSetString](TextDrawSetString): Defina o texto em um textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
