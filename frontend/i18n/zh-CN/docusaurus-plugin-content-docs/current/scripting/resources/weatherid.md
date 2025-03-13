---
title: 天气ID列表
sidebar_label: 天气ID列表
---

[SetWeather](../functions/SetWeather) 和 [SetPlayerWeather](../functions/SetPlayerWeather) 函数使用的天气 ID 列表。

| ID  | 名称                   | 类型                   | 描述（单人模式）       |
| --- | ---------------------- | ---------------------- | ---------------------- |
| 0   | EXTRASUNNY_LA          | 晴朗                   | 洛圣都专属天气         |
| 1   | SUNNY_LA               | 晴朗                   | 洛圣都专属天气         |
| 2   | EXTRASUNNY_SMOG_LA     | 晴朗                   | 洛圣都专属天气         |
| 3   | SUNNY_SMOG_LA          | 晴朗                   | 洛圣都专属天气         |
| 4   | CLOUDY_LA              | 晴朗                   | 洛圣都专属天气         |
| 5   | SUNNY_SF               | 晴朗                   | 圣菲耶罗专属天气       |
| 6   | EXTRASUNNY_SF          | 晴朗                   | 圣菲耶罗专属天气       |
| 7   | CLOUDY_SF              | 晴朗                   | 圣菲耶罗专属天气       |
| 8   | RAINY_SF               | 暴雨                   | 圣菲耶罗专属天气       |
| 9   | FOGGY_SF               | 多云有雾               | 圣菲耶罗专属天气       |
| 10  | SUNNY_VEGAS            | 清澈蓝天               | 拉斯云祖华专属天气     |
| 11  | EXTRASUNNY_VEGAS       | 热浪                   | 拉斯云祖华专属天气     |
| 12  | CLOUDY_VEGAS           | 灰暗单调               | 拉斯云祖华专属天气     |
| 13  | EXTRASUNNY_COUNTRYSIDE | 灰暗单调               | 乡村地区专属天气       |
| 14  | SUNNY_COUNTRYSIDE      | 灰暗单调               | 乡村地区专属天气       |
| 15  | CLOUDY_COUNTRYSIDE     | 灰暗单调               | 乡村地区专属天气       |
| 16  | RAINY_COUNTRYSIDE      | 阴云密布有雨           | 乡村地区专属天气       |
| 17  | EXTRASUNNY_DESERT      | 热浪                   | 骨镇专属天气           |
| 18  | SUNNY_DESERT           | 热浪                   | 骨镇专属天气           |
| 19  | SANDSTORM_DESERT       | 沙尘暴                 | 骨镇专属天气           |
| 20  | UNDERWATER             | 绿色雾状               | 视角在水下时内部使用 |
| 21  | EXTRACOLOURS_1         | 极暗渐变天际线（紫色） | 室内场景专用天气       |
| 22  | EXTRACOLOURS_2         | 极暗渐变天际线（紫色） | 室内场景专用天气       |

游戏共有 23 个有效天气 ID（0-22），最后两个为特殊色彩天气类型。但游戏本身不限制天气 ID 范围，可使用 0-255 任意数值。超出该范围的数值会进行 256 取模运算（例如天气 ID 300 等价于 ID 44，因为 300 % 256 = 44）。虽然 0-22 号天气能正常运作，但其他 ID 可能导致未定义行为：例如粉红色天空、特定时段纹理闪烁等异常效果。

:::note

- 某些天气在不同时间段会呈现显著差异，可参考[此链接](http://hotmist.ddo.jp/id/weather.html)查看各天气类型的实时表现

- [GTA 圣安地列斯天气图库](https://dev.prineside.com/en/gtasa_weather_id/)通过可视化形式更直观地展示了天气 ID 的运作机制。您可用其查看特定时段的天气效果，并排查引发异常效果的天气类型

:::
