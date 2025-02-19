---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: Callback này được gọi khi một người chơi chết, có thể là tự sát hoặc bị giết bởi một người chơi khác.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi chết, có thể là tự sát hoặc bị giết bởi một người chơi khác.

| Tên             | Mô Tả                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| playerid         | ID của người chơi đã chết.                                                                 |
| killerid         | ID của người chơi đã giết người chơi đó, hoặc INVALID_PLAYER_ID nếu không có ai cả.       |
| WEAPON:reason    | ID của lý do (xem [danh sách vũ khí](../resources/weaponids)) cho cái chết của người chơi. |

## Trả Về

0 - Sẽ ngăn các filterscripts khác nhận được callback này.

1 - Chỉ ra rằng callback này sẽ được chuyển đến filterscript tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Hiển thị cái chết trong killfeed

    // Kiểm tra rằng killerid là hợp lệ trước khi thực hiện bất kỳ hành động nào với nó
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid]++;
    }

    // Ngoài kiểm tra, xử lý thông tin cho playerid (luôn hợp lệ)
    PlayerDeaths[playerid]++;
    return 1;
}
```

## Ghi Chú

:::tip

- Lý do sẽ trả về 37 (vũ khí phun lửa) từ bất kỳ nguồn lửa nào (ví dụ: molotov, 18).
- Lý do sẽ trả về 51 từ bất kỳ vũ khí nào tạo ra vụ nổ (ví dụ: RPG, grenade).
- Bạn không cần kiểm tra xem killerid có hợp lệ không trước khi sử dụng nó trong [SendDeathMessage](../functions/SendDeathMessage). INVALID_PLAYER_ID là một tham số ID hợp lệ trong hàm đó.
- playerid là người duy nhất có thể gọi callback này (hữu ích cho chống giả chết).

:::

:::warning

Bạn PHẢI kiểm tra xem 'killerid' có hợp lệ (không phải INVALID_PLAYER_ID) trước khi sử dụng nó trong một mảng (hoặc bất kỳ đâu), vì điều này sẽ gây ra sự cố với script OnPlayerDeath (không phải toàn bộ script). INVALID_PLAYER_ID được định nghĩa là 65535, và nếu một mảng chỉ có 'MAX_PLAYERS' phần tử, ví dụ 500, bạn đang cố gắng truy cập một chỉ số vượt quá 499, điều này sẽ ra ngoài phạm vi.

:::

## Các Callback Liên Quan

- [OnPlayerSpawn](OnPlayerSpawn): Callback này được gọi khi một người chơi xuất hiện lại.

## Các Hàm Liên Quan

- [SendDeathMessage](../functions/SendDeathMessage): Thêm một cái chết vào danh sách cái chết.
- [SetPlayerHealth](../functions/SetPlayerHealth): Đặt sức khỏe của người chơi.

## Tài Nguyên Liên Quan

- [Danh Sách Vũ Khí](../resources/weaponids)