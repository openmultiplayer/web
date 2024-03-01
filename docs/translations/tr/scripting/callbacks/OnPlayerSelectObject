---
title: OnPlayerSelectObject
description: Bu fonksiyon, oyuncu SelectObject kullanıldıktan sonra bir obje seçtiğinde çağrılır.
tags: ["player"]
---

## Açıklama

Bu fonksiyon, oyuncu SelectObject kullanıldıktan sonra bir obje seçtiğinde çağrılır.

| Parametre | Açıklama                                                   |
| --------- | ---------------------------------------------------------- |
| playerid  | Obje seçmiş olan oyuncunun ID'si.                          |
| type      | Seçilmiş objenin [türü](../resources/selectobjecttypes).   |
| objectid  | Seçilen objenin ID'si.                                     |
| modelid   | Seçilmiş objenin modeli.                                   |
| Float:fX  | Seçilmiş objenin X koordinatı.                             |
| Float:fY  | Seçilmiş objenin Y koordinatı.                             |
| Float:fZ  | Seçilmiş objenin Z koordinatı.                             |

## Çalışınca Vereceği Sonuçlar

1 - Diğer komut dosyalarının bu fonksiyonu çağırmasını engelleyecektir.

0 - Bu fonksiyonun bir sonraki komuta geçirileceğini gösterir.

Filterscript komutlarında her zaman ilk olarak çağrılır.

## Örnekler

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("%d ID'li oyuncu %d ID'li objeyi seçti.", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Artık obje düzenleyebilirsiniz!");
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [SelectObject](../functions/SelectObject): Obje seçme.
