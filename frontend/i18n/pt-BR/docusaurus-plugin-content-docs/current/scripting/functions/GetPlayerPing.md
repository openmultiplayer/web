---
title: GetPlayerPing
sidebar_label: GetPlayerPing
description: "Obtenha o ping de um jogador."
tags: ["player"]
---


## Descrição

Obtenha o ping de um jogador. O ping mede a quantidade de tempo que leva para o servidor fazer 'ping' no cliente e para o cliente enviar a mensagem de volta.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador do qual obter o ping. |

## Retornos

O ping atual do jogador (expresso em milissegundos).

## Exemplos

```c
new string[24];
format(string, sizeof(string), "Your ping: %d", GetPlayerPing(playerid));
SendClientMessage(playerid, -1, string);
```
<br />

**Exemplo para expulsar jogadores com ping alto:**

```c
// Declare uma matriz de todos os identificadores de cronômetro possíveis para cronômetros para expulsar jogadores com
// ping geralmente alto com valor padrão de 0
new gPlayerPingTimer[MAX_PLAYERS] = {0, ...};

// Uma constante (boa documentação :))
const MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // Inicie o cronômetro e atribua à variável o identificador do cronômetro
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // Mate o cronômetro e redefina o valor para inválido
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = 0;
}

// Uma função encaminhada (retorno de chamada)
forward Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // Expulsar o jogador se o seu ping for maior que o ping alto geralmente aceito
    new ping = GetPlayerPing(playerid);
    if (ping > MAX_ACCEPTED_PING)
    {
        new string[128];
        format(string, sizeof(string), "You have been kicked from the server. Reason: high ping (%d)", ping);
        SendClientMessage(playerid, -1, string);

        Kick(playerid);
    }
    return 1;
}
```
## Notas

:::warning

O ping do jogador pode ser 65535 por um tempo após o jogador se conectar

:::

## Funções Relacionadas

- [GetPlayerIp](GetPlayerIp): Obtenha o IP de um jogador.
- [GetPlayerName](GetPlayerName): Obtenha o nome de um jogador.
- [GetPlayerVersion](GetPlayerVersion): Obtenha a versão do cliente de um jogador.
