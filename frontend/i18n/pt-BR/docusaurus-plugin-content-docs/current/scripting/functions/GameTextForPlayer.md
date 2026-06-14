---
title: GameTextForPlayer
sidebar_label: GameTextForPlayer
description: "Mostra o 'texto do jogo' (texto na tela) por um determinado período de tempo para um jogador específico."
tags: ["player", "gametext"]
---


## Descrição

Mostra o 'texto do jogo' (texto na tela) por um determinado período de tempo para um jogador específico.

| Nome | Descrição |
| ---------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador para o qual mostrar o texto do jogo.                    |
| const format[] | O texto a ser exibido.                                         |
| time | A duração do texto mostrado em milissegundos.             |
| style | O [estilo](../resources/gametextstyles) do texto a ser exibido. |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                        |

## Retornos

**true** – A função foi executada com sucesso. O sucesso é relatado quando o estilo e/ou hora são inválidos. Nada acontecerá (nenhum texto será exibido). Também pode causar travamentos do jogo.

**false** - Falha na execução da função. Isso significa que a string é nula ou o jogador não está conectado.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);

    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));

        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);
    }
    return 1;
}
```
## Notas

:::warning

Observe que os jogadores podem travar devido ao número ímpar de símbolos de til (~) usados no texto do jogo. Usar códigos de cores (por exemplo, `~r~`) além do 255º caractere pode travar o cliente.

Além disso, um espaço em branco no final da string pode resultar em falha. Por exemplo: `"Headshot "` resulta em falha. Em vez disso, deveria ser `"Headshot"` ou `"Headshot_"`.

:::

## Funções Relacionadas

- [HideGameTextForPlayer](HideGameTextForPlayer): Pare de mostrar um estilo de texto de jogo para um jogador.
- [GameTextForAll](GameTextForAll): Exibe o texto do jogo para todos os jogadores.
- [HideGameTextForAll](HideGameTextForAll): Para de mostrar um estilo de texto de jogo para todos os jogadores.
- [GetGameText](GetGameText): Obtém todas as informações sobre o estilo de texto do jogo determinado.
- [HasGameText](HasGameText): O jogador atualmente exibe texto no estilo de texto do jogo fornecido?
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.

## Recursos relacionados

- [Estilos GameText](../resources/gametextstyles)
