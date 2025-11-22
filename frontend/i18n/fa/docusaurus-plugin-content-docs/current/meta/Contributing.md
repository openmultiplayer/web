---
title: مشارکت
sidebar_label: مشارکت
description: نحوه مشارکت در Wiki SA-MP و مستندات open.mp.
---

منبع این مستندات برای هر کسی که بخواهد تغییرات را مشارکت کند باز است! تنها چیزی که نیاز دارید یک حساب [GitHub](https://github.com) و کمی وقت آزاد است. حتی نیازی به دانستن Git ندارید، می‌توانید همه چیز را از رابط وب انجام دهید!

اگر می‌خواهید کمک کنید زبان خاصی را نگهداری کنید، یک PR علیه فایل [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) باز کنید و خط برای دایرکتوری زبان خود با نام کاربری‌تان اضافه کنید.

## ویرایش محتوا

در پایین هر صفحه، دکمه‌ای هست که شما را به صفحه GitHub برای ویرایش می‌برد:

![Edit this page link present on each wiki page](https://assets.open.mp/assets/images/contributing/edit-this-page.png)

مثلاً، کلیک روی این در [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) شما را به [این صفحه](https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleAngularVelocity.md) می‌برد که ویرایشگر متنی برای ایجاد تغییرات در فایل ارائه می‌دهد (فرض کنید به GitHub لاگین کرده‌اید).

ویرایش خود را انجام دهید و "Pull Request" ارسال کنید این یعنی نگهدارندگان Wiki و سایر اعضای جامعه می‌توانند تغییر شما را بررسی کنند، بحث کنند آیا نیاز به تغییرات اضافی دارد یا نه و سپس آن را ادغام کنند.

## اضافه کردن محتوای جدید

اضافه کردن محتوای جدید کمی پیچیده‌تر است. می‌توانید به دو روش انجام دهید:

### رابط GitHub

هنگام مرور دایرکتوری در GitHub، دکمه Add file در گوشه بالا راست لیست فایل وجود دارد:

![Add file button](https://assets.open.mp/assets/images/contributing/add-new-file.png)

می‌توانید فایل Markdown که قبلاً نوشته‌اید آپلود کنید یا مستقیماً در ویرایشگر متن GitHub بنویسید.

فایل _باید_ پسوند `.md` داشته باشد و شامل Markdown باشد. برای اطلاعات بیشتر در مورد Markdown، [این راهنما](https://guides.github.com/features/mastering-markdown/) را بررسی کنید.

وقتی انجام شد، "Propose new file" را بزنید و Pull Request برای بررسی باز خواهد شد.

### Git

اگر می‌خواهید از Git استفاده کنید، تمام آنچه نیاز دارید clone کردن repository Wiki با:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

آن را در ویرایشگر مورد علاقه خود باز کنید. Visual Studio Code را توصیه می‌کنم زیرا ابزارهای عالی برای ویرایش و فرمت کردن فایل‌های Markdown دارد. همان طور که می‌بینید، من دارم این را با Visual Studio Code می‌نویسم!

![Visual Studio Code markdown preview](https://assets.open.mp/assets/images/contributing/vscode.png)

دو extension برای بهتر کردن تجربه‌تان توصیه می‌کنم:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) توسط David Anson - این extension ای است که مطمئن می‌شود Markdown شما درست فرمت شده. از برخی اشتباهات نحوی و معنایی جلوگیری می‌کند. همه هشدارها مهم نیستند، اما برخی می‌توانند به بهبود خوانایی کمک کنند. قضاوت بهتری استفاده کنید و اگر شک دارید، از reviewer بپرسید!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) توسط Prettier.js Team - این formatter ای است که خودکار فایل‌های Markdown شما را فرمت می‌کند تا همه از style یکسان استفاده کنند. repository Wiki تنظیماتی در `package.json` دارد که extension باید خودکار استفاده کند. مطمئن شوید "Format On Save" را در تنظیمات ویرایشگر فعال کنید تا فایل‌های Markdown خودکار هر بار که ذخیره می‌کنید فرمت شوند!

## نکات، راهنمایی‌ها و قراردادها

### لینک‌های داخلی

از URL مطلق برای لینک‌های بین سایت استفاده نکنید. از مسیرهای نسبی استفاده کنید.

- ❌

  ```md
  To be used with [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  To be used with [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` یعنی "یک دایرکتوری بالا برو" پس اگر فایلی که ویرایش می‌کنید داخل دایرکتوری `functions` است و به `callbacks` لینک می‌دهید از `../` استفاده می‌کنید تا به `scripting/` بروید سپس `callbacks/` تا دایرکتوری callbacks را وارد کنید، سپس نام فایل (بدون `.md`) callback که می‌خواهید لینک کنید.

### تصاویر

تصاویر در زیردایرکتوری داخل `/static/images` قرار می‌گیرند. سپس وقتی تصویری را در `![]()` لینک می‌کنید فقط از `/images/` به عنوان مسیر پایه استفاده می‌کنید (نیازی به `static` نیست آن فقط برای repository است).

اگر شک دارید، صفحه دیگری که از تصاویر استفاده می‌کند بخوانید و نحوه انجام آن را کپی کنید.

### Metadata

اولین چیز در _هر_ سندی در اینجا باید metadata باشد:

```mdx
---
title: My Documentation
sidebar_label: My Documentation
description: This is a page about stuff and things and burgers, yay!
---
```

هر صفحه باید title و description داشته باشد.

برای لیست کامل آنچه می‌تواند بین `---` باشد، [مستندات Docusaurus](https://docusaurus.io/docs/markdown-features#markdown-headers) را بررسی کنید.

### سرتیترها

سرتیتر سطح 1 (`<h1>`) با `#` ایجاد نکنید زیرا خودکار تولید می‌شود. اولین سرتیتر شما _همیشه_ باید `##` باشد

- ❌

  ```md
  # My Title

  This is documentation for ...

  # Sub-Section
  ```

- ✔

  ```md
  This is documentation for ...

  ## Sub-Section
  ```

### از `Code` Snippets برای مراجع فنی استفاده کنید

هنگام نوشتن پاراگرافی که شامل نام توابع، اعداد، عبارات یا چیزی که زبان نوشتاری استاندارد نیست، آنها را با \`backticks\` مثل این احاطه کنید. این جدا کردن زبان برای توصیف چیزها از مراجع به عناصر فنی مانند نام توابع و قطعات کد را آسان‌تر می‌کند.

- ❌

  > The fopen function will return a value with a tag of type File:, there is no problem on that line as the return value is being stored to a variable also with a tag of File: (note the cases are the same too). However on the next line the value 4 is added to the file handle. 4 has no tag [...]

- ✔

  > The `fopen` function will return a value with a tag of type `File:`, there is no problem on that line as the return value is being stored to a variable also with a tag of `File:` (note the cases are the same too). However on the next line the value `4` is added to the file handle. `4` has no tag

در مثال بالا، `fopen` نام تابع است، نه کلمه انگلیسی، پس احاطه کردن آن با علامت‌گذار `code` snippet کمک می‌کند آن را از محتوای دیگر متمایز کند.

همچنین، اگر پاراگراف به بلاک کد مثال اشاره می‌کند، این به خواننده کمک می‌کند کلمات را با مثال مرتبط کند.

### جداول

اگر جدولی سرتیتر دارد، در قسمت بالا می‌روند:

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Health  | Engine Status                        |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

- ✔

  ```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

## مهاجرت از SA-MP Wiki

بیشتر محتوا منتقل شده، اما اگر صفحه‌ای را گم شده پیدا کردید، در اینجا راهنمای کوتاهی برای تبدیل محتوا به Markdown است.

### گرفتن HTML

1. این دکمه را کلیک کنید

   (Firefox)

   ![image](https://assets.open.mp/assets/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](https://assets.open.mp/assets/images/contributing/f62bb8112543.png)

2. بالای سمت چپ صفحه اصلی wiki، در حاشیه چپ یا گوشه تا `#content` را ببینید hover کنید

   ![image](https://assets.open.mp/assets/images/contributing/65761ffbc429.png)

   یا برای `<div id=content>` جستجو کنید

   ![image](https://assets.open.mp/assets/images/contributing/77befe2749fd.png)

3. HTML داخلی آن element را کپی کنید

   ![image](https://assets.open.mp/assets/images/contributing/8c7c75cfabad.png)

   حالا شما _فقط_ کد HTML برای _محتوای_ واقعی صفحه، چیزی که به آن اهمیت می‌دهیم، دارید و می‌توانید آن را به Markdown تبدیل کنید.

### تبدیل HTML به Markdown

برای تبدیل HTML ساده (بدون جدول) به Markdown استفاده کنید:

https://mixmark-io.github.io/turndown/

![image](https://assets.open.mp/assets/images/contributing/77f4ea555bbb.png)

^^ توجه کنید حالا جدول را کاملاً خراب کرده...

### جداول HTML به جداول Markdown

چون ابزار بالا از جداول پشتیبانی نمی‌کند، از این ابزار استفاده کنید:

https://jmalarcon.github.io/markdowntables/

و فقط element `<table>` را کپی کنید در:

![image](https://assets.open.mp/assets/images/contributing/57f171ae0da7.png)

### تمیز کردن

تبدیل احتمالاً کامل نخواهد بود. پس باید کمی تمیز کردن دستی انجام دهید. extension های فرمت فهرست شده بالا باید با آن کمک کنند اما همچنان ممکن است نیاز داشته باشید کمی زمان صرف کار دستی کنید.

اگر وقت ندارید، نگران نباشید! پیش‌نویس ناتمام ارسال کنید و شخص دیگری می‌تواند از جایی که رها کردید ادامه دهد!

## توافقنامه مجوز

همه پروژه‌های open.mp [توافقنامه مجوز مشارکت‌کننده](https://cla-assistant.io/openmultiplayer/homepage) دارند. این اساساً فقط یعنی موافقت می‌کنید اجازه دهید ما از کار شما استفاده کنیم، و آن را تحت مجوز منبع باز قرار دهیم. وقتی برای اولین بار Pull Request باز می‌کنید، ربات CLA-Assistant لینکی پست می‌کند جایی که می‌توانید توافقنامه را امضا کنید.