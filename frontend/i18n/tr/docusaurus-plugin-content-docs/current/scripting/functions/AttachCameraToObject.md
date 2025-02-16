---
title: AttachCameraToObject
sidebar_label: AttachCameraToObject
description: Bu fonksiyonu, bir oyuncuya kamera yerleştirmek için kullanabilirsiniz.
tags: []
---

## Açıklama

Bu fonksiyonu, bir oyuncuya kamera yerleştirmek için kullanabilirsiniz.

| İsim     | Açıklama                                                             |
| -------- | -------------------------------------------------------------------- |
| playerid | Kamera yerleştirilecek oyuncu numarası.                              |
| objectid | Yerleştirmek istenilen objenin numarası.                             |

## Vereceği Geri Dönüş (Return) Değerleri

Bu fonksiyon, herhangi bir return döndürmez.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Kamera oyuncuya yerleştirildi.");
        return 1;
    }
    return 0;
}
```

## Notlar

:::tip

Oyuncuya kamera yerleştirmeden önce, objeyi yaratman gerekir.

:::

## Bağlantılı Fonksiyonlar

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Kamerayı bir oyuncunun objesine yerleştirir.
