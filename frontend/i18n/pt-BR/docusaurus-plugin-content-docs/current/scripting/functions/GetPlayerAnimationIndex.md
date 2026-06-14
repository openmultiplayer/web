---
title: GetPlayerAnimationIndex
sidebar_label: GetPlayerAnimationIndex
description: "Retorna o índice de quaisquer animações aplicadas em execução."
tags: ["player", "animation"]
---


## Descrição

Retorna o índice de quaisquer animações aplicadas em execução.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------- |
| playerid | ID do jogador do qual você deseja obter o índice de animação. |

## Retornos

0 se não houver animação aplicada.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animationLibrary[32],
            animationName[32],
            string[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animationLibrary, sizeof (animationLibrary), animationName, sizeof (animationName));

        format(string, sizeof (string), "Running anim: %s %s", animationLibrary, animationName);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```
## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplique uma animação a um jogador.
- [GetAnimationName](GetAnimationName): Obtenha a biblioteca/nome da animação para o índice.
