---
title: OnPlayerEditObject
description: Callback này được gọi khi một người chơi kết thúc việc chỉnh sửa một đối tượng ([BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)).
tags: ["player", "object"]
---

## Mô Tả

Callback này được gọi khi một người chơi kết thúc việc chỉnh sửa một đối tượng ([BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)).

| Tên                     | Mô Tả                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------|
| playerid               | ID của người chơi đã chỉnh sửa một đối tượng                                               |
| playerobject           | 0 nếu đó là đối tượng toàn cục hoặc 1 nếu đó là đối tượng của người chơi.                  |
| objectid               | ID của đối tượng đã được chỉnh sửa                                                          |
| EDIT_RESPONSE:response | [Loại phản hồi](../resources/objecteditionresponsetypes)                                      |
| Float:fX               | Độ lệch X của đối tượng đã được chỉnh sửa                                                    |
| Float:fY               | Độ lệch Y của đối tượng đã được chỉnh sửa                                                    |
| Float:fZ               | Độ lệch Z của đối tượng đã được chỉnh sửa                                                    |
| Float:fRotX            | Góc quay X của đối tượng đã được chỉnh sửa                                                  |
| Float:fRotY            | Góc quay Y của đối tượng đã được chỉnh sửa                                                  |
| Float:fRotZ            | Góc quay Z của đối tượng đã được chỉnh sửa                                                  |

## Trả Về

1 - Sẽ ngăn các script khác nhận được callback này.

0 - Chỉ ra rằng callback này sẽ được chuyển đến script tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    
    if (!playerobject) // Nếu đây là đối tượng toàn cục, đồng bộ hóa vị trí cho các người chơi khác
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // Người chơi đã nhấp vào biểu tượng lưu
            // Thực hiện bất kỳ hành động nào để lưu vị trí đối tượng đã cập nhật (và góc quay)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Người chơi đã hủy bỏ, vì vậy đưa đối tượng trở lại vị trí cũ
            if (!playerobject) // Đối tượng không phải là đối tượng của người chơi
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Ghi Chú

:::warning

Khi sử dụng 'EDIT_RESPONSE_UPDATE', hãy lưu ý rằng callback này sẽ không được gọi khi giải phóng một chỉnh sửa đang tiến hành, dẫn đến bản cập nhật cuối cùng của 'EDIT_RESPONSE_UPDATE' bị mất đồng bộ với vị trí hiện tại của đối tượng.

:::

## Các Hàm Liên Quan

- [BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing): Chỉnh sửa một đối tượng của người chơi.
- [BeginObjectEditing](../functions/BeginObjectEditing): Chỉnh sửa một đối tượng.
- [CreateObject](../functions/CreateObject): Tạo một đối tượng.
- [DestroyObject](../functions/DestroyObject): Hủy một đối tượng.
- [MoveObject](../functions/MoveObject): Di chuyển một đối tượng.

## Tài Nguyên Liên Quan

- [Các Loại Phản Hồi Chỉnh Sửa Đối Tượng](../resources/objecteditionresponsetypes)