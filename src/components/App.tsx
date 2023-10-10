import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/header/Header';

export default function App() {
  return (
    <main>
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
    </main>
  );
}
