---
title: OnPlayerWeaponShot
description: Bu fonksiyon, oyuncu ateş ettiğinde çağrılır.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3z' />

## Açıklama

Bu fonksiyon, oyuncu ateş ettiğinde çağrılır. Bu fonksiyon ateşli silahları destekler. Sadece yolcu drive-by'ını destekler.(buna sürücünün drive-by atması, sea sparrow/hunter gibi araçların silahları dahil değildir.).

| Parametre | Açıklama                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------- |
| playerid  | Ateş eden oyuncunun ID'si.                                                                                |
| weaponid  | Ateşlenen silahın [silah ID'leri](../resources/weaponids) ID'si.                                          |
| hittype   | Oyuncunun vuruş türü. [türler](../resources/bullethittypes). (oyuncu, obje veya araç gibi).               |
| hitid     | Vurulan oyuncunun, objenin veya aracın ID'si.                                                             |
| fX        | Ateşlenen merminin gittiği X koordinatı.                                                                  |
| fY        | Ateşlenen merminin gittiği Y koordinatı.                                                                  |
| fZ        | Ateşlenen merminin gittiği Z koordinatı.                                                                  |

## Çalışınca Vereceği Sonuçlar

0 - Merminin hasar vermesini önleyin.

1 - Merminin hasar vermesini sağlayın.

Filterscript komut dosyalarında her zaman ilk olarak çağrılır, bu nedenle 0 döndürmek, diğer komut dosyalarının da görmesini engeller.

## Örnekler

```c
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "Silah %i ateşlendi. vuruş türü: %i   vurulan id: %i   koordinatlar: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon, yalnızca gecikme telafisi etkinleştirildiğinde çağrılır. İsabet türü eğer:

- BULLET_HIT_TYPE_NONE ise : fX, fY ve fZ parametreleri normal koordinatlardır, eğer hiçbir şey vurulmadıysa koordinatlar için 0,0 döner. (örneğin, merminin ulaşamadığı uzak nesne)
- Diğerleri ise : fX, fY ve fZ, hitid'ye göre ofsetlerdir.

:::

:::tip

GetPlayerLastShotVectors, detaylı mermi vektör bilgileri için bu çağrıda kullanılabilir.

:::

:::warning

Bilinen Hata(lar): Şoför olarak araca ateş ettiyseniz veya hedef etkinken arkanıza bakıyorsanız fonksiyon çağrılmaz. Araç içindeki bir oyuncuya ateş ediyorsanız vuruş tipi BULLET_HIT_TYPE_VEHICLE (vurulan oyuncunun araç ID'si) olarak geçer. Hiç BULLET_HIT_TYPE_PLAYER olarak çağrılmaz. 

SA-MP 0.3.7 sürümünde kısmen düzeltildi: Sahte silah verileri kötü niyetli bir kullanıcı tarafından gönderilirse, diğer oyuncu istemcileri donabilir veya çökebilir. Bunu önlemek için, ateşlenen silahın gerçekten mermi ateşleyip ateşleyemeyeceğini kontrol edin. 

:::

## Bağlantılı Fonksiyonlar

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Oyuncunun attığı son merminin vektör bilgilerini kontrol etme.
