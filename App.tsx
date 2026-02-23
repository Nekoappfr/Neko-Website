
import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import HowItWorks from './components/HowItWorks';
import SitterList from './components/SitterList';
import PricingSection from './components/PricingSection';
import OwnerTestimonials from './components/OwnerTestimonials';
import FAQSection from './components/FAQSection';
import SmartCTA from './components/SmartCTA';
import TrustBar from './components/TrustBar';
import ServicesNav from './components/ServicesNav';
import SitterRegistration from './components/SitterRegistration';
import PostAd from './components/PostAd';
import OwnerDashboard from './components/OwnerDashboard';
import SitterDashboard from './components/SitterDashboard';
import RoleSelection from './components/RoleSelection';
import SitterProfile from './components/SitterProfile';
import AuthModal from './components/AuthModal';
import { PricingTabType } from './types';
import { MOCK_LISTINGS } from './constants';

const SnoutLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#1C1C1B"/>
    <g transform="translate(10, 10) scale(0.8)">
      <path d="M32 25C32 22 34 20 37 20H63C66 20 68 22 68 25L62 42C61 45 58 48 50 48C42 48 39 45 38 42L32 25Z" fill="white"/>
      <path d="M50 45C50 62 40 75 22 75C8 75 4 62 14 55C18 52 28 52 38 60" stroke="white" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <path d="M50 45C50 62 60 75 78 75C92 75 96 62 86 55C82 52 72 52 62 60" stroke="white" strokeWidth="14" strokeLinecap="round" fill="none"/>
    </g>
  </svg>
);

const MagnifyingEyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
    <circle cx="45" cy="45" r="25" stroke="#1C1C1B" strokeWidth="1.5" strokeDasharray="4 2" />
    <circle cx="45" cy="45" r="10" stroke="#C25E72" strokeWidth="1.5" strokeOpacity="0.4" />
    <path d="M62 62L85 85" stroke="#1C1C1B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export type ViewState = 'home' | 'register-sitter' | 'lead_capture' | 'owner_dashboard' | 'sitter_dashboard' | 'messages' | 'role_selection' | 'sitter_profile';

