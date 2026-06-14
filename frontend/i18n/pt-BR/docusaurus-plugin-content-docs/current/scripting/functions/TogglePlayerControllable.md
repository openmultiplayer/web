---
title: TogglePlayerControllable
sidebar_label: TogglePlayerControllable
description: "Alterna se um jogador pode controlar seu personagem ou não."
tags: ["player"]
---


## Descrição

Alterna se um jogador pode controlar seu personagem ou não. O jogador também não poderá mover sua câmera.

| Nome | Descrição |
| ----------------- | ---------------------------------------------------------------------- |
| playerid | O ID do jogador para alternar a controlabilidade de |
| bool:controllable | 'false' para torná-los incontroláveis, 'true' para torná-los controláveis. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     // Congela um jogador quando ele digita /freezeme
     if (strcmp(cmdtext, "/freezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, false);
          return 1;
     }
     // Descongela um jogador quando ele digita /unfreezeme
     if (strcmp(cmdtext, "/unfreezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, true);
          return 1;
     }
     return 0;
}
```
## Funções Relacionadas

- [IsPlayerControllable](IsPlayerControllable): Verifique se o jogador é controlável.
