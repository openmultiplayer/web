---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: Callback này được gọi khi người chơi thay đổi trạng thái.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi người chơi thay đổi trạng thái. Ví dụ, khi người chơi thay đổi từ việc là tài xế của một phương tiện sang đi bộ.

| Tên                   | Mô tả                                       |
| --------------------- | ------------------------------------------- |
| playerid              | ID của người chơi đã thay đổi trạng thái.  |
| PLAYER_STATE:newstate | Trạng thái mới của người chơi.             |
| PLAYER_STATE:oldstate | Trạng thái trước đó của người chơi.        |

Tham khảo [Trạng thái Người chơi](../resources/playerstates) để biết danh sách tất cả các trạng thái người chơi có sẵn.

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Người chơi vào xe làm tài xế
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Thêm NOS cho phương tiện
    }
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerInteriorChange](OnPlayerInteriorChange): Callback này được gọi khi người chơi thay đổi nội thất.

## Các Hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [GetPlayerState](../functions/GetPlayerState): Lấy trạng thái hiện tại của người chơi.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Lấy hành động đặc biệt hiện tại của người chơi.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Đặt hành động đặc biệt cho người chơi.

## Các Tài Nguyên liên quan

- [Trạng thái Người chơi](../resources/playerstates)