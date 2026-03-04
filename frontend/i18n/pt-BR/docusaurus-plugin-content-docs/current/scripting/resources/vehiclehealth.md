---
title: Saúde do Veículo
sidebar_label: Saúde do Veículo
description: Valores de saúde do veículo.
---

:::info

O valor de saúde do veículo usado por [SetVehicleHealth](../functions/SetVehicleHealth) e [GetVehicleHealth](../functions/GetVehicleHealth) está sempre entre 0 e 1000. Um valor de 0 significa que o veículo irá explodir, e um valor de 1000 significa que o veículo não tem sequer um arranhão. O efeito do valor de saúde do veículo no motor é ilustrado na tabela abaixo.

:::

| Vehicle health | Effect on the engine                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| > 650          | Nenhum. O motor ainda está praticamente normal                                                         |
| 550-650        | O motor está superaquecendo e emitirá fumaça branca                                                   |
| 390-550        | O motor está superaquecendo bastante e emitirá fumaça cinza                                           |
| 250-390        | O motor está ficando muito quente e emitirá fumaça preta                                               |
| < 250          | O motor pegará fogo e o veículo explodirá alguns segundos depois, a menos que seja reparado          |
