import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Zap, 
  FileText, 
  Download, 
  Users, 
  Code, 
  BarChart3, 
  Cpu, 
  ChevronRight,
  Play,
  Star,
  GitBranch,
  Eye,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

const FloatingShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <div 
    className={`absolute opacity-20 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const CodeBlock = ({ children, className = "" }: { children: string, className?: string }) => (
  <div className={`bg-gray-900 rounded-lg p-4 font-mono text-sm border border-gray-700 ${className}`}>
    <pre className="text-green-400">{children}</pre>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: {
  icon: React.ComponentType<any>,
  title: string,
  description: string,
  delay?: number
}) => (
  <div 
    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Analyzing repository structure...",
    "Extracting code artifacts...",
    "Generating architecture diagrams...",
    "Creating slide narrative...",
    "Rendering presentation..."
  ];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleGenerate = () => {
    if (repoUrl) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(0);
      }, 6000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape className="w-64 h-64 bg-purple-500/10 rounded-full -top-32 -left-32 blur-3xl" />
        <FloatingShape className="w-96 h-96 bg-blue-500/10 rounded-full top-1/4 -right-48 blur-3xl" delay={2} />
        <FloatingShape className="w-80 h-80 bg-emerald-500/10 rounded-full bottom-1/4 left-1/4 blur-3xl" delay={4} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SlideGen AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8 animate-bounce">
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">Generate slides in under 60 seconds</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              {' '}GitHub Repos{' '}
            </span>
            Into Stunning Presentations
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered slide generation that analyzes your code, extracts key insights, 
            and creates professional presentations perfect for hackathons, demos, and technical deep-dives.
          </p>

          {/* Interactive Demo */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="url"
                    placeholder="https://github.com/username/awesome-project"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/25 transition-all"
                  />
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!repoUrl || isGenerating}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isGenerating ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Generating...
                    </div>
                  ) : (
                    <>Generate <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </button>
              </div>
              
              {isGenerating && (
                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2 text-purple-400" />
                    {steps[currentStep]}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Github, label: 'Repos Analyzed', value: '10K+' },
              { icon: FileText, label: 'Slides Generated', value: '50K+' },
              { icon: Users, label: 'Happy Developers', value: '2K+' },
              { icon: Clock, label: 'Avg Generation Time', value: '<60s' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Developer Storytelling
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From code analysis to beautiful presentations, everything you need to showcase your projects professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Code}
              title="Smart Code Analysis"
              description="Automatically identifies key components, entry points, and critical functions with AST parsing and call graph analysis."
              delay={100}
            />
            <FeatureCard
              icon={BarChart3}
              title="Auto-Generated Diagrams"
              description="Creates Mermaid architecture diagrams, data flow charts, and component interactions from your codebase."
              delay={200}
            />
            <FeatureCard
              icon={FileText}
              title="Multiple Export Formats"
              description="Export to PPTX and PDF with consistent themes, speaker notes, and appendix with repo details."
              delay={300}
            />
            <FeatureCard
              icon={Users}
              title="Audience Presets"
              description="Tailored narratives for hackathons, executive presentations, or technical deep-dives."
              delay={400}
            />
            <FeatureCard
              icon={Cpu}
              title="Experiment Detection"
              description="Parses notebooks, logs, and benchmarks to generate charts and metrics visualization."
              delay={500}
            />
            <FeatureCard
              icon={Play}
              title="Demo Instructions"
              description="Detects CLI commands, API endpoints, and Docker setup for comprehensive usage slides."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Simple CLI, Powerful Results
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Generate professional slide decks with a single command. 
                Our AI analyzes your repository structure, extracts key insights, 
                and creates compelling narratives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Supports Python, JavaScript, Go, and more" },
                  { icon: CheckCircle, text: "Automatic architecture diagram generation" },
                  { icon: CheckCircle, text: "Experiment results and benchmark parsing" },
                  { icon: CheckCircle, text: "Speaker notes and presentation appendix" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <item.icon className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <CodeBlock className="animate-slide-up">
{`gen-slides \\
  --repo_url https://github.com/org/awesome-ai \\
  --audience_preset hackathon \\
  --slide_count 10 \\
  --theme dark_terminal`}
              </CodeBlock>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center mb-2">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400">Terminal Output</span>
                </div>
                <div className="font-mono text-sm space-y-1">
                  <div className="text-green-400">✓ Repository cloned successfully</div>
                  <div className="text-green-400">✓ Code analysis completed</div>
                  <div className="text-green-400">✓ Architecture diagrams generated</div>
                  <div className="text-green-400">✓ Slides exported to /out/deck.pptx</div>
                  <div className="text-blue-400">🎉 Generated 10 slides in 42 seconds!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start free, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                description: 'Perfect for personal projects',
                features: [
                  '5 slides per month',
                  'Basic themes',
                  'PDF export',
                  'Community support'
                ],
                popular: false
              },
              {
                name: 'Pro',
                price: '$29',
                description: 'For professional developers',
                features: [
                  'Unlimited slides',
                  'All themes & customization',
                  'PPTX & PDF export',
                  'Priority support',
                  'Advanced diagrams',
                  'Custom branding'
                ],
                popular: true
              },
              {
                name: 'Team',
                price: '$99',
                description: 'For development teams',
                features: [
                  'Everything in Pro',
                  'Team collaboration',
                  'Private repo support',
                  'API access',
                  'Custom templates',
                  'Dedicated support'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-gray-700/50 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-300 mb-8">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SlideGen AI
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Transform your GitHub repositories into stunning presentations with AI.
              </p>
              <div className="flex space-x-4">
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Star className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <GitBranch className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SlideGen AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;