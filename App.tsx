
import React, { useState, useEffect, useRef } from 'react';
import Carousel from './components/Carousel';
import HowItWorks from './components/HowItWorks';
import SitterList from './components/SitterList';
import PricingSection from './components/PricingSection';
import OwnerTestimonials from './components/OwnerTestimonials';
import FAQSection from './components/FAQSection';
import SmartCTA from './components/SmartCTA';
import TrustBar from './components/TrustBar';
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
    <header className="hidden md:flex sticky top-0 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E9E9E7] z-50 px-6 lg:px-12 py-3.5 items-center justify-between w-full shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
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

const MobileBottomNav: React.FC<{ onViewChange: (view: ViewState) => void, currentView: ViewState, onAction: (intent: 'login' | 'join') => void }> = ({ onViewChange, currentView, onAction }) => {
  const isActive = (view: ViewState) => currentView === view;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pointer-events-auto px-4 pb-4">
      <nav className="w-full h-[64px] bg-white/80 backdrop-blur-xl border border-[#E9E9E7]/50 flex items-center justify-around px-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[24px]">
        
        <button 
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-95 text-[#1C1C1B]/40`}
        >
          <div className="p-1 transition-all duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.05em] mt-0.5 opacity-60">Explorer</span>
        </button>

        <button 
          onClick={() => onViewChange('lead_capture')}
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-95 text-[#1C1C1B]/40`}
        >
          <div className="p-1 transition-all duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.05em] mt-0.5 opacity-60">List my ad</span>
        </button>

        <button 
          onClick={() => onAction('login')}
          className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 active:scale-95 text-[#1C1C1B]/40`}
        >
          <div className={`p-1 transition-all duration-500`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className={`text-[8px] font-bold uppercase tracking-[0.05em] mt-0.5 transition-all duration-300 opacity-60`}>Log in</span>
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
  const [isSticky, setIsSticky] = useState(false);
  
  const heroSearchRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for sticky search bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-120px 0px 0px 0px' }
    );

    if (heroSearchRef.current) {
      observer.observe(heroSearchRef.current);
    }

    return () => {
      if (heroSearchRef.current) {
        observer.unobserve(heroSearchRef.current);
      }
    };
  }, [viewState]);

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
        <section className="w-full px-4 lg:px-8 pt-2 md:pt-10 mx-auto max-w-[360px] md:max-w-none" ref={heroSearchRef}>
          <div className="relative w-full overflow-hidden rounded-[32px] shadow-2xl border border-[#E9E9E7]">
            {/* Zone 1 – Hero photo */}
            <div className="relative w-full h-[340px] md:h-[520px]">
              <img 
                src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover object-[center_40%]"
                alt="Cat"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-10 flex flex-col gap-3 md:gap-6">
                <h1 className="font-hero !text-white leading-[1.2] tracking-tight drop-shadow-lg">
                  <span className="block text-[26px] md:text-[40px] font-semibold">Confiez-le à un</span>
                  <span className="block text-[26px] md:text-[40px] font-semibold">voisin de confiance</span>
                </h1>

                <div className="max-w-[480px]">
                  <SmartCTA onTrigger={() => setViewState('lead_capture')} onSearchStateChange={setIsSearchActive} />
                </div>
                
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar w-full md:w-fit">
                  {[
                    { id: 'boarding', label: 'Garde chez le pet-sitter' },
                    { id: 'visit', label: 'Visites' },
                    { id: 'housesitting', label: 'Home Sitting' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleServiceClick(tab.id as PricingTabType)}
                      className={`px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-lg text-[9px] md:text-[11px] font-bold transition-all whitespace-nowrap border backdrop-blur-sm ${
                        activePricingTab === tab.id 
                          ? 'bg-white/20 border-white text-white shadow-sm' 
                          : 'bg-black/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E9E9E7] shadow-[0_4px_20px_rgba(0,0,0,0.04)] animate-float">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative">
                    <img
                      src={`https://picsum.photos/seed/cat-avatar-${i}/64/64`}
                      alt="Cat"
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    {i === 1 && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border border-white rounded-full animate-pulse"></span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-[12px] font-bold text-[#37352F] leading-tight">
                  24 chats gardés aujourd'hui
                </span>
                <span className="text-[8px] md:text-[10px] font-medium text-[#37352F]/40 uppercase tracking-wider">
                  Communauté Parisienne • En direct
                </span>
              </div>
            </div>
          </div>
        </section>

        <main className="w-full px-4 md:px-6 lg:px-12 pb-4 md:pb-0">
          <div className="space-y-20">
            <section id="listings" className="space-y-6 animate-section">
              <div className="flex items-center justify-between">
                <h2 className="text-[19px] md:text-[22px] font-semibold text-[#222222] leading-[1.25] tracking-tight">Demandes en cours</h2>
              </div>
              <Carousel />
            </section>
            <HowItWorks />
            <section className="space-y-6">
              <h2 className="text-[19px] md:text-[22px] font-semibold text-[#222222] leading-[1.25] tracking-tight">Nos sitters à proximité</h2>
              <SitterList onSitterClick={handleSitterClick} />
            </section>
            <section className="bg-white border border-[#E9E9E7] rounded-[40px] p-4 md:p-6 shadow-xl">
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
      {/* Sticky Search Bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] w-full bg-white/80 backdrop-blur-xl border-b border-[#E9E9E7]/50 shadow-md transform transition-all duration-500 ease-in-out px-4 py-2 md:px-12 ${isSticky && viewState === 'home' && !isSearchActive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="hidden md:block cursor-pointer hover:scale-110 transition-transform" onClick={() => setViewState('home')}>
            <SnoutLogo className="w-8 h-8" />
          </div>
          <div className="flex-1 max-w-2xl">
            <SmartCTA onTrigger={() => setViewState('lead_capture')} onSearchStateChange={setIsSearchActive} />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => handleActionClick('login')} className="text-[12px] font-bold text-[#37352F]/70 hover:text-black transition-colors">Log in</button>
            <button onClick={() => handleActionClick('join')} className="btn-primary px-5 py-2.5 text-[11px] shadow-sm">Join</button>
          </div>
        </div>
      </div>

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
        <MobileBottomNav onViewChange={setViewState} currentView={viewState} onAction={handleActionClick} />
      )}

      {viewState === 'lead_capture' && (
        <PostAd onBack={() => setViewState('home')} />
      )}

      {viewState !== 'owner_dashboard' && viewState !== 'sitter_dashboard' && viewState !== 'messages' && viewState !== 'role_selection' && !isSearchActive && (
        <footer className="bg-[#1C1C1B] border-t border-[#C25E72]/20 pt-10 pb-12 w-full px-4 md:px-6 lg:px-12 mt-4 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg ring-1 ring-[#C25E72]/30 bg-black/20">
                  <SnoutLogo className="w-12 h-12" />
                </div>
                <span className="font-bold text-[18px] tracking-tight text-white">Neko Community</span>
              </div>
              <p className="text-[14px] text-white/50 max-w-[300px] leading-[1.5] font-normal">
                Le réseau parisien le plus fiable pour les propriétaires et sitters de chats. Rejoignez des milliers de voisins vérifiés.
              </p>
              <div className="md:hidden pt-2">
                <button 
                  onClick={() => handleActionClick('join')}
                  className="btn-primary w-full py-4 text-[14px] shadow-xl"
                >
                  Join Neko
                </button>
              </div>
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
