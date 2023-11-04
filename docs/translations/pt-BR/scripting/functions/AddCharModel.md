---
title: AddCharModel
description: Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo são armazenados em Documentos\GTA San Andreas User Files\SAMP\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.
tags: []
---

## Descrição

:::warning

Esta função foi implementada no SA-MP 0.3.DL-R1 e não funcionará em versões anteriores.

:::

Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo serão armazenados em Documentos\GTA San Andreas User Files\SAMP\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.

| Nome    | Descrição                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| baseid  | O ID do modelo da skin original a ser usado como base (personagens originais são usados caso o download falhar).           |
| newid   | O ID do modelo da nova skin. Varia entre 20.000 a 30000 (10.000 slots) para serem usados posteriormente com SetPlayerSkin. |
| dffname | Nome do arquivo de extensão .dff localizado na pasta do servidor de modelos por padrão (configuração artpath).             |
| txdname | Nome do arquivo de textura de extensão .txd localizado na pasta do servidor de modelos por padrão (configuração artpath).  |

## Retorno

1: A função foi executada com sucesso.

0: Falha ao executar a função.

## Exemplos

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Notas

:::tip

"useartwork" deve ser habilitado primeiro nas configurações do servidor para que essa função funcione.

:::

:::warning

Atualmente não há restrições sobre quando você pode chamar esta função, mas esteja ciente de que se você não chamá-los dentro de OnFilterScriptInit ou OnGameModeInit, você corre o risco de que alguns jogadores, que já estão no servidor, não tenham baixado os modelos.

:::

## Funções Relacionadas

- [SetPlayerSkin](SetPlayerSkin): Define a skin (personagem) de um jogador.
