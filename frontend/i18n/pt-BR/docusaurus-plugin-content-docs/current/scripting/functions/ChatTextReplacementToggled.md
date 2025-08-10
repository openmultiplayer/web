---
title: ChatTextReplacementToggled
sidebar_label: ChatTextReplacementToggled
description: Verifica se a filtragem de entrada do chat está habilitada ou desabilitada.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a filtragem de entrada do chat está habilitada ou desabilitada.

## Retorno

true: Habilitado.

false: Desabilitado.

## Exemplos

```c
printf("Filtro de entrada do chat está %s", ChatTextReplacementToggled() ? "Habilitado" : "Desabilitado");
```

## Funções Relacionadas

- [ToggleChatTextReplacement](ToggleChatTextReplacement): Alterna o filtro de entrada do chat.