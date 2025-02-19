---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Chamado quando um jogador muda de classe na seleção de classe (e quando a seleção de classe aparece pela primeira vez).
tags: ["player"]
---

## Descrição

Chamado quando um jogador muda de classe na seleção de classe (e quando a seleção de classe aparece pela primeira vez).

| Nome     | Descrição                                                                   |
| -------- | --------------------------------------------------------------------------- |
| playerid | O ID do jogador que mudou de classe                                         |
| classid  | O ID da classe atual que está sendo vista (retornardo pelo AddPlayerClass). |

## Retorno

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Esta skin é apenas para ADMINS!");
        return 0;
    }
    return 1;
}
```

## Notas

:::tip

Esta callback também é chamada quando um jogador pressiona F4.

:::

## Funções Relacionadas

- [AddPlayerClass](../functions/AddPlayerClass): Adiciona uma classe.
