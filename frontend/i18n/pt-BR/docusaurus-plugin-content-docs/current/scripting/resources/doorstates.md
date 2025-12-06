---
title: Estados de Porta
sidebar_label: Estados de Porta
description: Informações sobre o tamanho de byte e seus bits de estado de porta correspondentes.
---

:::note

Os estados de porta são usados por funções nativas como [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

Os estados das 2 portas traseiras não podem ser manipulados por [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Qual bit armazena o quê?

O dano de cada porta (note que o capô e o porta-malas também são portas) será salvo em 1 byte (que é 8 bits). Você só pode alterar o estado de um bit para cada porta por vez, então você tem que chamar a função duas vezes se quiser que a porta esteja danificada e aberta ao mesmo tempo.

- O **primeiro bit** armazena se a porta está **aberta (valor 1)** ou **não (valor 0)**. A porta ainda irá travar (e mudar o primeiro bit para 0) se estiver aberta, ela está apenas aberta.
- O **segundo bit** armazena se a porta está **danificada (valor 1)** ou **não (valor 0)**. Se você quiser que uma porta danificada volte ao normal, você tem que removê-la e recolocá-la sem danos.
- O **terceiro bit** armazena se a porta está **removida (valor 1)** ou **não (valor 0)**.
- O resto dos bits estão vazios.

Parece que não há nenhum bit que armazene se a porta irá travar ou não.

Note que os bits são contados de trás para frente, então o primeiro bit é o bit mais à direita.

---

## Qual byte armazena o quê?

- O **primeiro byte** armazena o estado do **capô**.
- O **segundo byte** armazena o estado do **porta-malas**.
- O **terceiro byte** armazena o estado da **porta do motorista**.
- O **quarto byte** armazena o estado da **porta do passageiro**.

Note que os bytes são contados de trás para frente, então o primeiro byte é o byte mais à direita.

---

## Exemplo

O código a seguir indica que o capô está removido, a porta dianteira esquerda está danificada, a porta dianteira direita está aberta e o porta-malas está danificado e aberto:

`00000001 00000010 00000011 00000100`

No entanto, SA-MP retorna um número decimal, então você tem que convertê-lo primeiro para um número binário para obter um resultado como acima. O que SA-MP retornaria dado o exemplo acima é isto:

`16909060`

---

## Tabela de informações

**Legenda:**

```
Estático      Portas                   Capô / Porta-malas

° - Luz        | - saudável, fechada     -- - saudável, fechado
              -- - saudável, aberta     [] - saudável, aberto
               § - danificada, fechada  ~~ - danificado, fechado
              ww - danificada, aberta   {} - danificado, aberto
                 - removida                - removido
```

**Primeiro byte (capô):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °[]°      °~~°      °{}°      °  °      °  °      °  °      °  °
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**Segundo byte (porta-malas):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °[]°      °--°      °{}°      °  °      °  °      °  °      °  °
```

**Terceiro byte (porta do motorista):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |     --  |      §  |     ww  |         |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**Quarto byte (porta do passageiro):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  --     |  §      |  ww     |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

---

## Wrapper

Trecho útil para evitar trabalhar demais com os bits e bytes.

```c
enum Door
{
    DOOR_HOOD,
    DOOR_TRUNK,
    DOOR_DRIVER,
    DOOR_PASSENGER
}

enum DoorState(<<= 1)
{
    IS_OPENED = 1,
    IS_DAMAGED,
    IS_REMOVED
}

stock GetDoorState(doorStates, Door:door, DoorState:doorState)
{
    return (doorStates >>> (8 * door)) & doorState;
}
```

---

## Exemplo de uso

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

// Estado único
if (GetDoorState(_:doors, DOOR_DRIVER, IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "A porta do motorista do seu veículo está danificada!");
}

// Estado combinado
if (GetDoorState(_:doors, DOOR_HOOD, IS_OPENED | IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "O capô do seu veículo está aberto e danificado!");
}
```

## Veja também

- [Vehicle Door Status](vehicle-door-status)
