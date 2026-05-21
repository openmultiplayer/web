---
title: GetGameText
sidebar_label: GetGameText
description: "Retorna todas as informações sobre o estilo de texto do jogo determinado."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Retorna todas as informações sobre o estilo de texto do jogo determinado.

| Nome | Descrição |
| ---------------------- | --------------------------------------------------------------------- |
| playerid | O ID do jogador do qual obter a rotação.                          |
| style | O [estilo](../resources/gametextstyles) do texto para o qual obter os dados. |
| message[] | Matriz de retorno para a string de texto.                                     |
| len = sizeof (message) | Tamanho da saída.                                                   |
| time | A hora em que o texto do jogo foi originalmente mostrado.                       |
| remaining | Quanto desse tempo ainda resta.                             |

## Retornos

true – A função foi executada com sucesso.

false - Falha na execução da função. Isto significa que o jogador especificado não existe ou o estilo é inválido.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    new
        message[32],
        time,
        remaining;

    GetGameText(playerid, 3, message, sizeof(message), time, remaining);
    // mensagem = "Bem-vindo ao servidor!"
    // tempo = 5000
    return 1;
}
```
## Funções Relacionadas

- [GameTextForPlayer](GameTextForPlayer): Exibe o texto do jogo para um jogador.
- [HideGameTextForPlayer](HideGameTextForPlayer): Pare de mostrar um estilo de texto de jogo para um jogador.
- [GameTextForAll](GameTextForAll): Exibe o texto do jogo para todos os jogadores.
- [HideGameTextForAll](HideGameTextForAll): Para de mostrar um estilo de texto de jogo para todos os jogadores.
- [HasGameText](HasGameText): O jogador atualmente exibe texto no estilo de texto do jogo fornecido?
