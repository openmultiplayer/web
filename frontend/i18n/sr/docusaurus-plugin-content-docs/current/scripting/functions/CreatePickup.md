---
title: CreatePickup
sidebar_label: CreatePickup
description: Ова функција ради исто и AddStaticPickup, осим што враћа ИД pickup-a који можемо да пратимо под OnPlayerPickUpPickup или да га уништимо.
tags: []
---

## Опис

Ова функција ради исто и AddStaticPickup, осим што враћа ИД pickup-a који можемо да пратимо под OnPlayerPickUpPickup или да га уништимо.

| Име                              | Опис                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | Модел pickup-a                                                                  |
| [type](../resources/pickuptypes) | Spawn тип pickup-a                                                              |
| Float:X                          | X координата где се pickup креира                                               |
| Float:Y                          | Y координата где се pickup креира                                               |
| Float:Z                          | Z координата где се pickup креира                                               |
| virtualworld                     | Виртуелни свет pickup-a. Користите -1 да би се pickup показао у свим световима. |

## Враћа

ID kreiranog pickup-a, ili -1 ako ne uspe da ga kreira (pickup max limit).

## Примери

```c
new pickup; // Креирамо варијаблу где ћемо држати ИД pickup-a

public OnGameModeInit()
{
    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Креирамо pickup за armor i сачувамо ИД pickup-a у варијаблу pickup
    return 1;
}

// Касније..
DestroyPickup(pickup); // Пример коришћења ID-a pickup-a ( уништавамо pickup )
pickup = 0; // варијабла се мора ресетовати да би се избегло мешање са осталим
```

## Белешке

:::tip

- Једини тип pickup-а који може да се покупи из унутрашњости возила је 14 (осим пар специјалних pickup-ова као што су bribes). 
- Pickup-ови су видљиви свима и могу их покупити сви играчи. 
- Могуће је да, ако се користи DestroyPickup() када је pickup већ покупљен, више од једног играча може да покупи исти pickup због лаг-а. Ово се може избећи коришћењем променљивих. 
- Неки pickup-ови долазе са 'аутоматским одговором', на пример, M4 модел ће аутоматски дати играчу оружје и мало муниције. За потпуно скриптоване pickup-ове, треба користити тип 1.

:::

:::warning

Познати багови: Pickup-ови који имају X или Y мањи од -4096.0 или већи од 4096.0 неће бити приказани и неће активирати OnPlayerPickUpPickup.

:::

## Повезане функције

- [AddStaticPickup](AddStaticPickup): Додаје статички pickup.
- [DestroyPickup](DestroyPickup): Уништава pickup.
- [IsValidPickup](IsValidPickup): Проверва да ли је pickup валидан.
- [IsPickupStreamedIn](IsPickupStreamedIn): Проверава да ли је pickup стримиран за одређеног играча.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Проверава да ли је pickup скривен за одређеног играча.
- [SetPickupPos](SetPickupPos): Поставља позицију pickup-а.
- [GetPickupPos](GetPickupPos): Добија координате pickup-а.
- [SetPickupModel](SetPickupModel): Поставља модел pickup-а.
- [GetPickupModel](GetPickupModel): Добија ID модела pickup-а.
- [SetPickupType](SetPickupType): Поставља тип pickup-а.
- [GetPickupType](GetPickupType): Добија тип pickup-а.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Поставља виртуелни свет ID pickup-а.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Добија виртуелни свет ID pickup-а.
- [ShowPickupForPlayer](ShowPickupForPlayer): Приказује pickup за одређеног играча.
- [HidePickupForPlayer](HidePickupForPlayer): Скрива pickup од одређеног играча.
- [SetPickupForPlayer](SetPickupForPlayer): Подешава модел, тип и позицију pickup-а за одређеног играча.
- [CreatePlayerPickup](CreatePlayerPickup): Креира pickup који ће бити видљив само једном играчу.
- [DestroyPlayerPickup](DestroyPlayerPickup): Уништава player-pickup.

## Слични callback-ови

Следећи callbacks могу бити корисни, јер су повезани са овом функцијом.

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Позива се када играч покупи pickup.
- [OnPickupStreamIn](../callbacks/OnPickupStreamIn): Позива се када pickup уђе у видно поље играча.
- [OnPickupStreamOut](../callbacks/OnPickupStreamOut): Позива се када pickup изађе из видног поља играча.

## Слични ресурси

- [IDеви pickupova](../resources/pickupids)
- [Врсте pickupова](../resources/pickuptypes)
