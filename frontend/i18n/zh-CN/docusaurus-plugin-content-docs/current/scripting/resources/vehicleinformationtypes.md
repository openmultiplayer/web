---
title: 车辆信息类型
sidebar_label: 车辆信息类型
description: 车辆模型信息类型常量表。
---

:::info

本文档列出了[获取车辆模型信息](../functions/GetVehicleModelInfo)函数支持的所有车辆信息类型。

:::

| 信息类型常量                        | 描述                                                                                    |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| `VEHICLE_MODEL_INFO_SIZE`           | 车辆整体尺寸                                                                            |
| `VEHICLE_MODEL_INFO_FRONTSEAT`      | 前座坐标位置 \*                                                                         |
| `VEHICLE_MODEL_INFO_REARSEAT`       | 后座坐标位置 \*                                                                         |
| `VEHICLE_MODEL_INFO_PETROLCAP`      | 油箱盖坐标位置 \*                                                                       |
| `VEHICLE_MODEL_INFO_WHEELSFRONT`    | 前轮坐标位置 \*                                                                         |
| `VEHICLE_MODEL_INFO_WHEELSREAR`     | 后轮坐标位置 \*                                                                         |
| `VEHICLE_MODEL_INFO_WHEELSMID`      | 中轮坐标位置（适用于轮数超过 4 个的车辆） \*                                            |
| `VEHICLE_MODEL_INFO_FRONT_BUMPER_Z` | 前保险杠高度。使用[获取车辆模型信息](../functions/GetVehicleModelInfo)时仅返回 Z 轴数值 |
| `VEHICLE_MODEL_INFO_REAR_BUMPER_Z`  | 后保险杠高度。使用[获取车辆模型信息](../functions/GetVehicleModelInfo)时仅返回 Z 轴数值 |

\* 这些数值均从车辆的轴心点（通常为中心点）计算得出
