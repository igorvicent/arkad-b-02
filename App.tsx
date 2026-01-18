import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Budgets } from './pages/Budgets';
import { NewBudget } from './pages/NewBudget';
import { DailyReport } from './pages/DailyReport';
import { Supplies } from './pages/Supplies';
import { Finance } from './pages/Finance';
import { NewInvoice } from './pages/NewInvoice';
import { Proposal } from './pages/Proposal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="new-budget" element={<NewBudget />} />
          <Route path="daily-report" element={<DailyReport />} />
          <Route path="supplies" element={<Supplies />} />
          <Route path="finance" element={<Finance />} />
          <Route path="finance/new" element={<NewInvoice />} />
          <Route path="proposal/:id" element={<Proposal />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;