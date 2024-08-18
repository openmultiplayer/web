---
title: OnPlayerStreamIn
description: Callback này được gọi khi một người chơi được stream bởi client của người chơi khác.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi một người chơi được stream bởi client của người chơi khác.

| Tên         | Mô tả                                             |
| ----------- | ------------------------------------------------- |
| playerid    | ID của người chơi đã được stream.                 |
| forplayerid | ID của người chơi đã stream người chơi kia vào.   |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerStreamOut](OnPlayerStreamOut): Callback này được gọi khi một người chơi bị stream ra khỏi client của người chơi khác.
- [OnActorStreamIn](OnActorStreamIn): Callback này được gọi khi một diễn viên được stream bởi một người chơi.
- [OnVehicleStreamIn](OnVehicleStreamIn): Callback này được gọi khi một phương tiện được stream vào cho người chơi.