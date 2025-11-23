# توابع

---

اعلان یک تابع نام تابع و پارامترهای رسمی‌اش رو (بین پرانتز) مشخص می‌کنه. یک تابع همچنین ممکنه یک مقدار برگردونه. اعلان تابع باید در سطح global ظاهر بشه (یعنی خارج از هر تابع دیگه‌ای) و به صورت global قابل دسترسی هست.

اگر یک semicolon بعد از اعلان تابع بیاد (به جای یک statement)، اعلان یک forward declaration از تابع رو نشون می‌ده.

statement return نتیجه تابع رو تنظیم می‌کنه. مثلاً، تابع sum (که پایین می‌بینی) نتیجه‌اش مقدار هر دو آرگومنتش جمع شده با هم هست. expression return برای یک تابع اختیاری هست، ولی نمی‌تونی از مقدار یک تابعی که مقداری برنمی‌گردونه استفاده کنی.

فهرست: تابع sum

```c

sum(a, b)
return a + b

```

آرگومنت‌های یک تابع متغیرهای محلی (به صورت ضمنی اعلان شده) برای اون تابع هستن. فراخوانی تابع مقادیر آرگومنت‌ها رو تعیین می‌کنه.

مثال دیگه‌ای از تعریف کامل تابع leapyear (که برای سال کبیسه true و برای سال غیرکبیسه false برمی‌گردونه):

فهرست: تابع leapyear

```c

leapyear(y)
return y % 4 == 0 && y % 100 != 0 || y % 400 == 0

```

عملگرهای منطقی و حسابی که در مثال leapyear استفاده شدن به ترتیب در صفحات 108 و 104 پوشش داده شدن.

معمولاً یک تابع شامل اعلان متغیرهای محلی هست و از یک compound statement تشکیل شده. در مثال زیر، به statement assert توجه کن که از مقادیر منفی برای exponent محافظت می‌کنه.

فهرست: تابع power (به توان رساندن)

```c

power(x, y)
{
    /* returns x raised to the power of y */
    assert y >= 0
    new r = 1
    for (new i = 0; i < y; i++)
        r *= x
    return r
}

```

یک تابع ممکنه چندین statement return داشته باشه —معمولاً این کار رو می‌کنن تا سریع از یک تابع خارج بشن وقتی parameter error داره یا وقتی معلوم می‌شه که تابع کاری برای انجام نداره. اگر یک تابع آرایه برگردونه، همه statement های return باید آرایه‌ای با همون اندازه و همون ابعاد مشخص کنن.

---

`روش ترجیحی برای اعلان forward function ها در صفحه 82 هست`

`statement "assert": 112`

---

• آرگومنت‌های تابع (call-by-value در مقابل call-by-reference)

تابع "faculty" در برنامه بعدی یک پارامتر داره که توی یک حلقه ازش استفاده می‌کنه تا faculty اون عدد رو محاسبه کنه. چیزی که شایان توجه هست اینه که تابع آرگومنتش رو تغییر می‌ده.

فهرست: faculty.p

```c

/* Calculation of the faculty of a value */

main()
{
    print "Enter a value: "
    new v = getvalue()
    new f = faculty(v)
    printf "The faculty of %d is %d\n", v, f
}

faculty(n)
{
    assert n >= 0

    new result = 1
    while (n > 0)
        result *= n--

    return result
}

```

هر مقدار (مثبتی) که "n" در ورودی حلقه while در تابع faculty داشت، "n" در انتهای حلقه صفر خواهد بود. در مورد تابع faculty، پارامتر "by value" پاس داده می‌شه، پس تغییر "n" محلی تابع faculty هست. به عبارت دیگه، تابع main مقدار "v" رو به عنوان ورودی به تابع faculty پاس می‌ده، ولی بعد از برگشت faculty، "v" هنوز همون مقداری رو داره که قبل از فراخوانی تابع داشت.

آرگومنت‌هایی که یک cell رو اشغال می‌کنن می‌تونن by value یا by reference پاس داده بشن. پیش‌فرض "pass by value" هست. برای ساخت یک آرگومنت تابع که by reference پاس داده می‌شه، کاراکتر & رو قبل از نام آرگومنت بذار.

مثال:

فهرست: تابع swap

```c

swap(&a, &b)
{
    new temp = b
    b = a
    a = temp
}

```

برای پاس دادن یک آرایه به تابع، یک جفت bracket به نام آرگومنت اضافه کن. می‌تونی به صورت اختیاری اندازه آرایه رو مشخص کنی؛ این کار error checking parser رو بهبود می‌ده.

مثال:

فهرست: تابع addvector

```c

addvector(a[], const b[], size)
{
    for (new i = 0; i < size; i++)
        a[i] += b[i]
}

```

آرایه‌ها همیشه by reference پاس داده می‌شن. به عنوان نکته جانبی، آرایه b در مثال بالا در بدنه تابع تغییر نمی‌کنه. آرگومنت تابع به عنوان const اعلان شده تا این موضوع رو صریح کنه. علاوه بر بهبود error checking، این کار به pawn parser اجازه می‌ده کد کارآمدتری تولید کنه.

برای پاس دادن یک آرایه از literal ها به تابع، از همون syntax که برای array initializer ها استفاده می‌شه استفاده کن: یک literal string یا سری از array index های محصور در braces (صفحه 99 رو ببین؛ ellipsis برای progressive initializer ها نمی‌تونه استفاده بشه). آرایه‌های literal فقط می‌تونن یک بعد داشته باشن.

snippet زیر addvector رو صدا می‌زنه تا پنج رو به هر element آرایه "vect" اضافه کنه:

فهرست: استفاده از addvector

```c

new vect[3] = { 1, 2, 3 }

addvector(vect, {5, 5, 5}, 3)

/* vect[] now holds the values 6, 7 and 8 */

```

فراخوانی تابع printf با string "Hello world\n" در اولین برنامه همه‌جا حاضر مثال دیگه‌ای از پاس دادن یک literal array به تابع هست.

---

`مثال دیگه تابع JulianToDate در صفحه 13 هست`

`متغیرهای ثابت: 64`

`برنامه "Hello world": 5`

---

### • فراخوانی توابع

وقتی نام یک تابع رو با پارامترهاش در یک statement یا expression قرار می‌دی، تابع در اون statement/expression اجرا می‌شه. statement ای که به تابع اشاره می‌کنه "caller" هست و خود تابع، در اون نقطه، "callee" هست: اونی که صدا زده می‌شه.

syntax استاندارد برای فراخوانی یک تابع اینه که نام تابع رو بنویسی، بعدش یک لیست با همه پارامترهای صریحاً پاس شده بین پرانتز. اگر هیچ پارامتری پاس نشده، یا اگر تابع هیچ پارامتری نداره، جفت پرانتز بعد از نام تابع هنوز هم حضور دارن. مثلاً، برای تست کردن تابع power، برنامه زیر اینطوری صداش می‌زنه:

فهرست: برنامه مثال برای تابع power

```c

main()
{
    print "Please give the base value and the power to raise it to:"
    new base = getvalue()
    new power = getvalue()

    new result = power(base, power)
    printf "%d raised to the power %d is %d", base, power, result
}

```

یک تابع ممکنه به صورت اختیاری یک مقدار برگردونه. توابع sum، leapyear و power همگی یک مقدار برمی‌گردونن، ولی تابع swap نمی‌گردونه. حتی اگر یک تابع مقداری برگردونه، caller ممکنه نادیده‌اش بگیره.

