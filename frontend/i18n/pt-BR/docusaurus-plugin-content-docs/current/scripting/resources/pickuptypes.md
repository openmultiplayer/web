---
title: "Pickup Types"
sidebar_label: "Pickup Types"
---


### Tipos de coleta disponíveis

:::note

Esses tipos de pickup são usados por [CreatePickup](../functions/CreatePickup) e [CreatePlayerPickup](../functions/CreatePlayerPickup).

:::

:::note

A maioria dos outros IDs não estão documentados ou são semelhantes ao tipo 1 (mas não os use apenas porque parecem semelhantes ao ID 1, pois podem ter efeitos colaterais como ID 18 e 20).

:::

| ID | Descrição |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0 | Não possui atributos especiais e não pode ser adquirido. Ele também não aciona [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup) ou [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup) e não é removido ao fechar o servidor |
| 1 | Existe sempre. Desativa scripts de coleta, como ferraduras e ostras, para permitir ações com script ONLY. Acionará [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup) ou [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup) a cada poucos segundos. Este é provavelmente um bug SA-MP |
| 2 | Desaparece após a coleta, reaparece após 30 segundos se o jogador estiver a uma distância de pelo menos 15 metros (usado para coleta de dinheiro) |
| 3 | Desaparece após a coleta, reaparece após a morte |
| 4 | Desaparece após 20 segundos. Reaparece após a morte |
| 5 | Desaparece após 120 segundos. Reaparece após a morte |
| 8 | Desaparece após a coleta, mas não tem efeito (usado para coleta de dinheiro) |
| 9 | Explode ao entrar em contato com qualquer veículo terrestre em 10 segundos após a criação (usado para minas terrestres) |
| 10 | Explode em contacto com qualquer veículo terrestre (utilizado para minas terrestres) |
| 11 | Explode ao entrar em contato com qualquer embarcação em 10 segundos após a criação (usado para minas náuticas/marítimas) |
| 12 | Explode em contacto com qualquer embarcação (utilizada para minas náuticas/marítimas) |
| 13 | Invisível. Aciona o som do checkpoint quando captado por um veículo, mas não aciona OnPlayerPickUpPickup (captador flutuante) |
| 14 | Desaparece após a retirada, só pode ser retirada com veículo. Aciona o som do checkpoint (captador flutuante) |
| 15 | Igual ao tipo 2, porém a coleta reaparecerá após 12 minutos. Se o modelo ID for um suborno, ele reaparecerá após apenas 5 minutos.                                                                                                                                                                     |
| 18 | Semelhante ao tipo 1. Pressionar Tab (KEY_ACTION) faz com que ele desapareça, mas o pressionamento da tecla não aciona OnPlayerPickUpPickup (usado para propriedades) |
| 19 | Desaparece após a coleta, mas não reaparece. Faz som de "retirada de dinheiro" se for recolhido |
| 20 | Semelhante ao tipo 1. Desaparece quando você tira uma foto dele com a arma Câmera, o que aciona a mensagem "Instantâneo # fora de 0". Tirar uma foto não aciona OnPlayerPickUpPickup (usado para locais de instantâneos) |
| 22 | Igual ao tipo 3 (usado para missões) |
