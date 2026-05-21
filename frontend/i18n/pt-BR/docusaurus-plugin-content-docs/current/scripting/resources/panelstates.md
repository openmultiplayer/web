---
title: Panel States
sidebar_label: Panel States
description: "Informações sobre o tamanho dos bytes e seus bits de estado do painel correspondentes."
---


:::note

Os estados do painel são usados por nativos como [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Qual petisco armazena o quê?

- O **primeiro nibble** armazena o estado do painel **frontal esquerdo** de um carro ou do **motor (esquerdo)** de um avião.
- O **segundo nibble** armazena o estado do painel **frontal direito** de um carro ou do **motor (direito)** de um avião.
- A **terceira mordidela** armazena o estado do painel **traseiro esquerdo** de um carro ou do **leme (no estabilizador vertical)** de um avião.
- O **quarto nibble** armazena o estado do painel **traseiro direito** de um carro ou dos **elevadores (na cauda)** de um avião.
- A **quinta mordidela** armazena o estado do **pára-brisas** de um carro ou dos **ailerons (nas asas)** de um avião.
- A **sexta mordida** armazena o estado do **para-choque dianteiro** de um carro.
- A **sétima mordidela** armazena o estado do **para-choque traseiro** de um carro.

Nem todo veículo suporta todos os painéis mencionados. O grau de dano afeta bastante o manuseio de um avião e o avião produzirá fumaça preta de qualquer parte danificada.

Para a maioria dos painéis existem 4 estados: **não danificado (valor 0)**, **esmagado (valor 1)**, **pendurado solto (valor 2)** e **removido (valor 3)**. Os estados esmagado e solto são bastante problemáticos (quando você passa de um estado solto para um estado esmagado, o painel fica solto AND esmagado em vez de apenas esmagado, mas só é esmagado novamente quando o veículo é recarregado, ...). Para corrigir esse comportamento estranho, basta redefinir o dano daquele painel primeiro e depois aplicar o estado necessário. Desta forma também é possível ter um painel que fica solto durante a condução mas não é fisicamente esmagado (para ver melhor o que isto significa, vá directamente de 0 a 2, em vez de passar de 0 a 1 a 2).

Parece que você só consegue ler o valor do pára-brisa. A configuração atualiza o valor no servidor, mas não resulta em nenhuma alteração física no veículo.

Observe que as mordidas são contadas de trás para frente, então a primeira mordida é a mais à direita.

---

## Exemplo

O código a seguir informa que para um carro os pára-choques dianteiro e traseiro são removidos:

`00000011 00110000 00000000 00000000`

No entanto, SA-MP retorna um número decimal, então você deve primeiro convertê-lo em um número binário para obter um resultado como o acima. O que SA-MP retornaria dado o exemplo acima é este:

`53477376`

---

## Exemplo de uso

Para remover o pára-choque dianteiro de um carro mantendo os outros painéis inalterados:

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, (panels | VEHICLE_PANEL_STATUS:0b00000000001100000000000000000000), doors, lights, tires); // A parte '0b' significa que o número a seguir está em binário. Da mesma forma que '0x' indica um número hexadecimal.
```
## Veja também

- [Status do painel do veículo](vehicle-panel-status)
