---
title: OnPlayerEditAttachedObject
description: Callback này được gọi khi một người chơi kết thúc chế độ chỉnh sửa đối tượng gắn kết.
tags: ["player", "object", "attachment"]
---

## Mô Tả

Callback này được gọi khi một người chơi kết thúc chế độ chỉnh sửa đối tượng gắn kết.

| Tên                        | Mô Tả                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------|
| playerid                   | ID của người chơi đã kết thúc chế độ chỉnh sửa.                                             |
| EDIT_RESPONSE:response     | 0 nếu họ hủy bỏ (ESC) hoặc 1 nếu họ nhấp vào biểu tượng lưu.                                |
| index                      | Chỉ số của đối tượng gắn kết (0-9)                                                           |
| modelid                    | Mô hình của đối tượng gắn kết đã được chỉnh sửa.                                             |
| boneid                     | Xương của đối tượng gắn kết đã được chỉnh sửa.                                              |
| Float:fOffsetX             | Độ lệch X cho đối tượng gắn kết đã được chỉnh sửa.                                           |
| Float:fOffsetY             | Độ lệch Y cho đối tượng gắn kết đã được chỉnh sửa.                                           |
| Float:fOffsetZ             | Độ lệch Z cho đối tượng gắn kết đã được chỉnh sửa.                                           |
| Float:fRotX                | Góc quay X cho đối tượng gắn kết đã được chỉnh sửa.                                         |
| Float:fRotY                | Góc quay Y cho đối tượng gắn kết đã được chỉnh sửa.                                         |
| Float:fRotZ                | Góc quay Z cho đối tượng gắn kết đã được chỉnh sửa.                                         |
| Float:fScaleX              | Tỷ lệ X cho đối tượng gắn kết đã được chỉnh sửa.                                            |
| Float:fScaleY              | Tỷ lệ Y cho đối tượng gắn kết đã được chỉnh sửa.                                            |
| Float:fScaleZ              | Tỷ lệ Z cho đối tượng gắn kết đã được chỉnh sửa.                                            |

## Trả Về

1 - Sẽ ngăn các script khác nhận được callback này.

0 - Chỉ ra rằng callback này sẽ được chuyển đến script tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Dữ liệu nên được lưu trữ trong mảng trên khi các đối tượng gắn kết được gắn.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response == EDIT_RESPONSE_FINAL)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Đã lưu chỉnh sửa đối tượng gắn kết.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else if (response == EDIT_RESPONSE_CANCEL)
    {
        SendClientMessage(playerid, COLOR_RED, "Chỉnh sửa đối tượng gắn kết không được lưu.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Ghi Chú

:::warning

Các chỉnh sửa nên bị loại bỏ nếu phản hồi là '0' (hủy bỏ). Điều này phải được thực hiện bằng cách lưu trữ các độ lệch, v.v., trong một mảng TRƯỚC khi sử dụng [EditAttachedObject](../functions/EditAttachedObject).

:::

## Các Hàm Liên Quan

- [EditAttachedObject](../functions/EditAttachedObject): Chỉnh sửa một đối tượng gắn kết.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Gắn một đối tượng vào một người chơi.
