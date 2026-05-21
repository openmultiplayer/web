---
title: ToggleChatTextReplacement
sidebar_label: ToggleChatTextReplacement
description: "Alterna o filtro de entrada do chat."
tags: []
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Alterna o filtro de entrada do chat.

Desabilite para uso de caracteres como % no chat.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------- |
| bool:enable | 'true' para ativar ou 'false' para desativar o filtro de entrada de chat. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    ToggleChatTextReplacement(false);
    return 1;
}
```
## Notas

:::tip

Você também pode alternar o filtro de entrada de bate-papo no arquivo config.json.

```json
"chat_input_filter": true,
```
:::

## Funções Relacionadas

- [ChatTextReplacementToggled](ChatTextReplacementToggled): Verifica se a filtragem de entrada do chat está habilitada ou desabilitada.
