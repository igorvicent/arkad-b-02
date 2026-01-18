import React, { useState } from 'react';
import { ChevronLeft, MoreVertical, Search, List, CheckCircle, BarChart2, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'gantt'>('list');

  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-primary">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Cronograma</h2>
          </div>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
            <Search size={24} />
            <MoreVertical size={24} />
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Project Header */}
        <div className="bg-slate-100 dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-border-dark mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Edifício Horizonte</h1>
              <p className="text-sm text-slate-500">São Paulo, SP</p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Em Execução
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-lg p-4 bg-white dark:bg-background-dark shadow-sm">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Status Geral</p>
              <p className="text-primary text-2xl font-bold leading-tight">58%</p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
             <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-lg p-4 bg-white dark:bg-background-dark shadow-sm">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Financeiro</p>
              <p className="text-financial text-2xl font-bold leading-tight">52%</p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1">
                <div className="bg-financial h-1.5 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex h-11 items-center justify-center rounded-xl bg-slate-200 dark:bg-surface-dark p-1 mb-6">
          <button
            onClick={() => setView('list')}
            className={`flex h-full grow items-center justify-center rounded-lg gap-2 text-sm font-bold transition-all ${view === 'list' ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-slate-500'}`}
          >
            <List size={18} /> Lista
          </button>
          <button
             onClick={() => setView('gantt')}
             className={`flex h-full grow items-center justify-center rounded-lg gap-2 text-sm font-bold transition-all ${view === 'gantt' ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-slate-500'}`}
          >
            <BarChart2 size={18} className="rotate-90" /> Gantt
          </button>
        </div>

        <div className="flex items-center justify-between pt-2 pb-4">
          <h3 className="text-lg font-bold tracking-tight">Etapas da Obra</h3>
          <span className="text-primary text-sm font-semibold">Ver tudo</span>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-4">
          {/* Item 1 */}
          <div className="flex flex-col rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark overflow-hidden shadow-sm">
            <div className="flex items-center p-4 gap-4">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://picsum.photos/200/200?random=1)' }}></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-base">Fundação</h4>
                  <CheckCircle className="text-financial" size={20} />
                </div>
                <p className="text-xs text-slate-500">01/01/2023 - 15/02/2023</p>
              </div>
            </div>
            <div className="px-4 pb-4 space-y-3">
               <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-primary/80">FÍSICO</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark overflow-hidden shadow-sm">
            <div className="flex items-center p-4 gap-4">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://picsum.photos/200/200?random=2)' }}></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-base text-primary">Estrutura</h4>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">65%</span>
                </div>
                <p className="text-xs text-slate-500">16/02/2023 - 20/06/2023</p>
              </div>
            </div>
            <div className="px-4 pb-4 space-y-3">
               <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-primary/80">FÍSICO</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '65%' }}></div>
                </div>
              </div>
               <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-financial/80">FINANCEIRO</span>
                  <span>50%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-financial h-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40">
        <Plus size={30} />
      </button>
    </div>
  );
};