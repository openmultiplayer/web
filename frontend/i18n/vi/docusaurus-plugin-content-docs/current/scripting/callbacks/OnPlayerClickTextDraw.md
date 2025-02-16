---
title: OnPlayerClickTextDraw
description: Callback này được gọi khi một người chơi nhấp vào một textdraw hoặc hủy chế độ chọn bằng phím Escape.
tags: ["player", "textdraw"]
---

## Mô Tả

Callback này được gọi khi một người chơi nhấp vào một textdraw hoặc hủy chế độ chọn bằng phím Escape.

| Tên            | Mô Tả                                                   |
| --------------- | ------------------------------------------------------- |
| playerid        | ID của người chơi đã nhấp vào textdraw.                |
| Text:clickedid | ID của textdraw đã được nhấp. INVALID_TEXT_DRAW nếu việc chọn bị hủy. |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts, vì vậy việc trả về 1 ở đây cũng sẽ chặn các script khác nhận được callback này.

## Ví Dụ

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
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
        SendClientMessage(playerid, 0xFFFFFFAA, "Bạn đã nhấp vào textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## Ghi Chú

:::warning

- Khu vực có thể nhấp được xác định bởi [TextDrawTextSize](../functions/TextDrawTextSize).
- Các tham số `x` và `y` được truyền vào hàm đó không được bằng 0 hoặc âm.
- Không nên sử dụng [CancelSelectTextDraw](../functions/CancelSelectTextDraw) một cách không điều kiện trong callback này. Điều này sẽ dẫn đến một **vòng lặp vô hạn**.

:::

## Các Callback Liên Quan

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Callback này được gọi khi một người chơi nhấp vào một player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Callback này được gọi khi một người chơi nhấp vào một người chơi khác.

## Các Hàm Liên Quan

- [SelectTextDraw](../functions/SelectTextDraw): Bật chuột, để người chơi có thể chọn một textdraw.
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw): Hủy việc chọn textdraw bằng chuột.