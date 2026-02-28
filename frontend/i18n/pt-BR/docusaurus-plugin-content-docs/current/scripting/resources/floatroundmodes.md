---
title: Modos de Floatround
sidebar_label: Modos de Floatround
description: Os modos de arredondamento usados com floatround.
---

:::info

Uma lista de possíveis modos de floatround que podem ser usados por [floatround](../functions/floatround).

:::

| Mode                | Description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| floatround_round    | Arredonda para o inteiro mais próximo. Uma parte fracionária de exatamente 0.5 arredonda para cima (este é o padrão) |
| floatround_floor    | Arredonda para baixo                                                                               |
| floatround_ceil     | Arredonda para cima                                                                                |
| floatround_tozero   | Arredonda para baixo em valores positivos e para cima em valores negativos ("trunca")            |
| floatround_unbiased | O mesmo que floatround_round                                                                        |
