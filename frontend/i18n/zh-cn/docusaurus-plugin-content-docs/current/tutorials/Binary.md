---
title: "Binary"
sidebar_label: "Binary"
description: An in depth look at binary and bitwise operators.
---

## 版权

本文来源于 SA-MP 论坛的教程主题。作者是 **Kyosaur**.

## 什么是二进制?

二进制是一种使用两个唯一符号来表示数字的数字系统。虽然更常见的十进制系统使用十个数字(**基数 10**)，但二进制只使用 0 和 1。这在日常生活中可能听起来毫无用处，但在计算机领域，二进制是必不可少的。计算机在其最低层次上通过操控电流的流动来表示开和关状态，这正是二进制的作用，只是大量的开关被切换。这对大多数人来说可能是个陌生的概念，所以我们接下来对比一下十进制和二进制系统.

十进制(基数 10)

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

二进制(基数 2)

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

对比这两个系统，你会发现它们的行为是完全一样的。一旦你达到最后一个可用的数字，你需要转到另一个位置。在二进制中，这些位置被称为位(binary digits)，它们只是 2 的幂；就像十进制系统中的位置是 10 的幂。为了证明这一点，我们来看一下数字 13 的标准表示.

**注意:** '^' 是表示幂的符号，在接下来的几个示例中，而不是按位异或(稍后我们会介绍)

十进制(基数 10)

```c
13

//等于

1 * (10^1) + 3 * (10^0)

//等于

10+3

//等于

13
```

二进制(基数 2)

```c
1101

//等于

1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)

//等于

8+4+0+1

//等于

13
```

从前面的例子中我们可以看到，如果一个位被设置为 0，我们可以忽略它，继续前进；毕竟，任何乘以 0 的数都是 0。前面的例子稍微复杂了一些，我只是想让其尽可能清楚。当你从二进制转换时，实际上只需要关注所有打开的位的幂的和即可.

这里列出了 12 个 2 的幂:

```c
4096,2048,1024,512,256,128,64,32,16,8,4,2,1
```

如果你对幂的计算没有任何了解，这可能对你来说完全没有意义。幂是一个数自乘 x 次的结果。有了这些信息，上面的幂列表可能更容易理解了，除了 1。你可能会好奇为什么 2 的 0 次幂结果是 1，我只能说这就是这样.

```c
2^1 = 2, 2^3 = 4, 2^4 = 8
```

我们可以看到，当我们向右移动时，之前的值被乘以 2；因此我们可以合理地假设，当我们向左移动时，新值只是将之前的值除以 2。考虑到这一点，你可以看到 2 的 0 次幂等于 1。如果这还不够令人满意，我相信你可以在 **\*\*** 上找到更多证据。所有这些内容说完了，我们来看一个最后的例子，让它稍微复杂一点

```c
111011001011111000 //242424

//记住，忽略未打开的位

1 * (2^17) = 131072

1 * (2^16) = 65536

1 * (2^15) = 32768

1 * (2^13) = 8192

1 * (2^12) = 4096

1 * (2^9) = 512

1 * (2^7) = 128

1 * (2^6) = 64

1 * (2^5) = 32

1 * (2^4) = 16

1 * (2^3) = 8


131072+65536+32768+8192+4096+512+128+64+32+16+8
=
242424
```

记住在转换时：第一个幂是 0，所以不要误认为第 18 位是 2^18。确实有 18 个幂，但包括 0 的幂，因此 17 实际上是我们最高的幂.

### 深入了解位

大多数编程语言允许不同的数据类型，这些数据类型在存储信息时所用的位数各不相同；然而，PAWN 是一个无类型的 32 位语言。这意味着 PAWN 总是有 32 位可用于存储信息。那么当信息过多时会发生什么呢？这个问题的答案与有符号和无符号整数有关.

#### 有符号整数

你是否注意到，当 PAWN 中的整数变得过大时，它会变成负数？这种“环绕”是因为你超出了 PAWN 中的最大值:

```c
2^31 - 1 //幂运算，而不是按位异或。减去 1 是因为我们计数从 0(实际上有 2,147,483,648 个值，但包括 0，所以实际上最大值是 2,147,483,647).

//等于

2,147,483,647

//在二进制中是

1111111111111111111111111111111 //31 位 - 全开
```

你可能会好奇为什么最大值是 2^31-1，而不是 2^32-1(4,294,967,295)。这就是有符号和无符号整数发挥作用的地方。有符号整数可以存储负值，而无符号整数则不能。这可能听起来离题了，但我保证我没有偏离问题。最大整数不是 2^32-1 的原因是第 32 位被用作负值和正值的切换。这称为 MSB(最重要的位)，如果 MSB 打开，数字将是负的；如果 MSB 关闭，数字是正的。很简单，对吧?

在我展示几个负值之前，我需要解释一下 PAWN 如何表示负值。PAWN 使用 2 的补码系统来表示负值，这基本上意味着你需要翻转数字中的每一个位，然后将新的数字加 1，以使其变为负值.

让我们来看几个负值，同时把这个想法保留在脑海中:

```c
11111111111111111111111111111111 //所有 32 位都打开

//等于

-1

//和

11111111111111111111111111111110

//等于

-2

//最后

10000000000000000000000000000000

//等于

-2147483648
```

所有负数只是将原来的正数的所有位翻转，然后加 1。我们的最后一个例子特别清晰，因为最高的正整数是 2147483647.

由此我们可以看到 PAWN 中的数值范围实际上是：

```c
&#8722;2^31 to +2^31 − 1
```

#### 无符号整数

PAWN 中没有无符号整数，但我添加这一部分只是为了平衡。无符号整数和有符号整数的唯一区别是无符号整数不能存储负值；整数仍然会环绕，但它们会回到 0，而不是变成负值.

