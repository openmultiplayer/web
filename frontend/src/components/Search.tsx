import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useCallback, useRef, useState } from "react";
import { API_ADDRESS } from "src/config";
import { Hit, SearchResults } from "src/types/_generated_SearchResult";

const noExtension = (path: string) => path.replace(".md", "");

import { useRouter } from 'next/router';
const translateText = require('src/components/translates/Translate');

const Search: FC = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState<Hit[]>([]);

  const searchEndpoint = (query: string) =>
    `${API_ADDRESS}/docs/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res: SearchResults) => {
          setResults(res.hits);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, [onClick]);
  
  const router = useRouter();
  const locale = router?.locale || "en";

  return (
    <>
      <div className="container" ref={searchRef}>
        <input
          className="search"
          onChange={onChange}
          onFocus={onFocus}
          placeholder={translateText(locale, "Docs", "Search...")}
          type="text"
          value={query}
        />
        {active && results.length > 0 && (
          <ul className="results">
            {results.map(({ url, title }) => (
              <li className="result" key={url}>
                <Link href={`/${noExtension(url)}`} as={`/${noExtension(url)}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }

        .search {
          background-color: ${useColorModeValue('var(--chakra-colors-gray-50)', 'var(--chakra-colors-gray-800)')};
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-top-width: 0px;
          box-sizing: border-box;
          font-size: 18px;
          padding: 18px;
          width: 100%;
        }

        .results {
          list-style: none;
          overflow-x: hidden;
          overflow-y: scroll;
          margin: 0px 0 0;
          padding: 0;
          max-height: 31rem;
          position: absolute;
          border: 0px solid rgba(0, 0, 0, 0.3);
          border-bottom-width: 1px;
          left: 0;
          right: 0;
        }

        .result {
          background-color: ${useColorModeValue('var(--chakra-colors-gray-50)', 'var(--chakra-colors-gray-900)')};
          padding: 18px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-top-width: 0px;
        }

        .result:hover {
          background-color: ${useColorModeValue('var(--chakra-colors-gray-100)', 'var(--chakra-colors-gray-700)')};
        }
      `}</style>
    </>
  );
};

export default Search;
