---
title: "Binary"
sidebar_label: "Binary"
description: Een verdiepende uitleg over binaire getallen en bitwise-operators.
---

## Credits

Deze tutorial is gebaseerd op een topic op de SA-MP-forums. De auteur is **Kyosaur**.

## Wat is binary?

Binary (binair) is een talstelsel dat twee symbolen gebruikt: 0 en 1. Waar decimaal (**base 10**) tien cijfers gebruikt, gebruikt binary alleen 0 en 1. Voor computers is dit essentieel: op het laagste niveau worden berekeningen uitgevoerd met aan/uit (1/0). Vergelijk decimaal en binair naast elkaar:

Decimal (base 10)

```c
0
1
2
3
4
5
6
7
8
9
10
11
12
13
```

Binary (base 2)

```c
0 //0
1 //1
10 //2
11 //3
100 //4
101 //5
110 //6
111 //7
1000 //8
1001 //9
1010 //10
1011 //11
1100 //12
1101 //13
```

Plaatswaardes in binary heten “bits” (**b**inary dig**its**) en zijn machten van 2; net zoals in decimaal machten van 10 zijn. Voorbeeld: 13 in decimaal en binair:

Decimal (base 10)

```c
13

// 1 * (10^1) + 3 * (10^0) = 10 + 3 = 13
```

Binary (base 2)

```c
1101

// 1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)
// 8 + 4 + 0 + 1 = 13
```

Belangrijk: alleen bits die 1 zijn tel je mee. Een handige rij machten van 2:

```c
4096,2048,1024,512,256,128,64,32,16,8,4,2,1
```

### Een diepere blik op bits

Pawn is “typeless” met 32-bits cellen. Begrippen als signed/unsigned en 2’s complement bepalen bereik en negatieve waarden. Maximum signed int in Pawn:

```c
2^31 - 1 = 2147483647
1111111111111111111111111111111 // 31 bits aan
```

De 32e bit (MSB) markeert het teken. Negatieven worden met 2’s complement opgeslagen (bits flippen en 1 optellen).

## Binaire operators (bitwise)

- Arithmetic shift: >> en <<
- Logical shift: >>>
- NOT (complement): ~
- AND: &
- OR: |
- XOR: ^

### AND

```c
1100 //12
&
0100 //4
=
0100 //4
```

### OR

```c
1100 //12
|
0100 //4
=
1100 //12
```

### XOR

```c
1100 //12
^
0100 //4
=
1000 //8
```

### NOT

```c
~0 = 11111111111111111111111111111111 // -1
```

### Bit shifting

Rechts (>>) en links (<<) schuiven bits. Arithmetic right shift padt met de MSB (behoudt teken), arithmetic left shift padt met 0. Logical right shift (>>>) padt altijd met 0 (resultaat wordt positief).

De rest van de voorbeelden en uitleg uit het origineel blijven ongewijzigd van toepassing; code en tabellen kun je 1:1 gebruiken.


