---
title: format
sidebar_label: format
description: Formats a string to include variables and other strings inside it.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Formats a string to include variables and other strings inside it.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| output[]       | The string to output the result to        |
| len            | The maximum length output can contain     |
| format[]       | The format string                         |
\ \{Float, _}:... | Indefinite number of arguments of any tag |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new result[128];
new number = 42;
format(result,sizeof(result), "The number is %i.",number);  //-> The number is 42.
new string[]= "simple message";
format(result,sizeof(result), "This is a %s containing the number %i.", string, number);
// This is a simple message containing the number 42.
new string[64];
format(string,sizeof(string),"Your score is: %d",GetPlayerScore(playerid));
SendClientMessage(playerid,0xFFFFFFAA,string);
new hour, minute, second, string[32];
gettime(hour, minute, second);

format(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second); // will output something like 09:45:02
SendClientMessage(playerid, -1, string);
new string[35];
format(string,sizeof(string),"43%s of my shirts are black.","%%");
SendClientMessage(playerid,0xFFFFFAA,string);
```

## บันทึก

:::warning

This function doesn't support packed strings.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [print](print): Print a basic message to the server logs and console.
- [printf](printf): Print a formatted message into the server logs and console.
