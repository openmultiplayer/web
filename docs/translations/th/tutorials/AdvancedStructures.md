---
title: "โครงสร้างขั้นสูง"
---

## การจัดการ Array

### หาช่องว่างอย่างไรให้ถูกต้อง

ตัวอย่างนี้แสดงวิธีการหาช่องว่างในอาร์เรย์โดยใช้โค้ดมาตรฐาน แบบฝึกหัด

```c
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

ตัวอย่างพื้นฐานนี้ถือว่าช่องอาร์เรย์ว่างถ้าหากค่าเป็น 0 ลูปวนผ่านทุก ๆ ค่าในอาร์เรย์ (และทำอย่างต่อเนื่อง) ตราบใดที่ค่าไม่ใช่ 0 เมื่อถึงจุดนึงที่ค่าเป็น 0 เงื่อนไขลูป while จะ fail และ ลูปจะสิ้นสุดลงโดยไม่ต้อง break เป็นพื้นฐานทั่วไป แต่ ก็ควรระวังกับสถานการณ์เช่นนี้ ฟังก์ชั่นนี้จะส่งค่ากลับเป็น -1 หากไม่พบช่องว่าง ซึ่งต้องตรวจสอบในตอนท้าย โดยทั่วไปคุณจะใช้ id ที่พบทันที:

```c
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
        printf("ไม่พบช่องว่าง");
        return 0;
    }
    printf("ช่องที่ %d ว่าง", i);
    // เอาช่องที่พบไปใช้กับโค้ดของคุณด้านล่างจะเอาไปทำอะไรก็ตามแต่
    return 1;
}
```

คุณสามารถแทน "gMyArray[i]" ด้วยนิพจน์ของคุณในการ ชี้ไปยังช่องที่ใช้งาน

### List

#### เบื้องต้น

List เป็นประเภทของโครงสร้างที่มีประโยชน์มาก โดยพื้นฐานแล้วพวกมันคืออาร์เรย์ที่ ชิ้นส่วนถัดไปหรือข้อมูลที่สัมพันธ์กันจะชี้ไปที่ส่วนสุดท้าย

ตัวอย่าง:

สมมติว่าคุณมีอาร์เรย์ต่อไปนี้:

```c
3, 1, 64, 2, 4, 786, 2, 9
```

หากคุณต้องการจัดเรียงอาร์เรย์ให้ท้ายที่สุดออกมาเป็นแบบนี้:

```c
1, 2, 2, 3, 4, 9, 64, 786
```

อย่างไรก็ตามหากคุณต้องการทิ้งข้อมูลให้เรียงลำดับแบบเดิมแต่ไม่รู้ เลขลำดับเนื่องจากเหตุผลบางอย่าง (แค่ตัวอย่าง) ดังนั้นคุณเริ่มมีปัญหาแล้ว ยังไงล่ะ? คุณหมายถึงมีตัวเลขสองชุดในการสั่งครั้งเดียว? ใช่แล้ว ปัญหาแบบนี้แหละที่จะมีประโยชน์ในการใช้ List ในการสร้าง List จากข้อมูลนี้คุณจะต้องสร้างอาร์เรย์เข้าไป 2 มิติ โดยทั้งสองมิติจะมีขนาดใหญ่ 2 เซลล์ หนึ่งเก็บจำนวนเดิมไว้ และอีกหนึ่งเก็บดัชนีของ ตัวเลขถัดไปที่มากกว่าไว้ คุณจะต้องมีตัวแปรแยกต่างหากเพื่อเก็บดัชนีของตัวเลขต่ำสุดไว้ด้วย อาร์เรย์ใหม่ของคุณจะมีลักษณะดังนี้:

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9
4, 3, 5,  6, 7, -1,  0, 2
```

ดัชนีถัดไปที่สัมพันธ์กับ 786 คือ -1 นี่คือดัชนีอาร์เรย์ที่ไม่ถูกต้องและ เป็นการระบุจุดสิ้นสุดของ List นั้นคือไม่มีตัวเลขเพิ่มเติมแล้ว เห็นได้ชัดว่า 2 ทั้งสอง จะเป็น 2 ทางไหนก่อนก็ได้ อันแรกในอาร์เรย์จะอยู่ในอันดับแรกใน List เนื่องจากมีแนวโน้มที่จะพบก่อน

