---
title: SetPlayerAmmo
description: Oyuncunun silah mermisini ayarlama.
tags: ["player"]
---

## Açıklama

Bir oyuncunun silahındaki mermi sayısını ayarlar.

| Parametre | Açıklama                                                                         |
| --------  | -------------------------------------------------------------------------------- |
| playerid  | Silahının mermisi ayarlanacak oyuncunun ID'si.                                   |
| weaponid  | Mermisi ayarlanacak silahın ID'si. (silah slotu değil)                           |
| ammo      | Ayarlanacak merminin miktarı.                                                    |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı. Silah ID'si geçersiz olsa bile sonuç döndürülür. (0-12 silah ID'leri hariç)

0: Girilen ID oyunda olmadığı için fonksiyon çalışmadı.

## Örnekler

```c
SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Shotgun mermilerini 100 olarak ayarlıyoruz.
```

## Notlar

:::tip

'weaponslot' parametresi SA:MP include'una ait bir yazım hatasıdır. Mermisini değiştirmek istediğiniz silahın slot'u yerine silahın ID'sini girmelisiniz.

:::

:::tip

Bir oyuncunun silahını silmek/elinden almak için mermi değerini 0 olarak girmelisiniz. Silahın GetPlayerWeaponData'da hala görüneceğini unutmayın.

:::

## Bağlantılı Fonksiyonlar

- [GetPlayerAmmo](GetPlayerAmmo): Bir oyuncunun belirtilen silahında ne kadar mermisi olduğunu kontrol eder.
- [GivePlayerWeapon](GivePlayerWeapon): Oyuncuya silah verir.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Oyuncunun kuşandığı(eline aldığı) silahı değiştirir.
