---
title: GetVehicleParamsEx
sidebar_label: GetVehicleParamsEx
description: "Obtém os parâmetros de um veículo."
tags: ["vehicle"]
---


## Descrição

Obtém os parâmetros de um veículo.

| Nome | Descrição |
| ---------- | ------------------------------------------------------------------- |
| vehicleid | O ID do veículo do qual obter os parâmetros.                   |
| &engine | Obtenha o status do motor. Se for 1, o motor está funcionando.. |
| &lights | Obtenha o estado das luzes do veículo. Se 1 as luzes estão acesas.            |
| &alarm | Obtenha o estado de alarme do veículo. Se for 1, o alarme está (ou estava) soando. |
| &doors | Obtenha o status de bloqueio das portas. Se 1 as portas estão trancadas.        |
| &bonnet | Obtenha o status do capô/capô. Se 1, está aberto.                        |
| &boot | Obtenha o status de inicialização/tronco. 1 significa que está aberto.                      |
| &objective | Obtenha o status do objetivo. 1 significa que o objetivo está ativado.              |

## Retornos

**true** – sucesso

**false** - falha (veículo inválido ID).

Os parâmetros do veículo são armazenados nas variáveis ​​referenciadas, não no valor de retorno.

## Exemplos

```c
new
	engine, lights, alarm, doors, bonnet, boot, objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
// Isso faria com que todas as variáveis acima recebessem o status de seus respectivos itens.
```
## Notas

:::tip

Se um parâmetro não estiver definido (SetVehicleParamsEx não usado anteriormente), o valor será -1 ('desdefinido').

:::

## Funções Relacionadas

- [SetVehicleParamsEx](SetVehicleParamsEx): Define os parâmetros de um veículo para todos os jogadores.
