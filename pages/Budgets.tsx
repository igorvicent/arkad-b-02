import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction, Bell, User, Search, MoreHorizontal, Plus } from 'lucide-react';

const BudgetCard = ({ id, status, title, client, value, date, onClick }: any) => {
  const statusColors: Record<string, string> = {
    'APROVADO': 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200',
    'ENVIADO': 'bg-blue-100 dark:bg-blue-900/30 text-primary border-blue-200',
    'RASCUNHO': 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200',
    'REPROVADO': 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200',
  };

  return (
    <div 
      onClick={onClick}
      className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm transition-all active:scale-[0.98] cursor-pointer"
    >
      <div className="flex items-center justify-between p-4 pb-2">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">#{id}</span>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusColors[status] || 'bg-slate-100'}`}>
          {status}
        </span>
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold leading-tight mb-1">{title}</h3>
        <p className="text-slate-500 text-sm font-medium">{client}</p>
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-border-dark flex items-center justify-between">
          <div>
            <p className={`text-2xl font-extrabold ${status === 'REPROVADO' ? 'text-slate-400' : 'text-primary'}`}>
              {value}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase mt-1 tracking-wider">{date}</p>
          </div>
          <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-background-dark">
            <MoreHorizontal className="text-slate-500" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Budgets: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Construction className="text-primary" size={28} />
            <h1 className="text-2xl font-extrabold tracking-tight">Orçamentos</h1>
          </div>
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
              <Bell size={20} />
            </button>
            <button className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
              <User size={20} />
            </button>
          </div>
        </div>
        {/* Search */}
        <div className="py-2">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden">
              <div className="text-slate-400 flex border-none bg-slate-200 dark:bg-surface-dark items-center justify-center pl-4">
                <Search size={20} />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 border-none bg-slate-200 dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-500 px-3 text-base font-medium" 
                placeholder="Buscar por cliente ou obra..." 
              />
            </div>
          </label>
        </div>
        {/* Filters */}
        <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar -mx-4 px-4">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 text-white shadow-lg shadow-primary/20">
            <span className="text-sm font-semibold">Todos</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-surface-dark px-5 text-slate-600 dark:text-slate-300">
            <span className="text-sm font-semibold">Rascunho</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-surface-dark px-5 text-slate-600 dark:text-slate-300">
            <span className="text-sm font-semibold">Enviado</span>
          </button>
        </div>
      </header>

      {/* List */}
      <main className="px-4 space-y-4 mt-2">
        <BudgetCard 
          id="2023-001" status="APROVADO" title="Reforma Apartamento 402" 
          client="Construtora Silva Ltda." value="R$ 45.000,00" date="Vence em 15 Out 2023"
          onClick={() => navigate('/proposal/1')}
        />
        <BudgetCard 
          id="2023-004" status="ENVIADO" title="Edifício Horizonte" 
          client="João de Barro Empreendimentos" value="R$ 128.500,00" date="Vence em 22 Out 2023"
          onClick={() => navigate('/proposal/2')}
        />
        <BudgetCard 
          id="2023-005" status="RASCUNHO" title="Casa de Campo - Bragança" 
          client="Ricardo Alencar" value="R$ 89.200,00" date="Última edição hoje"
          onClick={() => navigate('/proposal/3')}
        />
      </main>

      <button 
        onClick={() => navigate('/new-budget')}
        className="fixed right-6 bottom-24 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 active:scale-90 transition-transform"
      >
        <Plus size={30} />
      </button>
    </div>
  );
};