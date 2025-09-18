
import "../../styles/App.css";
import { useState } from "react";
import { Code, Rocket, Shield, Users, CheckCircle, ArrowRight, Phone, MapPin, Instagram, Star, Zap, Target, Award, Clock, TrendingUp, Menu, X } from "lucide-react";

export default function CodeHausLanding() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        mensagem: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Aqui você integraria com sua API/backend
        console.log("Dados do formulário:", formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
            {/* Header */}
            <header className="fixed w-full top-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-orange-500/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Code className="h-8 w-8 text-orange-400" />
                            <span className="text-2xl font-bold text-white">Code Haus</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors">
                                Início
                            </button>
                            <button onClick={() => scrollToSection("servicos")} className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors">
                                Serviços
                            </button>
                            <button onClick={() => scrollToSection("sobre")} className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors">
                                Sobre
                            </button>
                            <button onClick={() => scrollToSection("contato")} className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors">
                                Contato
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden mt-4 py-4 border-t border-orange-500/20">
                            <div className="flex flex-col space-y-4">
                                <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-orange-400 transition-colors text-left">
                                    Início
                                </button>
                                <button onClick={() => scrollToSection("servicos")} className="text-gray-300 hover:text-orange-400 transition-colors text-left">
                                    Serviços
                                </button>
                                <button onClick={() => scrollToSection("sobre")} className="text-gray-300 hover:text-orange-400 transition-colors text-left">
                                    Sobre
                                </button>
                                <button onClick={() => scrollToSection("contato")} className="text-gray-300 hover:text-orange-400 transition-colors text-left">
                                    Contato
                                </button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-amber-900/10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Software
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"> Sob Medida</span>
                                    <br />
                                    Para Seu Negócio
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Transformamos suas ideias em soluções digitais poderosas. Desenvolvimento personalizado com tecnologia de ponta e foco no seu sucesso.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center space-x-2 text-orange-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">100% Personalizado</span>
                                </div>
                                <div className="flex items-center space-x-2 text-orange-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">Tecnologia Moderna</span>
                                </div>
                                <div className="flex items-center space-x-2 text-orange-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-white">Suporte Completo</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection("contato")}
                                    className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-500 hover:to-amber-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                                >
                                    Solicitar Orçamento
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection("servicos")}
                                    className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                                >
                                    Nossos Serviços
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-amber-600/30 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-6 text-center">
                                        <Rocket className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Agilidade</h3>
                                        <p className="text-gray-300 text-sm">Entregas rápidas</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-6 text-center">
                                        <Shield className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Segurança</h3>
                                        <p className="text-gray-300 text-sm">Código seguro</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-6 text-center">
                                        <Users className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Suporte</h3>
                                        <p className="text-gray-300 text-sm">Acompanhamento</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-6 text-center">
                                        <Target className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                                        <h3 className="text-white font-semibold">Foco</h3>
                                        <p className="text-gray-300 text-sm">No seu negócio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços Section */}
            <section id="servicos" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Serviços</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Oferecemos soluções completas em desenvolvimento de software, desde a concepção até a implementação e manutenção.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code className="h-12 w-12 text-orange-400" />,
                                title: "Desenvolvimento Web",
                                description: "Aplicações web modernas e responsivas com as melhores tecnologias do mercado.",
                                features: ["React/Next.js", "APIs RESTful", "Banco de Dados", "Deploy Automatizado"],
                            },
                            {
                                icon: <Rocket className="h-12 w-12 text-orange-400" />,
                                title: "Aplicativos Mobile",
                                description: "Apps nativos e híbridos para iOS e Android com performance excepcional.",
                                features: ["React Native", "Flutter", "App Store", "Push Notifications"],
                            },
                            {
                                icon: <Shield className="h-12 w-12 text-orange-400" />,
                                title: "Sistemas Corporativos",
                                description: "ERP, CRM e sistemas de gestão personalizados para sua empresa.",
                                features: ["Integração", "Automação", "Relatórios", "Dashboards"],
                            },
                            {
                                icon: <Zap className="h-12 w-12 text-orange-400" />,
                                title: "API e Integrações",
                                description: "Conectamos seus sistemas com APIs robustas e integrações eficientes.",
                                features: ["API RESTful", "GraphQL", "Webhooks", "Microserviços"],
                            },
                            {
                                icon: <TrendingUp className="h-12 w-12 text-orange-400" />,
                                title: "E-commerce",
                                description: "Lojas virtuais completas com sistemas de pagamento e gestão.",
                                features: ["Carrinho", "Pagamentos", "Estoque", "Analytics"],
                            },
                            {
                                icon: <Award className="h-12 w-12 text-orange-400" />,
                                title: "Consultoria Tech",
                                description: "Orientação técnica especializada para decisões estratégicas.",
                                features: ["Arquitetura", "Tecnologias", "Processos", "Otimização"],
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 hover:border-orange-400/40 transition-all duration-300 group"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-300 mb-6">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-orange-400">
                                            <CheckCircle className="h-4 w-4" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre Section */}
            <section id="sobre" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Por que escolher a<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"> Code Haus?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Somos uma software house especializada em desenvolvimento sob medida, localizada em Navegantes, SC. Nossa missão é transformar ideias em soluções
                                digitais de alta qualidade.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Star className="h-6 w-6 text-yellow-400" />,
                                        title: "Experiência Comprovada",
                                        description: "Anos de experiência em desenvolvimento de software empresarial",
                                    },
                                    {
                                        icon: <Clock className="h-6 w-6 text-orange-400" />,
                                        title: "Prazos Respeitados",
                                        description: "Entregas pontuais com metodologia ágil e acompanhamento constante",
                                    },
                                    {
                                        icon: <Users className="h-6 w-6 text-amber-400" />,
                                        title: "Suporte Dedicado",
                                        description: "Equipe especializada disponível para suporte e manutenção",
                                    },
                                    {
                                        icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
                                        title: "Tecnologia Atual",
                                        description: "Utilizamos as tecnologias mais modernas e eficientes do mercado",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-slate-800/50 p-3 rounded-lg">{item.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-amber-600/30 rounded-3xl blur-3xl"></div>
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-white mb-4">Nossos Números</h3>
                                    <p className="text-gray-300">Resultados que falam por si</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                                        <div className="text-gray-300">Projetos Entregues</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
                                        <div className="text-gray-300">Satisfação dos Clientes</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                                        <div className="text-gray-300">Suporte Técnico</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
                                        <div className="text-gray-300">Anos de Experiência</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contato Section */}
            <section id="contato" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Conversar?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir seu projeto.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-600/20 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-orange-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Telefone</div>
                                            <div className="text-gray-300">(47) 99783-1974</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-600/20 p-3 rounded-lg">
                                            <MapPin className="h-6 w-6 text-orange-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Localização</div>
                                            <div className="text-gray-300">Navegantes, SC</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-600/20 p-3 rounded-lg">
                                            <Instagram className="h-6 w-6 text-orange-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Instagram</div>
                                            <a
                                                href="https://www.instagram.com/codehaus.ai"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-orange-400 hover:text-orange-300 transition-colors"
                                            >
                                                @codehaus.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-orange-500/20">
                                    <div className="text-sm text-gray-400">
                                        <div className="font-semibold text-white mb-2">Code Haus</div>
                                        <div>CNPJ: 53.281.955/0001-20</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h3>

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
                                            className="w-full bg-slate-700/50 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
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
                                            className="w-full bg-slate-700/50 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Telefone *</label>
                                        <input
                                            type="tel"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-slate-700/50 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                            placeholder="(47) 99999-9999"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">Empresa</label>
                                        <input
                                            type="text"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-700/50 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                            placeholder="Nome da sua empresa"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Mensagem *</label>
                                    <textarea
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full bg-slate-700/50 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                        placeholder="Conte-nos sobre seu projeto..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-amber-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            Mensagem Enviada!
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Enviar Mensagem
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-orange-500/20 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Code className="h-6 w-6 text-orange-400" />
                            <span className="text-xl font-bold text-white">Code Haus</span>
                        </div>

                        <div className="text-gray-400 text-sm">© 2025 Code Haus. Todos os direitos reservados.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
