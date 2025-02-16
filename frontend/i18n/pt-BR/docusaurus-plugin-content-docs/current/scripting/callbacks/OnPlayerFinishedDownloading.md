---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: Esta callback é chamada quando um jogador termina de baixar os modelos customizados.
tags: ["player"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.DL-R1' />

## Descrição

Esta callback é chamada quando um jogador termina de baixar os modelos customizados. Para mais informações de como adicionar modelos customizados no servidor, veja a thread de lançamento e este tutorial.

| Nome         | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| playerid     | O ID do jogador que terminou de baixar os modelos.               |
| virtualworld | O ID do mundo virtual a qual o jogador está baixando os modelos. |

## Retornos

Esta função não suporta retornos.

## Exemplos

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Download Concluído.");
    return 1;
}
```

## Notas

:::tip

Esta callback é chamada toda vez que um jogador muda de munda virtual, mesmo que não contenha modelos customizados no mesmo.

:::

## Funções Relacionadas
