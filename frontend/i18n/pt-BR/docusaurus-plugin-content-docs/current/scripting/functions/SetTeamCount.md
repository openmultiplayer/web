---
title: SetTeamCount
sidebar_label: SetTeamCount
description: "Esta função é usada para alterar a quantidade de times usados ​​no modo de jogo."
tags: []
---


## Descrição

Esta função é usada para alterar a quantidade de times usados no modo de jogo. Não tem uma forma óbvia de ser utilizado, mas pode ajudar a indicar o número de equipes utilizadas para um melhor (mais eficaz) manejo interno. Esta função só deve ser usada no callback OnGameModeInit. Importante: Você pode passar 2 bilhões aqui se quiser, esta função não tem efeito algum.

| Nome | Descrição |
| ----- | ----------------------------------- |
| count | Número de equipes que o modo de jogo conhece. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit( )
{
    // Usamos equipes 18 neste modo Team-Deathmatch, defina-o;
    SetTeamCount(18);
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerTeam](GetPlayerTeam): Verifique em qual time um jogador está.
- [SetPlayerTeam](SetPlayerTeam): Defina a equipe de um jogador.
