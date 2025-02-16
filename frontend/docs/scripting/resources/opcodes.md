---
title: opcodes
description: SendClientCheck action IDs
tags: []
sidebar_label: opcodes
---

:::note

This page contains all of the action/opcode IDs used by [SendClientCheck](../functions/SendClientCheck).

:::

| opcode | Purpose                                                                                                                                                                             |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72     | The uptime of player's computer                                                                                                                                                     |
| 71     | The checksum of given model's ColModel (data in CColModel class)                                                                                                                    |
| 70     | The checksum of given model's CModelInfo (data in CModelInfo class)                                                                                                                 |
| 2      | Returns 32 flags of entity in CPhysical (if player is in vehicle, it sends data related to vehicle, if player is on foot, well.. it's player)                                       |
| 5      | This one makes checksum of size bytes from arg + offset address (GTA memory) and returns it into response argument, and arg should be within GTA memory boundaries                  |
| 69     | this one makes checksum of size bytes from arg + offset address (SAMP memory) and returns it into response argument, and arg should be within GTA memory boundaries (0x0 - 0xC3500) |
