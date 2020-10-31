---
title: DestroyPickup
description: Destrói uma pickup criada com CreatePickup.
tags: []
---

## Descrição

Destrói uma pickup criada com CreatePickup.

| Nome   | Descrição                                                   |
| ------ | ----------------------------------------------------------- |
| pickup | O ID da pickup a ser destruída (retornado por CreatePickup) |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Cria uma pickup para colete.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

//algum tempo depois...
DestroyPickup(pickup_armour);
```

## Funções Relacionadas

- [CreatePickup](CreatePickup.md): Cria uma pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): É chamado quando um jogador pega uma pickup.
