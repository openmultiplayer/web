# پیش‌پردازنده

---

اولین مرحله compile کردن یک source file pawn به P-code قابل اجرا "preprocessing" هست: یک فیلتر متن عمومی که متن رو قبل از اینکه به parser داده بشه تغییر/تمیز می‌کنه. مرحله preprocessing کامنت‌ها رو حذف می‌کنه، بلوک‌های "conditionally compiled" رو حذف می‌کنه، directive های compiler رو پردازش می‌کنه و عملیات find-&-replace روی متن source file انجام می‌ده. directive های compiler در صفحه 117 خلاصه شدن و جایگزینی متن ("find-&-replace") موضوع این فصل هست.

preprocessor فرآیندی هست که روی همه خطوط source بلافاصله بعد از خونده شدنشون invoke می‌شه. هیچ syntax checking ای در طول جایگزینی‌های متن انجام نمی‌شه. در حالی که preprocessor ترفندهای قدرتمندی در زبان pawn اجازه می‌ده، خودت رو با اون آسیب رسوندن هم آسونه.

در این فصل، چندین بار به زبان C/C++ اشاره می‌کنم چون preprocessor pawn شبیه اونی که در C/C++ هست. با این حال، preprocessor pawn با preprocessor C/C++ ناسازگار هست.

directive #define macro های preprocessor رو تعریف می‌کنه. macro های ساده اینان:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"

```

در pawn script، بعد می‌تونی ازشون همونطور که از ثابت‌ها استفاده می‌کنی استفاده کنی. مثلاً:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"
main()
{
    print( Copyright )
    new sprites[maxsprites]
}

```

راستی، برای این macro های ساده construct های معادل pawn وجود دارن:

```c

const maxsprites = 25

stock const CopyRightString[] = "(c) Copyright 2004 by me"

```

این اعلان‌های ثابت مزیت error checking بهتر و قابلیت ایجاد ثابت‌های tagged رو دارن. syntax برای یک ثابت string یک متغیر آرایه هست که هم "const" و هم "stock" اعلان شده. attribute const هر تغییری روی string رو ممنوع می‌کنه و attribute stock باعث می‌شه اعلان "ناپدید" بشه اگر هیچ‌وقت بهش اشاره نشه.

macro های جایگزینی می‌تونن تا 10 پارامتر بگیرن. یک استفاده معمول برای macro های پارامتری شبیه‌سازی توابع کوچک هست:

فهرست: macro "min"

```c

#define min(%1,%2) ((%1) < (%2) ? (%1) : (%2))

```

اگر C/C++ بلدی، عادت محصور کردن هر آرگومنت و کل expression جایگزینی در پرانتز رو تشخیص می‌دی.

اگر macro بالا رو در script اینطوری استفاده کنی:

فهرست: استفاده بد از macro "min"

```c

new a = 1, b = 4
new min = min(++a,b)

```

preprocessor اینطوری ترجمه‌اش می‌کنه:

```c

new a = 1, b = 4
new min = ((++a) < (b) ? (++a) : (b))

```

که باعث می‌شه "a" احتمالاً دو بار increment بشه. این یکی از تله‌هایی هست که وقتی از macro های جایگزینی استفاده می‌کنی ممکنه بهش بیفتی (این مشکل خاص برای برنامه‌نویسان C/C++ خیلی شناخته شده هست). بنابراین، ممکنه ایده خوبی باشه که از یک naming convention برای تمایز macro ها از توابع استفاده کنی. در C/C++ practice معمول اینه که macro های preprocessor رو همه با حروف بزرگ بنویسی.

برای نشون دادن اینکه چرا محصور کردن آرگومنت‌های macro در پرانتز ایده خوبی هست، این macro رو در نظر بگیر:

```c

#define ceil_div(%1,%2) (%1 + %2 - 1) / %2

```

این macro آرگومنت اول رو بر آرگومنت دوم تقسیم می‌کنه، ولی به سمت بالا به نزدیک‌ترین integer گرد می‌کنه (عملگر تقسیم، "/"، به سمت پایین گرد می‌کنه). اگر اینطوری استفاده‌اش کنی:

```c

new a = 5
new b = ceil_div(8, a - 2)

```

خط دوم به "new b = (8 + a - 2 - 1) / a - 2" expand می‌شه، که با در نظر گیری سطوح precedence عملگرهای pawn، باعث می‌شه "b" روی صفر تنظیم بشه (اگر "a" برابر 5 باشه). چیزی که از نگاه کردن به invocation macro انتظارش رو داشتی هشت تقسیم بر سه ("a - 2") بود، گرد شده به سمت بالا —بنابراین، که "b" روی مقدار 3 تنظیم بشه. تغییر macro برای محصور کردن هر پارامتر در پرانتز مشکل رو حل می‌کنه. به دلایل مشابه، توصیه می‌شه کل متن جایگزین رو هم در پرانتز محصور کنی. پایین macro ceil_div به همین ترتیب تغییر یافته:

