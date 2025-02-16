---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: Callback này được gọi khi người chơi chọn một mục từ menu (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Mô tả

Callback này được gọi khi người chơi chọn một mục từ menu ([ShowMenuForPlayer](../functions/ShowMenuForPlayer)).

| Tên      | Mô tả                                                       |
| -------- | ----------------------------------------------------------- |
| playerid | ID của người chơi đã chọn một mục trong menu.               |
| row      | ID của hàng đã được chọn. Hàng đầu tiên có ID là 0.         |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong gamemode.

## Ví dụ

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch (row)
        {
            case 0:
            {
                print("Item 1 Selected");
            }
            case 1:
            {
                print("Item 2 Selected");
            }
        }
    }
    return 1;
}
```

## Ghi chú

:::tip

ID của menu không được truyền vào callback này. [GetPlayerMenu](../functions/GetPlayerMenu) phải được sử dụng để xác định menu nào người chơi đã chọn một mục.

:::

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerExitedMenu](OnPlayerExitedMenu): Callback này được gọi khi người chơi thoát khỏi menu. 
- [OnDialogResponse](OnDialogResponse): Callback này được gọi khi người chơi phản hồi một dialog. 

## Các Hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [CreateMenu](../functions/CreateMenu): Tạo một menu.
- [DestroyMenu](../functions/DestroyMenu): Hủy một menu.
- [AddMenuItem](../functions/AddMenuItem): Thêm một mục vào menu được chỉ định.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Hiển thị một menu cho người chơi.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Ẩn một menu cho người chơi.