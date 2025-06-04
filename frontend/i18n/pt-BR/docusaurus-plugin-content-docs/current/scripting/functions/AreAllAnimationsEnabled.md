---
title: AreAllAnimationsEnabled
sidebar_label: AreAllAnimationsEnabled
description: As animações ausentes em algumas versões estão habilitadas?
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

As animações ausentes em algumas versões estão habilitadas?

## Retorno

true: Habilitado.
false: Desabilitado.

## Exemplos

```c
if (AreAllAnimationsEnabled())
{
    // Fazer algo
}
```
## Funções Relacionadas

- [EnableAllAnimations](EnableAllAnimations): Permite o uso das animações ausentes em algumas versões.
- [ApplyAnimation](ApplyAnimation): Aplica uma animação a um jogador.
- [ClearAnimations](ClearAnimations): Remove qualquer animação que um jogador esteja executando.

## Recursos Relacionados

- [Animations](../resources/animations)