```c

#define ceil_div(%1,%2) ( ((%1) + (%2) - 1) / (%2) )

```

pattern matching ظریف‌تر از تطبیق string هایی که شبیه فراخوانی تابع به نظر می‌رسن هست. pattern متن رو به صورت literal تطبیق می‌ده، ولی متن دلخواه رو جایی که pattern یک پارامتر مشخص می‌کنه قبول می‌کنه. می‌تونی pattern هایی مثل این بسازی:

فهرست: macro ای که syntax برای دسترسی آرایه رو به فراخوانی تابع ترجمه می‌کنه

```c

#define Object[%1] CallObject(%1)

```

وقتی expansion یک macro شامل متنی هست که با macro های دیگه تطبیق می‌کنه، expansion در زمان invocation انجام می‌شه، نه زمان تعریف. بنابراین کد:

```c

#define a(%1)       (1+b(%1))
#define b(%1)       (2*(%1))
new c = a(8)

```

به "new c = (1+(2*(8)))" ارزیابی می‌شه، حتی اگر macro "b" در زمان تعریف "a" تعریف نشده بود.

pattern matching به قوانین زیر محدود شده:

- ممکنه هیچ کاراکتر space در pattern نباشه. اگر باید space رو match کنی، نیاز داری از escape sequence "\32;" استفاده کنی. متن جایگزینی، از طرف دیگه، می‌تونه شامل کاراکترهای space باشه. به دلیل قوانین matching pattern macro (که پایین توضیح داده شده)، matching یک کاراکتر space به ندرت نیاز هست.

- همونطور که در خط قبلی مشهود هست، escape sequence ها ممکنه در pattern ظاهر بشن (اگرچه خیلی مفید نیستن، به جز شاید برای matching یک کاراکتر literal "%").

- pattern نمی‌تونه با یک پارامتر تمام بشه؛ pattern ای مثل "set:%1=%2" غیرقانونی هست. اگر می‌خوای با انتهای یک statement match کنی، می‌تونی یک semicolon در انتهای pattern اضافه کنی. اگر semicolon ها در انتهای هر statement اختیاری باشن، semicolon با newline در source هم match می‌کنه.

- pattern باید با یک حرف، یک underscore، یا یک کاراکتر "@" شروع بشه. اولین بخش pattern که از کاراکترهای alphanumeric (به علاوه "_" و/"@") تشکیل شده "نام" یا "prefix" macro هست. روی defined operator و directive #undef، prefix macro رو مشخص می‌کنی.

- وقتی pattern رو match می‌کنی، preprocessor white space بین نمادهای غیرalphanumeric و white space بین یک نماد alphanumeric و یک غیرalphanumeric رو نادیده می‌گیره، با یک استثنا: بین دو نماد یکسان، white space نادیده گرفته نمی‌شه. بنابراین: `pattern abc(+-) با "abc ( + - )" match می‌کنه pattern abc(--) با "abc ( -- )" match می‌کنه` ولی با `"abc(- -)"` match نمی‌کنه

- تا 10 پارامتر وجود داره، که با یک "%" و یک رقم (1 تا 9 و 0) نشون داده می‌شن. ترتیب پارامترها در یک pattern مهم نیست.

- نماد #define یک directive parser هست. مثل همه directive های parser، تعریف pattern باید در یک خط جا بشه. می‌تونی با یک "\" در انتهای خط این رو دور بزنی. متنی که باید match بشه هم باید در یک خط جا بشه.

توجه کن که در حضور macro های (پارامتری)، خطوط source code ممکنه اونی که به نظر می‌رسن نباشن: چیزی که شبیه دسترسی آرایه به نظر می‌رسه ممکنه "preprocess" شده به فراخوانی تابع باشه، و برعکس.

یک host application که pawn parser رو embed می‌کنه ممکنه گزینه‌ای فراهم کنه تا بتونی نتیجه جایگزینی متن از طریق macro ها رو چک کنی. اگر از toolset استاندارد pawn استفاده می‌کنی، دستورالعمل‌هایی برای نحوه استفاده از compiler و run-time در کتابچه همراه "The pawn booklet — Implementor's Guide" پیدا می‌کنی.

---

`اولویت عملگر: 110`

`Directive ها: 117`

---

[برگشت به فهرست](00-Contents)
