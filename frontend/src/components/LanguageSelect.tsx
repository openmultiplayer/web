import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import getLanguageName from "src/utils/getLanguageName";

// Progressively enhanced language menu.
//
// Without JS, the menu is shown via CSS and when clicked, triggers a new page
// load which will load the page with the menu hidden.
// With JS, the component is state-controlled and will disable once a menu item
// is selected.
//
const LanguageSelect = () => {
  const { asPath, locale, locales } = useRouter();
  const [showLocales, setShowLocales] = useState(false);

  return (
    <>
      <label
        htmlFor="dialogControl"
        className="ph2 pv1 self-center br2 hover-bg-black-10 pointer"
      >
        {getLanguageName(locale)}
      </label>

      <input
        id="dialogControl"
        type="checkbox"
        className="toggle"
        checked={showLocales}
        onChange={(e) => setShowLocales(e.target.checked)}
      />
      <div className="dialog absolute center ma2 measure aspect-ratio--object">
        <div className="list flex flex-column flex-wrap bg-near-white br2 pa2">
          {locales.map((v: string) => (
            <Link key={v} href={'/' + v + asPath} locale={false}>
              <a
                className="link br2 black pa1 hover-bg-black-20"
                onClick={() => setShowLocales(false)}
              >
                {getLanguageName(v)}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .toggle {
          display: none;
        }
        .toggle:checked ~ .dialog {
          display: block;
        }
        .dialog {
          display: none;
        }
      `}</style>
    </>
  );
};

export default LanguageSelect;
