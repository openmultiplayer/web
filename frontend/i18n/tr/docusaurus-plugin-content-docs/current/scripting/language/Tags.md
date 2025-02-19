---
title: "Scripting: Etiketler (Tags)"
sidebar_label: "Scripting: Etiketler (Tags)"
description: Etiketlerin, Pawn dilinde farklı niyet değerleriyle çalışmak için güvenlik özellikleri sağlayan bir tür özellik olduğu bir rehber.
---

## Giriş

Bir etiket, değişkenin belirli durumlar altında özel olarak işlenmesini sağlayan bir önektir. Örneğin, bir değişkenin nerede kullanılabileceğini veya kullanılamayacağını veya iki değişkeni özel bir şekilde birleştirmenin bir yolunu tanımlamak için etiketleri kullanabilirsiniz.

İki türde etiket vardır - güçlü etiketler (büyük harfle başlar) ve zayıf etiketler (küçük harfle başlar), çoğunlukla aynı olsalar da bazı durumlarda zayıf etiketler, derleyici tarafından sessizce etiketsiz bir şekilde dönüştürülebilir, yani bir uyarı almayabilirsiniz; çoğu zaman zayıf etiketlerle, güçlü etiketlerle her zaman etiketin bilinçsiz bir şekilde değiştirilmesi bir uyarıya neden olacaktır ve bu, verinin muhtemelen yanlış kullanıldığını belirten bir uyarıdır.

Aşağıda çok basit bir örnek bulunmaktadır:

```c
new
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

`fopen` fonksiyonu, `File:` türündeki bir etiketle bir değer döndürecektir; bu satırda bir sorun yoktur çünkü dönüş değeri, aynı zamanda `File:` etiketine sahip bir değişkene depolanmaktadır (unutulmamalıdır ki durumlar da aynıdır). Ancak, bir sonraki satırda `4` değeri dosya işaretine eklenir. `4`'ün bir etiketi yoktur (aslında `_:` etiket türüdür, ancak etiketi olmayan değişkenler, değerler ve fonksiyonlar otomatik olarak buna ayarlanır ve genellikle endişelenmeniz gerekmez), ve `myFile`'ın bir `File:` etiketi vardır, açıkçası hiçbir şey ve bir şey aynı olamaz, bu nedenle derleyici bir uyarı verecektir; bu, bir dosyanın işaretinin aslında değeri açısından anlamsız olduğu ve değiştirilirse yalnızca işareti yok edeceği ve dosyanın kapatılması için artık geçerli bir işaretin olmadığı anlamına gelir.

### Güçlü Etiketler

Yukarıda belirtildiği gibi, güçlü bir etiket büyük harfle başlayan herhangi bir etikettir. SA:MP içinde bunlara örnekler şunlardır:

```c
Float:
File:
Text:
```

Bu, diğer değişken türleriyle karıştırılamaz ve her zaman böyle bir şey yapmaya çalıştığınızda bir uyarı verecektir:

```c
new
    Float:myFloat,
    File:myFile,
    myBlank;

myFile = fopen("file.txt", io_read); // File: = File:, uyarı yok

myFloat = myFile; // Float: = File:, "etiket uyumsuzluğu" uyarısı

myFloat = 4; // Float: = _: (hiçbiri), "etiket uyumsuzluğu" uyarısı

myBlank = myFloat; // _: (hiçbiri) = Float:, "etiket uyumsuzluğu" uyarısı
```

### Zayıf Etiketler

Zayıf bir etiket çoğunlukla güçlü bir etiket gibi davranır; ancak, derleyici zayıf etiketli bir kaynağa etiketsiz bir hedef verildiğinde uyarı vermeyecektir. Örneğin, aşağıdaki güçlü ve zayıf etiketli kodları karşılaştırın, ilk güçlü etiketle uyarı verecek, ikinci zayıf etiketle uyarı vermeyecektir:

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // Uyarı
myNone = myWeak; // Uyarı yok
```

Ancak, tersi doğru değildir:

```c
myWeak = myNone; // Uyarı
```

Bu, fonksiyonlarla da aynıdır; zayıf etiketli bir değişken geçirildiğinde, etiketsiz bir parametre uyarı vermeyecektir:

```c
new
    weak:myWeak;
MyFunction(myWeak);

MyFunction(myVar)
{
    // ...
}
```

Ancak, etiketli bir parametre (zayıf veya güçlü) ile bir fonksiyon çağrılırken, etiketsiz bir parametre geçirmek uyarı verecektir. SA:MP'deki zayıf etiket örnekleri genellikle pek bilinmese de sıklıkla kullanılır ve şunları içerir:

```c
bool:
filemode:
floatround_method:
```

## Kullanım

### Deklare Etme

