import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Construction, MessageCircle, Mail, CheckCircle } from 'lucide-react';

export const Proposal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Visualização de Proposta</h2>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
            <Share2 size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white dark:bg-surface-dark shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-background-dark/50">
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Construction className="text-primary" size={32} />
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-1">Minuta</span>
                <p className="text-xs text-slate-500">12 Out 2023</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Proposta Comercial #2023-084</h3>
            <p className="text-sm text-slate-500">Ref: Reforma Residencial Unifamiliar</p>
          </div>

          {/* Banner */}
          <div className="w-full h-40 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/600/300?random=5)'}}></div>

          {/* Info */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-border-dark">
                <span className="text-slate-500 text-sm">Cliente</span>
                <span className="font-medium text-sm">João Silva Sauro</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-border-dark">
                <span className="text-slate-500 text-sm">Local</span>
                <span className="font-medium text-sm text-right">Condomínio Vila Verde, SP</span>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div className="px-6 py-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Escopo</h4>
            <div className="space-y-4">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">1. Fundação e Estrutura</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Escavação, baldrames e pilares.</p>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">R$ 14.200</span>
              </div>
              <div className="flex justify-between gap-4">
                 <div>
                  <p className="text-sm font-semibold">2. Alvenaria</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Paredes externas e internas.</p>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">R$ 8.450</span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="m-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Valor Total</span>
              <span className="text-2xl font-bold text-primary">R$ 22.650,00</span>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Condições</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">40% sinal, saldo em 3x.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-border-dark px-4 pt-4 pb-8">
        <div className="max-w-md mx-auto space-y-3">
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] font-bold text-sm">
              <MessageCircle size={20} /> WhatsApp
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-slate-100 dark:bg-background-dark text-slate-700 dark:text-slate-300 font-bold text-sm">
              <Mail size={20} /> E-mail
            </button>
          </div>
          <button className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20">
            <CheckCircle size={24} /> Aprovar Orçamento
          </button>
        </div>
      </footer>
    </div>
  );
};