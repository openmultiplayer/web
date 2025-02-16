---
title: OnPlayerSelectObject
description: Callback này được gọi khi người chơi chọn một đối tượng sau khi dùng BeginObjectSelecting.
tags: ["player", "object"]
---

## Mô tả

Callback này được gọi khi người chơi chọn một đối tượng sau khi [BeginObjectSelecting](../functions/BeginObjectSelecting) đã được sử dụng.

| Tên                | Mô tả                                                |
|--------------------|------------------------------------------------------|
| playerid           | ID của người chơi đã chọn một đối tượng              |
| SELECT_OBJECT:type | [Loại](../resources/selectobjecttypes) lựa chọn      |
| objectid           | ID của đối tượng đã chọn                             |
| modelid            | Mẫu của đối tượng đã chọn                            |
| Float:fX           | Vị trí X của đối tượng đã chọn                       |
| Float:fY           | Vị trí Y của đối tượng đã chọn                       |
| Float:fZ           | Vị trí Z của đối tượng đã chọn                       |

## Giá trị trả về

1 - Sẽ ngăn các script khác nhận callback này.

0 - Cho biết callback này sẽ được truyền cho script tiếp theo.

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);

    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        BeginObjectEditing(playerid, objectid);
    }
    else
    {
        BeginPlayerObjectEditing(playerid, objectid);
    }

    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## Các Hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [BeginObjectSelecting](../functions/BeginObjectSelecting): Chọn một đối tượng.

## Các Tài Nguyên liên quan

- [Select Object Types](../resources/selectobjecttypes)