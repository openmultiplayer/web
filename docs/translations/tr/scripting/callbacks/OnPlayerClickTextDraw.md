---
title: OnPlayerClickTextDraw
description: This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
tags: ["player", "textdraw"]
---

## Açıklama

Bu callback bir oyuncu bir textdrawa tıkladığında yada ESC tuşu ile seçim modunu iptal ettiğinde çağırılır.

| İsim      | Açıklama                                                                                |
| --------- | --------------------------------------------------------------------------------------- |
| playerid  | Textdrawa tıklayan oyuncunun ID'si.                                                     |
| clickedid | Tıklanan tectdraw ID'si. Eğer seçim iptal edilirse INVALID_TEXT_DRAW değeri döndürülür. |

## Çalışınca Vereceği Sonuçlar

Filterscriptlerde her zaman ilk çağırılır, 1 değerini döndürmek diğer filterscriptlerin görmesini engeller.

## Örnekler

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Bir textdrawa tıkladın.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notlar

:::warning

Tıklanılabilir bölge TextDrawTextSize tarafından belirlenir. X ve Y paremetreleri sıfır yada negatif bir değer olmamalıdır. Bu callbackte CancelSelectTextDraw koşulsuz olarak kullanmayın, bu sonsuz bir döngü ile sonuçlanır.

:::

## Bağlantılı Fonksiyonlar

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw.md): Bir oyuncu player-textdrawa tıkladığında çağırılır.
- [OnPlayerClickPlayer](OnPlayerClickPlayer.md): Bir oyuncu başka bir oyuncuya tıkladığında çağırılır.
