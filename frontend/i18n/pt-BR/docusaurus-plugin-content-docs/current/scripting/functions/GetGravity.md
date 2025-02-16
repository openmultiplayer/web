---
title: GetGravity
sidebar_label: GetGravity
description: Obtém a gravidade atualmente definida.
tags: []
---

## Descrição

Obtém a gravidade atualmente definida.

## Exemplos

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Gravidade atual: %f", GetGravity());
```

## Notas

:::warning

Esta função não está definida por padrão. Adicione 'native Float:GetGravity();' na inclusão a_samp.inc para usá-la.

:::

## Funções Relacionadas

- [SetGravity](SetGravity): Define a gravidade global.
