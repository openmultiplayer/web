---
title: GetPlayerAnimationFlags
sidebar_label: GetPlayerAnimationFlags
description: "Obtenha os sinalizadores de animação do jogador."
tags: ["player", "animation"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os sinalizadores de animação do jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------ |
| playerid | O ID do jogador do qual você deseja obter os sinalizadores de animação |

## Retornos

Retorna os sinalizadores de animação do jogador como um número inteiro.

## Exemplos

Para obter cada sinalizador separadamente, é usado o mascaramento de bits.

```c

#define ANIM_FREEZE_FLAG   0b0000000000000100
#define ANIM_LOCK_X_FLAG   0b0010000000000
#define ANIM_LOCK_Y_FLAG   0b0001000000000
#define ANIM_LOOP_FLAG     0b0000100000000

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myanimflags"))
    {
        new messageString[128];
        new flags = GetPlayerAnimationFlags(playerid);

        new bool:freeze  =   (flags & ANIM_FREEZE_FLAG) != 0 ? true : false;
        new bool:lockx   =   (flags & ANIM_LOCK_X_FLAG) != 0 ? true : false;
        new bool:locky   =   (flags & ANIM_LOCK_Y_FLAG) != 0 ? true : false;
        new bool:loop    =   (flags & ANIM_LOOP_FLAG) != 0 ? true : false;

        format(messageString, sizeof(messageString), "Your anim flags are: [freeze:%i] [lockx:%i] [locky:%i] [loop:%i]", freeze, lockx, locky, loop);
        SendClientMessage(playerid, -1, messageString);

        return 1;
    }

    return 0;
}
```
## Notas

:::warning

Se o estado do jogador não for a pé, todos os sinalizadores de animação retornados serão 0.

:::

## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplique uma animação a um jogador.
