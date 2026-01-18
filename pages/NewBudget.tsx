import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreVertical, HardHat, Package, Wrench, FileText } from 'lucide-react';

export const NewBudget: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-white">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-surface-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center">Novo Orçamento</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-transparent text-slate-900 dark:text-white">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full pb-32">
        <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
          <div className="h-2 w-8 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-[#3b4754]"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-[#3b4754]"></div>
        </div>

        <section className="mb-6">
          <h3 className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-4">Dados do Cliente e Obra</h3>
          <div className="flex flex-col gap-1 px-4">
            <label className="flex flex-col min-w-40 flex-1 mb-4">
              <p className="text-slate-500 dark:text-white/70 text-sm font-medium leading-normal pb-2">Nome do Cliente</p>
              <input className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-slate-400 p-[15px] text-base font-normal" placeholder="Ex: Construtora Silva" />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-slate-500 dark:text-white/70 text-sm font-medium leading-normal pb-2">Endereço da Obra</p>
              <input className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-slate-400 p-[15px] text-base font-normal" placeholder="Rua, Número, Bairro" />
            </label>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-slate-900 dark:text-white tracking-light text-xl font-bold leading-tight px-4 text-left pb-4">Composição de Custos</h3>
          <div className="px-4 flex flex-col gap-3">
            {[
              { icon: HardHat, label: 'Mão de Obra' },
              { icon: Package, label: 'Materiais' },
              { icon: Wrench, label: 'Equipamentos' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#3b4754] rounded-xl overflow-hidden cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-primary" size={24} />
                    <span className="font-bold text-slate-900 dark:text-white">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-white/60">R$ 0,00</span>
                    <ChevronLeft size={20} className="rotate-[-90deg] text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-slate-900 dark:text-white tracking-light text-xl font-bold leading-tight px-4 text-left pb-4">BDI e Impostos</h3>
          <div className="px-4">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-primary">Taxa BDI (%)</span>
                <span className="text-lg font-bold text-primary">0.00%</span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full w-0"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <p className="text-slate-500 dark:text-white/70 text-xs font-medium pb-1 pl-1">Lucro (%)</p>
                <input className="rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-12 text-slate-900 dark:text-white p-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="5.0" type="number" />
              </label>
              <label className="flex flex-col">
                <p className="text-slate-500 dark:text-white/70 text-xs font-medium pb-1 pl-1">Impostos (%)</p>
                <input className="rounded-lg border border-slate-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-12 text-slate-900 dark:text-white p-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="14.2" type="number" />
              </label>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1c2127] border-t border-slate-200 dark:border-white/10 p-4 pb-8 backdrop-blur-lg">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-slate-400 dark:text-white/50 text-xs font-medium uppercase tracking-wider">Valor Total</p>
            <p className="text-slate-900 dark:text-white text-xl font-extrabold leading-none">R$ 0,00</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20">
            <FileText size={20} />
            Gerar Proposta
          </button>
        </div>
      </footer>
    </div>
  );
};