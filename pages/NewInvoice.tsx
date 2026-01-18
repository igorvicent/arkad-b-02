import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, User, Briefcase, DollarSign, Send, HelpCircle } from 'lucide-react';

export const NewInvoice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Nova NFS-e</h2>
          </div>
          <button className="flex size-10 items-center justify-center rounded-lg text-slate-600 dark:text-slate-400">
            <Info size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Steps */}
        <div className="flex justify-between items-center px-2 mb-2">
          <div className="flex flex-col items-center">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
            <span className="text-[10px] mt-1 text-primary font-bold">Tomador</span>
          </div>
          <div className="h-[2px] flex-1 bg-primary mx-2 mt-[-12px]"></div>
          <div className="flex flex-col items-center">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">2</div>
            <span className="text-[10px] mt-1 text-primary font-bold">Serviço</span>
          </div>
          <div className="h-[2px] flex-1 bg-slate-200 dark:bg-border-dark mx-2 mt-[-12px]"></div>
          <div className="flex flex-col items-center">
             <div className="size-8 rounded-full border-2 border-slate-300 dark:border-border-dark bg-background-light dark:bg-background-dark flex items-center justify-center text-slate-400 text-xs font-bold">3</div>
             <span className="text-[10px] mt-1 text-slate-400 font-medium">Impostos</span>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <User className="text-primary" size={24} />
            <h3 className="text-lg font-bold">1. Dados do Tomador</h3>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden p-4 space-y-4 shadow-sm">
            <label className="flex flex-col w-full">
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold pb-1.5 ml-1">Selecionar Cliente</p>
              <select className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark h-14 px-4 text-base font-normal">
                <option value="">Pesquise por nome ou CNPJ</option>
                <option value="1">Construtora Alvorada Ltda (00.123.456/0001-99)</option>
              </select>
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-lg font-bold">2. Serviço Prestado</h3>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-4 space-y-4 shadow-sm">
             <label className="flex flex-col w-full">
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold pb-1.5 ml-1">Vincular OS ou Contrato</p>
              <select className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark h-14 px-4 text-base font-normal">
                <option value="">Selecione uma obra ativa</option>
                <option value="os-102">OS #102 - Manutenção Elétrica</option>
              </select>
            </label>
            <label className="flex flex-col w-full">
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold pb-1.5 ml-1">Discriminação</p>
              <textarea className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark p-4 text-base font-normal placeholder:text-slate-400" placeholder="Descreva o serviço..." rows={3}></textarea>
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <DollarSign className="text-primary" size={24} />
            <h3 className="text-lg font-bold">3. Valores</h3>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-4 space-y-4 shadow-sm">
             <label className="flex flex-col flex-1">
              <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold pb-1.5 ml-1">Valor Bruto (R$)</p>
              <input className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark h-14 px-4 text-lg font-bold" type="number" defaultValue="12500.00" />
            </label>
            
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-slate-500">ISS (5%)</span>
                <span className="font-medium">- R$ 625,00</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                <div className="flex items-center gap-1">
                   <span className="text-slate-500">Impostos Federais</span>
                   <HelpCircle size={14} className="text-slate-400" />
                </div>
                <span className="font-medium">- R$ 2.143,75</span>
              </div>
            </div>

             <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30 flex justify-between items-center">
               <span className="text-primary font-bold">Valor Líquido</span>
               <span className="text-primary text-xl font-extrabold tracking-tight">R$ 9.731,25</span>
             </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-border-dark p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
            <Send size={24} />
            Transmitir NFS-e
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Processamento Fiscal em Tempo Real</p>
        </div>
      </footer>
    </div>
  );
};