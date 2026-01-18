import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, Sun, Cloud, CloudRain, Users, AlertTriangle, Camera } from 'lucide-react';

export const DailyReport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-primary cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Relatório Diário</h2>
          </div>
          <RefreshCw className="text-slate-400" size={24} />
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <section className="mt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 px-4 pt-4">Clima</h3>
          <div className="flex px-4 py-3 gap-2">
            {[{ icon: Sun, label: 'Ensolarado', active: true }, { icon: Cloud, label: 'Nublado' }, { icon: CloudRain, label: 'Chuvoso' }].map((weather, i) => (
              <label key={i} className={`flex flex-1 cursor-pointer h-16 items-center justify-center rounded-lg border transition-all ${weather.active ? 'bg-primary text-white border-primary' : 'bg-slate-200 dark:bg-surface-dark text-slate-500 border-transparent'}`}>
                <div className="flex flex-col items-center">
                  <weather.icon size={24} />
                  <span className="text-[10px] mt-1 font-medium">{weather.label}</span>
                </div>
                <input type="radio" name="weather" className="hidden" defaultChecked={weather.active} />
              </label>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 px-4 pt-4">Mão de Obra</h3>
          <div className="flex items-center gap-4 bg-white dark:bg-surface-dark mx-4 mt-2 p-4 rounded-xl border border-slate-200 dark:border-border-dark justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                <Users size={20} />
              </div>
              <p className="text-base font-medium leading-normal flex-1 truncate">Total de Colaboradores</p>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-4">
                <button className="text-xl font-bold flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 active:scale-95 transition-transform">-</button>
                <input className="text-xl font-bold w-8 p-0 text-center bg-transparent border-none focus:ring-0" type="number" defaultValue="12" />
                <button className="text-xl font-bold flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white active:scale-95 transition-transform">+</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 px-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Atividades</h3>
            <span className="text-xs text-primary font-medium">Auto-salvamento ativo</span>
          </div>
          <textarea className="w-full h-32 p-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm resize-none shadow-sm" placeholder="Descreva as principais atividades realizadas no dia de hoje..."></textarea>
        </section>

        <section className="mt-6 px-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Ocorrências</h3>
          <div className="relative">
            <AlertTriangle className="absolute left-4 top-4 text-slate-400" size={20} />
            <textarea className="w-full h-24 p-4 pl-11 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm resize-none shadow-sm" placeholder="Houve algum imprevisto, atraso ou acidente?"></textarea>
          </div>
        </section>

        <section className="mt-6 px-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Galeria de Fotos (3)</h3>
          <div className="grid grid-cols-3 gap-3">
             <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200 dark:border-border-dark bg-slate-100">
               <img src="https://picsum.photos/200/200?random=10" className="w-full h-full object-cover" alt="site" />
             </div>
             <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200 dark:border-border-dark bg-slate-100">
               <img src="https://picsum.photos/200/200?random=11" className="w-full h-full object-cover" alt="site" />
             </div>
             <button className="aspect-square flex flex-col items-center justify-center bg-slate-200 dark:bg-surface-dark rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 active:bg-slate-300 transition-colors text-slate-500">
               <Camera size={28} className="text-primary mb-1" />
               <span className="text-[10px] font-bold uppercase">Adicionar</span>
             </button>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-border-dark p-4 pb-8 z-50">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm bg-white dark:bg-surface-dark">
             Salvar Rascunho
          </button>
          <button className="flex-1 py-4 px-6 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
             Assinar Relatório
          </button>
        </div>
      </footer>
    </div>
  );
};