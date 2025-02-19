---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: Callback này được gọi khi một người chơi bị stream ra khỏi client của người chơi khác.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi một người chơi bị stream ra khỏi client của người chơi khác.

| Tên         | Mô tả                                             |
| ----------- | ------------------------------------------------- |
| playerid    | Người chơi đã bị destream.                        |
| forplayerid | Người chơi đã destream người chơi kia.            |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerStreamIn](OnPlayerStreamIn): Callback này được gọi khi một người chơi được stream vào client của người chơi khác.
- [OnActorStreamIn](OnActorStreamIn): Callback này được gọi khi một diễn viên được stream bởi một người chơi.
- [OnVehicleStreamIn](OnVehicleStreamIn): Callback này được gọi khi một phương tiện được stream vào cho người chơi.