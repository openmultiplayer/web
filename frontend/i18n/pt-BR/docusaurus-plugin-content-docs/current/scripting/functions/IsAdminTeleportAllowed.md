---
title: IsAdminTeleportAllowed
sidebar_label: IsAdminTeleportAllowed
description: "Verifica se os administradores do RCON têm permissão para se teletransportar clicando com o botão direito no mapa."
tags: []
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se os administradores do RCON têm permissão para se teletransportar clicando com o botão direito no mapa.

## Retornos

true: Permitido.

false: Não permitido.

## Exemplos

```c
if (IsAdminTeleportAllowed())
{
    // Faça alguma coisa
}
```
## Funções Relacionadas

- [AllowAdminTeleport](AllowAdminTeleport): Determine se os administradores de RCON serão teletransportados para seu waypoint quando definirem um.
- [AllowPlayerTeleport](AllowPlayerTeleport): Alterna o teletransporte de waypoint para jogadores.
- [IsPlayerAdmin](IsPlayerAdmin): Verifica se um jogador está logado em RCON.