ข้อดีอีกอย่างของวิธีการเรียงลำดับตัวเลขนี้คือการเพิ่มจำนวนได้เร็วขึ้นมาก หากคุณต้องการเพิ่มเลข 3 ให้กับอาร์เรย์ที่เรียงลำดับของคุณ จะต้องเลื่อนอย่างน้อย 4 ตัวเลข หนึ่งช่องไปทางขวาเพื่อสร้างช่องว่าง ซึ่งในที่นี้มันอาจจะยังไม่น่ากลัว แต่มันจะช้ามาก ๆ ถ้าอาร์เรย์มีขนาดใหญ่ แต่ด้วยเวอร์ชั่น List นี้เพียงแค่คุณต่อ 3 เพิ่มเข้าไปในลำดับสุดท้ายของอาร์เรย์และ แก้ไขค่าเดียวใน List;

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9, 3
8, 3, 5,  6, 7, -1,  0, 2, 4
^ แก้ไขค่านี้                  ^ ช่องถัดไปที่สูงที่สุด
```

ไม่มีตัวเลขไหนถูกย้าย ดังนั้นจึงไม่มีดัชนีให้อัปเดต เพียงแค่ทำให้ค่าที่ต่ำสุดชี้ไปยังหมายเลขใหม่และ สร้างหมายเลขใหม่ชี้ไปยังค่าที่ต่ำสุดที่ชี้ไป การลบค่า ก็ทำได้ง่าย:

```c
start = 1
3, 1, 64, X, 4, 786, 2, 9, 3
8, 6, 5,  6, 7, -1,  0, 2, 4
   ^ เปลี่ยนตรงนี้เพื่อข้ามค่าที่ต้องการลบ
```

ตอนนี้เลข 2 ตัวแรกได้ถูกลบออกแล้ว และเลขก่อนหน้าที่ชี้ไปยังเลขนั้น (คือเลข 1) ได้ถูกอัปเดตให้ชี้ไปยังตำแหน่งเดียวกับเลขที่ถูกลบเคยชี้อยู่ ในตัวอย่างนี้ ไม่มีการลบตัวชี้หรือตัวเลขของหมายเลขที่ถูกลบออก แต่คุณก็ไม่สามารถไปที่ช่องนั้นได้ใน List ดังนั้นไม่สำคัญเลยมันได้ถูกลบออกอย่างมีประสิทธิภาพแล้ว

#### Types

List ในตัวอย่างข้างต้นเป็นเพียงแค่ List ขั้นพื้นฐานแบบเดี่ยว คุณยังสามารถทำ List แบบคู่ที่ทุก ๆ ค่าชี้ไปยังค่าถัดไปและค่าสุดท้าย ซึ่งมักจะมีตัวชี้ไปที่ชี้ไปยังตำแหน่งสิ้นสุดของ List เช่นกันเพื่อย้อนกลับ (เช่น เพื่อให้เรียงตัวเลขจากมากไปหาน้อย):

```c
start = 1
end = 5
value: 3, 1,  64, 2, 4, 786, 2, 9, 3
next:  8, 3,  5,  6, 7, -1,  0, 2, 4
last:  6, -1, 7,  1, 8, 2,   3, 4, 0
```

คุณต้องระวังสิ่งนี้โดยเฉพาะอย่างยิ่ง เมื่อคุณมีค่ามากกว่า หนึ่งค่า ที่ตัวชี้สุดท้ายชี้ไปที่ตัวเลขที่ว่าเลขไหนเป็นตัวชี้ตัวถัดไปที่จะ ย้อนกลับไปตรงๆอีกครั้งแบบนี้ ซึ่งมันผิด:

```c
2,  3, 3
1,  2, -1
-1, 2, 0
```

เลขถัดจากตัวชี้ของ 2 ก็คือ 3 ตัวแรก แต่ตัวชี้ของ 3 ตัวสุดท้าย ไม่ได้ชี้กลับไปหา 2 List ของทั้งคู่อยู่ในลำดับของตัวเอง (สองและสามอาจอยู่ได้ ทั้งสองทาง) แต่เมื่อรวมกันแล้วมันผิด เวอร์ชั่นที่ถูกต้อง เป็นแบบนี้:

```c
2,  3, 3
1,  2, -1
-1, 0, 2
```

List ทั้งสองเริ่มต้นและสิ้นสุดที่เลขสองตัว ด้านหลังของ List ในตัวอย่างที่ผิดเริ่มต้นที่เลขตรงกลาง

The other type of list is the looping one where the last value points back to the first. The obvious advantage to this is that you can get to any value from any other value without knowing in advance whether the target is before or after the start point, you just need to be careful not to get into an infinite loop as there's no explicit -1 end point. These lists do still have start points. You can also do double looping lists where you have a next and last list, both of which loop round:

```c
start = 1
end = 5
3, 1,  64, 2, 4, 786, 2, 9, 3
8, 3,  5,  6, 7, 1,   0, 2, 4
6, 5,  7,  1, 8, 2,   3, 4, 0
```

#### Mixed lists

Mixed lists are arrays containing multiple lists at once. An example could be an array of values, sorted by a list, with another list linking all unused slots so you know where you can add a new value. Example (X means unused (free) slot):

```c
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X, 45
sort:  4,        8, 13, 7,      11, 9,  0,      -1,    5
free:      2, 6,            10,             12,     -1
```

Obviously the two lists never interact so both can use the same slot for their next value:

```c
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X,  45
next:  4,  2, 6, 8, 13, 7,  10, 11, 9,  0,  12, -1, -1, 5
```

#### Code

Before you start the code you need to decide what sort of list is best suited for your application, this is entirely based on application can't easily be covered here. All these examples are mixed lists, one list for the required values, one for unused slots.

This example shows how to write code for a list sorted numerically ascending.

```c
#define NUMBER_OF_VALUES (10)

