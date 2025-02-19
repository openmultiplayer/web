---
title: OnVehicleStreamOut
sidebar_label: OnVehicleStreamOut
description: Callback này được gọi khi một xe bị stream ra khỏi client của người chơi (quá xa để người chơi có thể thấy).
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một xe bị stream ra khỏi client của người chơi (quá xa để người chơi có thể thấy).

| Tên         | Mô tả                                                      |
|-------------|------------------------------------------------------------|
| vehicleid   | ID của xe bị stream ra.                                   |
| forplayerid | ID của người chơi không còn streaming xe nữa.             |

## Trả về

Luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Client của bạn không còn streaming xe %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

## Các callback liên quan

- [OnVehicleStreamIn](OnVehicleStreamIn): Callback này được gọi khi một xe được stream đến cho người chơi.
- [OnPlayerStreamIn](OnPlayerStreamIn): Callback này được gọi khi một người chơi được stream đến cho người chơi khác.
- [OnPlayerStreamOut](OnPlayerStreamOut): Callback này được gọi khi một người chơi bị stream ra khỏi client của người chơi khác.