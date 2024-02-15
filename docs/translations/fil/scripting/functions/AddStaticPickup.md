---
title: AddStaticPickup
description: Ang function na ito ay nagdaragdag ng 'static' pickup sa laro.
tags: []
---

## Description

Ang function na ito ay nagdaragdag ng 'static' pickup sa laro. Sinusuportahan ng mga pickup na ito ang mga sandata, kalusugan, armor atbp., na may kakayahang gumana nang walang script ng mga ito (awtomatikong ibibigay ang mga armas/kalusugan/armor).

| Name                                | Description                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | Ang modelo ng pickup.                                                                  |
| [type](../resources/pickuptypes) | Ang uri ng pickup. Tinutukoy kung paano tumugon ang pickup kapag kinuha.               |
| Float:X                             | Ang X coordinate para gawin ang pickup sa.                                          |
| Float:Y                             | Ang Y coordinate para gawin ang pickup sa.                                          |
| Float:Z                             | Ang Z coordinate para gawin ang pickup sa.                                          |
| virtualworld                        | Ang virtual world ID para ilagay ang pickup na iyon. Gamitin ang -1 para ipakita ang pickup sa lahat ng mundo. |

## Returns

1 kung matagumpay na nagawa ang pickup.

0 kung nabigong gumawa.

## Examples

```c
public OnGameModeInit()
{
    // Gumawa ng pickup para sa armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Gumawa ng pickup para sa ilang kalusugan, sa tabi mismo ng armor
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Notes

:::tip

Ang function na ito ay hindi nagbabalik ng pickup ID na magagamit mo, halimbawa, OnPlayerPickUpPickup. Gamitin ang CreatePickup kung gusto mong magtalaga ng mga ID.

:::

## Related Functions

- [CreatePickup](CreatePickup): Gumawa ng pickup.
- [DestroyPickup](DestroyPickup): Sirain ang pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Tinatawag kapag kinuha ng manlalaro ang isang pickup.