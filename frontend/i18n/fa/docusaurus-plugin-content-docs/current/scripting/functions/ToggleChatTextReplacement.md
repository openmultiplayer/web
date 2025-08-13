---
title: ToggleChatTextReplacement
sidebar_label: ToggleChatTextReplacement
description: فیلتر ورودی چت رو فعال/غیرفعال میکنه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

فیلتر ورودی چت رو فعال/غیرفعال می‌کنه.

غیرفعالش کن تا بتونی از کاراکترهایی مثل % توی چت استفاده کنی.

| نام           | توضیحات                                                           |
| -----------   | --------------------------------------------------------------------- |
| bool:enable   | 'true' برای فعال کردن یا 'false' برای غیرفعال کردن فیلتر ورودی چت.         |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit() 
{
    ToggleChatTextReplacement(false);
    return 1;
}
```

## نکات

:::tip

می‌تونی فیلتر ورودی چت رو توی فایل config.json هم فعال/غیرفعال کنی.

```json
"chat_input_filter": true,
```

:::

## توابع مرتبط

- [ChatTextReplacementToggled](ChatTextReplacementToggled): چک می‌کنه که آیا فیلتر ورودی چت فعال هست یا غیرفعال.
