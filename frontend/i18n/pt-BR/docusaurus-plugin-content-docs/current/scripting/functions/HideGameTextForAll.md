---
title: HideGameTextForAll
description: Esconder um estilo de gametext para todos os jogadores.
tags: ["player", "gametext"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Interrompe a exibição de um estilo de gametext para todos os jogadores.

| Nome           | Descrição                                                      |
| -------------- | ----------------------------------------------------------------- |
| style          | O [estilo](../resources/gametextstyles) de texto a esconder.         |

## Retornos

Essa função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hidegametext3", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        HideGameTextForAll(3);
        return 1;
    }
    return 0;
}
```

## Funções Relacionadas

- [HideGameTextForPlayer](HideGameTextForPlayer): Esconder um estilo de gametext para um jogador.
- [GameTextForPlayer](GameTextForPlayer): Exibir um gametext para um jogador.
- [GameTextForAll](GameTextForAll): Exibir um gametext para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Esconder um textdraw para todos os jogadores.