enum E_DATA_LIST
{
    E_DATA_LIST_VALUE,
    E_DATA_LIST_NEXT
}

new
    gListData[NUMBER_OF_VALUES][E_DATA_LIST],
    gUnusedStart = 0,
    gListStart = -1; // Starts off with no list

// This function initializes the list
List_Setup()
{
    new
        i;
    size--;
    for (i = 0; i < size; i++)
    {
        // To start with all slots are unused
        gListData[i][E_DATA_LIST_NEXT] = i + 1;
    }
    // End the list
    gListData[size][E_DATA_LIST_NEXT] = -1;
}

// This function adds a value to the list (using basic sorting)
List_Add(value)
{
    // Check there are free slots in the array
    if (gUnusedStart == -1) return -1;
    new
        pointer = gListStart,
        last = -1
        slot = gUnusedStart;
    // Add the value to the array
    gListData[slot][E_DATA_LIST_VALUE] = value;
    // Update the empty list
    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];
    // Loop through the list till we get to bigger/same size number
    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)
    {
        // Save the position of the last value
        last = pointer
        // Move on to the next slot
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // If we got here we ran out of values or reached a larger one
    // Check if we checked any numbers
    if (last == -1)
    {
        // The first number was bigger or there is no list
        // Either way add the new value to the start of the list
        gListData[slot][E_DATA_LIST_NEXT] = gListStart;
        gListStart = slot;
    }
    else
    {
        // Place the new value in the list
        gListData[slot][E_DATA_LIST_NEXT] = pointer;
        gListData[last][E_DATA_LIST_NEXT] = slot;
    }
    return slot;
}

