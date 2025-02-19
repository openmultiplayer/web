---
title: GetPlayerCameraUpVector
sidebar_label: GetPlayerCameraUpVector
description: This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen.
tags: ["player"]
---

## คำอธิบาย

This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player you want to obtain the camera upvector of |
| Float:x  | A float to store the X coordinate, passed by reference.        |
| Float:y  | A float to store the Y coordinate, passed by reference.        |
| Float:z  | A float to store the Z coordinate, passed by reference.        |

## ส่งคืน

The position is stored in the specified variables.

## บันทึก

:::warning

This function was removed in SA-MP version 0.3b

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerCameraPos](../functions/GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](../functions/GetPlayerCameraFrontVector): Get the player's camera front vector
