import { useCallback, useRef, useState } from "react";
import Link from "next/link";

const Search = () => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          res.results.sort(function (a, b) {
            const indexA = a.title.toLowerCase().indexOf(query.toLowerCase());
            const indexB = b.title.toLowerCase().indexOf(query.toLowerCase());
            return indexB < indexA;
          });
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <>
      <div className="container" ref={searchRef}>
        <input
          className="search"
          onChange={onChange}
          onFocus={onFocus}
          placeholder="Search posts"
          type="text"
          value={query}
        />
        {active && results.length > 0 && (
          <ul className="results">
            {results.map(({ id, title, url }) => (
              <li className="result" key={id}>
                <Link href={url} as={url}>
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
          margin: 9px 0 0;
          padding: 0;
          max-height: 23rem;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
        }

        .result {
          background: #0070f3;
          color: #eee;
          margin: 0 0 9px;
          padding: 18px;
        }

        .result a {
          color: #eee;
        }
      `}</style>
    </>
  );
};

export default Search;
