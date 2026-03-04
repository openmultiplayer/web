---
title: opcodes
sidebar_label: opcodes
description: IDs de ação do SendClientCheck
tags: []
---

:::note

Esta página contém todos os IDs de ação/opcode usados por [SendClientCheck](../functions/SendClientCheck).

:::

| opcode | Purpose                                                                                                                                                                             |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72     | O tempo de atividade do computador do jogador                                                                                                                                      |
| 71     | O checksum do ColModel do modelo fornecido (dados na classe CColModel)                                                                                                            |
| 70     | O checksum do CModelInfo do modelo fornecido (dados na classe CModelInfo)                                                                                                         |
| 2      | Retorna 32 flags da entidade em CPhysical (se o jogador estiver em veículo, envia dados do veículo; se estiver a pé, envia do jogador)                                          |
| 5      | Calcula checksum de `size` bytes do endereço `arg + offset` (memória GTA) e retorna no argumento de resposta; `arg` deve estar nos limites da memória do GTA                    |
| 69     | Calcula checksum de `size` bytes do endereço `arg + offset` (memória SA-MP) e retorna no argumento de resposta; `arg` deve estar nos limites da memória do GTA (0x0 - 0xC3500) |
