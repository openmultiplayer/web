// From: https://jonsuh.com/hamburgers/

const Hamburger = ({
  className = "",
  active,
  toggle,
}: {
  className?: string;
  active: boolean;
  toggle: (_: boolean) => void;
}) => (
  <>
    <button
      className={[className, "hamburger", active && "is-active"].join(" ")}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      onClick={() => toggle(!active)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>

    <style jsx>{`
      .hamburger {
        padding: 15px 15px;
        display: inline-block;
        cursor: pointer;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
      }
      .hamburger:hover {
        opacity: 0.7;
      }
      .hamburger.is-active:hover {
        opacity: 0.7;
      }
      .hamburger.is-active .hamburger-inner,
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        background-color: #000;
      }
      .hamburger-box {
        width: 40px;
        height: 24px;
        display: inline-block;
        position: relative;
      }
      .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }
      .hamburger-inner::before,
      .hamburger-inner::after {
        content: "";
        display: block;
      }
      .hamburger-inner::before {
        top: -10px;
      }
      .hamburger-inner::after {
        bottom: -10px;
      }
      .hamburger .hamburger-inner::before,
      .hamburger .hamburger-inner::after {
        transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
          opacity 0s linear;
      }
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        opacity: 0;
        transition: bottom 0.08s ease-out, top 0.08s ease-out,
          opacity 0s 0.08s linear;
      }
      .hamburger.is-active .hamburger-inner::before {
        top: 0;
      }
      .hamburger.is-active .hamburger-inner::after {
        bottom: 0;
      }
    `}</style>
  </>
);

export default Hamburger;