برای موقعیتی که caller مقدار برگشتی تابع رو نادیده می‌گیره، یک syntax جایگزین برای فراخوانی تابع وجود داره، که در مثال برنامه قبلی هم نشون داده شده که تابع power رو فراخوانی می‌کنه. پرانتزهای دور همه آرگومنت‌های تابع اختیاری هستن اگر caller از مقدار برگشتی استفاده نکنه.

در آخرین statement، برنامه مثال می‌خونه

`printf "%d raised to the power %d is %d", base, power, result`

به جای

`printf("%d raised to the power %d is %d", base, power, result)`

که همون کار رو می‌کنه.

syntax بدون پرانتز دور لیست پارامتر "procedure call" syntax نامیده می‌شه. فقط می‌تونی ازش استفاده کنی اگر:

- caller نتیجه تابع رو به یک متغیر assign نکنه و توی یک expression استفاده نکنه، یا به عنوان "test expression" یک if statement مثلاً؛

- پارامتر اول با یک پرانتز باز شروع نشه؛

- پارامتر اول در همون خط نام تابع باشه، مگر اینکه از named parameter ها استفاده کنی (بخش بعدی رو ببین).

همونطور که ممکنه مشاهده کنی، procedure call syntax برای مواردی اعمال می‌شه که فراخوانی تابع بیشتر مثل یک statement رفتار می‌کنه، مثل فراخوانی‌های print و printf در مثال قبلی. syntax هدفش اینه که چنین statement هایی کمتر مرموز و دوستانه‌تر برای خوندن ظاهر بشن، ولی نه اینکه استفاده از syntax اختیاری هست.

به عنوان نکته جانبی، همه پرانتزها در برنامه مثالی که در این بخش ارائه شده ضروری هستن: مقادیر برگشتی فراخوانی‌های getvalue در دو متغیر ذخیره می‌شن، و بنابراین یک جفت پرانتز خالی باید بعد از نام تابع بیاد. تابع getvalue پارامترهای اختیاری داره، ولی هیچ‌کدوم در این برنامه مثال پاس نشدن.

---

`تابع power: 70`

`توابع sum & leapyear: 70`

`تابع swap: 71`

---

### • Named parameter ها در مقابل positional parameter ها

