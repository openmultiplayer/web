---
title: FindModelFileNameFromCRC
sidebar_label: FindModelFileNameFromCRC
description: Maghanap ng umiiral nang custom skin o simple object model file.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Maghanap ng umiiral nang custom skin o simple object model file. Ang mga file ng model ay matatagpuan sa folder ng server ng mga models bilang default (setting ng artpath).

| Name        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| crc         | Ang checksum ng CRC ng custom na file ng model.                       |
| retstr[]    | Isang array kung saan iimbak ang .dff file name, na ipinasa sa pamamagitan ng reference. |
| retstr_size | Ang haba ng string na dapat itabi.                                    |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa.

## Related Functions

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Tinatawag kapag natapos ng player ang pag-download ng mga custom model.