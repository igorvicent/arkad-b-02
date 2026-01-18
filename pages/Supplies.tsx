import React from 'react';
import { Package, Bell, Search, SlidersHorizontal, Store, Plus } from 'lucide-react';

const SupplyCard = ({ status, id, project, supplier, total, image, color }: any) => (
  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
    <div className="w-full h-32 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="flex flex-col gap-1 p-4">
      <div className="flex justify-between items-start">
        <p className={`text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${color}`}>{status}</p>
        <p className="text-primary text-xs font-bold">#{id}</p>
      </div>
      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mt-1">{project}</h3>
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Store size={14} />
          <p className="text-sm font-normal">{supplier}</p>
        </div>
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 dark:border-border-dark">
          <span className="text-slate-400 text-xs">Total do Pedido</span>
          <p className="text-slate-900 dark:text-white text-lg font-bold">{total}</p>
        </div>
      </div>
    </div>
  </div>
);

export const Supplies: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center gap-2">
            <Package className="text-primary" size={24} />
            <h2 className="text-lg font-bold leading-tight tracking-tight">Gestão de Suprimentos</h2>
          </div>
          <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-200 dark:hover:bg-surface-dark">
            <Bell className="text-slate-600 dark:text-slate-400" size={24} />
          </button>
        </div>
      </header>

      {/* Search */}
      <div className="px-4 py-3 sticky top-[60px] z-30 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-surface-dark">
            <div className="text-slate-400 flex items-center justify-center pl-4">
              <Search size={20} />
            </div>
            <input className="flex w-full min-w-0 flex-1 border-none bg-transparent h-full px-4 text-base focus:ring-0" placeholder="Buscar pedidos..." />
            <div className="flex items-center pr-2">
              <button className="p-2 text-slate-500">
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </div>
        </label>
      </div>

      {/* Filters */}
      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        {['Todos', 'Pendente', 'Cotação', 'Aprovado', 'Entregue'].map((filter, i) => (
          <div key={i} className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 border ${i === 0 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-surface-dark border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-300'}`}>
            <p className="text-sm font-semibold">{filter}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-4">
        <SupplyCard 
          status="Pendente" color="bg-orange-500" id="10293" 
          project="Edifício Horizonte" supplier="ABC Materiais" total="R$ 15.400,00" 
          image="https://picsum.photos/400/200?random=20" 
        />
        <SupplyCard 
          status="Em Cotação" color="bg-blue-500" id="10294" 
          project="Residencial Aurora" supplier="Metalúrgica Silva" total="R$ 8.900,00" 
          image="https://picsum.photos/400/200?random=21" 
        />
        <SupplyCard 
          status="Aprovado" color="bg-green-600" id="10288" 
          project="Park Business Center" supplier="Lajes e Vigas S.A." total="R$ 42.150,00" 
          image="https://picsum.photos/400/200?random=22" 
        />
      </div>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <Plus size={30} />
      </button>
    </div>
  );
};