---
title: ClearBanList
sidebar_label: ClearBanList
description: Limpa a lista de banimentos.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Limpa a lista de banimentos.

## Retorno

**true** - Sucesso.

**false** - Falhou ao executar a função.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearbanlist", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        ClearBanList();
        SendClientMessage(playerid, -1, "[SERVER]: Lista de banimentos limpa.");
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

Você pode ver a lista de banimentos no arquivo **bans.json**.

:::

## Funções Relacionadas

- [BlockIpAddress](BlockIpAddress): Bloqueia um endereço IP de conectar ao servidor por um período determinado.
- [UnBlockIpAddress](UnBlockIpAddress): Desbloqueia um IP que foi previamente bloqueado.
- [Ban](Ban): Bane um jogador de jogar no servidor.
- [BanEx](BanEx): Bane um jogador com uma razão personalizada.
- [Kick](Kick): Expulsa um jogador do servidor.
- [IsBanned](IsBanned): Verifica se o endereço IP especificado está banido.