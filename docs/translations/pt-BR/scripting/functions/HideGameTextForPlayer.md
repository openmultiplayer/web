---

title: HideGameTextForPlayer  
description: Esconder um estilo de gametext para um jogador.  
tags: ["player", "gametext"]  
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Interrompe a exibição de um estilo de gametext para um jogador.

| Nome           | Descrição                                                      |
| -------------- | ----------------------------------------------------------------- |
| playerid       | O ID do jogador para o qual o gametext será ocultado.             |
| style          | O [estilo](../resources/gametextstyles) do texto a ser ocultado.   |

## Retornos

Essa função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    HideGameTextForPlayer(playerid, 3);
    return 1;
}
```

## Funções Relacionadas

- [HideGameTextForAll](HideGameTextForAll): Parar de mostrar um estilo de gametext para todos os jogadores.
- [GameTextForPlayer](GameTextForPlayer): Mostrar gametext para um jogador.
- [GameTextForAll](GameTextForAll): Mostrar gametext para todos os jogadores.
- [GetGameText](GetGameText): Obtém todas as informações sobre o estilo de gametext dado.
- [HasGameText](HasGameText): O jogador tem um texto no estilo de gametext atual sendo exibido?
- [TextDrawHideForAll](TextDrawHideForAll): Esconder um textdraw para todos os jogadores.