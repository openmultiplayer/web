---

title: OnRconCommand
description: Callback này được gọi khi một lệnh được gửi qua bảng điều khiển máy chủ, RCON từ xa, hoặc thông qua lệnh "/rcon" trong trò chơi.
tags: ["rcon", "administration"]
---

## Mô tả

Callback này được gọi khi một lệnh được gửi qua bảng điều khiển máy chủ, RCON từ xa, hoặc thông qua lệnh "/rcon" trong trò chơi.

| Tên  | Mô tả                                                                         |
| ----- | ----------------------------------------------------------------------------- |
| cmd[] | Một chuỗi chứa lệnh đã nhập, cũng như bất kỳ tham số nào được truyền đi.   |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts, vì vậy việc trả về 1 sẽ chặn gamemode khỏi việc nhìn thấy nó.

## Ví dụ

```c
public OnRconCommand(cmd[])
{
    // Lưu lại tất cả các lệnh RCON vào log file
    log("RCON command executed: %s", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "broadcast", true))
    {
        // Gửi thông điệp tới tất cả người chơi
        SendClientMessageToAll(0xFF00FF00, "This is a broadcast message from RCON!");
        return 1;
    }
    return 0;
}
```

## Ghi chú

:::tip

- "/rcon " không được bao gồm trong "cmd" khi người chơi gõ lệnh. Nếu bạn sử dụng hàm "print" ở đây, nó sẽ gửi thông điệp tới người chơi đã gõ lệnh trong trò chơi cũng như ghi vào log. Callback này không được gọi khi người chơi chưa đăng nhập với tư cách là quản trị viên RCON. Khi người chơi chưa đăng nhập với tư cách là quản trị viên RCON và sử dụng /rcon login, callback này sẽ không được gọi và thay vào đó, `OnRconLoginAttempt` sẽ được gọi. Tuy nhiên, khi người chơi đã đăng nhập với tư cách là quản trị viên RCON, việc sử dụng lệnh này sẽ gọi callback này.

:::

:::warning

Trong SA-MP, bạn cần phải bao gồm callback này trong một filterscript đã được tải để nó hoạt động trong gamemode!

Nhưng điều này đã được sửa trong open.mp.

:::

## Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnRconLoginAttempt](OnRconLoginAttempt): Callback này được gọi khi có một cố gắng đăng nhập vào RCON.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Kiểm tra xem một người chơi có đang đăng nhập vào RCON không.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Đặt người chơi làm quản trị viên RCON.

