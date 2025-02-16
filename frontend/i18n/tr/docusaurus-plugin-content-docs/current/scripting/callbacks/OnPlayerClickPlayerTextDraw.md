---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Bu geri çağırma, bir oyuncu bir player-textdrawa tıkladığında çağrılır.
tags: ["player", "textdraw", "playertextdraw"]
---

## Açıklama

Bu geri çağırma, bir oyuncu bir player-textdrawa tıkladığı zaman çağırılır. Oyuncu seçim modunu ESC ile iptal ettiğinde çağırılmaz ancak OnPlayerClickTextDraw'da çağırılır.

| Parametre         | Açıklama                            |
| ------------ | ----------------------------------- |
| playerid     | Textdrawa tıklayan oyuncunun ID'si. |
| playertextid | Tıklanan player-textdrawın ID'si.   |

## Çalışınca Vereceği Sonuçlar

Filterscriptlerde her zaman ilk çağırılır, 1 değerini döndürmek diğer filterscriptlerin görmesini engeller.

## Örnek

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Textdraw oluştur.
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Oluşturulan textdrawı seçilebilir yap.
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Textdrawı oyuncuya göster.
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Bir textdrawa tıkladınız.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notlar

:::warning

Bir oyuncu textdraw seçimini ESC'ye basarak iptal ettiğinde 'INVALID_TEXT_DRAW' ID'si ile OnPlayerClickTextDraw çağırılır. OnPlayerClickPlayerTextDraw çağırılmaz.

:::

## Bağlantılı Fonksiyonlar

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable.md): Bir player-textdrawın seçilebilir olup olmayacağını ayarlar.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Oyuncu bir textdrawa tıkladığında çağırılır.
- [OnPlayerClickPlayer](OnPlayerClickPlayer.md): Bir oyuncu başka bir oyuncuya tıkladığında çağırılır.
