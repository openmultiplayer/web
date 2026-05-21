---
title: TogglePlayerWidescreen
sidebar_label: TogglePlayerWidescreen
description: "Alternar widescreen do jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Alternar widescreen do jogador.

| Nome | Descrição |
| --------- | ------------------------------------------------ |
| playerid | O ID do jogador para alternar a tela widescreen.   |
| bool:wide | **true** para ligar e **false** para desligar. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreen", true))
    {
        TogglePlayerWidescreen(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You turned on the widescreen!");
        return 1;
    }
    return 0;
}
```
<hr />

**Ecrã panorâmico ativado:**

![](https://i.ibb.co/Zcc2qmD/widescreen-on.png)

**Ecrã panorâmico desativado:**

![](https://i.ibb.co/jb1YcQS/widescreen-off.png)

## Funções Relacionadas

- [IsPlayerWidescreenToggled](IsPlayerWidescreenToggled): Verifica se a tela widescreen do jogador está ligada ou desligada.
