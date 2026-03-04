---
title: Tipos de Race Checkpoint
sidebar_label: Tipos de Race Checkpoint
description: Definições de race checkpoints.
---

:::note

Essas definições são usadas por [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint).

:::

| Definition            | Value | Description                                              |
| --------------------- | ----- | -------------------------------------------------------- |
| UNKNOWN_CP_TYPE       | -1    |                                                          |
| CP_TYPE_GROUND_NORMAL | 0     | Normal                                                   |
| CP_TYPE_GROUND_FINISH | 1     | Final                                                    |
| CP_TYPE_GROUND_EMPTY  | 2     | Nada (apenas o checkpoint sem nada nele)                |
| CP_TYPE_AIR_NORMAL    | 3     | Aéreo normal                                             |
| CP_TYPE_AIR_FINISH    | 4     | Aéreo final                                              |
| CP_TYPE_AIR_ROTATING  | 5     | Aéreo (gira e para)                                      |
| CP_TYPE_AIR_STROBING  | 6     | Aéreo (aumenta, diminui e desaparece)                   |
| CP_TYPE_AIR_SWINGING  | 7     | Aéreo (balança para baixo e para cima)                  |
| CP_TYPE_AIR_BOBBING   | 8     | Aéreo (balança para cima e para baixo)                  |
