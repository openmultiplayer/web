---
title: Tire States
sidebar_label: Tire States
description: "Informações sobre o tamanho do byte e seus bits de estado do pneu correspondentes."
---


:::note

Os estados dos pneus são usados por nativos como [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

Mesmo veículos com mais de 4 rodas (por exemplo, caminhões) possuem apenas 4 estados de pneus.

:::

## Qual bit armazena o quê?

Os danos de todos os pneus serão salvos juntos em 1 mordida (que equivale a 4 bits) para veículos de 4 rodas e em 1 par (que equivale a 2 bits) para veículos de 2 rodas. Cada bit armazena se o pneu correspondente está **estourado (valor 1)** ou **não (valor 0)**.

- O **primeiro bit** armazena o estado do pneu **traseiro-direito** para um veículo de 4 rodas ou do pneu **traseiro** para um veículo de 2 rodas.
- O **segundo bit** armazena o estado do pneu **dianteiro direito** para um veículo de 4 rodas ou do pneu **dianteiro** para um veículo de 2 rodas.
- O **terceiro bit** armazena o estado do pneu **traseiro esquerdo** de um veículo de 4 rodas.
- O **quarto bit** armazena o estado do pneu **dianteiro esquerdo** de um veículo de 4 rodas.

Observe que os bits são contados de trás para frente, então o primeiro bit é o bit mais à direita.

---

## Exemplo

O código a seguir informa que para um veículo de 4 rodas dois pneus estouram e dois não:

`0101`

No entanto, SA-MP retorna um número decimal, então você deve primeiro convertê-lo em um número binário para obter um resultado como o acima. O que SA-MP retornaria dado o exemplo acima é este:

`5`

---

## Tabela de informações

Aqui está uma representação visual dos estados dos pneus. Veículo visto de cima para baixo, sendo os valores superiores a frente do veículo e os valores inferiores a traseira do veículo.

**Lenda:**

```
o - inflated tire
x - popped tire
```
---

### veículos de 4 rodas

4 bits para veículos de 4 rodas: (FL)(BL)(FR)(BR) (Frente-Esquerda, Trás-Esquerda, Frente-Direita e Trás-Direita).

0: (0000)

```c
    o-o
    | |
    o-o
```
1: (0001)

```c
    o-o
    | |
    o-x
```
2: (0010)

```c
    o-x
    | |
    o-o
```
3: (0011)

```c
    o-x
    | |
    o-x
```
4: (0100)

```c
    o-o
    | |
    x-o
```
5: (0101)

```c
    o-o
    | |
    x-x
```
6: (0110)

```c
    o-x
    | |
    x-o
```
7: (0111)

```c
    o-x
    | |
    x-x
```
8: (1000)

```c
    x-o
    | |
    o-o
```
9: (1001)

```c
    x-o
    | |
    o-x
```
10: (1010)

```c
    x-x
    | |
    o-o
```
11: (1011)

```c
    x-x
    | |
    o-x
```
12: (1100)

```c
    x-o
    | |
    x-o
```
13: (1101)

```c
    x-o
    | |
    x-x
```
14: (1110)

```c
    x-x
    | |
    x-o
```
15: (1111)

```c
    x-x
    | |
    x-x
```
Depois de 15 os valores são repetidos, então 16 é 0, 17 é 1 e assim por diante.

---

### Veículos de 2 rodas (bicicletas)

2 bits para veículos de 2 rodas: (F)(B) (Frente e Trás).

0: (00)

```c
    o
    |
    o
```
1: (01)

```c
    o
    |
    x
```
2: (10)

```c
    x
    |
    o
```
3: (11)

```c
    x
    |
    x
```
Depois de 3 os valores são repetidos, então 4 é 0, 5 é 1 e assim por diante.

---

## Exemplo de uso

Para estourar os dois pneus traseiros de um veículo de 4 rodas, mantendo os dianteiros inalterados:

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, (tires | VEHICLE_TIRE_STATUS:0b0101)); // A parte '0b' significa que o número a seguir está em binário. Da mesma forma que '0x' indica um número hexadecimal.
```
## Veja também

- [Status do pneu do veículo](vehicle-tire-status)
