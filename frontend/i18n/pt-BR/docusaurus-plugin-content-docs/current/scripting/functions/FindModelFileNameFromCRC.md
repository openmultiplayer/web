---
title: FindModelFileNameFromCRC
sidebar_label: FindModelFileNameFromCRC
description: Encontra um arquivo de modelo existente de skin customizada ou objeto simples.
tags: ["custom model", "custom skin", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Descrição

Encontra um arquivo de modelo existente de skin customizada ou objeto simples. Os arquivos de modelo ficam na pasta `models` do servidor por padrão (configuração artpath).

| Name                   | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| crc                    | O checksum CRC do arquivo de modelo customizado.                           |
| output[]               | Um array para armazenar o nome do arquivo .dff, passado por referência.   |
| size = sizeof (output) | O tamanho da string que deve ser armazenada.                               |

## Retorno

**1:** A função foi executada com sucesso.

**0:** A função falhou ao executar.

## Funções Relacionadas

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Chamada quando um jogador termina de baixar modelos customizados.
