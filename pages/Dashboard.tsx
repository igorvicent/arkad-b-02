import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, TrendingUp, Wallet, Building2, AlertTriangle, FileText, ChevronRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Completed', value: 68 },
  { name: 'Remaining', value: 32 },
];
const COLORS = ['#ff9900', '#283039'];

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 justify-between">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <TrendingUp className="text-primary" size={24} />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 px-3">Dashboard Executivo</h2>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
              <Bell size={20} />
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{backgroundImage: 'url(https://picsum.photos/100/100)'}}></div>
          </div>
        </div>
      </header>

      <main className="pb-4">
        {/* KPI Cards */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-lg font-extrabold tracking-tight">Resumo Global</h3>
          <p className="text-sm text-slate-500">Visão geral consolidada • Hoje</p>
        </div>

        <div className="flex overflow-x-auto gap-4 p-4 no-scrollbar">
          <div className="flex min-w-[260px] flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-border-dark">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500">Faturamento Total</p>
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <p className="text-2xl font-bold leading-tight">R$ 1.234.567,89</p>
            <p className="text-emerald-500 text-sm font-bold">+5.2% <span className="font-normal text-slate-400 ml-1">vs mês ant.</span></p>
          </div>
          <div className="flex min-w-[200px] flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-border-dark">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500">Saldo Caixa</p>
              <Wallet className="text-primary" size={20} />
            </div>
            <p className="text-2xl font-bold leading-tight text-primary">R$ 450k</p>
            <p className="text-emerald-500 text-sm font-bold">+2.1%</p>
          </div>
          <div className="flex min-w-[160px] flex-col gap-3 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-border-dark">
             <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-slate-500">Obras</p>
              <Building2 className="text-amber-500" size={20} />
            </div>
            <p className="text-2xl font-bold leading-tight">12</p>
            <p className="text-slate-400 text-sm font-medium">Estável</p>
          </div>
        </div>

        {/* Physical Progress Chart */}
        <div className="px-4 pt-2">
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-100 dark:border-border-dark">
            <h3 className="text-md font-bold mb-4">Avanço Físico Médio</h3>
            <div className="h-48 relative flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={180}
                    endAngle={0}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%] text-center">
                <span className="text-4xl font-extrabold block">68%</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold w-20">Fundação</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">92%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold w-20">Estrutura</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="px-4 pt-6">
           <h3 className="text-lg font-bold tracking-tight mb-4">Acesso Rápido</h3>
           <div className="grid grid-cols-2 gap-3">
              <button onClick={() => navigate('/budgets')} className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-border-dark hover:border-primary/50 transition-colors">
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500">
                  <FileText size={20} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Orçamentos</p>
                  <p className="text-xs text-slate-500">Gerenciar</p>
                </div>
              </button>
              <button onClick={() => navigate('/daily-report')} className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-border-dark hover:border-primary/50 transition-colors">
                <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                  <FileText size={20} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Diário</p>
                  <p className="text-xs text-slate-500">Novo Relatório</p>
                </div>
              </button>
           </div>
        </div>

        {/* Alerts */}
        <div className="px-4 pt-8 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold tracking-tight">Alertas Urgentes</h3>
            <span className="bg-rose-500/10 text-rose-500 text-xs font-bold px-2 py-1 rounded">2 Críticos</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border-l-4 border-rose-500 shadow-sm">
              <div className="bg-rose-500/10 p-2 rounded-lg">
                <AlertTriangle className="text-rose-500" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold">Estouro de Orçamento</h4>
                  <span className="text-[10px] text-slate-400">Agora</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Obra Residencial Aurora: <span className="text-rose-500 font-bold">+15,4%</span> acima do previsto.</p>
                <button className="mt-2 text-xs font-bold text-primary flex items-center gap-1">
                  Ver detalhes <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};