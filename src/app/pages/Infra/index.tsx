import "../../styles/App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {MessageCircleMore, Eye, CheckCircle, ArrowRight, Phone, MapPin, Menu, X, Network, AlertTriangle, Globe, Home} from "lucide-react";
import { motion } from "framer-motion";

export default function SuporteTI() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        tipoServico: "",
        urgencia: "",
        mensagem: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    // Detalhes para o botão do WhatsApp
    const whatsAppNumber = "5547997831974"; // Seu número com código do país
    const defaultMessage = "Olá! Gostaria de mais informações sobre o suporte de TI.";
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <motion.div 
        className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 text-white"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.6 }}
        >
            <head>
                <title>#CodeHaus - Suporte T.I</title>
                    <link rel="shortcut icon" type="image/x-icon" href="../icones/icon.ico"></link>
            </head>
            {/* Header */}
            <header className="fixed w-full top-0 bg-blue-900/95 backdrop-blur-md z-50 border-b border-blue-500/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Network className="h-8 w-8 text-blue-400"/>
                            <span className="text-2xl font-bold text-white">CodeHaus</span>
                            <span className="text-2xl font-bold text-blue-400">Suporte T.I.</span>
                        </div>

                        <nav className="hidden md:flex space-x-8 font-bold">
                            <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                                Início
                            </button>

                            <button onClick={() => scrollToSection("planos")} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                                Planos
                            </button>
                            <button onClick={() => scrollToSection("contato")} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                                Contato
                            </button>
                            <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                               CodeHaus Softwares
                            </Link>
                        </nav>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <nav className="md:hidden mt-4 py-4 border-t border-blue-500/20 font-bold">
                            <div className="flex flex-col space-y-4">
                                <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                    Início
                                </button>
                                <button onClick={() => scrollToSection("planos")} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                    Planos
                                </button>
                                <button onClick={() => scrollToSection("contato")} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                                    Contato
                                </button>
                                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                                    CodeHaus Softwares
                                </Link>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Suporte
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Técnico</span>
                                    <br />
                                    Especializado
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Mantenha sua infraestrutura de T.I. funcionando perfeitamente com nosso suporte remoto e presencial.
                                    Expertise em redes, servidores e infraestrutura tecnológica.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center space-x-2 text-blue-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">Atendimento via Chat</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">Suporte Remoto</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">Técnicos Certificados</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection("contato")}
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
                                >
                                    <AlertTriangle className="mr-2 h-5 w-5" />
                                    Emergência T.I.
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform cursor-pointer" />
                                </button>
                                <button
                                    onClick={() => scrollToSection("planos")}
                                    className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    Ver Planos
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 text-center">
                                        <Globe className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Remoto</h3>
                                        <p className="text-gray-300 text-sm">Acesso seguro</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 text-center">
                                        <Home className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Presencial</h3>
                                        <p className="text-gray-300 text-sm">Na sua empresa</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 text-center">
                                        <Network className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Infraestrutura</h3>
                                        <p className="text-gray-300 text-sm">Redes e servidores</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 text-center">
                                        <Eye className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Monitoramento</h3>
                                        <p className="text-gray-300 text-sm">Monitoramento de Rede</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planos Section */}
            <section id="planos" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Planos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Suporte</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Escolha o plano ideal para sua empresa. Desde suporte básico até gestão completa de T.I.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 flex flex-col">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-1">Básico</h3>
                                <p className="text-blue-400 text-sm mb-4">até 5 computadores</p>
                                <div className="flex items-end justify-center mb-2">
                                    <span className="text-4xl font-bold text-blue-400">R$ 79,90</span>
                                    <span className="text-gray-300 ml-1">/mês</span>
                                </div>
                                <p className="text-gray-300 text-sm">Ideal para pequenas empresas</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Atendimento remoto via Chat</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Instalação de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Resolução de problemas de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Verificação de vírus e Malware</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Manuteção preventiva simples de sistema operacional</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">5 acessos remotos para solução de problemas</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de atualizações de Sistema Operacional e Softwares</span>
                                </div>
                            </div>

                            <button
                                onClick={() => scrollToSection("contato")}
                                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
                            >
                                Contratar Agora
                            </button>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/60 shadow-lg shadow-blue-500/20 rounded-xl p-8 relative hover:border-blue-400/40 transition-all duration-300 flex flex-col">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Mais Popular
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-1">Intermediário</h3>
                                <p className="text-blue-400 text-sm mb-4">até 10 computadores</p>
                                <div className="flex items-end justify-center mb-2">
                                    <span className="text-4xl font-bold text-blue-400">R$ 159,90</span>
                                    <span className="text-gray-300 ml-1">/mês</span>
                                </div>
                                <p className="text-gray-300 text-sm">Para empresas em crescimento</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Atendimento remoto via Chat</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Instalação de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Resolução de problemas de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Verificação de vírus e Malware</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Manuteção preventiva simples de sistema operacional</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">10 acessos remotos para solução de problemas</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de atualizações de Sistema Operacional e Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerenciamento de Contas de E-mail</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Monitoramento Proativo de Desempenho e Saúde de Dispositivos</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerênciamento de Backup até 50GB</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de usuários e permissões</span>
                                </div>
                            </div>

                            <button
                                onClick={() => scrollToSection("contato")}
                                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
                            >
                                Contratar Agora
                            </button>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 flex flex-col">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-1">Avançado</h3>
                                <p className="text-blue-400 text-sm mb-4">até 15 computadores</p>
                                <div className="flex items-end justify-center mb-2">
                                    <span className="text-4xl font-bold text-blue-400">R$ 239,90</span>
                                    <span className="text-gray-300 ml-1">/mês</span>
                                </div>
                                <p className="text-gray-300 text-sm">Solução completa</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Atendimento remoto via Chat</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Instalação de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Resolução de problemas de Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Verificação de vírus e Malware</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Manuteção preventiva simples de sistema operacional</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">15 acessos remotos para solução de problemas</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de atualizações de Sistema Operacional e Softwares</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerenciamento de Contas de E-mail</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Monitoramento Proativo de Desempenho e Saúde de Dispositivos</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerênciamento de Backup até 50GB</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de usuários e permissões</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerenciamento Avançado de Segurança</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gestão de Políticas de Segurança</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Gerenciamento de Ativos de T.I</span>
                                </div>
                            </div>

                            <button
                                onClick={() => scrollToSection("contato")}
                                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white cursor-pointer"
                            >
                                Contratar Agora
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato Section */}
            <section id="contato" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Precisa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Suporte?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Entre em contato conosco para resolver seus problemas de T.I. ou contratar um plano de suporte.
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <div className="space-y-8 max-w-2xl w-full">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Canais de Atendimento</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-icon-link flex items-center space-x-4"
                                    >
                                        <div className="bg-green-600/20 p-3 rounded-lg transition-all duration-300 bg-gradient-to-r text-white hover:from-green-800 hover:to-green-750 shadow-lg shadow-green-500/20 hover:shadow-green-500/40">
                                            <MessageCircleMore className="h-6 w-6 text-green-400" />
                                        </div>
                                    </a>

                                    <div>
                                            <div className="text-white font-semibold">WhatsApp</div>
                                            <div className="text-gray-300">(47) 99783-1974</div>
                                        </div>
                                    </div>
                                    

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-600/20 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Suporte Comercial</div>
                                            <div className="text-gray-300">(47) 3261-0000</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-600/20 p-3 rounded-lg">
                                            <MapPin className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Atendimento Presencial</div>
                                            <div className="text-gray-300">Navegantes, SC</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/*
                         
                         ====FORMULÁRIO=====

                         <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Solicitar Suporte</h3>

                          
                            
                            Formulário suporte

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Nome *</label>
                                        <input
                                            type="text"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                                            placeholder="Seu nome completo"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Descrição do Problema *</label>
                                    <textarea
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                                        placeholder="Descreva detalhadamente o problema ou serviço desejado..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            Solicitação Enviada!
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Solicitar Suporte
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform cursor-pointer" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>*/}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-blue-500/20 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Network className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold text-white">Code Haus</span>
                            <span className="text-xl font-bold text-blue-400">Suporte T.I.</span>
                        </div>

                        <div className="text-gray-400 text-sm">© 2025 Code Haus. Todos os direitos reservados.</div>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
}