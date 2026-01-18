import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, SlidersHorizontal, Search, FileText, Plus, Hourglass, XCircle, CheckCircle } from 'lucide-react';

export const Finance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-border-dark">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => navigate(-1)} className="text-primary flex size-10 shrink-0 items-center justify-start">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-bold leading-tight flex-1 text-center">NFS-e</h2>
          <button className="flex size-10 items-center justify-end text-primary">
            <SlidersHorizontal size={24} />
          </button>
        </div>

        <div className="px-4 py-2">
           <label className="flex flex-col h-10 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f2f4] dark:bg-surface-dark overflow-hidden">
              <div className="text-slate-400 flex items-center justify-center pl-4">
                <Search size={20} />
              </div>
              <input className="flex w-full min-w-0 flex-1 border-none bg-transparent h-full px-4 text-sm font-normal" placeholder="Nº da Nota ou Cliente" />
            </div>
          </label>
        </div>

        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
           {['Todas', 'Emitidas', 'Pendentes', 'Canceladas'].map((filter, i) => (
             <div key={i} className={`flex h-8 shrink-0 items-center justify-center rounded-lg px-4 ${i === 0 ? 'bg-primary text-white' : 'bg-[#f0f2f4] dark:bg-surface-dark text-slate-900 dark:text-slate-300'}`}>
               <p className="text-sm font-medium">{filter}</p>
             </div>
           ))}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
         <div className="px-4 pt-4 pb-2">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Outubro 2023</p>
         </div>

         <div className="flex flex-col">
            <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark px-4 py-4 border-b border-gray-100 dark:border-border-dark">
               <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                     <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                        <FileText size={24} />
                     </div>
                     <div className="flex flex-1 flex-col justify-center">
                        <p className="font-bold leading-tight">NFS-e #202401</p>
                        <p className="text-slate-500 text-sm font-medium mt-1">Construtora Silva & Filhos</p>
                        <p className="text-slate-400 text-xs font-normal mt-0.5">15/10/2023</p>
                     </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase">Emitida</div>
                     <p className="font-bold">R$ 15.400,00</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark px-4 py-4 border-b border-gray-100 dark:border-border-dark">
               <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                     <div className="text-slate-500 flex items-center justify-center rounded-lg bg-slate-100 shrink-0 size-12">
                        <Hourglass size={24} />
                     </div>
                     <div className="flex flex-1 flex-col justify-center">
                        <p className="font-bold leading-tight">NFS-e #202402</p>
                        <p className="text-slate-500 text-sm font-medium mt-1">Engenharia Norte S.A.</p>
                        <p className="text-slate-400 text-xs font-normal mt-0.5">14/10/2023</p>
                     </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">Pendente</div>
                     <p className="font-bold">R$ 8.250,00</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark px-4 py-4 border-b border-gray-100 dark:border-border-dark">
               <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                     <div className="text-rose-500 flex items-center justify-center rounded-lg bg-rose-50 shrink-0 size-12">
                        <XCircle size={24} />
                     </div>
                     <div className="flex flex-1 flex-col justify-center">
                        <p className="font-bold leading-tight">NFS-e #202403</p>
                        <p className="text-slate-500 text-sm font-medium mt-1">Serralheria Modelo</p>
                        <p className="text-slate-400 text-xs font-normal mt-0.5">12/10/2023</p>
                     </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase">Cancelada</div>
                     <p className="font-bold line-through opacity-50">R$ 2.100,00</p>
                  </div>
               </div>
            </div>
         </div>
      </main>

      <div className="fixed bottom-24 right-6">
        <button onClick={() => navigate('/finance/new')} className="flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all active:scale-95">
          <Plus size={24} />
          <span className="text-sm font-bold pr-1">Emitir Nova NFS-e</span>
        </button>
      </div>
    </div>
  );
};