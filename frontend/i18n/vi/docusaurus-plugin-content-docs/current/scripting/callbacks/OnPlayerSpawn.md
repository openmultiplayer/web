---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: Callback này được gọi khi người chơi xuất hiện.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi người chơi xuất hiện. (ví dụ: sau khi gọi hàm [SpawnPlayer](../functions/SpawnPlayer))

| Tên      | Mô tả                                |
| -------- | ------------------------------------ |
| playerid | ID của người chơi đã xuất hiện.      |

## Giá trị trả về

0 - Sẽ ngăn các filterscripts khác nhận callback này.

1 - Cho biết callback này sẽ được truyền cho filterscript tiếp theo.

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    
    new string[64];
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Ghi chú

:::tip

Khi một người chơi chết trong San Andreas, họ sẽ bị trừ $100 để tự động chi trả viện phí. Tính năng này vẫn tồn tại trong SA:MP, nhưng đã bị loại bỏ khỏi open.mp để cho phép các script quản lý tiền của họ. Một số script cố gắng sửa lỗi này bằng cách thêm $100 cho người chơi sau khi chết, hoặc khi xuất hiện. Nếu đây là script của bạn, chỉ cần xóa phần sửa lỗi bổ sung, mặc dù mã trong open.mp cũng cố gắng giải quyết các script làm điều này. Nếu script của bạn dựa vào tính năng này, chỉ cần thêm đoạn mã sau vào [OnPlayerDeath](OnPlayerDeath):

```c
GivePlayerMoney(playerid, -100);
```

:::

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerDeath](OnPlayerDeath): Callback này được gọi khi người chơi chết. 
- [OnVehicleSpawn](OnVehicleSpawn): Callback này được gọi khi một phương tiện tái xuất hiện. 

## Các Hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [SpawnPlayer](../functions/SpawnPlayer): Bắt buộc người chơi xuất hiện.
- [AddPlayerClass](../functions/AddPlayerClass): Thêm một lớp.
- [SetSpawnInfo](../functions/SetSpawnInfo): Đặt thông tin xuất hiện cho người chơi.