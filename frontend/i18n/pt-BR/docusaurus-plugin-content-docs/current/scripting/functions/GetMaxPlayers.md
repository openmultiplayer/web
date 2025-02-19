---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: Retorna o número máximo de jogadores que podem entrar no servidor, conforme definido pela variável 'maxplayer' no servidor.
tags: ["player"]
---

## Descrição

Retorna o número máximo de jogadores que podem entrar no servidor, conforme definido pela variável 'maxplayer' no server.cfg.

## Exemplos

```c
new str[128];
format(str, sizeof(str), "Existem %i slots neste servidor!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, str);
```

## Notas

:::warning

Esta função não pode ser usada no lugar de MAX_PLAYERS. Não pode ser usado durante a compilação (por exemplo, para tamanhos de arrays). MAX_PLAYERS deve ser sempre redefinido ao valor que a variável 'maxplayer' será ou superior. Veja MAX_PLAYERS para mais informações.

:::

## Funções Relacionadas

- [GetPlayerPoolSize](GetPlayerPoolSize): Obtém o playerid mais alto conectado ao servidor.
- [IsPlayerConnected](IsPlayerConnected): Verifica se um jogador está conectado ao servidor.
