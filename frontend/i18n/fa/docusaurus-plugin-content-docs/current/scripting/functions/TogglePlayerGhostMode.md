---
title: TogglePlayerGhostMode
sidebar_label: TogglePlayerGhostMode
description: حالت ghost بازیکن رو فعال/غیرفعال کن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

حالت ghost بازیکن رو فعال/غیرفعال می‌کنه.
حالت Ghost برخورد بین مدل‌های بازیکن رو غیرفعال می‌کنه.

| نام         | توضیحات                                    |
| ----------- | ---------------------------------------------- |
| playerid    | ID بازیکنی که می‌خوای حالت ghost ش رو فعال/غیرفعال کنی. |
| bool:toggle | true برای فعال کردن و false برای غیرفعال کردن.         |

## مقدار برگشتی

این تابع همیشه true برمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ghostmode", true))
    {
        TogglePlayerGhostMode(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You enabled the ghost mode!");
        // SERVER: ghost mode ro faal kardi!
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerGhostMode](GetPlayerGhostMode): حالت ghost بازیکن رو بدست بیار.
