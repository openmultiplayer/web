---
title: AddCharModel
sidebar_label: AddCharModel
description: Adiciona um novo modelo de personagem personalizado para download.
tags: []
---

## Descrição

<VersionWarn version='SA-MP 0.3.DL R1' />

Adiciona um novo [modelo de personagem](SetPlayerSkin) personalizado para download. Os arquivos do modelo serão armazenados em `Documentos\GTA San Andreas User Files\SAMP\cache` do jogador sob a pasta IP e Porta do Servidor em um arquivo no [formato CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check).

| Nome    | Descrição                                                                                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| baseid  | O [ID do modelo da skin](../resources/skins) original a ser usado como base (personagens originais são usados caso o download falhar).                                          |
| newid   | O ID do modelo da nova skin. Varia entre 20001 a 30000 (10000 slots) para serem usados posteriormente com [SetPlayerSkin](SetPlayerSkin).                                       |
| dffname | Nome do arquivo de extensão **.dff** localizado na pasta do servidor de modelos por padrão (configuração [artpath](../../server/server.cfg#modelos-personalizados)).            |
| txdname | Nome do arquivo de textura de extensão **.txd** localizado na pasta do servidor de modelos por padrão (configuração [artpath](../../server/server.cfg#modelos-personalizados)). |

## Retorno

**1**: A função foi executada com sucesso.

**0**: Falha ao executar a função.

## Exemplos

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

## Notas

:::note

**useartwork** deve ser habilitado primeiro nas [configurações do servidor](../../server/server.cfg#modelos-personalizados) para que essa função funcione.

:::

:::warning

Atualmente não há restrições sobre quando você pode chamar esta função, mas esteja ciente de que se você não chamá-los dentro de [OnFilterScriptInit](../callbacks/OnFilterScriptInit) ou [OnGameModeInit](../callbacks/OnGameModeInit), você corre o risco de que alguns jogadores, que já estão no servidor, não tenham baixado os modelos.

:::

## Funções Relacionadas

- [SetPlayerSkin](SetPlayerSkin): Define a skin (personagem) de um jogador.
