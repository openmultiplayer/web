import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="measure-wide center">
      <section id="text">
        <header>
          <h1>Text</h1>
        </header>
        <article id="text__headings">
          <header>
            <h2>Headings</h2>
          </header>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__paragraphs">
          <header>
            <h2>Paragraphs</h2>
          </header>
          <div>
            <p>
              A paragraph (from the Greek paragraphos, “to write beside” or
              “written beside”) is a self-contained unit of a discourse in
              writing dealing with a particular point or idea. A paragraph
              consists of one or more sentences. Though not required by the
              syntax of any language, paragraphs are usually an expected part of
              formal writing, used to organize longer prose.
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__blockquotes">
          <header>
            <h2>Blockquotes</h2>
          </header>
          <div>
            <blockquote>
              <p>
                A block quotation (also known as a long quotation or extract) is
                a quotation in a written document, that is set off from the main
                text as a paragraph, or block of text.
              </p>
              <p>
                It is typically distinguished visually using indentation and a
                different typeface or smaller size quotation. It may or may not
                include a citation, usually placed at the bottom.
              </p>
              <cite>
                <a href="#!">Said no one, ever.</a>
              </cite>
            </blockquote>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__lists">
          <header>
            <h2>Lists</h2>
          </header>
          <div>
            <h3>Definition list</h3>
            <dl>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
            </dl>
            <h3>Ordered List</h3>
            <ol type="1">
              <li>List Item 1</li>
              <li>
                List Item 2
                <ol type="A">
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ol type="a">
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ol type="I">
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ol type="i">
                              <li>List Item 1</li>
                              <li>List Item 2</li>
                              <li>List Item 3</li>
                            </ol>
                          </li>
                          <li>List Item 3</li>
                        </ol>
                      </li>
                      <li>List Item 3</li>
                    </ol>
                  </li>
                  <li>List Item 3</li>
                </ol>
              </li>
              <li>List Item 3</li>
            </ol>
            <h3>Unordered List</h3>
            <ul>
              <li>List Item 1</li>
              <li>
                List Item 2
                <ul>
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ul>
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ul>
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ul>
                              <li>List Item 1</li>
                              <li>List Item 2</li>
                              <li>List Item 3</li>
                            </ul>
                          </li>
                          <li>List Item 3</li>
                        </ul>
                      </li>
                      <li>List Item 3</li>
                    </ul>
                  </li>
                  <li>List Item 3</li>
                </ul>
              </li>
              <li>List Item 3</li>
            </ul>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__blockquotes">
          <header>
            <h1>Blockquotes</h1>
          </header>
          <div>
            <blockquote>
              <p>
                A block quotation (also known as a long quotation or extract) is
                a quotation in a written document, that is set off from the main
                text as a paragraph, or block of text.
              </p>
              <p>
                It is typically distinguished visually using indentation and a
                different typeface or smaller size quotation. It may or may not
                include a citation, usually placed at the bottom.
              </p>
              <cite>
                <a href="#!">Said no one, ever.</a>
              </cite>
            </blockquote>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__details">
          <header>
            <h1>Details / Summary</h1>
          </header>
          <details>
            <summary>Expand for details</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              odio! Odio natus ullam ad quaerat, eaque necessitatibus, aliquid
              distinctio similique voluptatibus dicta consequuntur animi.
              Quaerat facilis quidem unde eos! Ipsa.
            </p>
          </details>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__address">
          <header>
            <h1>Address</h1>
          </header>
          <address>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__hr">
          <header>
            <h2>Horizontal rules</h2>
          </header>
          <div>
            <hr />
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__tables">
          <header>
            <h2>Tabular data</h2>
          </header>
          <table>
            <caption>Table Caption</caption>
            <thead>
              <tr>
                <th>Table Heading 1</th>
                <th>Table Heading 2</th>
                <th>Table Heading 3</th>
                <th>Table Heading 4</th>
                <th>Table Heading 5</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Table Footer 1</th>
                <th>Table Footer 2</th>
                <th>Table Footer 3</th>
                <th>Table Footer 4</th>
                <th>Table Footer 5</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
            </tbody>
          </table>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__code">
          <header>
            <h2>Code</h2>
          </header>
          <div>
            <p>
              <strong>Keyboard input:</strong> <kbd>Cmd</kbd>
            </p>
            <p>
              <strong>Inline code:</strong>{" "}
              <code>&lt;div&gt;code&lt;/div&gt;</code>
            </p>
            <p>
              <strong>Sample output:</strong>{" "}
              <samp>This is sample output from a computer program.</samp>
            </p>
            <h2>Pre-formatted text</h2>
            <pre>
              P R E F O R M A T T E D T E X T ! " # $ % &amp; ' ( ) * + , - . /
              0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M
              N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n
              o p q r s t u v w x y z ~{" "}
            </pre>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__inline">
          <header>
            <h2>Inline elements</h2>
          </header>
          <div>
            <p>
              <a href="#!">This is a text link</a>.
            </p>
            <p>
              <strong>Strong is used to indicate strong importance.</strong>
            </p>
            <p>
              <em>This text has added emphasis.</em>
            </p>
            <p>
              The <b>b element</b> is stylistically different text from normal
              text, without any special importance.
            </p>
            <p>
              The <i>i element</i> is text that is offset from the normal text.
            </p>
            <p>
              The <u>u element</u> is text with an unarticulated, though
              explicitly rendered, non-textual annotation.
            </p>
            <p>
              <del>This text is deleted</del> and{" "}
              <ins>This text is inserted</ins>.
            </p>
            <p>
              <s>This text has a strikethrough</s>.
            </p>
            <p>
              Superscript<sup>®</sup>.
            </p>
            <p>
              Subscript for things like H<sub>2</sub>O.
            </p>
            <p>
              <small>This small text is small for fine print, etc.</small>
            </p>
            <p>
              Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
            </p>
            <p>
              <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
                This text is a short inline quotation.
              </q>
            </p>
            <p>
              <cite>This is a citation.</cite>
            </p>
            <p>
              The <dfn>dfn element</dfn> indicates a definition.
            </p>
            <p>
              The <mark>mark element</mark> indicates a highlight.
            </p>
            <p>
              The <var>variable element</var>, such as <var>x</var> ={" "}
              <var>y</var>.
            </p>
            <p>
              The time element:{" "}
              <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
      </section>
      <section id="embedded">
        <header>
          <h2>Embedded content</h2>
        </header>
        <article id="embedded__images">
          <header>
            <h2>Images</h2>
          </header>
          <div>
            <h3>
              Plain <code>&lt;img&gt;</code> element
            </h3>
            <p>
              <img
                src="https://placekitten.com/480/480"
                alt="Photo of a kitten"
              />
            </p>
            <h3>
              <code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code>{" "}
              element
            </h3>
            <figure>
              <img
                src="https://placekitten.com/420/420"
                alt="Photo of a kitten"
              />
            </figure>
            <h3>
              <code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code>{" "}
              and <code>&lt;figcaption&gt;</code> elements
            </h3>
            <figure>
              <img
                src="https://placekitten.com/420/420"
                alt="Photo of a kitten"
              />
              <figcaption>Here is a caption for this image.</figcaption>
            </figure>
            <h3>
              <code>&lt;figure&gt;</code> element with a{" "}
              <code>&lt;picture&gt;</code> element
            </h3>
            <figure>
              <picture>
                <source
                  srcSet="https://placekitten.com/800/800"
                  media="(min-width: 800px)"
                />
                <img
                  src="https://placekitten.com/420/420"
                  alt="Photo of a kitten"
                />
              </picture>
            </figure>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__canvas">
          <header>
            <h2>Canvas</h2>
          </header>
          <div>
            <canvas></canvas>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__meter">
          <header>
            <h2>Meter</h2>
          </header>
          <div>
            <meter value="2" min="0" max="10">
              2 out of 10
            </meter>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__progress">
          <header>
            <h2>Progress</h2>
          </header>
          <div>
            <progress>progress</progress>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__svg">
          <header>
            <h2>Inline SVG</h2>
          </header>
          <div>
            <svg width="100px" height="100px">
              <circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
            </svg>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__iframe">
          <header>
            <h2>IFrame</h2>
          </header>
          <div>
            <iframe src="/" height="300"></iframe>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__embed">
          <header>
            <h2>Embed</h2>
          </header>
          <div>
            <embed src="/" height="300" />
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="embedded__object">
          <header>
            <h2>Object</h2>
          </header>
          <div>
            <object data="/" height="300"></object>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
      </section>
      <section id="forms">
        <header>
          <h2>Form elements</h2>
        </header>
        <form>
          <fieldset id="forms__input">
            <legend>Input fields</legend>
            <p>
              <label htmlFor="input__text">Text Input</label>
              <input id="input__text" type="text" placeholder="Text Input" />
            </p>
            <p>
              <label htmlFor="input__password">Password</label>
              <input
                id="input__password"
                type="password"
                placeholder="Type your Password"
              />
            </p>
            <p>
              <label htmlFor="input__webaddress">Web Address</label>
              <input
                id="input__webaddress"
                type="url"
                placeholder="https://yoursite.com"
              />
            </p>
            <p>
              <label htmlFor="input__emailaddress">Email Address</label>
              <input
                id="input__emailaddress"
                type="email"
                placeholder="name@email.com"
              />
            </p>
            <p>
              <label htmlFor="input__phone">Phone Number</label>
              <input
                id="input__phone"
                type="tel"
                placeholder="(999) 999-9999"
              />
            </p>
            <p>
              <label htmlFor="input__search">Search</label>
              <input
                id="input__search"
                type="search"
                placeholder="Enter Search Term"
              />
            </p>
            <p>
              <label htmlFor="input__text2">Number Input</label>
              <input
                id="input__text2"
                type="number"
                placeholder="Enter a Number"
              />
            </p>
            <p>
              <label htmlFor="input__file">File Input</label>
              <input id="input__file" type="file" />
            </p>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__select">
            <legend>Select menus</legend>
            <p>
              <label htmlFor="select">Select</label>
              <select id="select">
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
            <p>
              <label htmlFor="select_multiple">Select (multiple)</label>
              <select id="select_multiple" multiple>
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__checkbox">
            <legend>Checkboxes</legend>
            <ul>
              <li>
                <label htmlFor="checkbox1">
                  <input
                    id="checkbox1"
                    name="checkbox"
                    type="checkbox"
                    checked={true}
                  />{" "}
                  Choice A
                </label>
              </li>
              <li>
                <label htmlFor="checkbox2">
                  <input id="checkbox2" name="checkbox" type="checkbox" />{" "}
                  Choice B
                </label>
              </li>
              <li>
                <label htmlFor="checkbox3">
                  <input id="checkbox3" name="checkbox" type="checkbox" />{" "}
                  Choice C
                </label>
              </li>
            </ul>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__radio">
            <legend>Radio buttons</legend>
            <ul>
              <li>
                <label htmlFor="radio1">
                  <input id="radio1" name="radio" type="radio" checked={true} />{" "}
                  Option 1
                </label>
              </li>
              <li>
                <label htmlFor="radio2">
                  <input id="radio2" name="radio" type="radio" /> Option 2
                </label>
              </li>
              <li>
                <label htmlFor="radio3">
                  <input id="radio3" name="radio" type="radio" /> Option 3
                </label>
              </li>
            </ul>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__textareas">
            <legend>Textareas</legend>
            <p>
              <label htmlFor="textarea">Textarea</label>
              <textarea
                id="textarea"
                rows={8}
                cols={48}
                placeholder="Enter your message here"
              ></textarea>
            </p>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__html5">
            <legend>HTML5 inputs</legend>
            <p>
              <label htmlFor="ic">Color input</label>
              <input type="color" id="ic" value="#000000" />
            </p>
            <p>
              <label htmlFor="in">Number input</label>
              <input type="number" id="in" min="0" max="10" value="5" />
            </p>
            <p>
              <label htmlFor="ir">Range input</label>
              <input type="range" id="ir" value="10" />
            </p>
            <p>
              <label htmlFor="idd">Date input</label>
              <input type="date" id="idd" value="1970-01-01" />
            </p>
            <p>
              <label htmlFor="idm">Month input</label>
              <input type="month" id="idm" value="1970-01" />
            </p>
            <p>
              <label htmlFor="idw">Week input</label>
              <input type="week" id="idw" value="1970-W01" />
            </p>
            <p>
              <label htmlFor="idt">Datetime input</label>
              <input type="dateTime" id="idt" value="1970-01-01T00:00:00Z" />
            </p>
            <p>
              <label htmlFor="idtl">Datetime-local input</label>
              <input type="dateTime-local" id="idtl" value="1970-01-01T00:00" />
            </p>
            <p>
              <label htmlFor="idl">Datalist</label>
              <input type="text" id="idl" list="example-list" />
              <datalist id="example-list">
                <option value="Example #1" />
                <option value="Example #2" />
                <option value="Example #3" />
              </datalist>
            </p>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
          <fieldset id="forms__action">
            <legend>Action buttons</legend>
            <p>
              <input type="submit" value="<input type=submit>" />
              <input type="button" value="<input type=button>" />
              <input type="reset" value="<input type=reset>" />
              <input type="submit" value="<input disabled>" disabled />
            </p>
            <p>
              <button type="submit">&lt;button type=submit&gt;</button>
              <button type="button">&lt;button type=button&gt;</button>
              <button type="reset">&lt;button type=reset&gt;</button>
              <button type="button" disabled>
                &lt;button disabled&gt;
              </button>
            </p>
          </fieldset>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Page;
