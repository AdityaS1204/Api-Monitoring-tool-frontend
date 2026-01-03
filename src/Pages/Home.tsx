import { 
    Navbar, 
    HeroSection, 
    ProblemStatement, 
    SdkIntegration, 
        AiDetection, 
    UnifiedDashboard, 
    ApiDocumentation, 
    HowItWorks, 
    SecurityReliability, 
    FinalCta, 
    Footer 
} from "../components/ui/LandingPage/index"

const Home = () => {
    return (
        <main className="min-h-screen bg-background text-foreground bg-grid-white/[0.02]">
            <Navbar />
            <HeroSection />
            <ProblemStatement />
            <SdkIntegration />
            <AiDetection />
            <UnifiedDashboard />
            <ApiDocumentation />
            <HowItWorks />
            <SecurityReliability />
            <FinalCta />
            <Footer />
        </main>
    )
}

export default Home