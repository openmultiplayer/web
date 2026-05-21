---
title: GameTextForAll
sidebar_label: GameTextForAll
description: "Mostra o 'texto do jogo' (texto na tela) por um determinado período de tempo para todos os jogadores."
tags: ["gametext"]
---


## Descrição

Mostra o 'texto do jogo' (texto na tela) por um determinado período de tempo para todos os jogadores.

| Nome | Descrição |
| ---------------- | ----------------------------------------------------------------- |
| const format[] | O texto a ser exibido.                                         |
| time | A duração do texto mostrado em milissegundos.             |
| style | O [estilo](../resources/gametextstyles) do texto a ser exibido. |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                        |

## Retornos

Esta função sempre retorna 1.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Este exemplo mostra um texto grande e branco dizendo "[playerName]
    // faleceu" na tela de todos depois que um jogador morreu ou
    // foi morto. Mostra em tipo de texto 3, por 5 segundos (5000 ms)
    new name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));

    // Formate a mensagem de falecimento corretamente e mostre-a a todos:
    new string[64];
    format(string, sizeof(string), "~w~%s has passed away", name);
    GameTextForAll(string, 5000, 3);

    // DICA PROFISSIONAL: Você não precisa de `format` em open.mp
    GameTextForAll("~w~%s has passed away", 5000, 3, name);
    return 1;
}
```
## Notas

:::warning

Observe que os jogadores podem travar devido ao número ímpar de símbolos de til (~) usados no texto do jogo. Usar códigos de cores (por exemplo, `~r~`) além do 255º caractere pode travar o cliente.

:::

## Funções Relacionadas

- [HideGameTextForAll](HideGameTextForAll): Para de mostrar um estilo de texto de jogo para todos os jogadores.
- [GameTextForPlayer](GameTextForPlayer): Exibe o texto do jogo para um jogador.
- [HideGameTextForPlayer](HideGameTextForPlayer): Para de mostrar um estilo de texto de jogo para um jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.

## Recursos relacionados

- [Estilos GameText](../resources/gametextstyles)
