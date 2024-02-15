---
title: DestroyPickup
description: Sinisira ang isang pickup na ginawa gamit ang CreatePickup.
tags: []
---

## Description

Sinisira ang isang pickup na ginawa gamit ang CreatePickup.

| Name   | Description                                                 |
| ------ | ----------------------------------------------------------- |
| pickup | Ang ID ng pickup na sisirain (nirereturn ng CreatePickup).  |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
// Gumawa ng pickup para sa armor.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

// mamaya
DestroyPickup(pickup_armour);
```

## Related Functions

- [CreatePickup](CreatePickup): Gumawa ng pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Tinatawag kapag may player na kumuha ng pickup.