import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Percent,
  BarChart3,
  Thermometer,
  Truck,
  Target,
  Users,
  Shield,
  Download,
  ExternalLink,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import warehouseAerial from '@/assets/warehouse-aerial.jpg';
import warehouseExterior from '@/assets/warehouse-exterior.jpg';
import warehouseInterior from '@/assets/warehouse-interior.jpg';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dry');

  const dryWarehouseData = {
    constructionCost: 120,
    annualRent: 18,
    roi: 13.0,
    portfolioInvestment: 101,
    totalAcres: 49.11,
    buildableSqFt: 732000,
    annualRental: 13.2
  };

  const refrigeratedData = {
    constructionCost: 210,
    annualRent: 20,
    roi: 8.8,
    portfolioInvestment: 167,
    totalAcres: 49.11,
    buildableSqFt: 732000,
    annualRental: 14.7
  };

  const lots = [
    { id: 1, size: 3.62, buildable: 55000, premium: true },
    { id: 2, size: 3.81, buildable: 58000, premium: true },
    { id: 3, size: 7.02, buildable: 107000, premium: true },
    { id: 4, size: 7.15, buildable: 109000, premium: true },
    { id: 5, size: 8.2, buildable: 125000, premium: true },
    { id: 6, size: 3.51, buildable: 53500, premium: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-premium py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">McAllen Industrial</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors">Overview</a>
              <a href="#analysis" className="text-muted-foreground hover:text-primary transition-colors">Market Analysis</a>
              <a href="#financials" className="text-muted-foreground hover:text-primary transition-colors">Financials</a>
              <a href="#properties" className="text-muted-foreground hover:text-primary transition-colors">Properties</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(956) 522-1481</span>
              </div>
              <Button className="btn-premium">
                <Download className="w-4 h-4 mr-2" />
                Executive Summary
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 relative overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge className="status-badge">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investment Opportunity
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gold-text">Fed Rate Cuts</span> Drive Investment Opportunity
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Historic Market Conditions • McAllen Warehouse Investment Opportunity
                </p>
                
                <div className="flex items-center space-x-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Military Highway (FM 1016)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>11-12 Months Development</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="roi-highlight">1.3%</div>
                  <p className="text-sm text-muted-foreground">Historic Low Vacancy</p>
                </div>
                <div className="text-center">
                  <div className="roi-highlight">60%</div>
                  <p className="text-sm text-muted-foreground">TX Produce Imports</p>
                </div>
                <div className="text-center">
                  <div className="roi-highlight">49</div>
                  <p className="text-sm text-muted-foreground">Acres Available</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-premium">
                  Explore Investment Options
                </Button>
                <Button className="btn-outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Detailed Analysis
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={warehouseAerial} 
                  alt="McAllen Warehouse Development Aerial View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Prime Location Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="overview" className="py-16 bg-muted/30">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Executive Summary</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A compelling $15-20M warehouse development opportunity in North America's premier 
              fresh produce trade corridor, targeting sophisticated investors seeking stable, 
              high-yield industrial real estate returns.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="metric-card text-center">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="investment-amount">$15-20M</div>
                <p className="text-sm text-muted-foreground">Total Investment Range</p>
              </CardContent>
            </Card>

            <Card className="metric-card text-center">
              <CardContent className="pt-6">
                <Calendar className="w-8 h-8 text-accent-emerald mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-emerald">11-12</div>
                <p className="text-sm text-muted-foreground">Months Development</p>
              </CardContent>
            </Card>

            <Card className="metric-card text-center">
              <CardContent className="pt-6">
                <Building2 className="w-8 h-8 text-accent-sapphire mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-sapphire">343,350</div>
                <p className="text-sm text-muted-foreground">Total Buildable SF</p>
              </CardContent>
            </Card>

            <Card className="metric-card text-center">
              <CardContent className="pt-6">
                <Percent className="w-8 h-8 text-accent-amber mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-amber">$6.2M+</div>
                <p className="text-sm text-muted-foreground">Annual Rental Potential</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="investment-card">
                <h3 className="text-2xl font-bold mb-4">Strategic Location</h3>
                <p className="text-muted-foreground mb-4">
                  Located in the heart of the Rio Grande Valley's industrial corridor, these 
                  properties provide direct access to North America's largest fresh produce 
                  import gateway while serving the growing e-commerce and regional distribution demands.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Minutes from Pharr-Reynosa International Bridge</span>
                </div>
              </div>

              <div className="investment-card">
                <h3 className="text-2xl font-bold mb-4">Target Market</h3>
                <p className="text-muted-foreground">
                  Sophisticated Mexican and international investors seeking stable, 
                  income-producing assets with strong fundamentals and growth potential 
                  in a proven cross-border trade environment.
                </p>
              </div>
            </div>

            <div className="investment-card">
              <h3 className="text-2xl font-bold mb-6">Key Investment Highlights</h3>
              <div className="space-y-4">
                {[
                  'Historic low 1.3% vacancy rate creates landlord-favorable conditions',
                  '60% of Texas fresh produce imports through Pharr-Reynosa Bridge drives demand',
                  'Validated $18.2/sq ft annual rental rates with 4% projected growth',
                  'Strategic location on Military Highway (FM 1016) near Mexico border'
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Two Investment Strategies</h2>
            <p className="text-xl text-muted-foreground">
              Two distinct investment strategies in North America's premier cross-border trade corridor
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="dry" className="text-lg py-3">
                Dry Warehouse Development
              </TabsTrigger>
              <TabsTrigger value="refrigerated" className="text-lg py-3">
                Refrigerated Warehouse Development
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dry" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="investment-card">
                  <div className="flex items-center space-x-3 mb-6">
                    <Building2 className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-2xl font-bold">Dry Warehouse Development</h3>
                      <p className="text-muted-foreground">Lower entry cost • Higher ROI potential</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">${dryWarehouseData.constructionCost}</div>
                      <p className="text-sm text-muted-foreground">Per sq ft construction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-emerald">${dryWarehouseData.annualRent}</div>
                      <p className="text-sm text-muted-foreground">Annual rent per sq ft</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="roi-highlight">{dryWarehouseData.roi}%</div>
                      <p className="text-sm text-muted-foreground">Annual ROI</p>
                    </div>
                    <div className="text-center">
                      <div className="investment-amount">${dryWarehouseData.portfolioInvestment}M</div>
                      <p className="text-sm text-muted-foreground">Portfolio investment</p>
                    </div>
                  </div>

                  <Button className="btn-premium w-full mt-6">
                    Explore Dry Warehouse Investment
                  </Button>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={warehouseExterior} 
                    alt="Dry Warehouse Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="refrigerated" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="investment-card">
                  <div className="flex items-center space-x-3 mb-6">
                    <Thermometer className="w-8 h-8 text-accent-sapphire" />
                    <div>
                      <h3 className="text-2xl font-bold">Refrigerated Warehouse Development</h3>
                      <p className="text-muted-foreground">Premium cold storage • Stable returns</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">${refrigeratedData.constructionCost}</div>
                      <p className="text-sm text-muted-foreground">Per sq ft construction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-emerald">${refrigeratedData.annualRent}</div>
                      <p className="text-sm text-muted-foreground">Annual rent per sq ft</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="roi-highlight">{refrigeratedData.roi}%</div>
                      <p className="text-sm text-muted-foreground">Annual ROI</p>
                    </div>
                    <div className="text-center">
                      <div className="investment-amount">${refrigeratedData.portfolioInvestment}M</div>
                      <p className="text-sm text-muted-foreground">Portfolio investment</p>
                    </div>
                  </div>

                  <Button className="btn-premium w-full mt-6">
                    Explore Refrigerated Investment
                  </Button>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={warehouseInterior} 
                    alt="Refrigerated Warehouse Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Market Analysis */}
      <section id="analysis" className="py-16 bg-muted/30">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Analysis</h2>
            <p className="text-xl text-muted-foreground">
              McAllen's industrial market transformation creates unprecedented investment opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="metric-card">
              <CardHeader className="text-center">
                <BarChart3 className="w-12 h-12 text-accent-emerald mx-auto mb-4" />
                <CardTitle className="text-2xl">1.5-2.5M SF</CardTitle>
                <p className="text-muted-foreground">Supply Shortage</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Current tenant demand vs limited available inventory
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-accent-sapphire mx-auto mb-4" />
                <CardTitle className="text-2xl">+44%</CardTitle>
                <p className="text-muted-foreground">Import Growth</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Projected increase in produce truckloads by 2025
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card">
              <CardHeader className="text-center">
                <Percent className="w-12 h-12 text-accent-amber mx-auto mb-4" />
                <CardTitle className="text-2xl">+4%</CardTitle>
                <p className="text-muted-foreground">Rent Trajectory</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Annual rental rate growth supported by demand
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 investment-card">
            <h3 className="text-2xl font-bold mb-6">Trade Volume Distribution</h3>
            <p className="text-muted-foreground mb-8">
              $7.05B annual produce trade through Pharr-Reynosa Bridge creates consistent demand 
              for specialized cold storage and distribution facilities.
            </p>
            
            <div className="space-y-4">
              {[
                { product: 'Avocados', value: 1970, color: 'bg-accent-emerald' },
                { product: 'Berries', value: 1100, color: 'bg-accent-sapphire' },
                { product: 'Peppers', value: 890, color: 'bg-accent-amber' },
                { product: 'Onions', value: 650, color: 'bg-accent-ruby' },
                { product: 'Others', value: 2440, color: 'bg-primary' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                    <span className="font-medium">{item.product}</span>
                  </div>
                  <div className="font-bold">${item.value}M</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Next Steps</h2>
            <p className="text-xl text-muted-foreground">
              Ready to capitalize on this exceptional McAllen warehouse investment opportunity?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="investment-card">
                <h3 className="text-2xl font-bold mb-4">Development Team</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Property Development</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Experienced warehouse construction specialists with proven track record 
                      in cold storage and industrial development throughout South Texas.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Phone className="w-4 h-4" />
                      <span>(956) 522-1481</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Investment Advisory</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Comprehensive investment structuring and market analysis services 
                      tailored for international investors and high-net-worth individuals.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Mail className="w-4 h-4" />
                      <span>Email Inquiry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="investment-card">
                <h3 className="text-2xl font-bold mb-4">Investment Process</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'Review investment overview and property specifications' },
                    { step: '02', title: 'Site Visit & Due Diligence', desc: 'On-site property tour and detailed market analysis' },
                    { step: '03', title: 'Investment Structuring', desc: 'Customize investment terms and financing options' },
                    { step: '04', title: 'Development Execution', desc: 'Project management and construction oversight' }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Button className="btn-premium">
                  Schedule Consultation
                </Button>
                <Button className="btn-outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Executive Summary
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="font-bold">McAllen Industrial Development</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>Strategic warehouse development opportunity in North America's premier cross-border trade corridor</p>
              <p className="mt-1">Military Highway (FM 1016) • McAllen, TX • 343,350 SF Buildable Area</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;