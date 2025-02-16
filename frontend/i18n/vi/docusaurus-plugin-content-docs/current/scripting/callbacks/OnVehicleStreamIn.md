---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Callback này được gọi khi một xe được stream đến client của người chơi.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một xe được stream đến client của người chơi.

| Tên         | Mô tả                                               |
|-------------|-----------------------------------------------------|
| vehicleid   | ID của xe được stream đến cho người chơi.          |
| forplayerid | ID của người chơi mà xe được stream đến.           |

## Trả về

Luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Bạn có thể thấy xe %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

## Các callback liên quan

- [OnVehicleStreamOut](OnVehicleStreamOut): Callback này được gọi khi một xe bị stream ra khỏi client của người chơi.
- [OnPlayerStreamIn](OnPlayerStreamIn): Callback này được gọi khi một người chơi được stream đến cho một người chơi khác.
- [OnPlayerStreamOut](OnPlayerStreamOut): Callback này được gọi khi một người chơi bị stream ra khỏi client của người chơi khác.