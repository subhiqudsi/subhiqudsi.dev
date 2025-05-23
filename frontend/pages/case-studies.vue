<script setup>
useHead({
  title: 'Case Studies - Subhi Qudsi',
  meta: [
    { name: 'description', content: 'Real-world software development and team enablement success stories' }
  ]
})

// Jobs under Sitech.me
const sitechProjects = [
  {
    id: 'delmonti-prices-prediction',
    title: 'Avocado Supply Demand & Prices Forecast',
    subtitle: 'Secure Middleware for Data Science Team',
    logo: 'heroicons:chart-bar',
    tags: ['Django', 'API', 'Caching', 'Middleware'],
    employer: 'Sitech.me',
    highlights: [
      'Secure middleware between model APIs and frontend',
      'Implemented efficient caching strategy',
      'Mentored junior backend developer',
      'Enhanced performance and security'
    ],
    summary: 'Supported a data science team in creating a secure Django middleware between their model APIs and frontend.',
    challenges: 'The data science team needed a reliable middleware solution to securely connect their prediction models with the frontend while ensuring optimal performance and maintainability.',
    solution: 'I implemented a secure Django middleware that efficiently bridged the gap between the data science models and the frontend. I designed and implemented an effective caching strategy to improve performance and reduce API calls. Throughout the project, I onboarded and mentored a junior backend developer, ensuring smooth maintenance going forward.',
    results: 'The middleware significantly improved application performance, reduced load on the model servers, and enhanced security. The junior developer successfully took over maintenance, ensuring long-term sustainability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "Subhi's middleware solution perfectly addressed our needs for a secure connection between our ML models and frontend. His mentoring of our junior developer was exceptional.",
      author: "Alina Kovalenko",
      role: "Data Science Lead"
    }
  },
  {
    id: 'sss-truck-delivery',
    title: 'Truck Delivery Aggergator',
    subtitle: 'Project Inception and Technical Leadership',
    logo: 'heroicons:truck',
    tags: ['NestJS', 'Kubernetes', 'Docker', 'Vue.js'],
    employer: 'Sitech.me',
    highlights: [
      'Technical interviewing and onboarding of engineers',
      'Initial flow creation and technical vision setting',
      'Development of reusable features',
      'Software architecture design'
    ],
    summary: 'Assisted in setting up the technical foundation for a new truck delivery project, including interviewing and onboarding NestJS engineers.',
    challenges: 'The project needed to quickly establish a solid technical foundation and onboard skilled developers to create a scalable delivery tracking system from scratch.',
    solution: 'I assisted in interviewing and onboarding NestJS engineers, created the initial workflow, and established the technical vision for the first few development sprints. I also developed several reusable features that formed the basis of the application architecture, using NestJS, Kubernetes, Docker, and Vue.js.',
    results: 'The project successfully launched with a solid technical foundation. The team was able to work efficiently with clear direction, and the reusable components I created accelerated development across multiple features.',
    image: 'https://images.unsplash.com/photo-1586366775916-7018ef19c9b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "Subhi's technical leadership during our project inception was invaluable. He not only helped us build the right team but also set a technical vision that carried us through several successful sprints.",
      author: "Thomas Weber",
      role: "Project Manager"
    }
  },
  {
    id: 'streamer-academy',
    title: 'Streamer Academy',
    subtitle: 'Video Content Collection Pipeline',
    logo: 'heroicons:video-camera',
    tags: ['Data Engineering', 'Twitch API', 'YouTube API', 'Pipeline'],
    employer: 'Sitech.me',
    highlights: [
      'Led development of content collection pipeline',
      'Integrated with Twitch and YouTube APIs',
      'Aggregated content into course results',
      'Managed a cross-functional team'
    ],
    summary: 'Led a team of engineers in creating a pipeline for collecting information from Twitch and YouTube and binding them into structured course results.',
    challenges: 'A pre-existing project needed to efficiently collect, process, and organize streaming content from multiple platforms into a cohesive educational format.',
    solution: 'I assisted by leading a team of one backend developer and one data engineer in creating a comprehensive pipeline. The system collected information from Twitch and YouTube through their respective APIs, processed the content, and organized it into structured course materials.',
    results: 'The pipeline successfully transformed streaming content into valuable educational resources, significantly expanding the platform\'s content library with minimal manual intervention.',
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    testimonial: {
      quote: "Subhi efficiently led our small team to create a robust pipeline that transformed how we collect and organize streaming content. His technical guidance made a complex integration seem straightforward.",
      author: "Sarah Johnson",
      role: "Product Owner"
    }
  },
  {
    id: 'doroob-sa',
    title: 'Doroob.sa',
    subtitle: 'OpenedX Legacy Maintenance',
    logo: 'heroicons:academic-cap',
    tags: ['OpenedX', 'Legacy Systems', 'Microservices', 'Maintenance'],
    employer: 'Sitech.me',
    highlights: [
      'Maintenance of legacy OpenedX application',
      'Microservices architecture management',
      'System stability improvements',
      'Technical debt reduction'
    ],
    summary: 'Maintaining a legacy OpenedX application and its associated microservices ecosystem.',
    challenges: 'The educational platform required careful maintenance of its legacy OpenedX codebase while supporting the microservices architecture that had been built around it.',
    solution: 'I took responsibility for maintaining the legacy OpenedX application, ensuring its stability and performance. Additionally, I managed the microservices ecosystem, implementing improvements and resolving issues as they arose.',
    results: 'The platform maintained high availability and performance, with reduced technical debt and improved integration between the legacy system and newer microservices.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    testimonial: {
      quote: "Subhi has been exceptional in maintaining our complex system. His ability to work with both legacy code and modern microservices has kept our platform running smoothly.",
      author: "Mohammed Al-Faisal",
      role: "CTO"
    }
  },
  {
    id: 'embassy-fueling-tracking',
    title: 'Embassy Fueling Tracking',
    subtitle: 'Monolithic Application for Fuel Management',
    logo: 'heroicons:truck',
    tags: ['Docker', 'Django', 'CSS3', 'jQuery'],
    employer: 'Sitech.me',
    highlights: [
      'Efficient tracking of embassy fleet fueling operations',
      'Streamlined reporting and analytics dashboard',
      'Automated notification system for fuel threshold alerts',
      'Integration with existing embassy management systems'
    ],
    summary: 'Developed a comprehensive fuel tracking system for an embassy to monitor and manage their fleet fuel consumption, maintenance schedules, and related expenses.',
    challenges: 'The embassy needed a centralized system to track fuel usage across their diverse fleet of vehicles. The existing manual process was error-prone and inefficient, making it difficult to prevent waste and ensure accountability.',
    solution: 'I built a robust Django-based application containerized with Docker. The solution featured a user-friendly interface using jQuery and CSS3 for a responsive design that worked across all devices. The system included role-based access controls, real-time reporting, and comprehensive audit trails.',
    results: 'The new system provided complete visibility into fuel usage patterns, helping identify inefficiencies and reducing overall fuel costs by 25%. Administrative time spent on fuel management was reduced by 70%, while accuracy of tracking improved dramatically.',
    image: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "Subhi delivered a solution that transformed our fuel management from a cumbersome manual process to a streamlined digital system. His attention to our specific security and operational requirements was impressive.",
      author: "Michael Sullivan",
      role: "Fleet Manager"
    }
  },
  {
    id: 'ams-pharmaceutical',
    title: 'AMS Pharmaceutical Market Analysis',
    subtitle: 'Data-Driven Market Intelligence Platform',
    logo: 'heroicons:chart-bar',
    tags: ['Docker', 'Django', 'CSS3', 'jQuery', 'Data Analytics'],
    employer: 'Sitech.me',
    highlights: [
      'Comprehensive pharmaceutical market data analysis',
      'Interactive visualization dashboards',
      'Automated reporting system',
      'Secure user management and access controls'
    ],
    summary: 'Developed a market analysis platform for AMS Pharmaceuticals to track industry trends, competitor activities, and market opportunities.',
    challenges: 'AMS needed to consolidate diverse market data sources into actionable intelligence. Their analysts were spending excessive time gathering and formatting data rather than performing analysis and generating insights.',
    solution: 'We created a Django-based platform that automated data acquisition, processing, and visualization. The application integrated multiple data sources and presented insights through interactive dashboards built with jQuery and modern CSS3 techniques. The entire solution was containerized using Docker for easy deployment and scaling.',
    results: 'The platform reduced analysis preparation time by 65% while improving data accuracy. Decision-makers gained access to real-time market insights, helping identify new opportunities that increased market share by 12% within the first year.',
    image: 'https://images.unsplash.com/photo-1576670159805-08933ea9ce7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "The market analysis platform developed by CollaboWorks.Tech has become an indispensable tool for our strategic planning. Their team demonstrated exceptional understanding of our industry needs and translated that into a powerful yet intuitive system.",
      author: "Dr. Emily Zhao",
      role: "Head of Market Research, AMS Pharmaceuticals"
    }
  },
  {
    id: 'ahlibank-uid',
    title: 'Ahlibank UID - Account Creation',
    subtitle: 'Cross-Platform Digital Banking Solution',
    logo: 'heroicons:banknotes',
    tags: ['Docker', 'Django', 'DRF', 'React', 'React Native'],
    employer: 'Sitech.me',
    highlights: [
      'Streamlined account creation process',
      'Cross-platform solution (web and mobile)',
      'Secure authentication and verification',
      'Integration with core banking systems'
    ],
    summary: 'Led development of Ahlibank digital account creation system, enabling customers to open new bank accounts seamlessly across web and mobile platforms.',
    challenges: 'Ahlibank needed to modernize their account opening process, which was previously paper-based and required branch visits. They wanted a solution that maintained strict banking security standards while providing a frictionless user experience.',
    solution: 'We built a comprehensive system using Django and Django Rest Framework for the backend, with React for web and React Native for mobile interfaces. I personally led a team of freelance mobile engineers, stepped up as both Business Analyst and Engineer, handled client communication, and managed the backend development.',
    results: 'The new system reduced account opening time from days to minutes, increased new account applications by 35%, and significantly improved customer satisfaction scores. The solution also reduced operational costs associated with manual account processing.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "CollaboWorks.Tech delivered more than just code - they provided strategic insights that helped shape our digital transformation journey. Their ability to handle both technical implementation and business analysis made them an invaluable partner.",
      author: "Ibrahim Al-Hariri",
      role: "Digital Banking Director, Ahlibank"
    }
  },
  {
    id: 'ezad-auction',
    title: 'Ezad.ae Date Fruit Auction System',
    subtitle: 'Large-Scale E-Commerce and Auction Platform',
    logo: 'heroicons:shopping-bag',
    tags: ['Docker', 'Django', 'DRF', 'jQuery', 'K8s', 'AWS', 'Helm'],
    employer: 'Sitech.me',
    highlights: [
      'Real-time auction system for premium date fruits',
      'Integrated payment and fulfillment system',
      'Scalable architecture handling seasonal demand spikes',
      'Multi-language support for international markets'
    ],
    summary: 'Developed and led the team behind Ezad.ae, the premier online auction marketplace for premium date fruits in the Middle East region.',
    challenges: 'Creating a reliable real-time auction system that could handle significant traffic spikes during harvest seasons, while managing complex logistics for a perishable product. The project required numerous integrations with payment processors, shipping services, and inventory systems.',
    solution: 'Initially attempted to transition to a full technical PM role but switched back to lead engineer. Created a monolithic Django application with DRF backends, jQuery frontend, and deployed on AWS using Kubernetes with Helm. Led a diverse team of 3 backend developers, 2 mobile developers, 1 frontend developer, and 2 QA engineers.',
    results: 'The platform successfully processes millions of dollars in date fruit auctions annually, with 99.9% uptime even during peak seasons. The system reduced transaction costs compared to traditional auctions while expanding market reach to international buyers.',
    image: 'https://images.unsplash.com/photo-1599709606362-2e5a65ce4556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "CollaboWorks.Tech created a platform that revolutionized how premium dates are traded in our region. Their technical expertise combined with their understanding of our unique market needs delivered a solution that exceeded our expectations.",
      author: "Ahmed Al-Mansouri",
      role: "CEO, Ezad Trading Company"
    }
  },
  {
    id: 'tamatem-plus',
    title: 'Tamatem Plus',
    subtitle: 'Centralized Gaming Authentication and Marketplace',
    logo: 'heroicons:puzzle-piece',
    tags: ['Docker', 'Django', 'DRF', 'jQuery', 'Angular2', 'K8s', 'Helm', 'AWS'],
    employer: 'Sitech.me',
    highlights: [
      'Centralized OAuth2 authentication for multiple games',
      'Custom Unity SDK development',
      'In-game purchase marketplace',
      'Cross-platform user management'
    ],
    summary: 'Created a centralized authentication provider and in-game purchase platform for Tamatem Games, the leading mobile game publisher in the MENA region.',
    challenges: 'Tamatem needed a unified system to handle user authentication across their growing portfolio of games, along with a streamlined in-game purchase experience. The solution needed to work seamlessly with Unity-based games while maintaining robust security for payment processing.',
    solution: 'Developed a centralized Django authentication provider using OAuth2 for multiple games, created a Unity SDK for easy integration, and built an in-game purchase store. Led a team of 2 backend developers, 2 QA engineers, 2 frontend developers, and 1 mobile/Unity engineer to deliver the complete solution.',
    results: 'The platform unified the user experience across Tamatem game portfolio, increased in-game purchases by 40%, and simplified onboarding for new game titles. The solution also provided valuable cross-game analytics that informed future development decisions.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "Working with CollaboWorks.Tech on our Tamatem Plus platform was a game-changer for our business. Their technical leadership and ability to coordinate between different stakeholders ensured we delivered a complex project on time and within budget.",
      author: "Hussam Hammo",
      role: "Product Director, Tamatem Games"
    }
  }
];

