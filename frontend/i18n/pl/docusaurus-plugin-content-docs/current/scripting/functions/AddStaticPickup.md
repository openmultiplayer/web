---
title: AddStaticPickup
description: Ta funkcja dodaje „statyczny” pickup do gry.
tags: []
---

## Opis

Ta funkcja dodaje „statyczny” pickup do gry. Pickupy wspierają bronie, zdrowie, kamizelkę itd. i mogą działać bez konieczności ich dodatkowego kodowania (bronie/życie/kamizelka będą dawane automatycznie).

| Nazwa                               | Opis                                                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [model](../resources/pickupids.md)  | Model pickupu.                                                                                                    |
| [type](../resources/pickuptypes.md) | Typ pickupu. Decyduje o reakcji pickupu na jego podniesienie.                                                     |
| Float:X                             | Koordynat X, na którym pickup zostanie utworzony.                                                                 |
| Float:Y                             | Koordynat Y, na którym pickup zostanie utworzony.                                                                 |
| Float:Z                             | Koordynat Z, na którym pickup zostanie utworzony.                                                                 |
| virtualworld                        | ID wirtualnego świata, w którym pickup ma zostać umieszczony. Użyj -1, aby pokazać pickup we wszystkich światach. |

## Zwracane wartości

1: Pickup został utworzony pomyślnie.

0: Pickup nie został utworzony.

## Przykłady

```c
public OnGameModeInit()
{
    // Tworzy pickup z kamizelką
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Tworzy pickup od życia, tuż obok kamizelki
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Uwagi

:::tip

Ta funkcja nie zwraca ID pickupu, którego możesz użyć na przykład w OnPlayerPickUpPickup. Użyj CreatePickup, jeżeli chcesz przypisać ID.

:::

## Powiązane funkcje

- [CreatePickup](CreatePickup.md): Tworzy pickup.
- [DestroyPickup](DestroyPickup.md): Kasuje pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): Wywoływane, gdy gracz podnosi pickup.
