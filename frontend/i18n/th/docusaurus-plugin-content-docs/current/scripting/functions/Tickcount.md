---
title: tickcount
sidebar_label: tickcount
description: This function can be used as a replacement for GetTickCount, as it returns the number of milliseconds since the start-up of the server.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

This function can be used as a replacement for GetTickCount, as it returns the number of milliseconds since the start-up of the server.

| Name           | Description                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &granularity=0 | Upon return, this value contains the number of ticks that the internal system time will tick per second. This value therefore indicates the accuracy of the return value of this function. |

## ส่งคืน

The number of milliseconds since start-up of the system. For a 32-bit cell, this count overflows after approximately 24 days of continuous operation.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetTickCount](../functions/GetTickCount.md): Get the uptime of the actual server.
