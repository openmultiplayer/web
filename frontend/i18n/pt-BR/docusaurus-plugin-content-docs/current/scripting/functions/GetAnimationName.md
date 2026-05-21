---
title: GetAnimationName
sidebar_label: GetAnimationName
description: "Obtenha a biblioteca/nome da animação para o índice."
tags: []
---


## Descrição

Obtenha a biblioteca/nome da animação para o índice.

| Nome | Descrição |
| -------------------------------- | --------------------------------------------------------- |
| index | O índice de animação, retornado por GetPlayerAnimationIndex. |
| animationLibrary[] | Variável string que armazena a biblioteca de animação.        |
| len1 = sizeof (animationLibrary) | Tamanho da string que armazena a biblioteca de animação.     |
| animationName[] | Variável string que armazena o nome da animação.           |
| len2 = sizeof (animationName) | Tamanho da string que armazena o nome da animação.        |

## Retornos

1 em sucesso, 0 em falha.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msgText[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msgText, sizeof msgText, "Running anim: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): Retorna o índice de qualquer animação aplicada em execução