// This function removes a value from a given slot in the array (returned by List_Add)
List_Remove(slot)
{
    // Is this a valid slot
    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;
    // First find the slot before
    new
        pointer = gListStart,
        last = -1;
    while (pointer != -1 && pointer != slot)
    {
        last = pointer;
        pointer = gListData[pointer][E_LIST_DATA_NEXT];
    }
    // Did we find the slot in the list
    if (pointer == -1) return 0;
    if (last == -1)
    {
        // The value is the first in the list
        // Skip over this slot in the list
        gListStart = gListData[slot][E_LIST_DATA_NEXT];
    }
    else
    {
        // The value is in the list
        // Skip over this slot in the list
        gListData[last][E_LIST_DATA_NEXT] = gListData[slot][E_LIST_DATA_NEXT];
    }
    // Add this slot to the unused list
    // The unused list isn't in any order so this doesn't matter
    gListData[slot][E_LIST_DATA_NEXT] = gUnusedStart;
    gUnusedStart = slot;
    return 1;
}
```

### Binary Trees

#### Introduction

Binary trees are a very fast method of searching for data in an array by using a very special list system. The most well known binary tree is probably the 20 questions game, with just 20 yes/no questions you can have over 1048576 items. A binary tree, as it's name implies, is a type of tree, similar to a family tree, where every item has 0, 1 or 2 children. They are not used for ordering data like a list but sorting data for very efficient searching. Basically you start with an item somewhere near the middle of the ordered list of objects (e.g. the middle number in a sorted array) and compare that to the value you want to find. If it's the same you've found your item, if it's greater you move to the item to the right (not immediately to the right, the item to the right of the middle item would be the item at the three quarter mark), if it's less you move left, then repeat the process.

**Example**

```c
1 2 5 6 7 9 12 14 17 19 23 25 28 33 38
```

You have the preceding ordered array and you want to find what slot the number 7 is in (if it's in at all), in this example it's probably more efficient to just loop straight through the array to find it but that's not the point, that method increases in time linearly with the size of the array, a binary search time increases linearly as the array increases exponentially in size. I.e. an array 128 big will take twice as long to search straight through as an array 64 big, but a binary search 128 big will only take one check more than a binary search 64 big, not a lot at all.

If we construct a binary tree from the data above we get: ![Imgur](https://sampwiki.blast.hk/wiki/Image:Binarytree.GIF)

If you read left to right, ignoring the vertical aspect you can see that the numbers are in order. Now we can try find the 7.

The start number is 14, 7 is less than 14 so we go to the slot pointed to by the left branch of 14. This brings us to 6, 7 is bigger than 6 so we go right to 9, then left again to 7. This method took 4 comparisons to find the number (including the final check to confirm that we are on 7), using a straight search would have taken 5.

Lets say there is no 7, we would end up with this binary tree: ![Binarytree-7-less](https://sampwiki.blast.hk/wiki/Image:Binarytree-7-less.GIF)

This, unlike the example above, has a single child number (the 9), as well as 2 and 0 child numbers. You only get a perfect tree when there are (2^n)-1 numbers (0, 1, 3, 7, 15, 31 ...), any other numbers will give a not quite full tree. In this case when we get to the 9, where the 7 will be, we'll find there is no left branch, meaning the 7 doesn't exist (it cannot possibly be anywhere else in the tree, think about it), so we return -1 for invalid slot.

#### Balanced and unbalanced

The trees in the examples above are called balanced binary trees, this means as near as possible all the branches are the same length (obviously in the second there aren't enough numbers for this to be the case but it's as near as possible). Constructing balanced trees is not easy, the generally accepted method of constructing almost balanced trees is putting the numbers in in a random order, this may mean you end up with something like this: ![Binarytree-uneven](https://sampwiki.blast.hk/wiki/Image:Binarytree-uneven.GIF)

Obviously this tree is still valid but the right side is much larger than the left, however finding 25 still only takes 7 comparisons in this compared to 12 in the straight list. Also, as long as you start with a fairly middle number the random insertion method should produced a fairly balanced tree. The worst possible thing you can do is put the numbers in in order as then there will be no left branches at all (or right branches if done the other way), however even in this worst case the binary tree will take no longer to search than the straight list.

**Modification**

#### Addiction

Adding a value to a binary tree is relatively easy, you just follow the tree through, using the value you want to add as a reference untill you reach an empty branch and add the number there. E.g. if you wanted to add the number 15 to our original balanced tree it would end up on the left branch of the 17. If we wanted to add the number 8 to the second balanced tree (the one without the 7) it would end up in the 7's old slot on the left of the 9.

#### Deletion

Deleting a number from a binary tree can be hard or it can be easy. If the number is at the end of a branch (e.g. 1, 5, 7, 12 etc in the original tree) you simply remove them. If a number only has one child (e.g. the 9 in the second example) you simply move that child (e.g. the 12) up into their position (so 6's children would be 2 and 12 in the new second example with 9 removed). Deletion only gets interesting when a node has two children. There are at least four ways of doing this:

The first method is the simplest computationally. Basically you choose one of the branches (left or right, assume right for this explanation) and replace the node you've removed with the first node of that branch (i.e. the right child of the node you've removed). You then go left through than new branch till you reach the end and place the left branch there. E.g. if you removed the 14 from the original exampe you would end up with 25 taking it's place at the top of the tree and 6 attached to the left branch of 17. This method is fast but ends up with very unbalanced trees very quickly.

The second method is to get all the numbers which are children of the node you just removed and rebuild a new binary tree from them, then put the top of that tree into the node you've just removed. This keeps the tree fairly well balanced but is obviously slower.

The third method is to combine the two methods above and rebuild the tree inline, this is more complex to code but keeps the tree balanced and is faster than the second method (though no-where near as fast as the first).

The final menthod listed here is to simply set a flag on a value saying it's not used any more, this is even faster than the first method and maintains the structure but means you can't re-use slots unless you can find a value to replace it with later.
