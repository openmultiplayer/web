---
title: Light States
sidebar_label: Light States
description: "Informações sobre o tamanho do byte e seus bits de estado leve correspondentes."
---


:::note

Os estados leves são usados por nativos como [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

As luzes dos veículos com 2 rodas (e portanto com 2 luzes) não podem ser alteradas.

:::

:::note

As duas luzes traseiras de um veículo não podem ser trocadas separadamente.

:::

## Qual bit armazena o quê?

Os danos de todas as luzes serão salvos juntos em 1 byte (que equivale a 8 bits). Cada bit armazena se a luz correspondente está **quebrada (valor 1)** ou **não (valor 0)**.

- O **primeiro bit** armazena o estado da luz **frontal esquerda**.
- O **terceiro bit** armazena o estado da luz **frontal direita**.
- O **décimo primeiro bit** armazena o estado das luzes **traseiras**.
- O resto dos bits estão vazios.

Observe que os bits são contados de trás para frente, então o primeiro bit é o bit mais à direita.

---

## Exemplo

O código a seguir informa que ambas as luzes dianteiras estão quebradas e as traseiras não:

`0000 0101`

No entanto, SA-MP retorna um número decimal, então você deve primeiro convertê-lo em um número binário para obter um resultado como o acima. O que SA-MP retornaria dado o exemplo acima é este:

`5`

---

## Tabela de informações

Aqui está uma representação visual dos estados de luz. Veículo visto de cima para baixo, sendo os valores superiores a frente do veículo e os valores inferiores a traseira do veículo.

**Lenda:**

```
o - enabled light
x - disabled light
```
0: (0000 0000)

```c
    o-o
    | |
    o-o
```
1: (0000 0001)

```c
    x-o
    | |
    o-o
```
4: (0000 0100)

```c
    o-x
    | |
    o-o
```
5: (0000 0101)

```c
    x-x
    | |
    o-o
```
64: (0100 0000)

```c
    o-o
    | |
    x-x
```
65: (0100 0001)

```c
    x-o
    | |
    x-x
```
68: (0100 0100)

```c
    o-x
    | |
    x-x
```
69: (0100 0101)

```c
    x-x
    | |
    x-x
```
Outros valores não listados aqui podem alterar as luzes, mas são apenas repetições de outros valores (por exemplo, 15 tem o mesmo resultado que 5). Depois de 255 os valores serão agrupados, 256 será definido como 0, 257 como 1 e assim por diante.

---

## Exemplo de uso

Para desativar as duas luzes traseiras de um veículo, mantendo a dianteira inalterada:

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, (lights | VEHICLE_LIGHT_STATUS:0b01000000), tires); // A parte '0b' significa que o número a seguir está em binário. Da mesma forma que '0x' indica um número hexadecimal.
```
## Veja também

- [Status da luz do veículo](vehicle-light-status)
