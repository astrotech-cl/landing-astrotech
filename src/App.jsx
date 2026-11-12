import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Cpu,
  Zap,
  Monitor,
  Database,
  RefreshCcw,
  TerminalSquare,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Phone
} from 'lucide-react';

// --- CUSTOM HOOKS ---

// Hook for the typing effect in the Hero section
const useTypingEffect = (phrases, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopNum % phrases.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};

// --- COMPONENTS ---

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B1F33]/90 border-b border-[#1E3A56] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#102B45] border border-[#2EC4D6] shadow-[0_0_15px_rgba(46,196,214,0.3)]">
            <TerminalSquare className="text-[#2EC4D6] w-6 h-6" />
          </div>
          <div>
            <h1 className="font-['Space_Grotesk'] font-bold text-2xl tracking-tight text-[#F2F6FA] leading-none">
              Astro Tech
            </h1>
            <p className="text-xs text-[#2EC4D6] font-mono tracking-widest mt-1 uppercase">
              // Cybersecurity & IT
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-[15px] font-medium text-[#C5D3E0]">
          <a href="#servicios" className="hover:text-[#D4A96A] transition-colors">Servicios</a>
          <a href="#simulador" className="hover:text-[#D4A96A] transition-colors">Simulador</a>
          <a href="#contacto" className="hover:text-[#D4A96A] transition-colors">Contacto</a>
        </nav>

        <a
          href="https://wa.me/56936954085"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4A96A] text-[#0B1F33] font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10">Diagnóstico Rápido</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  const typingText = useTypingEffect([
    "Iniciando diagnóstico seguro...",
    "¿Sistema comprometido?",
    "Optimizando rendimiento...",
    "Astro Tech al rescate."
  ]);

  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A56_1px,transparent_1px),linear-gradient(to_bottom,#1E3A56_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A56]/50 border border-[#2EC4D6]/30 text-[#2EC4D6] text-sm font-mono mb-6 shadow-[0_0_10px_rgba(46,196,214,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#2EC4D6] animate-pulse"></span>
            Operando desde Quilpué
          </div>

          <h2 className="font-['Space_Grotesk'] text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-[#F2F6FA]">
            Revive y potencia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A96A] to-[#f0c37f]">
              tu PC desde casa
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-[#C5D3E0] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Soporte técnico experto con enfoque en ciberseguridad. Diagnóstico, reparación, armado y securización para que trabajes y juegues sin interrupciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#servicios" className="px-8 py-4 bg-[#2EC4D6] text-[#0B1F33] font-bold rounded-lg hover:bg-[#25a8b8] transition-colors shadow-[0_0_20px_rgba(46,196,214,0.4)]">
              Explorar Servicios
            </a>
            <a href="#simulador" className="px-8 py-4 bg-transparent border-2 border-[#1E3A56] text-[#D4A96A] font-bold rounded-lg hover:bg-[#1E3A56]/50 transition-colors">
              Probar Simulador
            </a>
          </div>
        </div>

        {/* Hero Terminal */}
        <div className="flex-1 w-full max-w-lg">
          <div className="rounded-xl overflow-hidden bg-[#0a1526] border border-[#1E3A56] shadow-2xl shadow-[#2EC4D6]/10">
            <div className="bg-[#102B45] px-4 py-2 flex items-center gap-2 border-b border-[#1E3A56]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-[#C5D3E0]">astro-sys@quilpue:~</span>
            </div>
            <div className="p-6 font-mono text-sm h-64 flex flex-col justify-center">
              <div className="text-[#2EC4D6] mb-2">$ systemctl status pc-health</div>
              <div className="text-green-400 mb-4">[OK] Kernel loaded successfully.</div>
              <div className="text-[#2EC4D6] mb-2">$ ./astro_tech_agent.sh</div>
              <div className="flex items-center text-[#F2F6FA]">
                <span className="mr-2">&gt;</span>
                {typingText}
                <span className="w-2 h-5 bg-[#D4A96A] ml-1 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Reparación de Hardware",
      description: "Diagnóstico preciso y solución de fallas físicas. Revivimos placas, fuentes y discos.",
      icon: <Cpu className="w-8 h-8" />,
      color: "hover:border-[#D4A96A]"
    },
    {
      title: "Optimización Profunda",
      description: "¡Adiós lentitud! Limpieza a nivel de registro, eliminación de bloatware y ajustes de kernel.",
      icon: <Zap className="w-8 h-8" />,
      color: "hover:border-[#2EC4D6]"
    },
    {
      title: "Ciberseguridad Integral",
      description: "Auditoría de red, análisis de puertos y eliminación de malware persistente.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "hover:border-green-400"
    },
    {
      title: "Armado de Equipos",
      description: "PCs a medida para Gaming, Diseño o Servidores (Proxmox, HomeLab) con cable management perfecto.",
      icon: <Monitor className="w-8 h-8" />,
      color: "hover:border-purple-400"
    },
    {
      title: "Respaldo y Recuperación",
      description: "Rescate de datos perdidos y configuración de backups automatizados infalibles.",
      icon: <Database className="w-8 h-8" />,
      color: "hover:border-blue-400"
    },
    {
      title: "Instalación de SO",
      description: "Formateo limpio con Windows 10/11 o Linux. Licencias originales y drivers actualizados.",
      icon: <RefreshCcw className="w-8 h-8" />,
      color: "hover:border-pink-400"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#0a1526]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-[#F2F6FA] mb-4">
            Arsenal de <span className="text-[#2EC4D6]">Servicios</span>
          </h2>
          <p className="text-[#C5D3E0] max-w-2xl mx-auto text-lg">
            Combinamos conocimiento técnico avanzado con herramientas profesionales para garantizar que tu infraestructura funcione al 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`group bg-[#0B1F33] p-8 rounded-2xl border border-[#1E3A56] transition-all duration-300 hover:scale-[1.02] hover:bg-[#102B45] ${svc.color} hover:shadow-xl`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1E3A56]/50 flex items-center justify-center text-[#2EC4D6] mb-6 group-hover:text-[#D4A96A] transition-colors">
                {svc.icon}
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F2F6FA] mb-3">
                {svc.title}
              </h3>
              <p className="text-[#C5D3E0] leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DiagnosticSimulator = () => {
  const [status, setStatus] = useState('idle'); // idle, scanning, complete
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  const scanSequence = [
    { text: "Estableciendo conexión segura con el host...", delay: 500, type: "info" },
    { text: "Autenticando credenciales: [Boss_Admin]... OK", delay: 1000, type: "success" },
    { text: "Iniciando escaneo de puertos (Nmap syn-stealth)...", delay: 1500, type: "info" },
    { text: "Verificando reglas de Firewall perimetral...", delay: 2200, type: "info" },
    { text: "ADVERTENCIA: Puerto 3389 (RDP) expuesto públicamente.", delay: 3000, type: "warning" },
    { text: "Analizando integridad de memoria RAM y caché...", delay: 3800, type: "info" },
    { text: "Buscando firmas de malware y ransomware (Wazuh agent)...", delay: 4500, type: "info" },
    { text: "Alerta: Temperatura del CPU excediendo umbral (85°C).", delay: 5200, type: "warning" },
    { text: "Comprobando estado de discos (S.M.A.R.T)...", delay: 6000, type: "info" },
    { text: "Escaneo finalizado. Analizando métricas...", delay: 6800, type: "info" },
  ];

  const runSimulation = () => {
    setStatus('scanning');
    setLogs([]);
    setProgress(0);

    let progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 150);

    scanSequence.forEach((item) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { text: item.text, type: item.type }]);
      }, item.delay);
    });

    setTimeout(() => {
      setStatus('complete');
    }, 7500);
  };

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <section id="simulador" className="py-24 bg-[#0B1F33] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2EC4D6]/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Info Side */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[#F2F6FA] mb-6">
              Simulador de <br /><span className="text-[#D4A96A]">Auditoría Técnica</span>
            </h2>
            <p className="text-[#C5D3E0] text-lg mb-8">
              Descubre cómo trabajamos. Nuestro escáner interactivo simula el análisis profundo que realizamos para detectar cuellos de botella y vulnerabilidades en tu red y hardware.
            </p>
            {status === 'idle' && (
              <button
                onClick={runSimulation}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2EC4D6] text-[#0B1F33] font-bold rounded-lg hover:bg-[#25a8b8] transition-all hover:shadow-[0_0_20px_rgba(46,196,214,0.4)]"
              >
                <TerminalSquare className="w-5 h-5" />
                Ejecutar Escáner
              </button>
            )}
            {status === 'scanning' && (
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E3A56] text-[#2EC4D6] font-bold rounded-lg border border-[#2EC4D6]/50">
                <RefreshCcw className="w-5 h-5 animate-spin" />
                Analizando Sistema... {progress}%
              </div>
            )}
            {status === 'complete' && (
              <a
                href="https://wa.me/56936954085"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A96A] text-[#0B1F33] font-bold rounded-lg hover:bg-[#e0b980] transition-all animate-pulse shadow-[0_0_20px_rgba(212,169,106,0.3)]"
              >
                <AlertTriangle className="w-5 h-5" />
                Resolver Problemas
              </a>
            )}
          </div>

          {/* Terminal Side */}
          <div className="flex-1 w-full">
            <div className="bg-[#050b14] border border-[#1E3A56] rounded-xl shadow-2xl flex flex-col h-[400px]">
              {/* Terminal Header */}
              <div className="bg-[#102B45] px-4 py-3 flex items-center justify-between border-b border-[#1E3A56] rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-[#8b9fb3]">astro_diagnostic_tool_v2.1</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-sm overflow-y-auto flex-1 custom-scrollbar">
                <div className="text-[#8b9fb3] mb-4">
                  AstroTech Security Framework [Version 2.1.8]<br />
                  (c) Astro Tech. Todos los derechos reservados.
                </div>

                {logs.map((log, index) => (
                  <div key={index} className="mb-2 flex items-start">
                    <span className="text-[#8b9fb3] mr-2">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                    <span className={
                      log.type === 'warning' ? 'text-yellow-400' :
                        log.type === 'success' ? 'text-green-400' :
                          'text-[#2EC4D6]'
                    }>
                      {log.type === 'warning' && <AlertTriangle className="inline w-3 h-3 mr-2 mb-0.5" />}
                      {log.type === 'success' && <CheckCircle2 className="inline w-3 h-3 mr-2 mb-0.5" />}
                      {log.text}
                    </span>
                  </div>
                ))}

                {status === 'scanning' && (
                  <div className="flex items-center text-[#F2F6FA] mt-2">
                    <span className="w-2 h-5 bg-[#2EC4D6] animate-pulse"></span>
                  </div>
                )}

                {status === 'complete' && (
                  <div className="mt-6 border border-yellow-500/30 bg-yellow-500/10 p-4 rounded text-yellow-400">
                    <p className="font-bold mb-2">⚠️ REPORTE DE DIAGNÓSTICO:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Riesgo de seguridad crítico (Puertos abiertos).</li>
                      <li>Degradación térmica detectada (Refrigeración necesaria).</li>
                    </ul>
                    <p className="mt-4 text-[#F2F6FA]">
                      Acción recomendada: Contactar a Astro Tech para mantenimiento preventivo.
                    </p>
                  </div>
                )}
                <div ref={logsEndRef} />
              </div>

              {/* Terminal Footer (Progress Bar) */}
              <div className="px-4 py-2 border-t border-[#1E3A56] bg-[#0a1526] rounded-b-xl">
                <div className="flex justify-between text-xs font-mono text-[#8b9fb3] mb-1">
                  <span>Progreso de auditoría</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2 bg-[#1E3A56] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2EC4D6] to-[#D4A96A] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactFooter = () => {
  return (
    <footer id="contacto" className="bg-[#050b14] border-t border-[#1E3A56] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#102B45] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between border border-[#1E3A56] shadow-2xl relative overflow-hidden">
          {/* Deco */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2EC4D6] rounded-full blur-[100px] opacity-10"></div>

          <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
            <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-[#F2F6FA] mb-2">
              ¿Listo para potenciar tu equipo?
            </h3>
            <p className="text-[#C5D3E0]">
              Atención presencial en Quilpué y soporte remoto avanzado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <a
              href="https://wa.me/56936954085"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
            >
              <Phone className="w-5 h-5" />
              WhatsApp: +56 9 3695 4085
            </a>
            <a
              href="https://instagram.com/AstroTechCL"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A56] text-[#F2F6FA] font-bold rounded-lg hover:bg-[#2a4d70] transition-colors border border-[#3A5878]"
            >
              @AstroTechCL
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-[#8b9fb3] text-sm flex flex-col items-center gap-2">
          <TerminalSquare className="w-6 h-6 opacity-50" />
          <p>© {new Date().getFullYear()} Astro Tech. Soluciones Informáticas.</p>
          <p className="text-xs opacity-50">Desarrollado para la máxima eficiencia y seguridad.</p>
        </div>
        <div className="mt-4">
          <ContactoEmail />
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#0B1F33] text-[#F2F6FA] font-['Inter'] selection:bg-[#2EC4D6] selection:text-[#0B1F33]">
        <Header />
        <main>
          <Hero />
          <Services />
          <DiagnosticSimulator />
        </main>
        <ContactFooter />
      </div>
    </>
  );
}
import { Mail, Copy, Check } from 'lucide-react';

export function ContactoEmail() {
  const [copiado, setCopiado] = useState(false);
  const email = "contacto@astrotech.cl";

  const copiarCorreo = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
      <div className="flex items-center gap-2.5 text-slate-200">
        <Mail className="w-5 h-5 text-cyan-400" />
        <a
          href={`mailto:${email}?subject=Consulta%20-%20Astro%20Tech`}
          className="font-medium hover:text-cyan-400 transition-colors"
        >
          {email}
        </a>
      </div>

      <button
        onClick={copiarCorreo}
        type="button"
        className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
      >
        {copiado ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">¡Copiado!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copiar</span>
          </>
        )}
      </button>
    </div>
  );
}