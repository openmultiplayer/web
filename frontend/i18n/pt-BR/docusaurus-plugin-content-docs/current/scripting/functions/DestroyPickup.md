---

title: DestroyPickup
sidebar\_label: DestroyPickup
description: Destroi um pickup criado com CreatePickup.
tags: \["pickup"]
---

## descrição

Destrói um pickup criado com CreatePickup.

| Nome   | Descrição                                              |
| ------ | ------------------------------------------------------ |
| pickup | O ID do pickup a destruir (retornado por CreatePickup) |

## retorno

**true** - A função executou com sucesso.

**false** - A função falhou. O pickup especificado não existe.

## exemplo

```c
new g_PickupArmour;

// Cria um pickup de armadura.
g_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);

// Mais tarde...
DestroyPickup(g_PickupArmour);
```

## funções relacionadas

* [CreatePickup](CreatePickup): Cria um pickup.
* [IsValidPickup](IsValidPickup): Verifica se um pickup é válido.

## callbacks relacionados

* [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Chamado quando um jogador apanha um pickup.
