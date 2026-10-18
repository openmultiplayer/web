---
title: المساهمة في التوثيق
sidebar_label: المساهمة في التوثيق
description: كيف تساهم في تحسين موسوعة SA-MP وتوثيق open.mp.
---

يمكن لأي شخص المساهمة في هذا التوثيق. تحتاج فقط إلى حساب على [GitHub](https://github.com) وبعض الوقت. ولا يشترط أن تعرف استخدام Git؛ إذ يمكنك إجراء التعديلات من المتصفح مباشرةً.

إذا أردت المساعدة في صيانة ترجمة لغة معينة، فافتح طلب دمج لتعديل ملف [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS)، وأضف سطرًا يربط مجلد تلك اللغة باسم حسابك.

## تعديل المحتوى {#editing-content}

يوجد أسفل كل صفحة رابط ينقلك إلى محرّر الملفات في GitHub:

![رابط تعديل الصفحة في أسفل صفحات التوثيق](https://assets.open.mp/assets/images/contributing/edit-this-page.png)

على سبيل المثال، ينقلك هذا الرابط في صفحة [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) إلى [محرّر الصفحة](https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleAngularVelocity.md)، حيث يمكنك تعديل الملف إذا كنت قد سجّلت الدخول إلى GitHub.

بعد إجراء التعديل، أرسله في طلب دمج (Pull Request)، ليتمكن مشرفو التوثيق وأعضاء المجتمع من مراجعته ومناقشته وطلب أي تحسينات لازمة قبل دمجه.

## إضافة محتوى جديد {#adding-new-content}

تتطلب إضافة صفحة جديدة خطوات إضافية بسيطة. يمكنك استخدام إحدى الطريقتين التاليتين.

### من واجهة GitHub {#github-interface}

عند فتح مجلد في GitHub، ستجد زر **Add file** أعلى قائمة الملفات:

![زر إضافة ملف في GitHub](https://assets.open.mp/assets/images/contributing/add-new-file.png)

يمكنك رفع ملف Markdown أعددته مسبقًا، أو كتابة محتواه مباشرةً في محرّر GitHub.

يجب أن ينتهي اسم الملف بالامتداد `.md` وأن يكون مكتوبًا بصيغة Markdown. إذا لم تكن تعرف هذه الصيغة، فراجع [هذا الدليل](https://guides.github.com/features/mastering-markdown/).

بعد الانتهاء، اضغط **Propose new file** لاقتراح الملف وفتح طلب دمج لمراجعته.

### باستخدام Git {#git}

ابدأ باستنساخ المستودع:

```sh
git clone https://github.com/openmultiplayer/web.git
```

افتح المشروع في محرّر النصوص الذي تفضله. يُعدّ Visual Studio Code خيارًا مناسبًا، لأنه يوفر أدوات لتحرير ملفات Markdown وتنسيقها ومعاينتها.

![معاينة Markdown في Visual Studio Code](https://assets.open.mp/assets/images/contributing/vscode.png)

يمكن أن تساعدك الإضافتان التاليتان:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint): تفحص تنسيق Markdown وتنبّهك إلى بعض الأخطاء. ليست كل التحذيرات مهمة بالقدر نفسه، لكن بعضها يحسّن قابلية القراءة. استخدم تقديرك، واسأل أحد المراجعين عند الشك.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): تنسّق الملفات تلقائيًا لتوحيد أسلوبها. يحتوي المستودع على إعدادات في `package.json` يفترض أن تستخدمها الإضافة تلقائيًا. فعّل خيار **Format On Save** لتنسيق الملف عند حفظه.

## إرشادات الكتابة والتنسيق {#notes-tips-and-conventions}

### الروابط الداخلية {#internal-links}

استخدم مسارات نسبية للروابط التي تشير إلى صفحات أخرى داخل الموقع، بدلًا من العناوين الكاملة.

مثال غير مناسب:

```md
  To be used with [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

والأفضل:

```md
  To be used with [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

يعني `../` الرجوع إلى المجلد الأب. فإذا كنت تعدّل ملفًا داخل `functions` وتريد الإشارة إلى صفحة في `callbacks`، فاستخدم `../` للرجوع إلى `scripting/`، ثم `callbacks/` للدخول إلى مجلد دوال الاستدعاء، ثم اسم الملف دون الامتداد `.md`.

### الصور {#images}

ضع الصور في مجلد فرعي داخل `/static/images`. وعند إدراج الصورة باستخدام `![]()`، ابدأ مسارها بـ `/images/` فقط؛ فلا تكتب `static` ضمن الرابط، لأنه جزء من بنية المستودع لا من عنوان الصورة المنشور.

إذا لم تتضح لك الطريقة، فراجع صفحة تستخدم صورًا واتبع أسلوبها.

### بيانات الصفحة {#metadata}

يجب أن يبدأ كل ملف ببيانات الصفحة، كما في المثال:

```mdx
---
title: My Documentation
sidebar_label: My Documentation
description: This is a page about stuff and things and burgers, yay!
---
```

أضف عنوانًا ووصفًا لكل صفحة. ولمعرفة بقية الحقول المتاحة بين علامتي `---`، راجع [توثيق Docusaurus](https://docusaurus.io/docs/markdown-features#markdown-headers).

### العناوين {#headings}

لا تضف عنوانًا من المستوى الأول باستخدام `#`، لأن الموقع يولّده تلقائيًا من بيانات الصفحة. ابدأ العناوين داخل المحتوى بالمستوى الثاني، أي `##`.

مثال غير مناسب:

```md
  # My Title

  This is documentation for ...

  # Sub-Section
  ```

والأفضل:

```md
  This is documentation for ...

  ## Sub-Section
  ```

### تمييز الأسماء والمقاطع البرمجية {#use-code-snippets-for-technical-references}

عند ذكر اسم دالة أو قيمة أو تعبير برمجي داخل فقرة، ضعه بين علامتي backtick لتمييزه عن الشرح. مثلًا، اكتب `fopen` و`File:` و`4` بهذه الطريقة حتى يعرف القارئ أنها أجزاء من الشيفرة.

بدلًا من كتابة أسماء الدوال والوسوم كنص عادي، يمكنك صياغة الشرح هكذا:

> تعيد الدالة `fopen` قيمة تحمل الوسم `File:`، ويُخزّن ناتجها في متغيّر يحمل الوسم نفسه. لكن السطر التالي يضيف القيمة `4`، وهي بلا وسم، إلى مقبض الملف.

يساعد هذا التمييز القارئ أيضًا على ربط الشرح بالمثال البرمجي المرافق له.

### الجداول {#tables}

ضع أسماء أعمدة الجدول في صف الرأس، لا في أول صف من صفوف البيانات.

مثال غير مناسب:

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

والأفضل:

```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

## اتفاقية ترخيص المساهمات {#license-agreement}

تستخدم مشاريع open.mp [اتفاقية ترخيص للمساهمين](https://cla-assistant.io/openmultiplayer/homepage). تعني هذه الاتفاقية، باختصار، أنك تسمح باستخدام مساهمتك ونشرها بترخيص مفتوح المصدر. عند فتح طلب الدمج الأول، يرسل البوت CLA-Assistant رابطًا لتوقيع الاتفاقية.