// Jobs under subhiqudsi.dev (Independent)
const subhiqudsiProjects = [
  {
    id: 'stock-market-simulator',
    title: 'Stock Market Trade Simulator',
    subtitle: 'Interactive Trading Platform with Alpaca API',
    logo: 'heroicons:chart-bar',
    tags: ['FastAPI', 'Alpaca API', 'Vue.js', 'Docker', 'WebSockets'],
    employer: 'subhiqudsi.dev',
    highlights: [
      'Real-time stock data integration with Alpaca API',
      'Paper trading simulation with realistic market conditions',
      'Interactive dashboard with performance analytics',
      'WebSocket implementation for live market updates'
    ],
    summary: 'Developed a comprehensive stock market simulator that allows users to practice trading strategies in a risk-free environment using real market data.',
    challenges: 'Creating a realistic trading environment that accurately reflects market conditions without exposing users to financial risk. The platform needed to handle real-time data streams while providing an intuitive interface for novice traders.',
    solution: 'I built a FastAPI backend that integrates with the Alpaca API for market data and paper trading functionality. The system incorporates WebSockets for real-time updates and a Vue.js frontend with interactive charts and analytics. The entire stack is containerized with Docker for easy deployment and scaling.',
    results: 'The simulator provides users with a realistic trading experience, complete with market data, portfolio tracking, and performance analytics. Users can test different trading strategies and learn market dynamics without risking real capital.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "The stock market simulator Subhi built has been instrumental in our trading education program. Students can experiment with different strategies and see real-world results without the anxiety of losing money.",
      author: "Megan Chen",
      role: "Financial Education Director"
    }
  },
  {
    id: 'omniops-devops',
    title: 'OmniOps DevOps Dashboard',
    subtitle: 'GPU Resource Allocation for Multi-tenancy',
    logo: 'heroicons:server',
    tags: ['DevOps', 'Dashboard', 'GPU Allocation', 'Multi-tenant', 'FastAPI'],
    employer: 'subhiqudsi.dev',
    highlights: [
      'DevOps dashboard for GPU allocation',
      'Multi-tenant architecture design',
      'Resource optimization system',
      'Project inception and architecture'
    ],
    summary: 'Created a DevOps dashboard for a multi-tenant structure focused on efficient GPU allocation.',
    challenges: 'As an independent contractor during project inception, I needed to design a system that could efficiently allocate GPU resources across multiple tenants in a fair and optimized manner.',
    solution: 'I architected and developed a DevOps dashboard that managed GPU allocation in a multi-tenant environment. The solution provided visibility into resource usage and implemented intelligent allocation algorithms to maximize efficiency.',
    results: 'The dashboard enabled efficient sharing of expensive GPU resources across multiple clients, reducing costs while maintaining performance for all users.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    testimonial: {
      quote: "Subhi's dashboard revolutionized how we allocate GPU resources. The multi-tenant design perfectly balanced our needs for resource sharing and isolation.",
      author: "David Chen",
      role: "VP of Engineering"
    }
  }
];

