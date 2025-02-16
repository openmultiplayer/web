---
title: Weather IDs
---

A list of weather IDs used by [SetWeather](../functions/SetWeather) and [SetPlayerWeather](../functions/SetPlayerWeather) functions.

| ID  | Name                   | Type                                  | Description (in singleplayer)             |
| --- | ---------------------- | ------------------------------------- | ----------------------------------------- |
| 0   | EXTRASUNNY_LA          | Blue skies                            | Los Santos specific weather               |
| 1   | SUNNY_LA               | Blue skies                            | Los Santos specific weather               |
| 2   | EXTRASUNNY_SMOG_LA     | Blue skies                            | Los Santos specific weather               |
| 3   | SUNNY_SMOG_LA          | Blue skies                            | Los Santos specific weather               |
| 4   | CLOUDY_LA              | Blue skies                            | Los Santos specific weather               |
| 5   | SUNNY_SF               | Blue skies                            | San Fierro specific weather               |
| 6   | EXTRASUNNY_SF          | Blue skies                            | San Fierro specific weather               |
| 7   | CLOUDY_SF              | Blue skies                            | San Fierro specific weather               |
| 8   | RAINY_SF               | Stormy                                | San Fierro specific weather               |
| 9   | FOGGY_SF               | Cloudy and foggy                      | San Fierro specific weather               |
| 10  | SUNNY_VEGAS            | Clear blue sky                        | Las Venturas specific weather             |
| 11  | EXTRASUNNY_VEGAS       | Heat waves                            | Las Venturas specific weather             |
| 12  | CLOUDY_VEGAS           | Dull, colourless                      | Las Venturas specific weather             |
| 13  | EXTRASUNNY_COUNTRYSIDE | Dull, colourless                      | Countryside specific weather              |
| 14  | SUNNY_COUNTRYSIDE      | Dull, colourless                      | Countryside specific weather              |
| 15  | CLOUDY_COUNTRYSIDE     | Dull, colourless                      | Countryside specific weather              |
| 16  | RAINY_COUNTRYSIDE      | Dull, cloudy, rainy                   | Countryside specific weather              |
| 17  | EXTRASUNNY_DESERT      | Heat waves                            | Bone County specific weather              |
| 18  | SUNNY_DESERT           | Heat waves                            | Bone County specific weather              |
| 19  | SANDSTORM_DESERT       | Sandstorm                             | Bone County specific weather              |
| 20  | UNDERWATER             | Greenish, foggy                       | Used internally when camera is underwater |
| 21  | EXTRACOLOURS_1         | Very dark, gradiented skyline, purple | Weather used in interiors                 |
| 22  | EXTRACOLOURS_2         | Very dark, gradiented skyline, purple | Weather used in interiors                 |

There are 23 different weather IDs (0-22), the last two of which being the extra colour weather types. However, the game does not feature any range checking for weather IDs and thus you can use weather IDs upto 255. Values higher than 255 or lower than 0 are turned into remainder of the division by 256 (for example, weather ID 300 is the same as ID 44, because 300 % 256 = 44). Weather IDs 0-22 works correctly but other IDs result undefined behavior: strange effects such as pink sky and flashing textures during certain times.

:::note

- Some weathers appear very different at certain times. You can see [here](http://hotmist.ddo.jp/id/weather.html) what different weather types look like at different times.

- [GTA San Andreas weather gallery](https://dev.prineside.com/en/gtasa_weather_id/) explains the situation with weather IDs better than any words. You can also use it if you wish to view weathers at certain times and look for problematic weather that cause strange effects

:::
