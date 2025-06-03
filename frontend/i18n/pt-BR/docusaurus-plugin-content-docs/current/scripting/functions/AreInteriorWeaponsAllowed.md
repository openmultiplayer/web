---
title: AreInteriorWeaponsAllowed
sidebar_label: AreInteriorWeaponsAllowed
description: Armas podem ser usadas em interiores?
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Armas podem ser usadas em interiores?

## Retorno

true: Permitido.
false: Não permitido.

## Exemplos

```c
if (AreInteriorWeaponsAllowed())
{
    // Fazer algo
}
```

## Funções Relacionadas

- [AllowInteriorWeapons](AllowInteriorWeapons): Alterna se o uso de armas em interiores é permitido ou não.