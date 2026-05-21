---
title: SetPlayerDrunkLevel
sidebar_label: SetPlayerDrunkLevel
description: "Define o nível de embriaguez de um jogador, o que faz com que a câmera do jogador balance e os veículos sejam difíceis de controlar."
tags: ["player"]
---


## Descrição

Define o nível de embriaguez de um jogador, o que faz com que a câmera do jogador balance e os veículos sejam difíceis de controlar.

| Nome | Descrição |
| -------- | ----------------------------------------------- |
| playerid | O ID do jogador para definir a embriaguez. |
| level | O nível de embriaguez a ser definido.                |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/drunk", true) == 0)
    {
        SetPlayerDrunkLevel(playerid, 4000);
        SendClientMessage(playerid, 0xFFFFFFAA, "You are now drunk; don't drink and drive!");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- O nível de embriaguez dos jogadores diminuirá automaticamente com o tempo, com base em seu FPS (jogadores com 50 FPS perderão 50 'níveis' por segundo. Isso é útil para determinar o FPS de um jogador!).
- Em 0.3a o nível de embriaguez diminuirá e parará em 2.000.
- Em 0.3b+ o nível de embriaguez diminui para zero.
- Níveis acima de 2.000 deixam o jogador bêbado (câmera balançando e veículos difíceis de controlar).
- O nível máximo de embriaguez é 50.000. Enquanto o nível de embriaguez estiver acima de 5.000, o HUD do jogador (radar etc.) ficará oculto.

:::

## Funções Relacionadas

- [GetPlayerDrunkLevel](GetPlayerDrunkLevel): Retorna o nível atual de embriaguez de um jogador.
