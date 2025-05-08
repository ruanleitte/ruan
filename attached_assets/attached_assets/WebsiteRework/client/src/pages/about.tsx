import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-10 max-w-5xl mx-auto">
      {/* Cabeçalho simples */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">SOBRE <span className="text-primary">MIM</span></h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conheça um pouco sobre minha trajetória profissional e pessoal
        </p>
      </div>
      
      {/* Seção Principal */}
      <div className="space-y-12">
        {/* Card sobre mim com foto */}
        <Card className="border-none shadow-md overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Foto à esquerda */}
              <div className="md:w-1/3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Ruan Jasiel" 
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
                {/* Overlay com gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Conteúdo principal com descrição */}
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  Analista de Planejamento e Desenvolvedor Web
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Sou um profissional multidisciplinar, combinando experiência em planejamento estratégico e logística 
                  com habilidades emergentes em desenvolvimento web e programação. Minha trajetória profissional 
                  inclui empresas como <span className="font-semibold text-primary">Mills</span>, 
                  <span className="font-semibold text-primary"> Stone</span> e 
                  <span className="font-semibold text-primary"> GOL Linhas Aéreas</span>, onde desenvolvi 
                  competências valiosas em gestão, resolução de problemas e atendimento ao cliente.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Minha formação em Gestão de Logística me proporcionou uma base sólida em processos e otimização,
                  enquanto meu interesse por tecnologia me levou a explorar novas ferramentas e metodologias
                  para melhorar a eficiência e qualidade dos serviços.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Planejamento</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Desenvolvimento Web</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Logística</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Gestão de Processos</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Informações Pessoais */}
        <Card className="border-none shadow-md">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              Informações Pessoais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Data de Nascimento</h3>
                    <p className="text-gray-600">12 de Maio, 1990</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Localização</h3>
                    <p className="text-gray-600">Salvador, Bahia</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M3 6v18h18V6"></path>
                      <path d="M3 12h18"></path>
                      <path d="M3 18h18"></path>
                      <path d="M12 6v18"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Nacionalidade</h3>
                    <p className="text-gray-600">Brasileiro</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 6-6 2-3"></path>
                      <path d="M2 5h12"></path>
                      <path d="M7 2h1"></path>
                      <path d="m22 22-5-5"></path>
                      <path d="M17 22v-5"></path>
                      <path d="M22 17h-5"></path>
                      <path d="M7 22H2V9"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Idiomas</h3>
                    <p className="text-gray-600">Português (Nativo), Inglês (Intermediário), Espanhol (Básico)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Minha Trajetória */}
        <Card className="border-none shadow-md">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  <path d="m15 5 3 3"></path>
                </svg>
              </span>
              Minha Trajetória
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Minha jornada profissional começou na área de logística, onde tive a oportunidade de desenvolver
                habilidades analíticas e estratégicas. Formado em Gestão de Logística, trabalhei em empresas como
                <span className="font-medium text-primary"> Mills</span>, onde atuei na coordenação e otimização de processos logísticos.
              </p>
              
              <p className="text-gray-600">
                Na <span className="font-medium text-primary">Stone</span>, ampliei minhas competências na área de planejamento
                estratégico, contribuindo para projetos de melhoria contínua e análise de indicadores. Posteriormente, na 
                <span className="font-medium text-primary"> GOL Linhas Aéreas</span>, pude aplicar meus conhecimentos em um ambiente
                mais desafiador, envolvendo logística aeroportuária e gestão de operações.
              </p>
              
              <p className="text-gray-600">
                Paralelamente à minha carreira na área de logística, desenvolvi interesse por tecnologia e desenvolvimento web.
                Busquei aprimorar minhas habilidades técnicas através de cursos e projetos pessoais, explorando linguagens
                como HTML, CSS, JavaScript e frameworks modernos.
              </p>
              
              <p className="text-gray-600">
                Atualmente, busco combinar minha experiência em processos logísticos com minhas competências em desenvolvimento web,
                oferecendo uma perspectiva única que integra planejamento estratégico e soluções tecnológicas para desafios
                organizacionais.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Meus Interesses e Valores */}
        <Card className="border-none shadow-md bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Meus Interesses e Valores</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Inovação</h4>
                <p className="text-sm text-gray-600">Sempre em busca de novas soluções</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Aprendizado</h4>
                <p className="text-sm text-gray-600">Desenvolvimento contínuo</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Colaboração</h4>
                <p className="text-sm text-gray-600">Trabalho em equipe</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Qualidade</h4>
                <p className="text-sm text-gray-600">Excelência em cada entrega</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
