import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { LayoutDashboard, Building2, Package, Wallet, User } from 'lucide-react';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Hide bottom nav on specific detailed forms to give more screen real estate
  const hideNavRoutes = ['/new-budget', '/daily-report', '/finance/new', '/proposal'];
  const shouldShowNav = !hideNavRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white pb-24">
      <div className="flex-1 w-full max-w-md mx-auto">
        <Outlet />
      </div>

      {shouldShowNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-border-dark pb-safe">
          <div className="flex justify-around items-center h-20 max-w-md mx-auto px-2">
            <button 
              onClick={() => navigate('/')}
              className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-400'}`}
            >
              <LayoutDashboard size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Dashboard</span>
            </button>

            <button 
              onClick={() => navigate('/projects')}
              className={`flex flex-col items-center gap-1 transition-colors ${isActive('/projects') ? 'text-primary' : 'text-slate-400'}`}
            >
              <Building2 size={24} strokeWidth={isActive('/projects') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Obras</span>
            </button>

            <button 
              onClick={() => navigate('/supplies')}
              className={`flex flex-col items-center gap-1 transition-colors ${isActive('/supplies') ? 'text-primary' : 'text-slate-400'}`}
            >
              <Package size={24} strokeWidth={isActive('/supplies') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Suprimentos</span>
            </button>

            <button 
              onClick={() => navigate('/finance')}
              className={`flex flex-col items-center gap-1 transition-colors ${isActive('/finance') ? 'text-primary' : 'text-slate-400'}`}
            >
              <Wallet size={24} strokeWidth={isActive('/finance') ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Financeiro</span>
            </button>

            <button 
              className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600"
            >
              <User size={24} strokeWidth={2} />
              <span className="text-[10px] font-bold">Perfil</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};