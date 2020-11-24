import useDarkMode from "use-dark-mode";

const ThemeSelect = () => {
  const darkMode = useDarkMode(false);

  return (
    <input
      type="checkbox"
      onChange={({ target: { checked } }) =>
        checked ? darkMode.enable() : darkMode.disable()
      }
    />
  );
};

export default ThemeSelect;
