import { db } from "./index";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

async function seed() {
  try {
    console.log("Starting database seed...");

    // Create test user
    const existingUser = await db.query.users.findFirst({
      where: eq(schema.users.username, "joaopaulo")
    });

    let userId: number;

    if (!existingUser) {
      console.log("Creating test user...");
      const [user] = await db.insert(schema.users)
        .values({
          username: "joaopaulo",
          password: "hashed_password_here" // In a real app, this would be hashed
        })
        .returning();
      
      userId = user.id;
      console.log(`Created user with ID: ${userId}`);
    } else {
      userId = existingUser.id;
      console.log(`Using existing user with ID: ${userId}`);
    }

    // Check if profile exists for this user
    const existingProfile = await db.query.profile.findFirst({
      where: eq(schema.profile.userId, userId)
    });

    if (!existingProfile) {
      console.log("Creating profile...");
      await db.insert(schema.profile)
        .values({
          userId,
          name: "João Paulo",
          email: "joao@example.com",
          phone: "+55 (11) 98765-4321",
          location: "São Paulo, Brasil",
          profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          resumeUrl: "#"
        });
    }

    // Seed experiences
    const experiences = [
      {
        company: "Empresa ABC",
        position: "Especialista em Operações de Campo",
        location: "São Paulo, SP",
        startDate: "2020-01-01",
        endDate: null,
        current: true,
        description: "Especialista em Operações de Campo",
        order: 1,
        responsibilities: [
          "Supervisão de equipe de campo com 15 profissionais",
          "Inspeção e certificação de equipamentos pesados",
          "Gerenciamento de contratos com clientes corporativos",
          "Otimização de processos e análise de KPIs"
        ]
      },
      {
        company: "Empresa XYZ",
        position: "Supervisor de Equipe",
        location: "São Paulo, SP",
        startDate: "2017-03-01",
        endDate: "2019-12-31",
        current: false,
        description: "Supervisor de Equipe",
        order: 2,
        responsibilities: [
          "Coordenação de equipe técnica em projetos de campo",
          "Implementação de procedimentos de segurança",
          "Gerenciamento de recursos financeiros e logísticos"
        ]
      },
      {
        company: "Empresa DEF",
        position: "Analista de Processos",
        location: "São Paulo, SP",
        startDate: "2015-06-01",
        endDate: "2017-02-28",
        current: false,
        description: "Analista de Processos",
        order: 3,
        responsibilities: [
          "Mapeamento e documentação de processos operacionais",
          "Análise de gargalos e proposição de melhorias",
          "Suporte à implementação de sistemas de gestão"
        ]
      }
    ];

    console.log("Seeding experiences...");
    const existingExperiences = await db.query.experiences.findMany({
      where: eq(schema.experiences.userId, userId)
    });

    if (existingExperiences.length === 0) {
      for (const exp of experiences) {
        const [experience] = await db.insert(schema.experiences)
          .values({
            userId,
            company: exp.company,
            position: exp.position,
            location: exp.location,
            startDate: exp.startDate,
            endDate: exp.endDate,
            current: exp.current,
            description: exp.description,
            order: exp.order
          })
          .returning();

        // Add responsibilities
        for (let i = 0; i < exp.responsibilities.length; i++) {
          await db.insert(schema.responsibilities)
            .values({
              experienceId: experience.id,
              description: exp.responsibilities[i],
              order: i + 1
            });
        }
      }
    }

    // Seed education
    const educations = [
      {
        institution: "Universidade de São Paulo",
        degree: "MBA em Gestão de Projetos",
        location: "São Paulo, SP",
        startDate: "2018-01-01",
        endDate: "2020-12-31",
        current: false,
        description: "MBA em Gestão de Projetos",
        order: 1,
        subjects: [
          "Metodologias ágeis de gestão de projetos",
          "Gerenciamento de riscos e recursos",
          "Liderança e tomada de decisão"
        ]
      },
      {
        institution: "Universidade Estadual",
        degree: "Bacharelado em Administração",
        location: "São Paulo, SP",
        startDate: "2014-01-01",
        endDate: "2018-12-31",
        current: false,
        description: "Bacharelado em Administração",
        order: 2,
        subjects: [
          "Gestão estratégica e planejamento",
          "Finanças corporativas",
          "Logística e cadeia de suprimentos",
          "Gestão de pessoas e liderança"
        ]
      }
    ];

    console.log("Seeding education...");
    const existingEducation = await db.query.education.findMany({
      where: eq(schema.education.userId, userId)
    });

    if (existingEducation.length === 0) {
      for (const edu of educations) {
        const [education] = await db.insert(schema.education)
          .values({
            userId,
            institution: edu.institution,
            degree: edu.degree,
            location: edu.location,
            startDate: edu.startDate,
            endDate: edu.endDate,
            current: edu.current,
            description: edu.description,
            order: edu.order
          })
          .returning();

        // Add subjects
        for (let i = 0; i < edu.subjects.length; i++) {
          await db.insert(schema.subjects)
            .values({
              educationId: education.id,
              description: edu.subjects[i],
              order: i + 1
            });
        }
      }
    }

    // Seed skills
    console.log("Seeding skills...");
    const existingSkills = await db.query.skills.findMany({
      where: eq(schema.skills.userId, userId)
    });

    if (existingSkills.length === 0) {
      // Hard skills
      const hardSkills = [
        "Heavy equipment inspection (MEWPs, lifts)",
        "MEWP operation and certification (IPAF, 3B Boom)",
        "Strategic planning and contract management",
        "Process organization and optimization",
        "Financial resource control and billing management",
        "Last mile logistics and inventory management",
        "Data analysis and KPI monitoring",
        "Technical training development and delivery"
      ];

      for (let i = 0; i < hardSkills.length; i++) {
        await db.insert(schema.skills)
          .values({
            userId,
            name: hardSkills[i],
            category: "hard",
            order: i + 1
          });
      }

      // Soft skills
      const softSkills = [
        "Team leadership and supervision",
        "Strong attention to detail",
        "Goal-oriented and results-driven",
        "Problem-solving and decisiveness",
        "Adaptability to outdoor work environments",
        "Conflict resolution and effective communication",
        "Proactive and resilient under pressure"
      ];

      for (let i = 0; i < softSkills.length; i++) {
        await db.insert(schema.skills)
          .values({
            userId,
            name: softSkills[i],
            category: "soft",
            order: i + 1
          });
      }

      // Languages
      const languages = [
        { name: "Português", level: "Fluente", percentage: 100 },
        { name: "Inglês", level: "Intermediário", percentage: 60 },
        { name: "Espanhol", level: "Básico", percentage: 35 }
      ];

      for (let i = 0; i < languages.length; i++) {
        await db.insert(schema.skills)
          .values({
            userId,
            name: languages[i].name,
            category: "language",
            level: languages[i].level,
            percentage: languages[i].percentage,
            order: i + 1
          });
      }

      // Technologies
      const technologies = [
        { name: "Bizagi Modeler", description: "Mapeamento de processos", icon: "fas fa-sitemap" },
        { name: "G-Suite", description: "Ferramentas colaborativas", icon: "fab fa-google" },
        { name: "SapFiori", description: "ERP & Gestão", icon: "fas fa-database" },
        { name: "Windows", description: "Sistema operacional", icon: "fab fa-windows" },
        { name: "Microsoft Office", description: "Excel, Word, PowerPoint", icon: "fab fa-microsoft" },
        { name: "Python & HTML", description: "Conhecimentos básicos", icon: "fab fa-python" }
      ];

      for (let i = 0; i < technologies.length; i++) {
        await db.insert(schema.skills)
          .values({
            userId,
            name: technologies[i].name,
            category: "technology",
            description: technologies[i].description,
            icon: technologies[i].icon,
            order: i + 1
          });
      }
    }

    console.log("Database seed completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
