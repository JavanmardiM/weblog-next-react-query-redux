"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState, themeAction } from "./store/theme";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const storedTheme = useSelector((state: any) => state.theme.theme);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === "light" ? "dark" : "light");
    dispatch(
      themeAction.setTheme({ theme: storedTheme === "dark" ? "light" : "dark" })
    );
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center focus:outline-none m-3"
    >
      {isDark ? (
        <div className="mr-2 text-2xl text-yellow-400">
          <RiSunLine />
        </div>
      ) : (
        <div className="mr-2 text-2xl text-gray-700">
          <span className="text-yellow-400">
            <RiMoonClearLine />
          </span>
        </div>
      )}
    </button>
  );
};
export default ThemeSwitcher;
