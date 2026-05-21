---
title: ShowPlayerNameTagForPlayer
sidebar_label: ShowPlayerNameTagForPlayer
description: "Esta função permite que você alterne o desenho dos crachás dos jogadores, barras de saúde e barras de armadura que são exibidas acima de suas cabeças."
tags: ["player"]
---


## Descrição

Esta função permite que você alterne o desenho dos crachás dos jogadores, barras de saúde e barras de armadura que são exibidas acima de suas cabeças. Para uso de uma função semelhante como esta em nível global, função [ShowNameTags](ShowNameTags).

| Nome | Descrição |
| --------- | ---------------------------------------------------- |
| playerid | Jogador que verá os resultados desta função.    |
| targetid | Jogador cuja etiqueta de nome será mostrada ou ocultada.       |
| bool:show | 'true' para mostrar a etiqueta de nome, 'false' para ocultar a etiqueta de nome. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // O jogador que digitou /nameoff não poderá ver o crachá de nenhum outro jogador.
    if (strcmp("/nameoff", cmdtext, true) == 0)
    {
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            ShowPlayerNameTagForPlayer(playerid, i, false);
        }
        GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

[ShowNameTags](ShowNameTags) deve ser definido como 'true' para poder mostrar tags de nome com ShowPlayerNameTagForPlayer, isso significa que para ser eficaz você precisa ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) com antecedência ([OnPlayerStreamIn](../callbacks/OnPlayerStreamIn) é um bom local).

:::

## Funções Relacionadas

- [ShowNameTags](ShowNameTags): ativa ou desativa etiquetas de nome.
- [DisableNameTagLOS](DisableNameTagLOS): Desativa a verificação de linha de visão do crachá.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador.
