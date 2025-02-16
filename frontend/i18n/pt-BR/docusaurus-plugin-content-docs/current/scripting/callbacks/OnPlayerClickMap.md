---
title: OnPlayerClickMap
description: OnPlayerClickMap é chamado quando um jogador pocisiona um ponto no mapa do menu de pausa (clicando com botão direito).
tags: ["player"]
---

## Descrição

OnPlayerClickMap é chamado quando um jogador pocisiona um ponto no mapa do menu de pausa (clicando com botão direito).

| Nome     | Descrição                                                         |
| -------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador que posicionou o ponto                            |
| Float:fX | A coordenada X de onde o jogador clicou                           |
| Float:fY | A coordenada y de onde o jogador clicou                           |
| Float:fZ | A coordenada z de onde o jogador clicou (impreciso - veja abaixo) |

## Retornos

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notas

:::tip

Como o nome da callback diz, é apenas chamada quando o jogador marca o alvo no mapa, e não quandoa tecla é pressionada. O valor Z retornada será 0 (invalido) se a área clicada no mapa estiver muito distante do jogador. Use os plugins MapAndreas ou ColAndreas para receber uma coordenada Z mais precisa.

:::

## Funções Relacionadas
