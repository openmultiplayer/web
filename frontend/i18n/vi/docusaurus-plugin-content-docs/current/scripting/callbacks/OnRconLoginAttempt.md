---

title: OnRconLoginAttempt
description: Callback này được gọi khi ai đó cố gắng đăng nhập vào RCON trong trò chơi; thành công hoặc không.
tags: ["rcon", "administration"]
---

## Mô tả

Callback này được gọi khi ai đó cố gắng đăng nhập vào RCON trong trò chơi; thành công hoặc không.

| Tên        | Mô tả                                                 |
| ---------- | ----------------------------------------------------- |
| ip[]       | Địa chỉ IP của người chơi đã cố gắng đăng nhập vào RCON. |
| password[] | Mật khẩu đã được sử dụng để đăng nhập.                |
| success    | 0 nếu mật khẩu không chính xác hoặc 1 nếu chính xác. |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // Nếu mật khẩu không chính xác
    {
        printf("ĐĂNG NHẬP RCON THẤT BẠI TỪ IP %s SỬ DỤNG MẬT KHẨU %s", ip, password);
        
        new ipAddress[16];
        
        for (new i = 0; i < MAX_PLAYERS; i++) // Duyệt qua tất cả người chơi
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));
            
            if (!strcmp(ip, ipAddress, true)) // Nếu IP của người chơi là IP đã thất bại khi đăng nhập
            {
                SendClientMessage(i, 0xFFFFFFFF, "Mật khẩu sai. Tạm biệt!"); // Gửi một thông điệp
                Kick(i); // Họ sẽ bị đá ra ngoài.
                break;
            }
        }
    }
    return 1;
}
```

## Ghi chú

:::tip

- Callback này chỉ được gọi khi sử dụng lệnh /rcon login trong trò chơi. Callback này chỉ được gọi khi người chơi chưa đăng nhập. Khi người chơi đã đăng nhập, [OnRconCommand](OnRconCommand) sẽ được gọi thay vào đó.

:::

## Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnRconCommand](OnRconCommand): Callback này được gọi khi một lệnh RCON được gửi.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Kiểm tra xem một người chơi có đang đăng nhập vào RCON không.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Đặt người chơi làm quản trị viên RCON.
- [SendRconCommand](../functions/SendRconCommand): Gửi lệnh RCON qua script.

