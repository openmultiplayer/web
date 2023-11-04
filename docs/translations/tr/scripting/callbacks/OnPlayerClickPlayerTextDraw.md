---
title: OnPlayerClickPlayerTextDraw
description: This callback is called when a player clicks on a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='callback' version='SA-MP 0.3e' />

## Açıklama

Bu callback, bir oyuncu bir player-textdrawa tıkladığı zaman çağırılır. Oyuncu seçim modunu ESC ile iptal ettiğinde çağırılmaz ancak OnPlayerClickTextDraw'da çağırılır.

| İsim         | Açıklama                            |
| ------------ | ----------------------------------- |
| playerid     | Textdrawa tıklayan oyuncunun ID'si. |
| playertextid | Tıklanan player-textdrawın ID'si.   |

## Çalışınca vereceği sonuçlar

Filterscriptlerde her zaman ilk çağırılır, 1 değerini döndürmek diğer filterscriptlerin görmesini engeller.

## Örnekler

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

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
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

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Bir player-textdrawın seçilebilir olup olmayacağını ayarlar.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Oyuncu bir textdrawa tıkladığında çağırılır.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Bir oyuncu başka bir oyuncuya tıkladığında çağırılır.