در مثال‌های قبلی، ترتیب پارامترهای فراخوانی تابع مهم بود، چون هر پارامتر به آرگومنت تابع با همون موقعیت ترتیبی کپی می‌شه. مثلاً، با تابع weekday (که از الگوریتم Zeller's congruence استفاده می‌کنه) که پایین تعریف شده، weekday(12,31,1999) رو صدا می‌زنی تا روز هفته آخرین روز قرن قبل رو بگیری.

فهرست: تابع weekday

```c

weekday(month, day, year)
{
    /* returns the day of the week: 0=Saturday, 1=Sunday, etc. */
    if (month <= 2)
        month += 12, --year
    new j = year % 100
    new e = year / 100
    return (day + (month+1)*26/10 + j + j/4 + e/4 - 2*e) % 7
}

```

فرمت‌های تاریخ بر اساس فرهنگ و ملت متفاوت هستن. در حالی که فرمت month/day/year در ایالات متحده آمریکا رایج هست، کشورهای اروپایی اغلب از فرمت day/month/year استفاده می‌کنن، و انتشارات فنی گاهی روی فرمت year/month/day (ISO/IEC 8824) استاندارد می‌شن. به عبارت دیگه، هیچ ترتیبی از آرگومنت‌ها در تابع weekday "منطقی" یا "متعارف" نیست. در این صورت، روش جایگزین برای پاس دادن پارامترها به تابع استفاده از "named parameter ها" هست، مثل مثال‌های بعدی (هر سه فراخوانی تابع معادل هستن):

فهرست: استفاده از weekday —positional parameter ها

```c

new wkday1 = weekday( .month = 12, .day = 31, .year = 1999)

new wkday2 = weekday( .day = 31, .month = 12, .year = 1999)

new wkday3 = weekday( .year = 1999, .month = 12, .day = 31)

```

با named parameter ها، یک نقطه (".") قبل از نام آرگومنت تابع می‌آد. آرگومنت تابع می‌تونه به هر expression ای که برای آرگومنت معتبر هست تنظیم بشه. علامت مساوی ("=") در مورد named parameter نشون‌دهنده assignment نیست؛ بلکه expression ای که بعد از علامت مساوی می‌آد رو به یکی از آرگومنت‌های تابع لینک می‌کنه.

می‌تونی positional parameter ها و named parameter ها رو در فراخوانی تابع ترکیب کنی با این محدودیت که همه positional parameter ها باید قبل از هر named parameter بیان.

### • مقادیر پیش‌فرض آرگومنت‌های تابع

یک آرگومنت تابع ممکنه یک مقدار پیش‌فرض داشته باشه. مقدار پیش‌فرض برای یک آرگومنت تابع باید یک ثابت باشه. برای مشخص کردن یک مقدار پیش‌فرض، علامت مساوی ("=") و مقدار رو به نام آرگومنت اضافه کن.

وقتی فراخوانی تابع یک argument placeholder به جای یک آرگومنت معتبر مشخص می‌کنه، مقدار پیش‌فرض اعمال می‌شه. argument placeholder کاراکتر underscore ("\_") هست. argument placeholder فقط برای آرگومنت‌های تابعی که مقدار پیش‌فرض دارن معتبر هست.

راست‌ترین argument placeholder ها ممکنه به سادگی از لیست آرگومنت تابع حذف بشن. مثلاً، اگر تابع increment اینطوری تعریف بشه:

فهرست: تابع increment —مقادیر پیش‌فرض

```c

increment(&value, incr=1) value += incr

```

فراخوانی‌های تابع زیر همگی معادل هستن:

فهرست: استفاده از increment

```c

increment(a)
increment(a, _)
increment(a, 1)

```

مقادیر آرگومنت پیش‌فرض برای آرگومنت‌های passed-by-reference مفیدن تا آرگومنت ورودی رو اختیاری کنن. مثلاً، اگر تابع divmod طراحی شده باشه که هم quotient و هم remainder یک عملیات تقسیم رو از طریق آرگومنت‌هاش برگردونه، مقادیر پیش‌فرض این آرگومنت‌ها رو اختیاری می‌کنن:

فهرست: تابع divmod —مقادیر پیش‌فرض برای reference parameter ها

```c

divmod(a, b, &quotient=0, &remainder=0)
{
    quotient = a / b
    remainder = a % b
}

```

با تعریف قبلی تابع divmod، فراخوانی‌های تابع زیر حالا همگی معتبر هستن:

فهرست: استفاده از divmod

```c

new p, q

divmod(10, 3, p, q)
divmod(10, 3, p, _)
divmod(10, 3, _, q)
divmod(10, 3, p)
divmod 10, 3, p, q

```

آرگومنت‌های پیش‌فرض برای آرگومنت‌های آرایه اغلب برای تنظیم یک string یا prompt پیش‌فرض به تابعی که یک آرگومنت string دریافت می‌کنه راحت هستن. مثلاً:

فهرست: تابع print error

```c

print_error(const message[], const title[] = "Error: ")
{
    print title
    print message
    print "\n"
}

```

مثال بعدی field های یک آرایه رو به آرایه دیگه اضافه می‌کنه، و به صورت پیش‌فرض سه element اول آرایه مقصد رو یکی افزایش می‌ده:

فهرست: تابع addvector، بازنگری شده

```c

addvector(a[], const b[] = {1, 1, 1}, size = 3)
{
    for (new i = 0; i < size; i++)
    a[i] += b[i]
}

```

---

`توابع Public از مقادیر آرگومنت پیش‌فرض پشتیبانی نمی‌کنن؛ صفحه 83 رو ببین`

---

### • عملگر sizeof و آرگومنت‌های پیش‌فرض تابع

یک مقدار پیش‌فرض یک آرگومنت تابع باید یک ثابت باشه، و مقدارش در نقطه اعلان تابع تعیین می‌شه. استفاده از عملگر "sizeof" برای تنظیم مقدار پیش‌فرض یک آرگومنت تابع یک مورد خاص هست: محاسبه مقدار sizeof expression تا نقطه فراخوانی تابع به تأخیر می‌افته و اندازه آرگومنت واقعی رو می‌گیره نه اون آرگومنت رسمی. وقتی تابع چندین بار در یک برنامه با آرگومنت‌های مختلف استفاده می‌شه، نتیجه "sizeof" expression احتمالاً در هر فراخوانی متفاوت هست —یعنی "مقدار پیش‌فرض" آرگومنت تابع ممکنه تغییر کنه.

پایین یک برنامه مثال هست که ده عدد تصادفی در محدوده 0–51 بدون تکرار می‌کشه. مثالی برای کاربرد کشیدن اعداد تصادفی بدون تکرار در بازی‌های کارت هست —اون ده عدد می‌تونن نمایانگر کارت‌ها برای دو "دست" در یک بازی پوکر باشن. فضایل الگوریتم استفاده شده در این برنامه، که توسط Robert W. Floyd اختراع شده، اینه که کارآمد و بی‌طرف هست —به شرطی که تولیدکننده عدد شبه-تصادفی هم بی‌طرف باشه.

فهرست: randlist.p

```c

main()
{
    new HandOfCards[10]
    FillRandom(HandOfCards, 52)

    print "A draw of 10 numbers from a range of 0 to 51 \
        (inclusive) without duplicates:\n"
    for (new i = 0; i < sizeof HandOfCards; i++)
        printf "%d ", HandOfCards[i]
}

FillRandom(Series[], Range, Number = sizeof Series)
{
    assert Range >= Number          /* cannot select 50 values
                                     * without duplicates in the
                                     * range 0..40, for example */
    new Index = 0
    for (new Seq = Range - Number; Seq < Range; Seq++)
    {
        new Val = random(Seq + 1)
        new Pos = InSeries(Series, Val, Index)
        if (Pos >= 0)
        {
            Series[Index] = Series[Pos]
            Series[Pos] = Seq
        }
        else
            Series[Index] = Val
        Index++
    }
}

InSeries(Series[], Value, Top = sizeof Series)
{
    for (new i = 0; i < Top; i++)
        if (Series[i] == Value)
            return i
    return -1
}

```

تابع main آرایه HandOfCards رو با اندازه ده cell اعلان می‌کنه و بعد تابع FillRandom رو با این هدف فراخوانی می‌کنه که ده عدد تصادفی مثبت زیر 52 بکشه. ولی توجه کن که تنها دو پارامتری که main به فراخوانی FillRandom پاس می‌ده آرایه HandsOfCards هست، جایی که اعداد تصادفی باید ذخیره بشن، و حد بالایی "52". تعداد اعداد تصادفی برای کشیدن ("10") به صورت ضمنی به FillRandom پاس داده می‌شه.

تعریف تابع FillRandom زیر main برای سومین پارامترش "Number = sizeof Series" مشخص می‌کنه، که "Series" به اولین پارامتر تابع اشاره می‌کنه. به دلیل مورد خاص "sizeof default value"، مقدار پیش‌فرض آرگومنت Number اندازه آرگومنت رسمی Series نیست، بلکه اندازه آرگومنت واقعی در نقطه فراخوانی تابع هست: HandOfCards.

توجه کن که داخل تابع FillRandom، پرسیدن "sizeof" آرگومنت تابع Series هنوز هم صفر ارزیابی می‌شه، چون آرایه Series با طول نامشخص اعلان شده (صفحه 109 رو برای رفتار sizeof ببین). استفاده از sizeof به عنوان مقدار پیش‌فرض برای یک آرگومنت تابع یک مورد خاص هست. اگر پارامتر رسمی Series با اندازه صریح اعلان می‌شد، مثل Series[10]، اضافه کردن یک آرگومنت Number با اندازه آرایه آرگومنت واقعی اضافی می‌بود، چون parser بعد اجبار می‌کرد که هم آرگومنت‌های رسمی و هم واقعی همون اندازه و ابعاد رو داشته باشن.

---

`عملگر "sizeof": 109`

`"random" یک تابع core پیشنهادی هست، صفحه 124 رو ببین`

`اعلان آرایه‌ها: 64`

`نام‌های Tag: 68`

---

### • آرگومنت‌ها با نام‌های tag

یک tag به صورت اختیاری قبل از یک آرگومنت تابع می‌آد. استفاده از tag ها error checking زمان compile script رو بهبود می‌ده و به عنوان "مستندسازی ضمنی" تابع عمل می‌کنه. مثلاً، تابعی که جذر یک مقدار ورودی رو در دقت fixed point محاسبه می‌کنه ممکنه نیاز داشته باشه که پارامتر ورودی یک مقدار fixed point باشه و نتیجه هم fixed point باشه. تابع زیر از ماژول fixed point extension استفاده می‌کنه، و یک الگوریتم تقریبی معروف به "bisection" برای محاسبه جذر. به استفاده از tag override ها روی literal های عددی و نتایج expression توجه کن.

فهرست: تابع sqroot —tag های قوی

```c

Fixed: sqroot(Fixed: value)
{
    new Fixed: low = 0.0
    new Fixed: high = value
    while (high - low > Fixed: 1)
    {
        new Fixed: mid = (low + high) >> 1
        if (fmul(mid, mid) < value)
            low = mid
        else
            high = mid
    }
    return low
}

```

با تعریف بالا، pawn parser یک تشخیص صادر می‌کنه اگر کسی تابع sqroot رو با پارامتری با tag متفاوت از "Fixed:" فراخوانی کنه، یا وقتی سعی کنه نتیجه تابع رو در متغیری با tag "غیر-Fixed:" ذخیره کنه.

الگوریتم bisection به binary search مرتبط هست، در این معنا که مداوماً interval ای که نتیجه باید توش باشه رو نصف می‌کنه. یک الگوریتم "successive substitution" مثل Newton-Raphson، که شیب منحنی تابع رو در نظر می‌گیره، نتایج دقیق‌تری رو سریع‌تر به دست می‌آره، ولی به قیمت اینکه بیان یک معیار توقف سخت‌تر هست. الگوریتم‌های پیشرفته برای محاسبه جذر الگوریتم‌های bisection و Newton-Raphson رو ترکیب می‌کنن.

در مورد یک آرایه، index های آرایه هم می‌تونن tag شده باشن. مثلاً، تابعی که تقاطع دو مستطیل رو ایجاد می‌کنه ممکنه اینطوری نوشته بشه:

فهرست: تابع intersection

```c

intersection(dest[rectangle], const src1[rectangle], const src2[rectangle])
{
    if (src1[right] > src2[left] && src1[left] < src2[right]
    && src1[bottom] > src2[top] && src1[top] < src2[bottom])
    {
        /* there is an intersection, calculate it using the "min" and
         *"max" functions from the "core" library, see page 124. */

        dest[left] = max(src1[left], src2[left])
        dest[right] = min(src1[right], src2[right])
        dest[top] = max(src1[top], src2[top])
        dest[bottom] = min(src1[bottom], src2[bottom])
        return true
    }
    else
    {
        /* "src1" and "src2" do not intersect */
        dest = { 0, 0, 0, 0 }
        return false
    }
}

```

---

`محاسبات Fixed point: 90؛ همچنین یادداشت کاربردی "Fixed Point Support Library" رو ببین`

`برای tag "rectangle"، صفحه 68 رو ببین`

---

### • آرگومنت‌های متغیر

تابعی که تعداد متغیری از آرگومنت‌ها می‌گیره، از عملگر "ellipsis" ("...") در header تابع برای نشون دادن موقعیت اولین آرگومنت متغیر استفاده می‌کنه. تابع می‌تونه با توابع از پیش تعریف شده numargs، getarg و setarg به آرگومنت‌ها دسترسی داشته باشه (صفحه 124 رو ببین).

تابع sum مجموع همه پارامترهاش رو برمی‌گردونه. از یک لیست پارامتر با طول متغیر استفاده می‌کنه.

فهرست: تابع sum، بازنگری شده

```c

sum(...)
{
    new result = 0
    for (new i = 0; i < numargs(); ++i)
        result += getarg(i)
    return result
}

```

این تابع می‌تونه اینطوری استفاده بشه:

فهرست: استفاده از تابع sum

```c

new v = sum(1, 2, 3, 4, 5)

```

یک tag ممکنه قبل از ellipsis بیاد تا اجبار کنه که همه پارامترهای بعدی همون tag رو داشته باشن، ولی در غیر این صورت هیچ error checking ای با لیست آرگومنت متغیر وجود نداره و این ویژگی باید با احتیاط استفاده بشه.

توابع getarg و setarg فرض می‌کنن که آرگومنت "by reference" پاس داده شده. وقتی getarg رو روی پارامترهای تابع معمولی (به جای آرگومنت‌های متغیر) استفاده می‌کنی باید مراقب باشی، چون نه compiler و نه abstract machine نمی‌تونن این رو چک کنن. پارامترهای واقعی که به عنوان بخشی از "variable argument list" پاس داده می‌شن همیشه by reference پاس داده می‌شن.

---

`نام‌های Tag: 68`

---

### • قوانین coercion

اگر آرگومنت تابع، طبق تعریف تابع (یا اعلانش)، یک "value parameter" باشه، caller می‌تونه به عنوان پارامتر به تابع پاس بده:

- یک مقدار، که by value پاس داده می‌شه؛

- یک reference، که مقدار dereference شده‌اش پاس داده می‌شه؛

- یک element آرایه (indexed)، که یک مقدار هست.

اگر آرگومنت تابع یک reference باشه، caller می‌تونه به تابع پاس بده:

- یک مقدار، که آدرسش پاس داده می‌شه؛

- یک reference، که by value پاس داده می‌شه چون نوعی داره که تابع انتظارش رو داره؛

- یک element آرایه (indexed)، که یک مقدار هست.

اگر آرگومنت تابع یک آرایه باشه، caller می‌تونه به تابع پاس بده:

- یک آرایه با همون ابعاد، که آدرس شروعش پاس داده می‌شه؛

- یک element آرایه (indexed)، که در این صورت آدرس element پاس داده می‌شه.

### • بازگشت (Recursion)

یک تابع مثال faculty در اوایل این فصل از یک حلقه ساده استفاده کرد. یک تابع مثال که عددی از سری Fibonacci محاسبه می‌کرد هم از یک حلقه و یک متغیر اضافی برای انجام کار استفاده کرد. این دو تابع محبوب‌ترین روتین‌ها برای نشون دادن توابع بازگشتی هستن، پس با پیاده‌سازی اینها به عنوان procedure های تکراری، ممکنه تمایل پیدا کنی فکر کنی که pawn از recursion پشتیبانی نمی‌کنه.

خب، pawn از recursion پشتیبانی می‌کنه، ولی محاسبه faculty ها و اعداد Fibonacci اتفاقاً مثال‌های خوبی از زمانی هستن که نباید از recursion استفاده کرد. Faculty با حلقه راحت‌تر از recursion قابل فهم هست. حل اعداد Fibonacci با recursion واقعاً مسئله رو ساده می‌کنه، ولی به قیمت اینکه فوق‌العاده ناکارآمد هست: Fibonacci بازگشتی همون مقادیر رو بارها و بارها محاسبه می‌کنه.

برنامه زیر پیاده‌سازی بازی معروف "Towers of Hanoi" در یک تابع بازگشتی هست:

فهرست: hanoi.p

```c

/* The Towers of Hanoi, a game solved through recursion */

main()
{
    print "How many disks: "
    new disks = getvalue()
    move 1, 3, 2, disks
}

move(from, to, spare, numdisks)
{
    if (numdisks > 1)
        move from, spare, to, numdisks-1
    printf "Move disk from pillar %d to pillar %d\n", from, to
    if (numdisks > 1)
        move spare, to, from, numdisks-1
}

```

---

`"faculty": 71`

`"fibonacci": 11`

`یک راه‌حل تکراری جذاب برای Towers of Hanoi وجود داره.`

---

### • اعلان‌های Forward

برای توابع استاندارد، "reference implementation" فعلی pawn compiler نیاز نداره که توابع قبل از اولین استفاده‌شون اعلان بشن.∗ عملگرهای تعریف شده توسط کاربر توابع خاصی هستن، و برخلاف توابع استاندارد باید قبل از استفاده اعلان بشن. در بسیاری موارد راحته که پیاده‌سازی یک عملگر تعریف شده توسط کاربر رو در یک include file بذاری، تا پیاده‌سازی و اعلان قبل از هر فراخوانی/invocation بیاد. گاهی، ممکنه لازم (یا راحت) باشه که اول یک عملگر تعریف شده توسط کاربر رو اعلان کنی و جای دیگه پیاده‌سازیش کنی. یک استفاده خاص از این تکنیک پیاده‌سازی عملگرهای تعریف شده توسط کاربر "ممنوع" هست.

برای ایجاد یک forward declaration، کلمه کلیدی forward رو قبل از نام تابع و لیست پارامترش بذار. برای سازگاری با نسخه‌های اولیه pawn، و برای شباهت با C/C++، روش جایگزین برای forward declare کردن یک تابع اینه که header تابع رو تایپ کنی و با semicolon خاتمه بدی (که بعد از پرانتز بسته لیست پارامتر می‌آد).

تعریف کامل تابع، با بدنه غیرخالی، جای دیگه‌ای در source file پیاده‌سازی می‌شه (به جز عملگرهای تعریف شده توسط کاربر ممنوع).

State classifier ها در forward declaration ها نادیده گرفته می‌شن.

---

###### ∗ پیاده‌سازی‌های دیگه زبان Pawn (اگر وجود داشته باشن) ممکنه از parser های "single pass" استفاده کنن، که نیاز دارن توابع قبل از استفاده تعریف بشن.

---

`عملگرهای تعریف شده توسط کاربر ممنوع: 92`

---

### • State classifier ها

همه توابع به جز توابع native ممکنه به صورت اختیاری یک attribute state داشته باشن. این شامل لیستی از نام‌های state (و automata) بین angle bracket ها پشت header تابع هست. نام‌ها با کاما جدا می‌شن. وقتی state بخشی از یک automaton غیرپیش‌فرض هست، نام automaton و یک جداکننده colon باید قبل از state بیاد؛ مثلاً، "parser:slash" نمایانگر state slash از automaton parser هست.

اگر یک تابع state ها داشته باشه، باید چندین "پیاده‌سازی" از تابع در source code وجود داشته باشه. همه توابع باید همون header تابع رو داشته باشن (به جز لیست state classifier).

به عنوان syntax خاص، وقتی هیچ نامی بین angle bracket ها نیست، تابع به همه state هایی که به پیاده‌سازی‌های دیگه تابع نسبت داده نشدن لینک می‌شه. تابعی که "همه state هایی که جای دیگه handle نشدن" رو handle می‌کنه تابع fall-back نامیده می‌شه.

### • توابع Public، تابع main

یک برنامه مستقل باید تابع main داشته باشه. این تابع نقطه شروع برنامه هست. تابع main نمی‌تونه آرگومنت داشته باشه.

یک کتابخانه تابع نیازی به داشتن تابع main نداره، ولی باید یا یک تابع main، یا حداقل یک تابع public داشته باشه. تابع main نقطه ورود اصلی به برنامه compile شده هست؛ توابع public نقاط ورود جایگزین به برنامه هستن. virtual machine می‌تونه اجرا رو با یکی از توابع public شروع کنه. یک کتابخانه تابع ممکنه یک تابع main داشته باشه تا initialization یک‌باره در startup انجام بده.

برای public کردن یک تابع، کلمه کلیدی public رو قبل از نام تابع بذار. مثلاً، یک text editor ممکنه تابع public "onkey" رو برای هر کلیدی که کاربر تایپ کرده فراخوانی کنه، تا کاربر بتونه keystroke ها رو تغییر بده (یا رد کنه). تابع onkey زیر هر کاراکتر "~" (کد 126 در character set ISO Latin-1) رو با کد "hard space" در جدول کاراکتر ANSI جایگزین می‌کنه:

فهرست: تابع onkey

```c

public onkey(keycode)
{
    if (key=='~')
        return 160 /* replace ~ by hard space (code 160 in Latin-1) */
    else
        return key /* leave other keys unaltered */
}

```

---

`مثال: 40`

---

توابعی که نامشون با نماد "@" شروع می‌شه هم public هستن. پس روش جایگزین برای نوشتن تابع public onkey اینه:

فهرست: تابع @onkey

```c

@onkey(keycode)
    return key=='~' ? 160 : key

```

کاراکتر "@"، وقتی استفاده می‌شه، بخشی از نام تابع می‌شه؛ یعنی، در مثال آخر، تابع "@onkey" نامیده می‌شه. host application روی نام‌های توابع public ای که یک script ممکنه پیاده‌سازی کنه تصمیم می‌گیره.

آرگومنت‌های یک تابع public نمی‌تونن مقادیر پیش‌فرض داشته باشن. یک تابع public رابط host application رو به pawn script وصل می‌کنه. بنابراین، آرگومنت‌هایی که به تابع public پاس داده می‌شن از host application منشأ می‌گیرن، و host application نمی‌تونه بدونه که script writer چه "مقادیر پیش‌فرضی" برای آرگومنت‌های تابع گذاشته —که به همین دلیل pawn parser استفاده از مقادیر پیش‌فرض برای آرگومنت‌های توابع public رو به عنوان خطا علامت‌گذاری می‌کنه. مسئله مقادیر پیش‌فرض در آرگومنت‌های تابع public فقط در صورتی پیش می‌آد که بخوای توابع public رو از خود script فراخوانی کنی.

### • توابع Static

وقتی نام تابع با کلمه کلیدی static prefix می‌شه، scope تابع به فایلی که تابع توش قرار داره محدود می‌شه.

attribute static می‌تونه با attribute "stock" ترکیب بشه.

### • توابع Stock

یک تابع "stock" تابعی هست که pawn parser باید وقتی استفاده می‌شه "plug into" برنامه کنه، و ممکنه وقتی استفاده نمی‌شه به سادگی (بدون هشدار) از برنامه "حذفش" کنه. توابع stock به compiler یا interpreter اجازه می‌دن memory footprint و اندازه فایل یک برنامه pawn (compile شده) رو بهینه کنن: هر تابع stock ای که بهش اشاره نشده، کاملاً skip می‌شه —انگار که از source file کم باشه.

یک استفاده معمول از توابع stock، بنابراین، در ایجاد مجموعه‌ای از توابع "کتابخانه" هست. مجموعه‌ای از توابع عمومی، همگی به عنوان "stock" علامت‌گذاری شده ممکنه در یک include file جداگانه قرار بگیرن، که بعد در هر pawn script include می‌شه. فقط توابع کتابخانه‌ای که واقعاً استفاده می‌شن "link" می‌شن.

برای اعلان یک تابع stock، کلمه کلیدی stock رو قبل از نام تابع بذار. توابع public و native نمی‌تونن "stock" اعلان بشن.

وقتی یک تابع stock توابع دیگه رو فراخوانی می‌کنه، معمولاً practice خوبی هست که اون توابع دیگه رو هم به عنوان "stock" اعلان کنی —به جز توابع native. به طور مشابه، هر متغیر global ای که توسط یک تابع stock استفاده می‌شه باید در اکثر موارد هم "stock" تعریف بشه. حذف توابع (stock) استفاده نشده می‌تونه یک واکنش زنجیره‌ای ایجاد کنه که توابع و متغیرهای global دیگه هم دیگه دسترسی نداشته باشن. اون توابع بعد هم حذف می‌شن، و به این ترتیب واکنش زنجیره‌ای ادامه پیدا می‌کنه تا فقط توابعی که استفاده می‌شن، مستقیم یا غیرمستقیم، باقی بمونن.

---

`مقادیر پیش‌فرض آرگومنت‌های تابع: 75`

`متغیرهای Public می‌تونن "stock" اعلان بشن`

`متغیرهای Stock: 63`

---

### • توابع Native

یک برنامه pawn می‌تونه توابع مخصوص application رو از طریق یک "native function" فراخوانی کنه. تابع native باید در برنامه pawn به وسیله یک function prototype اعلان بشه. نام تابع باید با کلمه کلیدی native شروع بشه.

مثال‌ها:

```c

native getparam(a[], b[], size)

native multiply_matrix(a[], b[], size)

native openfile(const name[])

```

نام‌های "getparam"، "multiply_matrix" و "openfile" نام‌های داخلی توابع native هستن؛ اینها نام‌هایی هستن که توابع در برنامه pawn باهاشون شناخته می‌شن. به صورت اختیاری، می‌تونی یک نام خارجی هم برای تابع native تنظیم کنی، که نام تابع همونطور که "host application" می‌شناسه‌اش هست. برای این کار، یک علامت مساوی به function prototype اضافه کن و بعدش نام خارجی. مثلاً:

```c

native getparam(a[], b[], size) = host_getparam

native multiply_matrix(a[], b[], size) = mtx_mul

```

وقتی یک تابع native آرایه برمی‌گردونه، ابعاد و اندازه آرایه باید صریحاً اعلان بشه. مشخصات آرایه بین نام تابع و لیست پارامتر قرار می‌گیره. مثلاً:

```c

enum rect { left, top, right, bottom }
native intersect[rect](src1[rect], src2[rect])

```

مگر اینکه صریحاً مشخص بشه، نام خارجی برابر با نام داخلی یک تابع native هست. یک استفاده معمول برای نام‌های خارجی صریح تنظیم یک نام نمادین برای یک عملگر تعریف شده توسط کاربر که به عنوان تابع native پیاده‌سازی شده هست.

"Implementor's Guide" رو برای پیاده‌سازی توابع native در C/C++ (در سمت "host application") ببین.

توابع Native نمی‌تونن state specifier داشته باشن.

---

`مثالی از یک عملگر تعریف شده توسط کاربر native در صفحه 89 هست`

---

### • عملگرهای تعریف شده توسط کاربر

تنها نوع داده pawn یک "cell" هست، معمولاً یک عدد 32-bit یا bit pattern.

Tags: 68 معنی یک مقدار در یک cell به application خاص بستگی داره —لازم نیست همیشه یک مقدار integer signed باشه. pawn اجازه می‌ده یک "معنی" به یک cell با مکانیزم "tag"ش attach کنی.

بر اساس tag ها، pawn همچنین اجازه می‌ده عملگرها رو برای cell هایی با هدف خاص دوباره تعریف کنی. مثال زیر یک tag "ones" و یک عملگر برای جمع کردن دو مقدار "ones" با هم تعریف می‌کنه (مثال همچنین عملگرهایی برای تفریق و نفی پیاده‌سازی می‌کنه). مثال از الگوریتم checksum چندین پروتکل در مجموعه پروتکل TCP/IP الهام گرفته: محاسبات one's complement رو با اضافه کردن carry bit یک arithmetic overflow به least significant bit مقدار شبیه‌سازی می‌کنه.

فهرست: ones.p

```c

forward ones: operator+(ones: a, ones: b)
forward ones: operator-(ones: a, ones: b)
forward ones: operator-(ones: a)

main()
{
    new ones: chksum = ones: 0xffffffff
    print "Input values in hexadecimal, zero to exit\n"

    new ones: value
    do
    {
        print ">> "
        value = ones: getvalue(.base=16)
        chksum = chksum + value
        printf "Checksum = %x\n", chksum
    }
    while (value)
}

stock ones: operator+(ones: a, ones: b)
{
    const ones: mask = ones: 0xffff                 /* word mask */
    const ones: shift = ones: 16                    /* word shift */

    /* add low words and high words separately */
    new ones: r1 = (a & mask) + (b & mask)
    new ones: r2 = (a >>> shift) + (b >>> shift)

    new ones: carry
    restart:                                        /* code label (goto target) */

    /* add carry of the new low word to the high word, then
    * strip it from the low word */

    carry = (r1 >>> shift)
    r2 += carry
    r1 &= mask

    /* add the carry from the new high word back to the low
    * word, then strip it from the high word */

    carry = (r2 >>> shift)
    r1 += carry
    r2 &= mask

    /* a carry from the high word injected back into the low
    * word may cause the new low to overflow, so restart in that case */

    if (carry)
        goto restart
    return (r2 << shift) | r1
}

stock ones: operator-(ones: a)
    return (a == ones: 0xffffffff) ? a : ~a

stock ones: operator-(ones: a, ones: b)
    return a + -b

```

خط قابل توجه در مثال خط "chksum = chksum + value" در حلقه در تابع main هست. چون هر دو متغیر chksum و value tag ones دارن، عملگر "+" به عملگر تعریف شده توسط کاربر اشاره می‌کنه (به جای عملگر پیش‌فرض "+"). عملگرهای تعریف شده توسط کاربر صرفاً یک راحتی نمادین هستن. همون اثر با فراخوانی صریح توابع به دست می‌آد.

تعریف یک عملگر شبیه تعریف یک تابع هست، با این تفاوت که نام عملگر از کلمه کلیدی "operator" و خود کاراکتر عملگر تشکیل شده. در مثال بالا، هم عملگر unary "-" و هم binary "-" دوباره تعریف شدن. یک تابع عملگر برای یک عملگر binary باید دو آرگومنت داشته باشه، یکی برای عملگر unary باید یک آرگومنت داشته باشه. توجه کن که عملگر binary "-" دو مقدار رو بعد از معکوس کردن علامت operand دوم با هم جمع می‌کنه. عملگر تفریق بنابراین هم به عملگرهای تعریف شده توسط کاربر "negation" (unary "-") و هم addition اشاره می‌کنه.

یک عملگر دوباره تعریف شده باید به محدودیت‌های زیر پایبند باشه:

- یک عملگر تعریف شده توسط کاربر باید قبل از استفاده اعلان بشه (این برخلاف توابع "معمولی" هست): یا پیاده‌سازی عملگر تعریف شده توسط کاربر رو بالای توابعی که ازش استفاده می‌کنن بذار، یا یک forward declaration نزدیک بالای فایل اضافه کن.

- فقط عملگرهای زیر می‌تونن دوباره تعریف بشن: +, -, \*, /, %, ++, --, ==, !=, `<`, `>` , `<=`, `>=`, ! و =. یعنی، مجموعه‌های عملگرهای حسابی و رابطه‌ای می‌تونن overload بشن، ولی عملگرهای bitwise و منطقی نمی‌تونن. عملگرهای = و ! مورد خاصی هستن.

- نمی‌تونی عملگرهای جدید اختراع کنی؛ نمی‌تونی مثلاً operator "#" تعریف کنی.

- سطح precedence و associativity عملگرها، و همچنین "arity"شون همونطور که تعریف شدن باقی می‌مونن. نمی‌تونی مثلاً یک عملگر unary "+" بسازی.

- tag برگشتی عملگرهای رابطه‌ای و عملگر "!" باید "bool:" باشه.

- tag برگشتی عملگرهای حسابی انتخاب خودت هست، ولی نمی‌تونی عملگری رو دوباره تعریف کنی که با عملگر دیگه‌ای یکسان باشه به جز tag برگشتی‌اش. مثلاً، نمی‌تونی هم `alpha: operator+(alpha: a, alpha: b)` و هم `beta: operator+(alpha: a, alpha: b)` داشته باشی (عملگر assignment استثنای این قانون هست.)

- PAWN قبلاً عملگرهایی رو برای کار روی cell های بدون tag تعریف کرده، نمی‌تونی عملگرها رو فقط با آرگومنت‌هایی بدون tag دوباره تعریف کنی.

- آرگومنت‌های تابع عملگر باید non-array هایی باشن که by value پاس داده می‌شن. نمی‌تونی عملگری بسازی که روی آرایه‌ها کار کنه.

در مثال داده شده بالا، هر دو آرگومنت عملگرهای binary همون tag رو دارن. این ضروری نیست؛ می‌تونی، مثلاً، یک عملگر binary "+" تعریف کنی که یک مقدار integer به یک عدد "ones:" اضافه کنه.

در اصل، عملکرد pawn parser اینه که tag(s) operand(s) ای که عملگر روشون کار می‌کنه رو جستجو کنه و ببینه آیا عملگر تعریف شده توسط کاربری برای ترکیب عملگر و tag(s) وجود داره یا نه. ولی، parser موقعیت‌های خاص رو تشخیص می‌ده و ویژگی‌های زیر رو ارائه می‌ده:

Parser عملگرهایی مثل "+=" رو به عنوان دنباله‌ای از "+" و "=" تشخیص می‌ده و اگر در دسترس باشه یک عملگر تعریف شده توسط کاربر "+" و/یا یک عملگر تعریف شده توسط کاربر "=" رو فراخوانی می‌کنه. در برنامه مثال، خط "chksum = chksum + value" ممکن بود به "chksum += value" خلاصه بشه.

Parser عملگرهای جابه‌جایی ("+", "\*", "==", و "!=") رو تشخیص می‌ده و operand های یک عملگر جابه‌جایی رو عوض می‌کنه اگر این کار تطبیق با یک عملگر تعریف شده توسط کاربر ایجاد کنه. مثلاً، معمولاً نیازی نیست هم

`ones:operator+(ones:a, b)`

و هم

`ones:operator+(a, ones:b)`

رو پیاده‌سازی کنی (پیاده‌سازی هر دو تابع معتبر هست، و در صورتی مفیده که عملگر تعریف شده توسط کاربر نباید جابه‌جایی باشه).

- عملگرهای Prefix و postfix به صورت خودکار handle می‌شن. فقط نیاز داری یک user operator برای عملگرهای "++" و "--" برای یک tag تعریف کنی.

- Parser عملگر "!" رو به صورت ضمنی در مورد تستی بدون مقایسه صریح فراخوانی می‌کنه. مثلاً، در statement "if (var) ..." وقتی "var" tag "ones:" داره، عملگر تعریف شده توسط کاربر "!" برای var فراخوانی می‌شه. عملگر "!" بنابراین به عنوان عملگر "test for zero" هم عمل می‌کنه. (در محاسبات one's complement، هم bit pattern های "all-ones" و هم "all-zeros" صفر رو نمایش می‌دن.)

- عملگر assignment تعریف شده توسط کاربر به صورت ضمنی برای آرگومنت تابعی که "by value" پاس داده می‌شه فراخوانی می‌شه وقتی نام‌های tag آرگومنت‌های رسمی و واقعی با نام‌های tag سمت چپ و راست عملگر مطابقت داشته باشن. به عبارت دیگه، pawn parser شبیه‌سازی می‌کنه که "pass by value" از طریق assignment اتفاق می‌افته. عملگر تعریف شده توسط کاربر برای آرگومنت‌های تابعی که "by reference" پاس داده می‌شن فراخوانی نمی‌شه.

- اگر می‌خوای یک عملیات رو ممنوع کنی، می‌تونی عملگر رو "forward declare" کنی بدون اینکه هیچ‌وقت تعریفش کنی (صفحه 82 رو ببین). این کار وقتی عملگر تعریف شده توسط کاربر invoke می‌شه یک خطا flag می‌کنه. مثلاً، برای ممنوع کردن عملگر "%" (باقی‌مانده بعد از تقسیم) روی مقادیر floating point، می‌تونی خط: `forward Float: operator%(Float: a, Float: b)` رو اضافه کنی

عملگرهای تعریف شده توسط کاربر می‌تونن به صورت اختیاری "stock" یا "native" اعلان بشن. در مورد یک تابع عملگر native، تعریف باید یک نام خارجی شامل بشه. مثلاً (وقتی، در سمت host، تابع native float_add نامیده می‌شه):

فهرست: تابع native operator+

```c

native Float: operator+(Float: val, Float: val) = float_add

```

عملگر assignment تعریف شده توسط کاربر مورد خاصی هست، چون عملگری هست که side effect داره. اگرچه عملگر ظاهر یک عملگر binary رو داره، "نتیجه expression"ش مقدار سمت راست هست —عملگر assignment یک عملگر "null" می‌بود اگر side-effect نداشت. در pawn یک عملگر assignment تعریف شده توسط کاربر اینطوری اعلان می‌شه:

فهرست: تابع operator=

```c

ones: operator=(a)

return ones: ( (a >= 0) ? a : ~(-a) )

```

عملگر تعریف شده توسط کاربر "=" در این تعریف مثل یک عملگر unary به نظر می‌رسه، ولی با این حال مورد خاصی هست. برخلاف عملگرهای دیگه، tag مقدار برگشتی برای عملگر تعریف شده توسط کاربر مهم هست: pawn parser از tag های آرگومنت و مقدار برگشتی برای پیدا کردن یک عملگر تعریف شده توسط کاربر مطابق استفاده می‌کنه.

تابع مثال بالا یک کاربرد معمول برای یک عملگر assignment تعریف شده توسط کاربر هست: برای coerce/convert خودکار یک مقدار بدون tag به یک مقدار با tag، و به صورت اختیاری تغییر نمایش حافظه مقدار در فرآیند. به طور خاص، statement "new ones:A = -5" باعث می‌شه عملگر تعریف شده توسط کاربر اجرا بشه، و برای ثابت -5 عملگر "~(- -5)"، یا ~5، یا −6 برمی‌گردونه.∗

---

`Tags: 68`

`اعلان Forward: 82`

`"Call by value" در مقابل "call by reference": 71`

`توابع Native: 85`

`Literal های Rational: 98`

`#pragma rational: 121`

---

### • محاسبات Floating point و fixed point

pawn فقط پشتیبانی ذاتی برای محاسبات integer داره (دامنه: "اعداد کامل"، هم مثبت و هم منفی). پشتیبانی برای محاسبات floating point یا fixed point باید از طریق توابع (native) پیاده‌سازی بشه. عملگرهای کاربر، بعد، اجازه نمادگذاری طبیعی‌تری از expression ها با اعداد fixed یا floating point رو می‌دن.

pawn parser پشتیبانی برای مقادیر literal با بخش کسری داره، که اونها رو "اعداد rational" می‌نامه. پشتیبانی برای literal های rational باید صریحاً با یک #pragma فعال بشه. #pragma نشون می‌ده که اعداد rational چطور باید ذخیره بشن —floating point یا fixed point. برای مقادیر rational fixed point، #pragma همچنین دقت رو در decimal ها مشخص می‌کنه. دو مثال برای #pragma:

```c

#pragma rational Float /* floating point format */
#pragma rational Fixed(3) /* fixed point, with 3 decimals */

```

---

###### ∗ CPU های مدرن از محاسبات integer two's complement استفاده می‌کنن. برای مقادیر مثبت، نمایش bitwise یک مقدار در one's complement و two's complement یکسان هست، ولی نمایش‌ها برای مقادیر منفی متفاوت هستن. مثلاً، همون bit pattern که در one's complement یعنی -5 در two's complement -6 هست.

---

چون یک مقدار fixed point هنوز باید در یک cell جا بشه، تعداد decimal ها تأثیر مستقیمی روی محدوده یک مقدار fixed point داره. برای یک مقدار fixed point با 3 decimal، محدوده −2, 147, 482 . . . + 2, 147, 482 خواهد بود.

فرمت برای یک عدد rational فقط یک بار برای کل برنامه pawn می‌تونه مشخص بشه. در یک پیاده‌سازی معمولاً یا پشتیبانی floating point یا پشتیبانی fixed point انتخاب می‌شه. همونطور که بالا گفته شد، برای پیاده‌سازی واقعی محاسبات floating point یا fixed point، pawn نیاز به کمک توابع (native) و عملگرهای تعریف شده توسط کاربر داره. جای خوبی برای قرار دادن #pragma برای پشتیبانی عدد rational در include file ای هست که توابع و عملگرها رو هم تعریف می‌کنه.

include file † برای محاسبات fixed point شامل تعریف‌هایی مثل اینه:

```c

native Fixed: operator*(Fixed: val1, Fixed: val2) = fmul
native Fixed: operator/(Fixed: val1, Fixed: val2) = fdiv

```

عملگرهای تعریف شده توسط کاربر برای ضرب و تقسیم دو عدد fixed point مستقیماً به توابع native fmul و fdiv alias شدن. host application باید، بعد، این توابع native رو فراهم کنه.

یک عملگر native تعریف شده توسط کاربر دیگه برای تبدیل خودکار یک integer به fixed point راحته، اگر به متغیری با tag "Fixed:" assign بشه:

```c

native Fixed: operator=(oper) = fixed

```

با این تعریف، می‌تونی "new Fixed: fract = 3" بگی و مقدار وقتی در متغیر fract ذخیره می‌شه به 3.000 تبدیل می‌شه. همونطور که در بخش عملگرهای تعریف شده توسط کاربر توضیح داده شد، عملگر assignment برای آرگومنت‌های تابعی که by value پاس داده می‌شن هم اجرا می‌شه. در expression "new Fixed: root = sqroot(16)" (پیاده‌سازی تابع sqroot رو در صفحه 79 ببین)، عملگر assignment تعریف شده توسط کاربر روی آرگومنت 16 فراخوانی می‌شه.

برای جمع کردن دو مقدار fixed point با هم، عملگر پیش‌فرض "+" کافی هست، و همینطور برای تفریق. اضافه کردن یک عدد معمولی (integer) به یک عدد fixed point متفاوت هست: مقدار معمولی باید قبل از اضافه کردن scale بشه. بنابراین، include file عملگرهایی برای این منظور هم پیاده‌سازی می‌کنه:

###### † یادداشت کاربردی "Fixed Point Support Library" رو برای جایی که include file رو بگیری ببین.

فهرست: عملگرهای جمعی، جابه‌جایی و غیرجابه‌جایی

```c

stock Fixed: operator+(Fixed: val1, val2)
    return val1 + fixed(val2)

stock Fixed: operator-(Fixed: val1, val2)
    return val1 - fixed(val2)

stock Fixed: operator-(val1, Fixed: val2)
    return fixed(val1) - val2

```

عملگر "+" جابه‌جایی هست، پس یک پیاده‌سازی هر دو مورد رو handle می‌کنه. برای عملگر "-"، هر دو مورد باید جداگانه پیاده‌سازی بشن.

در نهایت، include file استفاده از عملگر modulus ("%") روی مقادیر fixed point رو ممنوع می‌کنه: modulus فقط برای مقادیر integer قابل اعمال هست:

فهرست: عملگرهای ممنوع روی مقادیر fixed point

```c

forward Fixed: operator%(Fixed: val1, Fixed: val2)
forward Fixed: operator%(Fixed: val1, val2)
forward Fixed: operator%(val1, Fixed: val2)

```

به دلیل حضور اعلان (forward) عملگر، pawn parser سعی می‌کنه از عملگر تعریف شده توسط کاربر به جای عملگر پیش‌فرض "%" استفاده کنه. با پیاده‌سازی نکردن عملگر، parser بعداً یک پیام خطا صادر می‌کنه.

`عملگرهای تعریف شده توسط کاربر: 86`

---

### • Call by Value و Call by Reference

در Pawn، آرگومنت‌های تابع می‌تونن به دو روش پاس داده بشن: by value و by reference.

#### Call by value

در این روش، مقدار متغیر به تابع پاس داده می‌شه. یک کپی از متغیر ایجاد می‌شه و تابع روی کپی کار می‌کنه، نه متغیر اصلی. هر تغییری که داخل تابع روی متغیر انجام بشه روی متغیر اصلی تأثیر نمی‌ذاره.

```c
swap(a, b){
	new c = a;
	a = b;
	b = c;
}

main(){
	new x = 10, y = 20;
	printf("The value of x is %d and value of y is %d, before calling 'swap'.", x, y);
	swap(x, y);
	printf("The value of x is %d and value of y is %d, after calling 'swap'.", x, y);
}
```

خروجی

```
The value of x is 10 and value of y is 20, before calling 'swap'.
The value of x is 10 and value of y is 20, after calling 'swap'.
```

#### Call by reference

در این روش، آدرس متغیر به تابع پاس داده می‌شه. تابع روی متغیر اصلی کار می‌کنه و هر تغییری که داخل تابع روی متغیر انجام بشه در متغیر اصلی منعکس می‌شه.

```c
swap(&a, &b){
	new c = a;
	a = b;
	b = c;
}

main(){
	new x = 10, y = 20;
	printf("The value of x is %d and value of y is %d, before calling 'swap'.", x, y);
	swap(x, y);
	printf("The value of x is %d and value of y is %d, after calling 'swap'.", x, y);
}
```

خروجی

```
The value of x is 10 and value of y is 20, before calling 'swap'.
The value of x is 20 and value of y is 10, after calling 'swap'.
```

### • Recursion / بازگشت تابع

Recursion در برنامه‌نویسی به فرآیند فراخوانی یک تابع توسط خودش برای حل یک مسئله اشاره می‌کنه. این یک مفهوم بنیادی هست که برای حل مسائلی که می‌تونن به نمونه‌های کوچک‌تر همون مسئله تقسیم بشن استفاده می‌شه. Recursion از دو جزء اصلی تشکیل شده: base case ها و recursive case ها.

##### Base Case:

هر تابع بازگشتی باید یک یا چند base case داشته باشه. base case شرایطی هست که تحتش تابع از فراخوانی خودش دست می‌کشه و مستقیماً یک نتیجه برمی‌گردونه. بدون base case ها، recursion بی‌نهایت ادامه پیدا می‌کرد و باعث stack overflow می‌شد. بخش Stack/Heap رو بخون تا بیشتر بدونی.

##### Recursive Case:

recursive case جایی هست که تابع خودش رو برای حل نمونه کوچک‌تری از مسئله فراخوانی می‌کنه. هر فراخوانی بازگشتی باید مسئله رو به base case نزدیک‌تر کنه.

#### مثال

```c
stock factorial(n) {
    // Base case: factorial of 0 is 1
    if (n == 0) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    else {
        return n * factorial(n - 1);
    }
}
main() {
    new num = 3;
    new result = factorial(num);
    printf("Factorial of %d is %d", num, result); // Output: Factorial of 3 is 6
}
```

#### نمایش خروجی

```
main() \\ main function from where execution of program starts
new num = 3; \\ creates a num variable
new result = factorial(num); \\ create a result variable and calls the factorial() with passing value of num, factorial(5)
factorial(3) \\ factorial initiate
   if(3 == 0) \\ checks the condition which is false
   else{ 3 * factorial(3-1) } \\ 3 * and calls the factorial(2)
      factorial(2) \\ factorial initiate again
         if(2 == 0) \\ checks the condition which is false
         else{ 2 * factorial(2-1) } \\ 3 * 2 * and calls the factorial(1)
            factorial(1) \\ factorial initiate again
            if(1 == 0) \\ checks the condition which is false
            else{ 1 * factorial(1-1) } \\ 3 * 2 * 1 and calls the factorial(0)
 	       factorial(0) \\ factorial initiate again
               if(0 == 0) return 1 \\ checks the conition which is true and return 1
		\\ at the final call 3 * 2 * 1 * 1
```

### حافظه Stack

stack ناحیه‌ای از حافظه هست که برای ذخیره متغیرهای محلی، اطلاعات فراخوانی تابع، و داده‌های control flow استفاده می‌شه. به روش Last-In-First-Out (LIFO) کار می‌کنه، یعنی آخرین آیتمی که روی stack push شده اولین چیزی هست که pop می‌شه.

#### مثال (Stack Overflow)

```c
#pragma dynamic 35 // (35 * 4 bytes, a cell size) #pragma dynamic [cells] helps to modify the size of stack, read docs/scripting/language/Directives to know more about #pragma
main(){
	grow_stack(1);
}
grow_stacK(n){ // recursive function
	printf("N: %d", n);
	grow_stacK(n+1);
}
```

#### خروجی

```
N: 1
N: 2
N: 3
.. .
Stack/heap collision (insufficient stack size)
```

![Stack](https://i.imgur.com/ZaIVUkJ.png)

[برگشت به فهرست](00-Contents)
