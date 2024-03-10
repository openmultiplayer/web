---
title: AddVehicleComponent
description: Girilen araç idsine modifikasyon yapar.
tags: []
---

## Açıklama

Girilen araç ID'sine uygun şekilde modifikasyon yapmanızı sağlar.

| İsim         | Açıklama                                                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| vehicleid    | modifikasyon yapılacak aracın ID'si.                                                                                          |
| [componentid](../resources/carcomponentid)  | araca yapılacak modifikasyon ID'si.                                                                                           |

## Çalışınca Vereceği Sonuçlar

1: Modifikasyon başarıyla araca yüklendi.

0: Modifikasyon yapılamadı çünkü böyle bir araç yok.

## Örnekler

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taksi ekliyoruz
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitronun ID'sini (1010) kullanarak taksiye ekliyoruz
            SendClientMessage(playerid, 0xFFFFFFAA, "Taksiye nitro eklendi.");
        }
    }
    return 1;
}
```

## Notlar

:::warning

Yanlış modifikasyon ID'si kullanmak bölgedeki oyuncuların oyununun çökmesine neden olabilir ve bunu kontrol edemezsiniz.

:::

## Bağlantılı Fonksiyonlar

- [RemoveVehicleComponent](RemoveVehicleComponent.md): Araçtan bir modifikasyon silin.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot.md): Slottaki araç modifikasyonunu öğrenin.
- [GetVehicleComponentType](GetVehicleComponentType:.md): Aracın modifikasyon tipini öğrenin.
- [OnVehicleMod](../callbacks/OnVehicleMod.md): Bu callback araç modifiye edildiğinde çağrılır.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop.md): Bu callback bir araç modifiye noktasına girdiğinde/çıktığında çağrılır.
