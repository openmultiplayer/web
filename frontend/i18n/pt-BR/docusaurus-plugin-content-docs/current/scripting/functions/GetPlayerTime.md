---
title: GetPlayerTime
sidebar_label: GetPlayerTime
description: "Obtenha o tempo de jogo atual do jogador."
tags: ["player"]
---


## Descrição

Obtenha o tempo de jogo atual do jogador. Definido por [SetWorldTime](SetWorldTime) ou pelo jogo automaticamente se [TogglePlayerClock](TogglePlayerClock) for usado.

| Nome | Descrição |
| -------- | -------------------------------------------------------------- |
| playerid | O ID do jogador cujo tempo de jogo será obtido.                  |
| &hour | Uma variável na qual armazenar a hora, passada por referência.    |
| &minute | Uma variável na qual armazenar os minutos, passada por referência. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

O tempo atual do jogo é armazenado nas variáveis ​​especificadas.

## Exemplos

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "The time is 13:37!");
}
```
## Funções Relacionadas

- [SetPlayerTime](SetPlayerTime): Defina o tempo de um jogador.
- [SetWorldTime](SetWorldTime): Defina a hora global do servidor.
- [TogglePlayerClock](TogglePlayerClock): Alterne o relógio no canto superior direito.
