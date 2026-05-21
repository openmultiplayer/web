---
title: IsBanned
sidebar_label: IsBanned
description: "Verifica se o endereço IP fornecido foi banido."
tags: ["ip address"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se o endereço IP fornecido foi banido.

| Nome | Descrição |
| ----------------- | ------------------------ |
| const ipAddress[] | O endereço IP a ser verificado. |

## Retornos

Retorna **true** se o endereço IP for banido, caso contrário **false**.

## Exemplos

```c
if (IsBanned("255.255.255.255"))
{
    // Faça alguma coisa
}
```
## Notas

:::tip

Você pode ver a lista de banimentos no arquivo **bans.json**.

:::

## Funções Relacionadas

- [BlockIpAddress](BlockIpAddress): Bloqueia a conexão de um endereço IP ao servidor por um determinado período de tempo.
- [UnBlockIpAddress](UnBlockIpAddress): Desbloqueie um IP que foi bloqueado anteriormente.
- [Ban](Ban): Bane um jogador de jogar no servidor.
- [BanEx](BanEx): Banir um jogador por um motivo personalizado.
- [Kick](Kick): Expulsa um jogador do servidor.
- [ClearBanList](ClearBanList): Limpa a lista de banimentos.
