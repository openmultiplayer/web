---
title: "Geavanceerde structuren"
sidebar_label: "Geavanceerde structuren"
---

## Array-manipulatie

### Een lege slot correct vinden

Onderstaand voorbeeld laat zien hoe je met standaard codepraktijken een lege slot in een array vindt.

```pawn
new
    gMyArray[10];

stock FindEmptySlot()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray)) return -1;
    return i;
}
```

Dit basisvoorbeeld gaat ervan uit dat een array-slot leeg is als de waarde 0 is. De lus loopt door alle waarden in de array (kan ook met een constant) zolang de waarden niet 0 zijn. Bij de eerste 0 faalt de while-conditie en stopt de lus zonder `break`. De functie retourneert -1 als er geen vrije slot is gevonden; check dat aan de aanroepende kant. Vaak gebruik je het gevonden id direct:

```pawn
MyFunction()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray))
    {
        printf("No free slot found");
        return 0;
    }
    printf("Slot %d is empty", i);
    // Gebruik de gevonden slot
    return 1;
}
```

Vervang uiteraard `gMyArray[i]` door jouw eigen indicatie dat een slot in gebruik is.

### Lijst

#### Introductie

Lijsten zijn een nuttige structuur: feitelijk een array waarbij elk element naar het volgende relevante element wijst.

Voorbeeld gesorteerde lijst op indices, met start- en next-indexen:

```pawn
start = 1
3, 1, 64, 2, 4, 786, 2, 9
4, 3, 5,  6, 7, -1,  0, 2
```

Het laatste index bij 786 is -1: einde van de lijst. Toevoegen en verwijderen kan door alleen de ‘pointers’ (next-indexen) te wijzigen in plaats van alle waarden te verplaatsen. Zie varianten en voorbeelden in de codeblokken verderop.

#### Typen

- Enkelvoudige lijst: iedere waarde wijst naar de volgende
- Dubbele lijst: iedere waarde wijst naar zowel vorige als volgende
- Loopende lijst: laatste wijst terug naar eerste (pas op voor eindeloze lussen)

Voorbeeld dubbele looplijst (met `start`, `end`, `next`, `last`), zie code in de Engelse versie; de structuur blijft identiek, alleen uitleg is vertaald.

#### Gemengde lijsten

Gemengde lijsten combineren meerdere lijsten in één array, bv. een gesorteerde lijst en een vrije-slots-lijst om nieuwe elementen snel te plaatsen.

#### Code

Kies eerst het lijsttype dat bij je toepassing past. Onderstaande voorbeelden tonen een numeriek oplopend gesorteerde gemengde lijst met een tweede lijst voor vrije slots.

```pawn
#define NUMBER_OF_VALUES (10)

enum E_DATA_LIST
{
    E_DATA_LIST_VALUE,
    E_DATA_LIST_NEXT
}

new
    gListData[NUMBER_OF_VALUES][E_DATA_LIST],
    gUnusedStart = 0,
    gListStart = -1; // Start zonder lijst

List_Setup()
{
    new i, size = NUMBER_OF_VALUES;
    size--;
    for (i = 0; i < size; i++)
    {
        gListData[i][E_DATA_LIST_NEXT] = i + 1; // Aanvankelijk zijn alle slots vrij
    }
    gListData[size][E_DATA_LIST_NEXT] = -1; // Einde vrijelijst
}

List_Add(value)
{
    if (gUnusedStart == -1) return -1; // Geen vrije slots
    new pointer = gListStart,
        last = -1,
        slot = gUnusedStart;
    gListData[slot][E_DATA_LIST_VALUE] = value;
    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];
    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)
    {
        last = pointer;
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    if (last == -1)
    {
        gListData[slot][E_DATA_LIST_NEXT] = gListStart;
        gListStart = slot;
    }
    else
    {
        gListData[slot][E_DATA_LIST_NEXT] = pointer;
        gListData[last][E_DATA_LIST_NEXT] = slot;
    }
    return slot;
}

List_Remove(slot)
{
    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;
    new pointer = gListStart, last = -1;
    while (pointer != -1 && pointer != slot)
    {
        last = pointer;
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    if (pointer == -1) return 0; // Niet gevonden
    if (last == -1)
    {
        gListStart = gListData[slot][E_DATA_LIST_NEXT];
    }
    else
    {
        gListData[last][E_DATA_LIST_NEXT] = gListData[slot][E_DATA_LIST_NEXT];
    }
    // Voeg slot terug aan de vrije lijst
    gListData[slot][E_DATA_LIST_NEXT] = gUnusedStart;
    gUnusedStart = slot;
    return 1;
}
```

### Binaire bomen

#### Introductie

Binaire bomen zijn een snelle zoekmethode door telkens links/rechts te kiezen t.o.v. een middenwaarde (zoals 20-vragen). Ze ordenen niet per se data fysiek, maar bieden efficiënte zoekstructuren. De voorbeelden en afbeeldingen (binary tree) uit de originele tekst zijn onveranderd van toepassing.

#### Gebalanceerd vs. ongebalanceerd

Een gebalanceerde boom houdt de dieptes ongeveer gelijk; ongebalanceerde bomen kunnen nog steeds sneller zoeken dan lineair, maar zijn minder efficiënt. Willekeurige invoegvolgorde helpt meestal balans te benaderen; invoegen in al-gesorteerde volgorde is het slechtst.

#### Aanpassen (toevoegen/verwijderen)

Toevoegen: volg links/rechts tot een lege tak en plaats de waarde. Verwijderen: makkelijk bij een blad of één kind; lastiger bij twee kinderen (diverse strategieën zoals vervangen door opvolger/voorloper of herbouwen van subboom).


