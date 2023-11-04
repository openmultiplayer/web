---
title: getdate
description: Get the current server date, which will be stored in the variables &year, &month and &day.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the current server date, which will be stored in the variables &year, &month and &day.

| Name    | Description                                              |
| ------- | -------------------------------------------------------- |
| year=0  | The variable to store the year in, passed by reference.  |
| month=0 | The variable to store the month in, passed by reference. |
| day=0   | The variable to store the day in, passed by reference.   |

## ส่งคืน

The number of days since the start of the year.

## ตัวอย่าง

```c
new Year, Month, Day, Days;
Days = getdate(Year, Month, Day);
printf("%02d/%02d/%d", Day, Month, Year);
printf("Days since the start of the year: %d", Days);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [gettime](gettime): Get the current time of the server as a unix timestamp.