## 位运算符

位运算符允许你操作位模式中的单独位。让我们看一下可用的按位运算符列表.

- 按位算术移动(Bitwise arithmetic shift): {'>>'} 和 {'<<'}
- 按位逻辑移动(Bitwise logical shift): {'>>>'}
- 按位非(Bitwise NOT 即补码): ~
- 按位与(Bitwise AND): &
- 按位或(Bitwise OR): |
- 按位异或(Bitwise XOR)(即排斥或): ^

### 按位与 (Bitwise AND)

**注意:** 不要与逻辑或操作符 '&&' 混淆

按位与运算简单地对每个位的位置上的两个数字执行逻辑 AND。这听起来有点困惑，所以让我们看看它的实际效果

```c
1100 //12
&
0100 //4
=
0100 //4 因为它们都具有 "100" 位(即 4)
```

这有点简单，让我们看一个更复杂的例子：

```c
10111000 //184
&
01001000 //72
=
00001000 //8
```

查看这些示例应该能让你对这个操作符的功能有一个相当好的了解。它比较两个比特集合，如果它们都有某一位是1，那么结果的相应位也会是1。如果它们没有共享任何位，则结果是0.

### 按位或(Bitwise OR)

**注意:** 不要与逻辑或操作符 '||' 混淆

按位或(Bitwise OR)的工作方式与按位与(Bitwise AND)几乎完全相同。它们之间唯一的区别在于，按位或只需要两个比特模式中的一个有某个位为1，结果的相应位才会为1。让我们看几个例子

```c
1100 //12
|
0100 //4
=
1100 //12.
```

再看一个例子.

```c
10111000 //184
|
01001000 //72
=
11111000 //248
```

这很容易理解，如果任意一个数字的某个位为1，那么结果的相应位也会是1.

### 按位异或(Bitwise XOR)

这个操作符与按位或有点类似，但有一些区别。让我们看一下在按位或部分使用的相同示例，看看你能否发现区别.

```c
1100 //12
^
0100 //4
=
1000 //8.
```

最后一个例子:

```c
10111000 //184
^
01001000 //72
=
11110000 //240
```

### 按位非(Bitwise NOT)

这个操作符翻转位模式中的每一位，将所有的 1 转换为 0，反之亦然

```c
~0
=
11111111111111111111111111111111 //-1

//和

~100 //4
=
11111111111111111111111111111011 //-5

//和

~1111111111111111111111111111111 //2147483647 (不要与 -1 混淆，-1 使用的是 32 位，而不是 31 位)
=
10000000000000000000000000000000 //-2147483648 (32 位被打开)
```

如果你不明白为什么负值看起来有些“倒置”，请阅读关于有符号整数的部分.

### 位移操作(Bit Shifting)

位移操作正如你想象的那样，它将数字中的位向某个方向移动。如果你记得文章前面提到PAWN有一个特定的内存范围(32位可以用于存储)。当你将一个数字位移超出这个范围时会发生什么？这个问题的答案取决于你使用的是哪种位移操作符，以及你位移的方向.

**注意:** 在以下示例中，所有二进制数字都将完全写出(全部32位)，以避免任何混淆.

#### 算术位移(Arithmetic shifts)

#### 右移(Right shift)

使用此运算符时，数字中的所有位都向右移动 x 次。让我们看一个简单的例子.

```c
00000000000000000000000000001000  //8
>>
2

=

00000000000000000000000000000010 //2
```

从上面的例子可以看到，每一位都向右移动了两位，并且左侧填充了两个零。这两个零实际上是 MSB(最高有效位)的值，在处理有符号整数的位移时非常重要。使用 MSB 作为填充是为了保持被移位数的符号。我们来看一下相同的例子，只是这次我们使用负数.

```c
11111111111111111111111111111000 //-8
>>
2

=

11111111111111111111111111111110 //-2
```

显然，这与之前的例子表现得完全一样，只是填充的左边位是 1；这证明了右算术位移的填充是 MSB 的值.

#### 左移(Left shift)

这是右算术位移运算符的完全相反。它将数字中的所有位向左移动 x 次。我们来看一个例子.

```c
00000000000000000000000000001000  //8
<<
2

=

00000000000000000000000000100000 //32
```

左移和右移之间唯一的区别(除了位移方向)就是填充方式。对于右算术位移，填充是 MSB(最高有效位)的值，而对于左算术位移，填充的值是 0。这是因为在左移中没有像数字符号那样需要跟踪的相关信息.

```c
11111111111111111111111111111000 //-8
<<
2

=

11111111111111111111111111100000 //-32
```

看到没有？虽然填充总是 0，但数字的符号仍然保持不变。你唯一需要担心的就是移位过远。如果你将一个正数移位超过了最高可能的数值，它会变成负数；反之亦然，对于负数(你最终会得到 0).

#### 逻辑位移(Logical Shifts)

##### 右移(Right Shift)

这是算术左移的逆操作。最好的描述是它是两种算术位移的混合体。让我们来看一下实际操作!

```c
00000000000000000000000000001000  //8
>>>
2

=

00000000000000000000000000000010 //2
```

数字 8 的位被右移了 2 次。那么这与算术右移有何不同？答案在于填充。对于算术右移，填充是 MSB 的值，而对于逻辑右移，填充是 0(就像算术左移一样)。这意味着它不会保持符号位的值，因此结果将始终是正数。为了证明这一点，我们来右移一个负数!

```c
11111111111111111111111111111000 //-8
>>>
2

=

00111111111111111111111111111110 //1073741822
```

这证明了在使用逻辑右移时，我们不会得到负值!

##### 左移(Left shift)

逻辑左移与算术左移完全相同。我只是添加了这一部分以避免任何混淆，同时也为了保持章节的平衡.
