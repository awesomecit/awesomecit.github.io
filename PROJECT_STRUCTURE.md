# 📁 Struttura Directory Progetto Portfolio

```
portfolio/
├── 📁 src/
│   ├── 📁 components/                    # 🎨 PRESENTATION LAYER
│   │   ├── 📁 carousels/                # Componenti caroselli
│   │   │   ├── 📄 index.js             # Export centrali
│   │   │   ├── 📄 BaseCarousel.js      # Classe base
│   │   │   ├── 📄 SkillsCarousel.js    # Specializzazione skills
│   │   │   ├── 📄 TestimonialsCarousel.js
│   │   │   ├── 📄 CarouselFactory.js   # Factory pattern
│   │   │   ├── 📄 CarouselManager.js   # Manager globale
│   │   │   └── 📁 renderers/           # Strategy patterns
│   │   │       ├── 📄 ICarouselRenderer.js
│   │   │       ├── 📄 CenteredRenderer.js
│   │   │       └── 📄 SlidingRenderer.js
│   │   ├── 📁 swiper/                  # 🚀 ALTERNATIVE CDN
│   │   │   ├── 📄 SwiperCarousel.js    # Wrapper Swiper.js
│   │   │   ├── 📄 SwiperFactory.js     # Factory per Swiper
│   │   │   └── 📄 SwiperIntegration.js # Integrazione portfolio
│   │   └── 📁 ui/                      # Altri componenti UI
│   ├── 📁 domain/                       # 🏛️ DOMAIN LAYER (DDD)
│   │   ├── 📁 carousel/                # Bounded Context: Carousel
│   │   │   ├── 📄 CarouselEntity.js    # Domain Entity
│   │   │   ├── 📄 CarouselValueObjects.js # Value Objects
│   │   │   ├── 📄 CarouselEvents.js    # Domain Events
│   │   │   ├── 📄 CarouselRepository.js # Repository interface
│   │   │   └── 📄 CarouselService.js   # Domain Services
│   │   ├── 📁 portfolio/               # Bounded Context: Portfolio
│   │   │   ├── 📄 PortfolioEntity.js   # Portfolio domain
│   │   │   ├── 📄 SkillEntity.js       # Skill domain
│   │   │   └── 📄 TestimonialEntity.js # Testimonial domain
│   │   └── 📁 shared/                  # Shared Kernel
│   │       ├── 📄 DomainEvents.js      # Base domain events
│   │       └── 📄 ValueObjects.js      # Shared value objects
│   ├── 📁 infrastructure/               # 🔧 INFRASTRUCTURE LAYER
│   │   ├── 📁 repositories/            # Data persistence
│   │   │   ├── 📄 CarouselConfigRepository.js
│   │   │   └── 📄 LocalStorageRepository.js
│   │   ├── 📁 external/                # External services
│   │   │   ├── 📄 AnalyticsService.js  # Google Analytics
│   │   │   └── 📄 PerformanceMonitor.js
│   │   └── 📁 ui/                      # UI implementations
│   │       ├── 📄 DOMRenderer.js       # DOM manipulation
│   │       └── 📄 CSSAnimations.js     # CSS animations
│   ├── 📁 application/                  # 📋 APPLICATION LAYER
│   │   ├── 📁 services/                # Application Services
│   │   │   ├── 📄 CarouselOrchestrator.js
│   │   │   ├── 📄 PortfolioApp.js      # Main application
│   │   │   └── 📄 ConfigurationService.js
│   │   ├── 📁 commands/                # Command pattern
│   │   │   ├── 📄 StartCarouselCommand.js
│   │   │   ├── 📄 UpdateConfigCommand.js
│   │   │   └── 📄 CommandHandler.js
│   │   └── 📁 queries/                 # Query pattern (CQRS)
│   │       ├── 📄 GetCarouselStatsQuery.js
│   │       └── 📄 QueryHandler.js
│   └── 📁 config/                       # ⚙️ CONFIGURATION
│       ├── 📄 CarouselConfigs.js       # Configurazioni caroselli
│       ├── 📄 EnvironmentConfig.js     # Environment variables
│       └── 📄 DependencyContainer.js   # DI Container
├── 📁 tests/                           # 🧪 TESTING SUITE
│   ├── 📁 unit/                        # Unit Tests (TDD)
│   │   ├── 📁 components/
│   │   │   ├── 📄 BaseCarousel.test.js
│   │   │   ├── 📄 SkillsCarousel.test.js
│   │   │   └── 📄 CarouselFactory.test.js
│   │   ├── 📁 domain/
│   │   │   ├── 📄 CarouselEntity.test.js
│   │   │   └── 📄 CarouselService.test.js
│   │   └── 📁 application/
│   │       └── 📄 CarouselOrchestrator.test.js
│   ├── 📁 integration/                 # Integration Tests
│   │   ├── 📄 CarouselSystem.integration.test.js
│   │   ├── 📄 PortfolioApp.integration.test.js
│   │   └── 📄 SwiperIntegration.test.js
│   ├── 📁 e2e/                         # End-to-End Tests
│   │   ├── 📄 UserInteractions.e2e.test.js
│   │   └── 📄 PortfolioFlow.e2e.test.js
│   ├── 📁 bdd/                         # 🥒 BDD SCENARIOS
│   │   ├── 📁 features/                # Gherkin scenarios
│   │   │   ├── 📄 carousel-navigation.feature
│   │   │   ├── 📄 responsive-behavior.feature
│   │   │   └── 📄 accessibility.feature
│   │   ├── 📁 steps/                   # Step definitions
│   │   │   ├── 📄 carousel.steps.js
│   │   │   └── 📄 portfolio.steps.js
│   │   └── 📄 cucumber.config.js       # BDD configuration
│   ├── 📁 performance/                 # Performance Tests
│   │   ├── 📄 CarouselPerformance.test.js
│   │   └── 📄 MemoryLeaks.test.js
│   ├── 📁 accessibility/               # A11y Tests
│   │   ├── 📄 KeyboardNavigation.test.js
│   │   └── 📄 ScreenReader.test.js
│   ├── 📁 fixtures/                    # Test data
│   │   ├── 📄 carousel-data.json
│   │   └── 📄 portfolio-data.json
│   ├── 📁 mocks/                       # Mock objects
│   │   ├── 📄 DOMElements.mock.js
│   │   └── 📄 ExternalServices.mock.js
│   └── 📁 utils/                       # Test utilities
│       ├── 📄 TestBuilder.js           # Builder pattern per test
│       ├── 📄 CarouselTestUtils.js     # Utility specifiche
│       └── 📄 BDDHelpers.js            # Helper BDD
├── 📁 examples/                        # 📚 ESEMPI INTEGRAZIONE
│   ├── 📁 basic-integration/           # Esempio base
│   │   ├── 📄 index.html              # HTML demo
│   │   ├── 📄 integration.js          # JS integrazione
│   │   └── 📄 styles.css              # Stili custom
│   ├── 📁 swiper-alternative/          # Esempio con Swiper.js
│   │   ├── 📄 swiper-demo.html        # Demo Swiper
│   │   ├── 📄 swiper-config.js        # Configurazione
│   │   └── 📄 tailwind-integration.css # Integrazione Tailwind
│   ├── 📁 portfolio-integration/       # Integrazione nel portfolio reale
│   │   ├── 📄 PortfolioSetup.js       # Setup completo
│   │   ├── 📄 CarouselCustomization.js # Personalizzazioni
│   │   └── 📄 MigrationGuide.md       # Guida migrazione
│   └── 📁 playground/                  # Ambiente test interattivo
│       ├── 📄 playground.html         # Interfaccia test
│       ├── 📄 live-config.js          # Configurazione live
│       └── 📄 debug-tools.js          # Tools debug
├── 📁 docs/                           # 📖 DOCUMENTAZIONE
│   ├── 📁 architecture/               # Documentazione architettura
│   │   ├── 📄 ddd-design.md          # Domain-Driven Design
│   │   ├── 📄 solid-principles.md    # Principi SOLID
│   │   └── 📄 design-patterns.md     # Pattern utilizzati
│   ├── 📁 api/                        # Documentazione API
│   │   ├── 📄 carousel-api.md        # API caroselli
│   │   └── 📄 configuration-api.md   # API configurazione
│   ├── 📁 guides/                     # Guide d'uso
│   │   ├── 📄 getting-started.md     # Guida introduttiva
│   │   ├── 📄 customization.md       # Personalizzazione
│   │   └── 📄 troubleshooting.md     # Risoluzione problemi
│   └── 📁 testing/                    # Documentazione testing
│       ├── 📄 tdd-approach.md        # Approccio TDD
│       ├── 📄 bdd-scenarios.md       # Scenari BDD
│       └── 📄 testing-strategy.md    # Strategia testing
├── 📁 tools/                          # 🛠️ STRUMENTI SVILUPPO
│   ├── 📄 build.js                   # Script build
│   ├── 📄 test-runner.js             # Runner test custom
│   ├── 📄 code-generator.js          # Generator componenti
│   └── 📄 performance-profiler.js    # Profiler performance
├── 📁 dist/                           # 📦 BUILD OUTPUT
│   ├── 📄 carousel-system.min.js     # Bundle produzione
│   ├── 📄 carousel-system.css        # Stili bundle
│   └── 📄 carousel-system.d.ts       # TypeScript definitions
├── 📄 package.json                   # Dependencies
├── 📄 jest.config.js                 # Jest configuration
├── 📄 cucumber.js                    # Cucumber configuration  
├── 📄 .eslintrc.js                   # ESLint rules
├── 📄 .gitignore                     # Git ignore
├── 📄 README.md                      # Documentazione principale
└── 📄 CHANGELOG.md                   # Change log

```

