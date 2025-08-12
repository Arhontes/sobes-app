import React from "react";
import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.scss"; // SCSS-модуль, если нужно

export default function Layout() {
  return (
    <div>
      <nav className={s.navbar}>
        <Link to="/app">📄 Основная страница</Link>
      </nav>

      <main>
        <Outlet /> {/* Здесь будет меняться контент */}
      </main>
    </div>
  );
}
