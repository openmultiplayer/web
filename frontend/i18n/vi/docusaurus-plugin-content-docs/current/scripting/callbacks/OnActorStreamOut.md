---
title: OnActorStreamOut
description: Callback này được gọi khi một actor được truyền ra khỏi khách hàng của người chơi.
tags: ["actor"]

---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Mô Tả

Callback này được gọi khi một actor được truyền ra khỏi khách hàng của người chơi.

| Tên         | Mô Tả                                                       |
| ------------ | ----------------------------------------------------------- |
| actorid      | ID của actor đã được truyền ra khỏi khách hàng của người chơi. |
| forplayerid  | ID của người chơi đã truyền actor ra ngoài.               |

## Trả Về

Nó luôn được gọi đầu tiên trong các filterscripts.

## Ví Dụ

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d hiện đang bị truyền ra khỏi bạn.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Callbacks Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnActorStreamIn](OnActorStreamIn): Callback này được gọi khi một actor được truyền vào bởi khách hàng của người chơi.