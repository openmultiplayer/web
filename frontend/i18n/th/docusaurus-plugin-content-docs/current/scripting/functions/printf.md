---
title: printf
description: Outputs a formatted string on the console (the server window, not the in-game chat).
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Outputs a formatted string on the console (the server window, not the in-game chat).

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| format[]       | The format string                         |
\ \{Float, _}:... | Indefinite number of arguments of any tag |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new number = 42;
printf("The number is %d.",number);  //-> The number is 42.

new string[]= "simple message";
printf("This is a %s containing the number %d.", string, number); //-> This is a simple message containing the number 42.

new character = 64;
printf("I'm %c home",character); //-> I'm @ home
```

## บันทึก

:::warning

The format string or its output should not exceed 1024 characters. Anything beyond that length can lead to a server to crash.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- print: Print a basic message to the server logs and console.
- format: Format a string.
