---
title: OnObjectMoved
description: Callback này được gọi khi một đối tượng di chuyển sau khi MoveObject (khi nó ngừng di chuyển).
tags: ["object"]
---

## Mô Tả

Callback này được gọi khi một đối tượng di chuyển sau khi MoveObject (khi nó ngừng di chuyển).

| Tên       | Mô Tả                                     |
| --------- | ----------------------------------------- |
| objectid  | ID của đối tượng đã di chuyển             |

## Trả Về

Callback này luôn được gọi đầu tiên trong các filterscript.

## Ví Dụ

```c
public OnObjectMoved(objectid)
{
    printf("Đối tượng %d đã ngừng di chuyển.", objectid);
    return 1;
}
```

## Ghi Chú

:::tip

[SetObjectPos](../functions/SetObjectPos) không hoạt động khi sử dụng trong callback này. Để khắc phục, hãy tạo lại đối tượng.

:::

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerObjectMoved](OnPlayerObjectMoved): Callback này được gọi khi một đối tượng của người chơi ngừng di chuyển.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [MoveObject](../functions/MoveObject): Di chuyển một đối tượng.
- [MovePlayerObject](../functions/MovePlayerObject): Di chuyển một đối tượng của người chơi.
- [IsObjectMoving](../functions/IsObjectMoving): Kiểm tra xem đối tượng có đang di chuyển không.
- [StopObject](../functions/StopObject): Dừng một đối tượng khỏi việc di chuyển.
```