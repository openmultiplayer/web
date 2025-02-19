---
title: Types Of Race Checkpoints
sidebar_label: Types Of Race Checkpoints
description: Race checkpoints definitions.
---

:::note

These definitions are used by [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint).

:::

| Definition            | Value | Description                                          |
| --------------------- | ----- | ---------------------------------------------------- |
| UNKNOWN_CP_TYPE       | -1    |                                                      |
| CP_TYPE_GROUND_NORMAL | 0     | Normal                                               |
| CP_TYPE_GROUND_FINISH | 1     | Finish                                               |
| CP_TYPE_GROUND_EMPTY  | 2     | Nothing (Only the checkpoint without anything on it) |
| CP_TYPE_AIR_NORMAL    | 3     | Air normal                                           |
| CP_TYPE_AIR_FINISH    | 4     | Air finish                                           |
| CP_TYPE_AIR_ROTATING  | 5     | Air (rotates and stops)                              |
| CP_TYPE_AIR_STROBING  | 6     | Air (increases, decreases and disappears)            |
| CP_TYPE_AIR_SWINGING  | 7     | Air (swings down and up)                             |
| CP_TYPE_AIR_BOBBING   | 8     | Air (swings up and down)                             |
