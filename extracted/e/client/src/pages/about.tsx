import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  // Lista de valores com design mais sóbrio, sem ícones
  const values = [
    { 
      name: t('about.innovation'), 
      description: t('about.innovationDesc')
    },
    { 
      name: t('about.quality'), 
      description: t('about.qualityDesc')
    },
    { 
      name: t('about.learning'), 
      description: t('about.learningDesc')
    },
    { 
      name: t('about.collaboration'), 
      description: t('about.collaborationDesc')
    }
  ];

  return (
    <div className="container py-16 max-w-4xl mx-auto px-4">
      {/* Cabeçalho minimalista */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">{t('about.title')}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full mb-6"></div>
      </motion.div>
      
      {/* Perfil principal com design aprimorado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border border-gray-200 shadow-lg overflow-hidden mb-16 bg-gradient-to-br from-white via-white to-gray-50">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Foto à esquerda com efeito melhorado */}
              <div className="md:w-1/3 relative">
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Ruan Jasiel" 
                    className="w-full h-full object-cover aspect-square md:aspect-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                </div>
                {/* Elemento decorativo */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-full -z-10 hidden md:block"></div>
              </div>
              
              {/* Descrição à direita - Conteúdo resumido */}
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('about.jobTitle')}
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
                
                {/* Tags de habilidades - com cores diferentes */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-blue-500/10 text-blue-700 rounded-full text-sm font-medium border border-blue-200">{t('about.planning')}</span>
                  <span className="px-4 py-1.5 bg-purple-500/10 text-purple-700 rounded-full text-sm font-medium border border-purple-200">{t('about.webDevelopment')}</span>
                  <span className="px-4 py-1.5 bg-green-500/10 text-green-700 rounded-full text-sm font-medium border border-green-200">{t('about.logistics')}</span>
                  <span className="px-4 py-1.5 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium border border-amber-200">{t('about.processManagement')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Meus Valores - Design mais minimalista */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">{t('common.myValues')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-lg text-primary mb-3">{value.name}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
