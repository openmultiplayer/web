---
title: AddSimpleModel
sidebar_label: AddSimpleModel
description: Adiciona um novo modelo de objeto simples personalizado para download.
tags: []
---

Esta função foi implementada no SA-MP 0.3.DL-R1 e não funcionará em versões anteriores.

## Descrição

Adiciona um novo modelo de objeto simples personalizado para download. Os arquivos do modelo são armazenados em Documentos\GTA San Andreas User Files\SAMP\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.

| Nome         | Descrição                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| virtualworld | O ID do mundo virtual ao qual pretende colocar o modelo. Use -1 para todos os mundos.                                                            |
| baseid       | O ID do modelo do objeto original a ser usado como base (objeto original é usado se o download falhar).                                          |
| newid        | O ID do modelo do novo objeto. Varia entre -1000 a -30000 (29000 slots) para serem usados posteriormente com CreateObject ou CreatePlayerObject. |
| dffname      | Nome do arquivo de extensão .dff localizado na pasta do servidor de modelos por padrão (configuração artpath).                                   |
| txdname      | Nome do arquivo de textura de extensão .txd localizado na pasta do servidor de modelos por padrão (configuração artpath).                        |

## Retorno

1: A função foi executada com sucesso.

0: Falha ao executar a função.

## Exemplos

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Notas

:::tip

"useartwork" deve ser habilitado primeiro nas configurações do servidor para que essa função funcione.

:::

:::warning

Atualmente não há restrições sobre quando você pode chamar esta função, mas esteja ciente de que se você não chamá-los dentro de OnFilterScriptInit ou OnGameModeInit, você corre o risco de que alguns jogadores, que já estão no servidor, não tenham baixado os modelos.

:::

## Funções Relacionadas

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): É chamada quando um jogador termina o download dos modelos personalizados.
