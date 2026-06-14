---
title: TogglePlayerClock
sidebar_label: TogglePlayerClock
description: "Alterne o relógio do jogo (canto superior direito) para um jogador específico."
tags: ["player"]
---


## Descrição

Alterne o relógio do jogo (canto superior direito) para um jogador específico. Quando ativado, o tempo progredirá em 1 minuto por segundo. O clima também interpolará (mudará lentamente ao longo do tempo) quando definido usando [SetWeather](SetWeather)/[SetPlayerWeather](SetPlayerWeather).

| Nome | Descrição |
| ----------- | ------------------------------------------------------ |
| playerid | O jogador cujo relógio você deseja ativar/desativar |
| bool:toggle | 'true' para mostrar e 'false' para ocultar. Oculto por padrão. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Mostrar o relógio
    return 1;
}
```
## Notas

:::tip

- O tempo não está sincronizado com outros jogadores! A hora pode ser sincronizada usando [SetPlayerTime](SetPlayerTime).
- O tempo avançará automaticamente 6 horas quando o jogador morrer.

:::

## Funções Relacionadas

- [GetPlayerTime](GetPlayerTime): Obtenha o tempo de um jogador.
- [SetPlayerTime](SetPlayerTime): Defina o tempo de um jogador.
- [SetWorldTime](SetWorldTime): Defina a hora global do servidor.
