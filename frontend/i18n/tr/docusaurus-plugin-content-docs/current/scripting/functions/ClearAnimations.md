---
title: ClearAnimations
sidebar_label: ClearAnimations
description: Oyuncunun uyguladığı bütün animasyonları ipta eder.
tags: []
---

## Açıklama

Oyuncunun uyguladığı bütün animasyonları ipta eder. (Aynı zamanda jetpackteyken, paraşütle atlarken, araca binerken, araç kullanırken, yüzerken yapılan animasyonlarda bu duruma dahildir.)

| Parametre | Açıklama                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| playerid  | Animasyonu bozulacak oyuncunun ID'si.                                                                                     |
| forcesync | Oyuncunun animasyon akışını etrafındaki diğer oyuncularla senkronize etmeye zorlamak için 1'e ayarlayın  (isteğe bağlı)   |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon her zaman belirtilen ID oyunda olmasa bile her zaman 1 döner.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## Notlar

:::tip

ApplyAnimation'da freeze parametresi için 1 olarak girilirse, animasyon bittiğinde ClearAnimations hiçbir şey yapmaz.

:::

:::tip

Oyuncuyu bir araçtan çıkarmanın diğer bazı yollarının aksine, bu aynı zamanda aracın hızını sıfırlayarak aracı anında durdurur. Oyuncu, araba koltuğu ile aynı konumda aracın üstünde görünecektir.
:::

## Bağlantılı Fonksiyonlar

- [ApplyAnimation](ApplyAnimation): Oyuncuya animasyon uygulatma.
