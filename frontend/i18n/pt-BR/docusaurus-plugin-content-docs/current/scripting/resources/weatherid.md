---
title: Weather IDs
sidebar_label: Weather IDs
---


Uma lista de clima IDs usada pelas funções [SetWeather](../functions/SetWeather) e [SetPlayerWeather](../functions/SetPlayerWeather).

| ID | Nome | Tipo | Descrição (no modo single player) |
| --- | ---------------------- | ------------------------------------- | ----------------------------------------- |
| 0 | EXTRASUNNY_LA | Céu azul | Tempo específico em Los Santos |
| 1 | SUNNY_LA | Céu azul | Tempo específico em Los Santos |
| 2 | EXTRASUNNY_SMOG_LA | Céu azul | Tempo específico em Los Santos |
| 3 | SUNNY_SMOG_LA | Céu azul | Tempo específico em Los Santos |
| 4 | CLOUDY_LA | Céu azul | Tempo específico em Los Santos |
| 5 | SUNNY_SF | Céu azul | Tempo específico em San Fierro |
| 6 | EXTRASUNNY_SF | Céu azul | Tempo específico em San Fierro |
| 7 | CLOUDY_SF | Céu azul | Tempo específico em San Fierro |
| 8 | RAINY_SF | Tempestuoso | Tempo específico em San Fierro |
| 9 | FOGGY_SF | Nublado e nevoeiro | Tempo específico em San Fierro |
| 10 | SUNNY_VEGAS | Céu azul claro | Tempo específico em Las Venturas |
| 11 | EXTRASUNNY_VEGAS | Ondas de calor | Tempo específico em Las Venturas |
| 12 | CLOUDY_VEGAS | Opaco, incolor | Tempo específico em Las Venturas |
| 13 | EXTRASUNNY_COUNTRYSIDE | Opaco, incolor | Clima específico do campo |
| 14 | SUNNY_COUNTRYSIDE | Opaco, incolor | Clima específico do campo |
| 15 | CLOUDY_COUNTRYSIDE | Opaco, incolor | Clima específico do campo |
| 16 | RAINY_COUNTRYSIDE | Monótono, nublado, chuvoso | Clima específico do campo |
| 17 | EXTRASUNNY_DESERT | Ondas de calor | Tempo específico em Bone County |
| 18 | SUNNY_DESERT | Ondas de calor | Tempo específico em Bone County |
| 19 | SANDSTORM_DESERT | Tempestade de areia | Tempo específico em Bone County |
| 20 | UNDERWATER | Esverdeado, nebuloso | Usado internamente quando a câmera está debaixo d'água |
| 21 | EXTRACOLOURS_1 | Horizonte muito escuro e gradiente, roxo | Tempo usado em interiores |
| 22 | EXTRACOLOURS_2 | Horizonte muito escuro e gradiente, roxo | Tempo usado em interiores |

Existem 23 climas diferentes IDs (0-22), sendo os dois últimos os tipos de clima com cores extras. No entanto, o jogo não apresenta nenhuma verificação de intervalo para o clima IDs e, portanto, você pode usar o clima IDs até 255. Valores maiores que 255 ou menores que 0 são transformados no restante da divisão por 256 (por exemplo, clima ID 300 é o mesmo que ID 44, porque 300% 256 = 44). O clima IDs 0-22 funciona corretamente, mas outros IDs resultam em comportamento indefinido: efeitos estranhos, como céu rosa e texturas piscantes durante determinados horários.

:::note

- Alguns climas parecem muito diferentes em determinados momentos. Você pode ver [aqui](http://hotmist.ddo.jp/id/weather.html) como são os diferentes tipos de clima em momentos diferentes.

- [GTA Galeria meteorológica de San Andreas](https://dev.prineside.com/en/gtasa_weather_id/) explica a situação com o clima IDs melhor do que qualquer palavra. Você também pode usá-lo se desejar ver o clima em determinados horários e procurar condições climáticas problemáticas que causem efeitos estranhos.

:::
