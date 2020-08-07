import { useEffect, useState } from "react";

export const useDarkMode = (): [string, Function] => {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem("theme") || "light"
  );

  function setStorageTheme(themeToSet: string) {
    window.localStorage.setItem("theme", themeToSet);
    setTheme(themeToSet);
  }

  const toggleTheme = () => {
    theme === "light" ? setStorageTheme("dark") : setStorageTheme("light");
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !theme
    ) {
      setTheme("dark");
    }
  }, [theme]);

  return [theme, toggleTheme];
};