const Header: React.FC<{ onAction: (intent: 'login' | 'join') => void, onViewChange: (v: ViewState) => void }> = ({ onAction, onViewChange }) => {
  return (
    <header className="sticky top-0 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E9E9E7] z-50 px-6 lg:px-12 py-3.5 flex items-center justify-between w-full shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onViewChange('home')}>
        <SnoutLogo className="w-7 h-7 transition-transform group-hover:scale-110" />
        <span className="font-bold text-[14px] tracking-tight text-[#37352F]">Neko</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-[12px] font-bold text-[#37352F]/70 hover:text-black transition-colors uppercase tracking-widest">Communautés</a>
        <a href="#" className="text-[12px] font-bold text-[#37352F]/70 hover:text-black transition-colors uppercase tracking-widest">Sécurité</a>
        <button 
          onClick={() => onViewChange('register-sitter')}
          className="text-[12px] font-bold uppercase tracking-widest text-[#37352F]/70 hover:text-black transition-colors"
        >
          Devenir Hôte
        </button>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => onAction('login')}
          className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-[#37352F]/70 hover:text-black transition-colors"
        >
          Log in
        </button>
        <button 
          onClick={() => onAction('join')}
          className="btn-primary px-5 py-2 text-[10px] md:text-[11px] shadow-sm"
        >
          Join
        </button>
      </div>
    </header>
  );
};

const MobileBottomNav: React.FC<{ onViewChange: (view: ViewState) => void, currentView: ViewState }> = ({ onViewChange, currentView }) => {
  const isActive = (view: ViewState) => currentView === view;

  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 px-5 z-[100] pointer-events-none">
      <nav className="max-w-[340px] mx-auto h-[58px] bg-white/50 backdrop-blur-2xl border border-white/40 rounded-[24px] shadow-[0_15px_45px_-10px_rgba(0,0,0,0.15)] flex items-center justify-around px-2 pointer-events-auto overflow-hidden ring-1 ring-black/[0.02]">
        
        <button 
          onClick={() => onViewChange('home')}
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-90 ${isActive('home') ? 'text-[#C25E72]' : 'text-[#1C1C1B]/40'}`}
        >
          <div className={`p-1 rounded-xl transition-all duration-500 ${isActive('home') ? 'scale-110' : 'bg-transparent'}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className={`text-[7px] font-extrabold uppercase tracking-[0.1em] mt-0.5 transition-all duration-300 ${isActive('home') ? 'opacity-100' : 'opacity-60'}`}>Accueil</span>
        </button>

        <button 
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-90 text-[#1C1C1B]/40`}
        >
          <div className="p-1 rounded-xl transition-all duration-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <span className="text-[7px] font-extrabold uppercase tracking-[0.1em] mt-0.5 opacity-60">Explorer</span>
        </button>

        <button 
          onClick={() => onViewChange('messages')}
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-90 ${isActive('messages') ? 'text-[#C25E72]' : 'text-[#1C1C1B]/40'}`}
        >
          <div className={`p-1 rounded-xl transition-all duration-500 ${isActive('messages') ? 'scale-110' : 'bg-transparent'}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-[#C25E72] rounded-full border border-white ring-2 ring-[#C25E72]/10"></div>
          </div>
          <span className={`text-[7px] font-extrabold uppercase tracking-[0.1em] mt-0.5 transition-all duration-300 ${isActive('messages') ? 'opacity-100' : 'opacity-60'}`}>Chat</span>
        </button>

        <button 
          onClick={() => onViewChange('owner_dashboard')}
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-90 ${isActive('owner_dashboard') ? 'text-[#C25E72]' : 'text-[#1C1C1B]/40'}`}
        >
          <div className={`p-1 rounded-xl transition-all duration-500 ${isActive('owner_dashboard') ? 'scale-110' : 'bg-transparent'}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className={`text-[7px] font-extrabold uppercase tracking-[0.1em] mt-0.5 transition-all duration-300 ${isActive('owner_dashboard') ? 'opacity-100' : 'opacity-60'}`}>Profil</span>
        </button>

      </nav>
    </div>
  );
};

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [activePricingTab, setActivePricingTab] = useState<PricingTabType>('boarding');
  const [authIntent, setAuthIntent] = useState<'login' | 'join'>('join');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedSitterId, setSelectedSitterId] = useState<string | null>(null);

  // Correction cruciale : Défilement instantané vers le haut lors du changement de vue
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [viewState]);

  const handleActionClick = (intent: 'login' | 'join') => {
    setAuthIntent(intent);
    if (intent === 'login') {
      setViewState('role_selection');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    setViewState('role_selection');
  };

  const handleRoleChosen = (role: 'owner' | 'sitter') => {
    if (role === 'sitter') {
      if (authIntent === 'login') {
        setViewState('sitter_dashboard');
      } else {
        setViewState('register-sitter');
      }
    } else {
      if (authIntent === 'join') setViewState('lead_capture');
      else setViewState('owner_dashboard');
    }
  };

  const handleServiceClick = (tab: PricingTabType) => {
    setActivePricingTab(tab);
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSitterClick = (id: string) => {
    setSelectedSitterId(id);
    setViewState('sitter_profile');
  };

  const renderMainContent = () => {
    if (viewState === 'role_selection') {
      return <RoleSelection onSelect={handleRoleChosen} onBack={() => setViewState('home')} intent={authIntent} />;
    }

    if (viewState === 'register-sitter') {
      return <SitterRegistration onBack={() => setViewState('home')} />;
    }

    if (viewState === 'sitter_profile') {
      return (
        <SitterProfile 
          sitterId={selectedSitterId}
          onBack={() => setViewState('home')} 
          onMessageRequest={() => setViewState('messages')}
        />
      );
    }

    if (viewState === 'owner_dashboard' || viewState === 'messages') {
      return <OwnerDashboard onLogout={() => setViewState('home')} />;
    }

    if (viewState === 'sitter_dashboard') {
      return <SitterDashboard onLogout={() => setViewState('home')} />;
    }

    return (
      <>
        <section className="w-full px-6 lg:px-12 pt-4">
          <div className="relative w-full h-[220px] md:h-[480px] mb-6 shadow-xl group">
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover object-[center_40%] group-hover:scale-[1.03] transition-transform duration-[4000ms]"
                alt="Cat"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-6 md:p-16 z-10">
              <h1 className="font-hero text-[22px] md:text-[52px] font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-2xl max-w-2xl">
                Rejoignez la communauté <span className="scribble-underline italic font-normal text-[#F9F9F8]">parisian cat lover</span>
              </h1>
              <SmartCTA onTrigger={() => setViewState('lead_capture')} onSearchStateChange={setIsSearchActive} />
            </div>
          </div>

          <div className="flex flex-col items-center text-center pt-6 pb-2 max-w-xl mx-auto animate-section">
            <MagnifyingEyeIcon />
            <h2 className="text-[16px] md:text-[20px] font-bold text-[#1C1C1B] tracking-tight mb-1">
              Le réseau local de confiance pour vos chats
            </h2>
            <p className="text-[12px] md:text-[14px] text-[#37352F]/60 font-medium leading-relaxed italic max-w-md">
              Neko vous connecte avec des voisins vérifiés. Bienveillants, fiables et juste à côté de chez vous.
            </p>
          </div>

          <ServicesNav onServiceClick={handleServiceClick} activeTab={activePricingTab} />
        </section>

        <main className="w-full px-6 lg:px-12 mt-4 pb-4 md:pb-0">
          <div className="space-y-20">
            <section id="listings" className="space-y-6 animate-section">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] md:text-[22px] font-bold text-[#1C1C1B] tracking-tight">Demandes en cours</h2>
                <span className="text-[10px] font-bold text-[#37352F]/40 uppercase tracking-widest bg-[#F0F0EF] px-3 py-1 rounded-full shadow-sm">{MOCK_LISTINGS.length} disponibles</span>
              </div>
              <Carousel />
            </section>
            <HowItWorks />
            <SitterList onSitterClick={handleSitterClick} />
            <section className="bg-white border border-[#E9E9E7] rounded-[40px] p-6 shadow-xl">
              <TrustBar />
            </section>
            <PricingSection activeTab={activePricingTab} setActiveTab={setActivePricingTab} />
            <OwnerTestimonials />
            <FAQSection />
          </div>
        </main>
      </>
    );
  };

  return (
    <div className={`min-h-screen bg-[#FAFAFA] w-full selection:bg-[#C25E72]/20 ${(viewState === 'lead_capture' || viewState === 'role_selection' || isSearchActive || isAuthModalOpen) ? 'overflow-hidden h-screen' : ''}`}>
      {viewState !== 'owner_dashboard' && viewState !== 'sitter_dashboard' && viewState !== 'messages' && viewState !== 'role_selection' && !isSearchActive && (
        <Header onAction={handleActionClick} onViewChange={setViewState} />
      )}
      
      {renderMainContent()}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        intent={authIntent}
        onSuccess={handleAuthSuccess}
      />

      {viewState !== 'lead_capture' && viewState !== 'role_selection' && !isSearchActive && (
        <MobileBottomNav onViewChange={setViewState} currentView={viewState} />
      )}

      {viewState === 'lead_capture' && (
        <PostAd onBack={() => setViewState('home')} />
      )}

      {viewState !== 'owner_dashboard' && viewState !== 'sitter_dashboard' && viewState !== 'messages' && viewState !== 'role_selection' && !isSearchActive && (
        <footer className="bg-[#1C1C1B] border-t border-[#C25E72]/20 pt-10 pb-12 w-full px-6 lg:px-12 mt-4 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg ring-1 ring-[#C25E72]/30 bg-black/20">
                  <SnoutLogo className="w-8 h-8" />
                </div>
                <span className="font-bold text-[18px] tracking-tight text-white">Neko Community</span>
              </div>
              <p className="text-[12px] text-white/50 max-w-[300px] leading-relaxed font-medium">
                Le réseau parisien le plus fiable pour les propriétaires et sitters de chats. Rejoignez des milliers de voisins vérifiés.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Plateforme</h4>
              <ul className="text-[12px] space-y-2 text-white/80 font-bold">
                <li><button onClick={() => setViewState('register-sitter')} className="hover:text-[#C25E72] transition-colors text-left">Devenir Sitter</button></li>
                <li><button onClick={() => setViewState('register-sitter')} className="hover:text-[#C25E72] transition-colors text-left">Garde de Maison</button></li>
                <li><a href="#" className="hover:text-[#C25E72] transition-colors">Politique d'Assurance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest">
              © 2026 Nekoapp.fr — Fait avec <span className="text-[#C25E72]">🐈</span> à Paris
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
