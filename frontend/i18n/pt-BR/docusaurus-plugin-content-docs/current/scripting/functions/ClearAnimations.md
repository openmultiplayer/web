---
title: ClearAnimations
sidebar_label: ClearAnimations
description: Limpa todas as animações para o jogador especificado (também cancela todas as tarefas atuais como jetpack, paraquedas, entrar em veículos, dirigir (remove o jogador do veículo), nadar, etc).
tags: ["player", "animation"]
---

## Descrição

Limpa todas as animações para o jogador especificado (também cancela todas as tarefas atuais como jetpack, paraquedas, entrar em veículos, dirigir (remove o jogador do veículo), nadar, etc).

| Nome                 | Descrição                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| playerid             | O ID do jogador para limpar as animações.                                                                           |
| FORCE_SYNC:forceSync | Defina como `SYNC_ALL` para forçar o playerid a sincronizar a animação com outros jogadores no raio de streaming (padrão=SYNC_NONE) |

## Retorno

Esta função sempre retorna **true**, mesmo quando o jogador especificado não está conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

ClearAnimations não faz nada quando a animação termina se passarmos 'true' para o parâmetro freeze em ApplyAnimation.

:::

:::tip

Ao contrário de outras maneiras de remover o jogador de um veículo, isso também redefinirá a velocidade do veículo para zero, parando instantaneamente o carro. O jogador aparecerá no topo do veículo com a mesma localização que estava no assento do carro.

:::

## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplica uma animação a um jogador.