Bir değişkeni bir etiketle tanımlamak çok basittir, sadece etiketi yazın, önceden bir etiketi tanımlamak gerekmez ancak bu mümkündür ve ilerleyen zamanlarda neden önemli olduğu anlaşılacaktır:

```c
new
    Mytag:myVariable;
```

Bir değişkeni var olan etiketlerden biriyle tanımlamak, bu değişkeni zaten o etiket türü için yazılmış olan işlevler ve operatörlerle kullanmanıza olanak tanır.

### Fonksiyonlar

Bir etiketi almak veya bir etiketle dönmek için bir işlev oluşturmak çok basittir, sadece ilgili bölümü istenen etiket türüyle önce ekleyin, örneğin:

```c
Float:GetValue(File:fHnd, const name[])
{
    // ...
}
```

Bu işlev, bir dosya işaretçisini alır ve bir float değeri döndürür (muhtemelen bir dosyadan okunan ve `name[]` içinde iletilen değere karşılık gelen bir değer). Bu işlev muhtemelen `floatstr` işlevini kullanacaktır, ki bu da bir dize alındıktan sonra Float: döndürür (sağ taraftaki işlev listesinde işlevin üzerine tıkladığınızda pawno'nun durum çubuğundan anlayabileceğiniz gibi), bir IEEE float değerini temsil eden bir dizeyi alır. Bu değer ardından bir hücre olarak depolanır (aslında PAWN tip yok sayma olduğu için sadece ilgili IEEE sayısına sahip aynı bit deseni olan bir tamsayı olarak depolanır, ancak bununla kısmen mücadele etmek için etiketler vardır).

### Operatörler

`+`, `==`, `>` gibi operatörler, farklı etiket türleri için aşırı yüklenebilir; yani iki Float: üzerinde `+` yapmak, iki etiketsiz değişken üzerinde yapmaktan farklı bir şey yapar. Bu özellik, özellikle float değişkenleri için önemlidir çünkü yukarıda belirtildiği gibi bunlar gerçekte birer float değildir, bunlar çok özel bir bit desenine sahip tamsayılardır. Operatörler aşırı yüklenmemiş olsaydı, operasyonlar basitçe tamsayılarda gerçekleştirilirdi ve yanıt bir float olarak yeniden yorumlandığında anlamsız olurdu. Bu nedenle, Float: etiketi, matematiği PAWN'da değil, sunucuda yapacak özel versiyonlarına sahiptir.

Bir operatör, normal bir işlev gibi aynıdır, ancak bir işlev adı yerine "**operator(sembol)**" ifadesini kullanırsınız, burada (**sembol**), üzerine yazmak istediğiniz operatördür. Geçerli operatörler şunlardır:

```c
+
-
=
++
--
==
*
/
!=
>
<
>=
<=
!
%
```

`\`, `*`, `=` gibi şeyler otomatik olarak yapılır. `&` gibi şeyler aşırı yüklenemez. Bir operatörü farklı etiket kombinasyonlarıyla birden çok kez aşırı yükleyebilirsiniz. Örneğin:

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

Yukarıdaki kodu eklerseniz ve şunu yaparsanız:

```c
new
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

Artık uyarı almayacaksınız, çünkü `=` operatörü için `Float: = Mytag:` durumu artık işleniyor, bu da derleyicinin tam olarak ne yapması gerektiğini bilmesi demektir.

### Üzerine Yazma

Yukarıda aşırı yükleme örneğinde işlevsel satır şuydu:

```c
return float(_:oper);
```

Bu, etiket üzerine yazma örneğidir; oper önünde "_:" ifadesi, derleyicinin oper'in Mytag: etiketine sahip olduğunu görmezden gelmesi ve bunun yerine on

u _:(yani hiç etiket) etiketi olarak ele alması anlamına gelir. `float()` fonksiyonu bir normal sayıyı etiketler, bu nedenle ona bir tane göndermek zorundadır. Bu örnekte, `Mytag`'in normal bir tamsayı sakladığı varsayılır, ancak üzerine yazma çok dikkatlice ele alınmalıdır, örneğin aşağıdaki garip sonuçları verecektir:

```c
new
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Mantık, `f1`'in `4.0` olarak sona ereceği yönündedir, ancak öyle olmaz. Yukarıda belirtildiği gibi, f2, `4` olarak bir tamsayıyı değil, `4.0`'ı temsil eden bir biçime sahiptir, bu da değişkenin aslında bir tamsayı olarak çok tuhaf bir sayı olduğu anlamına gelir. Dolayısıyla, derleyiciye değişkeni bir tamsayı gibi işlemesini söylüyorsanız, değişkenin içindeki bit desenini sadece değer olarak alacak, float'i bir tamsayıya dönüştürmeyecek, bu nedenle neredeyse rastgele bir sayı alacaksınız (IEEE kayan noktalı sayılara belirli bir model olduğu için aslında rastgele değildir, ancak `4.0` gibi değildir).