## 🎯 **Directory Highlights**

### 🏛️ **Domain-Driven Design (DDD)**

```
src/domain/
├── carousel/          # Bounded Context principale
├── portfolio/         # Context del portfolio  
└── shared/           # Shared Kernel tra contexts
```

### 🧪 **Test-Driven Development (TDD) + BDD**

```
tests/
├── unit/             # Red-Green-Refactor cycle
├── integration/      # System interaction tests
├── bdd/features/     # Gherkin scenarios (Given-When-Then)
└── e2e/             # User journey tests
```

### 📚 **Esempi Pronti all'Uso**

```
examples/
├── basic-integration/       # Setup base
├── swiper-alternative/      # Libreria CDN
├── portfolio-integration/   # Integrazione reale
└── playground/             # Test interattivo
```

## 🔍 **Vantaggi Struttura**

### ✅ **Separation of Concerns**

- **Domain**: Business logic pura
- **Application**: Orchestrazione use cases  
- **Infrastructure**: Dettagli implementativi
- **Components**: UI e presentazione

### ✅ **Testing Strategy**

- **TDD**: Unit test per ogni classe
- **BDD**: Scenari business readable
- **Integration**: Test interaction patterns
- **E2E**: User journey completo

### ✅ **Scalabilità**

- **Bounded Contexts**: Domini isolati
- **Dependency Injection**: Accoppiamento lasco
- **Event-Driven**: Comunicazione asincrona
- **CQRS**: Separazione read/write

### ✅ **Developer Experience**

- **Hot Reload**: Sviluppo rapido
- **Debug Tools**: Troubleshooting facile
- **Code Generation**: Boilerplate automatico
- **Documentation**: Always up-to-date
