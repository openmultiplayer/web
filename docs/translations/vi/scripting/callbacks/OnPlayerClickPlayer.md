---
title: OnPlayerClickPlayer
description: Callback này được gọi khi một người chơi nhấp đúp vào một người chơi trên bảng điểm.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi nhấp đúp vào một người chơi trên bảng điểm.

| Tên             | Mô Tả                                                        |
|-----------------|--------------------------------------------------------------|
| playerid        | ID của người chơi đã nhấp vào một người chơi trên bảng điểm. |
| clickedplayerid | ID của người chơi đã bị nhấp vào.                           |
| source          | [Nguồn](../resources/clicksources) của cú nhấp chuột.       |

## Trả Về

1 - Sẽ ngăn các filterscript khác nhận được callback này.

0 - Cho biết rằng callback này sẽ được chuyển cho filterscript tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new string[32];
    format(string, sizeof(string), "Bạn đã nhấp vào người chơi %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

:::tip

Hiện tại chỉ có một 'source' (0 - `CLICK_SOURCE_SCOREBOARD`).

Sự tồn tại của tham số này gợi ý rằng có thể có nhiều nguồn khác được hỗ trợ trong tương lai.

:::

## Các Callback Liên Quan

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Callback này được gọi khi một người chơi nhấp vào một textdraw.

## Các Tài Nguyên Liên Quan

- [Nguồn Nhấp Chuột](../resources/clicksources)