// Combined case studies for display
const caseStudies = [
  ...subhiqudsiProjects, // Show independent work first
  ...sitechProjects
];

const scrollToCaseStudy = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <PageTransition>
    <div class="min-h-screen py-16 relative overflow-hidden">
      <!-- Gradient background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-20 w-60 h-60 border border-cyan-500/10 rounded-full"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 border border-blue-500/10 rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <!-- Header -->
        <ScrollAnimation direction="down" :delay="200">
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-4">
              <Icon name="heroicons:document-chart-bar" class="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Portfolio <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Case Studies</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of our software development expertise and technical leadership
              that have transformed businesses across diverse industries
            </p>
          </div>
        </ScrollAnimation>

        <!-- Case Studies Navigation -->
        <ScrollAnimation direction="up" :delay="300">
          <div class="mb-16 flex flex-wrap justify-center gap-4">
            <button 
              v-for="study in caseStudies" 
              :key="study.id"
              @click="scrollToCaseStudy(study.id)"
              class="px-5 py-3 bg-gray-800/40 backdrop-blur-sm border border-cyan-500/10 rounded-lg flex items-center hover:bg-gray-700/40 hover:border-cyan-500/30 transition-all duration-300"
            >
              <Icon :name="study.logo" class="w-5 h-5 text-cyan-400 mr-2" />
              <span class="text-white">{{ study.title }}</span>
            </button>
          </div>
        </ScrollAnimation>

        <!-- Case Studies -->
        <div class="space-y-24">
          <ScrollAnimation 
            v-for="(study, index) in caseStudies" 
            :key="study.id"
            direction="up"
            :delay="200 * (index + 1)"
          >
            <div :id="study.id" class="relative">
              <div class="z-2 absolute -left-4 -top-4 md:-left-6 md:-top-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {{ index + 1 }}
              </div>

              <div v-if='study.approved' class="bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-500/10">
                <!-- Hero Section -->
                <div class="relative h-64 sm:h-96 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/90 z-10"></div>
                  <img
                    :src="study.image"
                    :alt="study.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div class="flex justify-between items-end">
                      <div class="flex-1">
                        <div class="flex flex-wrap gap-2 mb-4">
                          <span
                            v-for="tag in study.tags"
                            :key="tag"
                            class="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-medium rounded-full"
                          >
                            {{ tag }}
                          </span>
                        </div>
                        <h2 class="text-3xl font-bold text-white mb-2">{{ study.title }}</h2>
                        <p class="text-xl text-gray-300">{{ study.subtitle }}</p>
                      </div>
                      <div>
                        <span
                          :class="[
                            'px-4 py-2 rounded-lg text-sm font-medium',
                            study.employer === 'subhiqudsi.dev'
                              ? 'bg-purple-900/30 text-purple-400 border border-purple-500/30'
                              : 'bg-blue-900/30 text-blue-400 border border-blue-500/30'
                          ]"
                        >
                          {{ study.employer }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-8 md:p-12">
                  <!-- Highlights -->
                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                    <div
                      v-for="(highlight, hIndex) in study.highlights"
                      :key="hIndex"
                      class="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10"
                    >
                      <p class="text-cyan-400 font-semibold">{{ highlight }}</p>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="heroicons:information-circle" class="w-5 h-5 text-cyan-400 mr-2" />
                        Overview
                      </h3>
                      <p class="text-gray-300 mb-6">{{ study.summary }}</p>

                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="heroicons:puzzle-piece" class="w-5 h-5 text-cyan-400 mr-2" />
                        Challenges
                      </h3>
                      <p class="text-gray-300">{{ study.challenges }}</p>
                    </div>

                    <div>
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="heroicons:light-bulb" class="w-5 h-5 text-cyan-400 mr-2" />
                        Our Solution
                      </h3>
                      <p class="text-gray-300">{{ study.solution }}</p>
                    </div>

                    <div>
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="heroicons:chart-bar" class="w-5 h-5 text-cyan-400 mr-2" />
                        Results
                      </h3>
                      <p class="text-gray-300 mb-8">{{ study.results }}</p>

                      <!-- Testimonial -->
                      <div class="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-500/20 relative">
                        <div class="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                          <Icon name="heroicons:chat-bubble-bottom-center-text" class="w-4 h-4 text-white" />
                        </div>
                        <p class="text-gray-300 italic mb-4">"{{ study.testimonial.quote }}"</p>
                        <div class="flex items-center">
                          <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                            {{ study.testimonial.author.charAt(0) }}
                          </div>
                          <div class="ml-3">
                            <p class="text-white font-medium">{{ study.testimonial.author }}</p>
                            <p class="text-gray-400 text-sm">{{ study.testimonial.role }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-5 bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-500/10" v-else> Awaiting Disclosure Approval</div>
            </div>
          </ScrollAnimation>
        </div>

        <!-- CTA Section -->
        <ScrollAnimation direction="up" :delay="400">
          <div class="mt-24 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl"></div>
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/20 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-cyan-400/5 opacity-70"></div>
              <div class="relative">
                <h2 class="text-3xl font-bold text-white mb-4">Ready to Become My Next Success Story?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help transform your infrastructure and accelerate your digital journey.
                </p>
                <NuxtLink
                  to="/contact"
                  class="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Schedule a Consultation
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 inline-block" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </PageTransition>
</template>