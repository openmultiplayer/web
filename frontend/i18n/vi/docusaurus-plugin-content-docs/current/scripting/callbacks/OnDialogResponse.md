---
title: OnDialogResponse
sidebar_label: OnDialogResponse
description: Callback này được gọi khi một người chơi phản hồi một hộp thoại được hiển thị bằng cách sử dụng ShowPlayerDialog, bằng cách nhấp vào nút, nhấn ENTER/ESC hoặc nhấp đúp vào một mục trong danh sách (nếu sử dụng hộp thoại kiểu danh sách).
tags: ["dialog"]
---

## Mô Tả

Callback này được gọi khi một người chơi phản hồi một hộp thoại được hiển thị bằng cách sử dụng ShowPlayerDialog, bằng cách nhấp vào nút, nhấn ENTER/ESC hoặc nhấp đúp vào một mục trong danh sách (nếu sử dụng hộp thoại kiểu danh sách).

| Tên         | Mô Tả                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| playerid     | ID của người chơi đã phản hồi hộp thoại.                                                                         |
| dialogid     | ID của hộp thoại mà người chơi đã phản hồi, được gán trong ShowPlayerDialog.                                      |
| response     | 1 cho nút trái và 0 cho nút phải (nếu chỉ có một nút được hiển thị, luôn luôn là 1)                                |
| listitem     | ID của mục trong danh sách được người chơi chọn (bắt đầu từ 0) (chỉ nếu sử dụng hộp thoại kiểu danh sách, nếu không sẽ là -1). |
| inputtext[]  | Văn bản được nhập vào ô nhập bởi người chơi hoặc văn bản của mục trong danh sách đã chọn.                        |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts, vì vậy trả về 1 ở đó sẽ chặn các filterscripts khác không nhìn thấy nó.

## Ví Dụ

**DIALOG_STYLE_MSGBOX**

```c
// Định nghĩa ID của hộp thoại để chúng ta có thể xử lý các phản hồi
#define DIALOG_RULES 1

// Trong một lệnh nào đó
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- Không gian lận\n- Không spam\n- Tôn trọng quản trị viên\n\nBạn có đồng ý với các quy tắc này không?", "Có", "Không");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_RULES)
    {
        if (response) // Nếu họ nhấp vào 'Có' hoặc nhấn enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Cảm ơn bạn đã đồng ý với các quy tắc của máy chủ!");
        }
        else // Nhấn ESC hoặc nhấp vào hủy
        {
            Kick(playerid);
        }
        return 1; // Chúng tôi đã xử lý một hộp thoại, vì vậy trả về 1. Giống như OnPlayerCommandText.
    }

    return 0; // Bạn PHẢI trả về 0 ở đây! Giống như OnPlayerCommandText.
}
```

**DIALOG_STYLE_INPUT**

```c
#define DIALOG_LOGIN 2

// Trong một lệnh nào đó
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Đăng Nhập", "Vui lòng nhập mật khẩu của bạn:", "Đăng Nhập", "Hủy");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_LOGIN)
    {
        if (!response) // Nếu họ nhấp vào 'Hủy' hoặc nhấn esc
        {
            Kick(playerid);
        }
        else // Nhấn ENTER hoặc nhấp vào nút 'Đăng Nhập'
        {
            if (CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Bạn đã đăng nhập thành công!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "ĐĂNG NHẬP THẤT BẠI.");

                // Hiển thị lại hộp thoại đăng nhập
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Đăng Nhập", "Vui lòng nhập mật khẩu của bạn:", "Đăng Nhập", "Hủy");
            }
        }
        return 1; // Chúng tôi đã xử lý một hộp thoại, vì vậy trả về 1. Giống như OnPlayerCommandText.
    }

    return 0; // Bạn PHẢI trả về 0 ở đây! Giống như OnPlayerCommandText.
}
```

**DIALOG_STYLE_LIST**

```c
#define DIALOG_WEAPONS 3

// Trong một lệnh nào đó
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Vũ Khí", "Desert Eagle\nAK-47\nCombat Shotgun", "Chọn", "Đóng");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Nếu họ nhấp vào 'Chọn' hoặc nhấp đúp vào vũ khí
        {
            // Cung cấp vũ khí cho họ
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Cung cấp cho họ một desert eagle
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Cung cấp cho họ một AK-47
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Cung cấp cho họ một Combat Shotgun
                }
            }
        }
        return 1; // Chúng tôi đã xử lý một hộp thoại, vì vậy trả về 1. Giống như OnPlayerCommandText.
    }

    return 0; // Bạn PHẢI trả về 0 ở đây! Giống như OnPlayerCommandText.
}
```

**DIALOG_STYLE_TABLIST**

```c
#define DIALOG_WEAPONS 3

// Trong một lệnh nào đó
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Vũ Khí",
"Vũ khí\tĐạn\tGiá\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Chọn", "Đóng");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_WEAPONS)
    {
        if (response) // Nếu họ nhấp vào 'Chọn' hoặc nhấp đúp vào vũ khí
        {
            // Cung cấp vũ khí cho họ
            switch (listitem)
            {
                case 0:
                {
                    GivePlayerWeapon(playerid, WEAPON_M4, 120); // Cung cấp cho họ một M4
                }
                case 1:
                {
                    GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Cung cấp cho họ một MP5
                }
                case 2:
                {
                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Cung cấp cho họ một AK-47
                }
            }
        }
        return 1; // Chúng tôi đã xử lý một hộp thoại, vì vậy trả về 1. Giống như OnPlayerCommandText.
    }

    return 0; // Bạn PHẢI trả về 0 ở đây! Giống như OnPlayerCommandText.
}
```

## Ghi Chú

:::tip

Các tham số có thể chứa các giá trị khác nhau, dựa trên kiểu hộp thoại ([nhấp để xem thêm ví dụ](../resources/dialogstyles)).

:::

:::tip

Thật phù hợp khi chuyển đổi qua các dialogid khác nhau, nếu bạn có nhiều dialog.

:::

:::warning

Hộp thoại của người chơi sẽ không ẩn khi gamemode khởi động lại, gây ra cảnh báo "Cảnh báo: PlayerDialogResponse PlayerId: 0 dialog ID không khớp với ID hộp thoại được gửi lần cuối" nếu một người chơi phản hồi hộp thoại này sau khi khởi động lại.

:::

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Hiển thị một hộp thoại cho người chơi.
- [GetPlayerDialogID](../functions/GetPlayerDialogID): Lấy ID của hộp thoại hiện đang hiển thị cho người chơi.
- [GetPlayerDialogData](../functions/GetPlayerDialogData): Lấy dữ liệu của hộp thoại hiện đang hiển thị cho người chơi.
- [HidePlayerDialog](../functions/HidePlayerDialog): Ẩn hộp thoại hiện đang hiển thị cho người chơi.