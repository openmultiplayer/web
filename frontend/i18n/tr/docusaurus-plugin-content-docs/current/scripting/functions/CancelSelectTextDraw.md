---
title: CancelSelectTextDraw
sidebar_label: CancelSelectTextDraw
description: Fare seçim modunu iptal edin.
tags: ["textdraw"]
---

## Açıklama

Fare seçim modunu iptal edin. Fareniz ekrandan gider.

| Parametre | Açılama                                                             |
| --------- | ------------------------------------------------------------------- |
| playerid  | Fare seçim modu iptal edilecek oyuncunun ID'si.                     |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon herhangi bir değer döndürmez.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw seçimi iptal edildi!");
        return 1;
    }
    return 0;
}
```

## Notlar

:::warning

\*Bu fonksiyon OnPlayerClickTextDraw'ı ile INVALID_TEXT_DRAW(65535) çağırır. Bu işlevi OnPlayerClickTextDraw içinde bu duruma yakalanmadan kullanmak, istemcilerin sonsuz bir döngüye girmesine neden olur.

:::

## Bağlantılı Fonksiyonlar

- [SelectTextDraw](SelectTextDraw): Oyuncunun bir TextDraw seçmesi için faresini etkinleştirme.
- [TextDrawSetSelectable](TextDrawSetSelectable): Bir TextDraw'ın seçilebilirliğini düzenleme.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Bu fonksiyon, bir oyuncu bir TextDraw'a tıkladığında çağrılır.
