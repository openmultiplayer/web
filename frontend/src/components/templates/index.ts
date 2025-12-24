// When adding a new language translation component:
// 1. Create the component file in translations/{lang}/{component-name}.tsx
// 2. Import it below with the other language-specific imports
// 3. Add it to the templates object export
// 4. For StaleTranslationWarning components, also add the mapping in .github/workflows/scripts/mark-translations-outdated.js

import VersionWarn from "./version-warning";
import LowercaseNote from "./lowercase-note";
import TipNPCCallbacks from "./npc-callbacks-tip";
import StaleTranslationWarning from "./stale-translation-warning";

import VersionWarnID from "./translations/id/version-warning";
import LowercaseNoteID from "./translations/id/lowercase-note";
import TipNPCCallbacksID from "./translations/id/npc-callbacks-tip";

import VersionWarnPT_BR from "./translations/pt-BR/version-warning";
import LowercaseNotePT_BR from "./translations/pt-BR/lowercase-note";
import TipNPCCallbacksPT_BR from "./translations/pt-BR/npc-callbacks-tip";
import StaleTranslationWarningPT_BR from "./translations/pt-BR/stale-translation-warning";

import VersionWarnES from "./translations/es/version-warning";
import LowercaseNoteES from "./translations/es/lowercase-note";
import TipNPCCallbacksES from "./translations/es/npc-callbacks-tip";
import StaleTranslationWarningES from "./translations/es/stale-translation-warning";

import VersionWarnZH_CN from "./translations/zh-CN/version-warning";
import LowercaseNoteZH_CN from "./translations/zh-CN/lowercase-note";
import TipNPCCallbacksZH_CN from "./translations/zh-CN/npc-callbacks-tip";

import VersionWarnTR from "./translations/tr/version-warning";
import LowercaseNoteTR from "./translations/tr/lowercase-note";
import TipNPCCallbacksTR from "./translations/tr/npc-callbacks-tip";

import VersionWarnBS from "./translations/bs/version-warning";
import LowercaseNoteBS from "./translations/bs/lowercase-note";
import TipNPCCallbacksBS from "./translations/bs/npc-callbacks-tip";

import VersionWarnSR from "./translations/sr/version-warning";
import LowercaseNoteSR from "./translations/sr/lowercase-note";
import TipNPCCallbacksSR from "./translations/sr/npc-callbacks-tip";

import StaleTranslationWarningRU from "./translations/ru/stale-translation-warning";

import StaleTranslationWarningFR from "./translations/fr/stale-translation-warning";

const templates = {
  VersionWarn,
  LowercaseNote,
  TipNPCCallbacks,
  StaleTranslationWarning,
  VersionWarnID,
  LowercaseNoteID,
  TipNPCCallbacksID,
  VersionWarnPT: VersionWarnPT_BR,
  LowercaseNotePT: LowercaseNotePT_BR,
  TipNPCCallbacksPT: TipNPCCallbacksPT_BR,
  StaleTranslationWarningPT: StaleTranslationWarningPT_BR,
  VersionWarnES,
  LowercaseNoteES,
  TipNPCCallbacksES,
  StaleTranslationWarningES,
  VersionWarnZH_CN,
  LowercaseNoteZH_CN,
  TipNPCCallbacksZH_CN,
  VersionWarnTR,
  LowercaseNoteTR,
  TipNPCCallbacksTR,
  VersionWarnBS,
  LowercaseNoteBS,
  TipNPCCallbacksBS,
  VersionWarnSR,
  LowercaseNoteSR,
  TipNPCCallbacksSR,
  StaleTranslationWarningRU,
  StaleTranslationWarningFR,
};

export default templates;
