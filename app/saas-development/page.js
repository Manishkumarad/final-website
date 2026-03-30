import Link from 'next/link'
import styles from './saas-development.module.css'

export default function SaaSDevelopment() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <nav>
        <Link href="/" className="logo"><span className="logo-dot"></span>Deodha</Link>

        <ul className="nav-links">
          {/* Solutions Dropdown */}
          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Solutions</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Core Services</h6>
                <Link href="/digital-engineering">🛠️ Digital Engineering</Link>
                <Link href="/ai-automation">🤖 AI Automation</Link>
                <Link href="/crm-solutions">💼 CRM Solutions</Link>
                <Link href="/saas-development">☁️ SaaS Development</Link>
              </div>
            </div>
          </li>

          {/* Products Dropdown */}
          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Products</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Our Platform</h6>
                <Link href="#real-estate-crm">🏠 Real Estate CRM</Link>
                <Link href="#ai-lead-automation">🚀 AI Lead Automation</Link>
                <Link href="#automation-platform">⚙️ Automation Platform</Link>
              </div>
            </div>
          </li>

          {/* Industries Dropdown */}
          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Industries</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Specialization</h6>
                <Link href="#real-estate">🏢 Real Estate</Link>
                <Link href="#restaurants">🍽️ Restaurants & Hospitality</Link>
                <Link href="#healthcare">🏥 Healthcare</Link>
                <Link href="#ecommerce">🛒 E-commerce</Link>
              </div>
            </div>
          </li>

          <li><Link href="/case-studies" className="nav-link-btn">Case Studies</Link></li>
          <li><Link href="/about" className="nav-link-btn">About</Link></li>
        </ul>

        <Link href="#contact" className="nav-cta">Book a Demo →</Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobile-menu">
        <ul className="mobile-menu-links">
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="#contact" className="mobile-menu-cta">Book a Demo →</Link></li>
        </ul>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-blob"></div>
        <div className="hero-inner">
          <div>
            <div className="hero-badge fade-up"><span className="badge-dot"></span> SaaS Development</div>
            <h1 className="fade-up delay-1">Build scalable SaaS products that <em>customers love</em></h1>
            <p className="hero-sub fade-up delay-2">End-to-end SaaS development with multi-tenant architecture, subscription management, and enterprise-grade features that scale globally.</p>
            <div className="hero-actions fade-up delay-3">
              <Link href="#contact" className="btn-primary">Start Building</Link>
              <Link href="#features" className="btn-ghost">Explore Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS FEATURES */}
      <section className="services" id="features">
        <div className="section-head">
          <div className="section-label">SaaS Features</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>Enterprise-Grade SaaS Capabilities</span></h2>
          <p className="section-sub">Everything you need to build and scale a successful SaaS product</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Multi-Tenant Architecture</h3>
            <p>Secure, isolated tenant environments with shared infrastructure. Scale to thousands of customers while maintaining performance and security.</p>
            <Link href="#" className="service-arrow">Learn More → </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Subscription Management</h3>
            <p>Complete billing system with recurring payments, usage-based pricing, coupons, and automated invoicing integrated with Stripe/PayPal.</p>
            <Link href="#" className="service-arrow">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>User Management</h3>
            <p>Role-based access control, user onboarding, team collaboration features, and comprehensive user analytics and engagement tracking.</p>
            <Link href="#" className="service-arrow">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Analytics Dashboard</h3>
            <p>Real-time metrics, custom reports, data visualization, and business intelligence tools to help you understand and optimize your SaaS performance.</p>
            <Link href="#" className="service-arrow">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🔗</div>
            <h3>API & Integrations</h3>
            <p>RESTful APIs, webhooks, and pre-built integrations with popular business tools. Extend your SaaS functionality with third-party services.</p>
            <Link href="#" className="service-arrow">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3>Security & Compliance</h3>
            <p>Enterprise-grade security with encryption, audit logs, GDPR compliance, and regular security updates to protect your customers' data.</p>
            <Link href="#" className="service-arrow">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* SAAS MODELS */}
      <section className="saas-models">
        <div className="section-head center">
          <div className="section-label">Business Models</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>Flexible SaaS Pricing Strategies</span></h2>
          <p className="section-sub">Choose the right pricing model for your target market and business goals</p>
        </div>

        <div className="saas-models-grid">
          <div className="saas-model-card">
            <div className="saas-model-header">
              <h3>Freemium</h3>
              <div className="saas-model-price">Free + Paid</div>
            </div>
            <ul>
              <li>Free basic features to attract users</li>
              <li>Premium features behind paywall</li>
              <li>Clear upgrade path and value proposition</li>
              <li>Viral growth potential</li>
            </ul>
            <div className="saas-model-best">Best for: Consumer apps, tools, productivity software</div>
          </div>

          <div className="saas-model-card featured">
            <div className="saas-model-badge">Most Popular</div>
            <div className="saas-model-header">
              <h3>Subscription Tiers</h3>
              <div className="saas-model-price">$29 - $299/mo</div>
            </div>
            <ul>
              <li>Multiple pricing tiers (Basic, Pro, Enterprise)</li>
              <li>Feature-based differentiation</li>
              <li>Usage-based or per-user pricing</li>
              <li>Predictable recurring revenue</li>
            </ul>
            <div className="saas-model-best">Best for: B2B software, collaboration tools</div>
          </div>

          <div className="saas-model-card">
            <div className="saas-model-header">
              <h3>Usage-Based</h3>
              <div className="saas-model-price">Pay as you go</div>
            </div>
            <ul>
              <li>Pricing based on actual usage</li>
              <li>Flexible scaling with business growth</li>
              <li>Lower barrier to entry</li>
              <li>Complex billing implementation</li>
            </ul>
            <div className="saas-model-best">Best for: APIs, infrastructure, data services</div>
          </div>

          <div className="saas-model-card">
            <div className="saas-model-header">
              <h3>Enterprise</h3>
              <div className="saas-model-price">Custom pricing</div>
            </div>
            <ul>
              <li>Custom contracts and pricing</li>
              <li>Dedicated support and customization</li>
              <li>On-premise deployment options</li>
              <li>Longer sales cycles</li>
            </ul>
            <div className="saas-model-best">Best for: Large organizations, complex requirements</div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack">
        <div className="section-head center">
          <div className="section-label">Technology</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>SaaS Development Stack</span></h2>
          <p className="section-sub">Modern technologies that power scalable, secure SaaS applications</p>
        </div>

        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React/Next.js</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔷</span>
            <span className="tech-name">TypeScript</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐍</span>
            <span className="tech-name">Python/FastAPI</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">☁️</span>
            <span className="tech-name">AWS/Azure</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🗄️</span>
            <span className="tech-name">PostgreSQL</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐳</span>
            <span className="tech-name">Docker/K8s</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔄</span>
            <span className="tech-name">CI/CD</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔒</span>
            <span className="tech-name">Security</span>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="process-timeline" id="process">
        <div className="section-head center">
          <div className="section-label">Development</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>SaaS Development Process</span></h2>
          <p className="section-sub">Systematic approach to building successful SaaS products</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">1</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Product Strategy</h3>
              <p className="timeline-description">Market research, competitive analysis, and product roadmap development to ensure your SaaS solves real problems.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">2</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">MVP Development</h3>
              <p className="timeline-description">Build a minimum viable product with core features, multi-tenant architecture, and basic subscription management.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">3</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Beta Testing & Launch</h3>
              <p className="timeline-description">Private beta testing, user feedback collection, and public launch with marketing campaigns and customer acquisition.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">4</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Scale & Optimize</h3>
              <p className="timeline-description">Monitor performance, add features based on user feedback, and optimize for growth while maintaining stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Build Your SaaS Product?</h2>
            <p>Let's create a scalable SaaS solution that generates recurring revenue and delights customers.</p>
            <div className="cta-actions">
              <Link href="#contact" className="btn-primary">Start SaaS Development</Link>
              <Link href="/" className="btn-ghost">← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}