---
title: RemovePlayerFromVehicle
sidebar_label: RemovePlayerFromVehicle
description: Remove/ejeta um jogador do seu veículo.
tags: ["player", "vehicle"]
---

## Descrição

Remove/ejeta um jogador do seu veículo.

| Nome        | Descrição                                                 |
| ----------- | --------------------------------------------------------- |
| playerid    | O ID do jogador a ser removido de seu veículo.            |
| bool:force  | Remover do veículo instantaneamente. (padrão: `false`)    |

## Retornos

**true** - A função foi executada com sucesso.

**false** - A função falhou ao ser executada. Isso significa que o jogador não está conectado.

## Exemplos

```c
// Exemplo - Jogadores só podem dirigir veículos se tiverem 10 pontos.
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PLAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## Notas

:::tip

- A animação de saída não é sincronizada para outros jogadores.
- Esta função não funcionará quando usada em [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle), porque o jogador ainda não está no veículo quando o callback é chamado. Use [OnPlayerStateChange](../callbacks/OnPlayerStateChange) em vez disso (veja o exemplo acima).
- Se o jogador estiver em um veículo RC, ele não será removido. (Use o parâmetro `.force = true` ou a função [ClearAnimations](ClearAnimations))

:::

## Funções Relacionadas

- [PutPlayerInVehicle](PutPlayerInVehicle): Coloca um jogador em um veículo.
