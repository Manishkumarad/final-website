'use client'

import Link from 'next/link'
import React from 'react'
import ChatWidget from './components/ChatWidget'
import styles from './home.module.css'
import Carousel from './components/Carousel'
import FeaturedStories from './components/FeaturedStories'

const HERO_BG_IMAGES = [
  '/images/hero-section-1-bg.jpg',
  '/images/hero-section-2-bg.jpg',
  '/images/hero-section-3-bg.jpg',
  '/images/hero-section-4-bg.jpg',
  '/images/hero-section-5-bg.jpg',
]

export default function Page() {
  const [heroBgIndex, setHeroBgIndex] = React.useState(0)

  const animateStats = () => {
    const counters = document.querySelectorAll('.stat-number')

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute('data-target') || '0')
      if (!Number.isFinite(target)) return

      const durationMs = 1200
      const start = performance.now()

      const update = (now) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const value = Math.round(target * eased)
        counter.textContent = `${value}`

        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }

      counter.textContent = '0'
      requestAnimationFrame(update)
    })
  }
  const toggleFAQ = () => {}
  const selectBudget = () => {}
  const submitEnquiry = () => {}
  React.useEffect(() => {
    // Animate stats when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats()
          observer.unobserve(entry.target)
        }
      })
    })
    
    const statsSection = document.querySelector('.stats-counter')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.page}>
      <ChatWidget />

      {/* POSITIONING BANNER */}
      <div className="positioning-banner">
        <p className="positioning-text">🚀 AI-Powered Digital Engineering & CRM Systems</p>
      </div>

      {/* HERO */}
      <section className={`hero ${styles.homeHero}`}>
        <div className={styles.heroSlides} aria-hidden>
          {HERO_BG_IMAGES.map((img, idx) => (
            <div
              key={img}
              className={`${styles.heroSlide} ${idx === heroBgIndex ? styles.activeSlide : ''}`}
              style={{
                backgroundImage: `linear-gradient(100deg, rgba(2, 7, 20, 0.78), rgba(4, 16, 35, 0.62)), url('${img}')`,
              }}
            />
          ))}
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-badge fade-up"><span className="badge-dot"></span> AI Strategy, Build & Automation</div>
            <h1 className="fade-up delay-1" style={{ lineHeight: 1.08 }}>
              <span style={{ color: '#93c5fd' }}>Building the Operating System</span>
              <br />
              <span style={{ color: '#e6f6ff' }}>for Modern Businesses.</span>
            </h1>
            <p className="hero-sub fade-up delay-2">We design, build, and automate web applications and digital products — powered by cutting-edge AI to launch faster and scale further.</p>
            <div className="hero-actions fade-up delay-3">
              <Link href="/book-demo" className="btn-primary">Book a demo</Link>
              <Link href="/contact" className="btn-ghost">Contact us</Link>
            </div>
            <div className="hero-stats fade-up delay-4">
              <div>
                <div className="stat-num">120+</div>
                <div className="stat-label">Projects delivered</div>
              </div>
              <div>
                <div className="stat-num">40%</div>
                <div className="stat-label">Faster launch time</div>
              </div>
              <div>
                <div className="stat-num">98%</div>
                <div className="stat-label">Client satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Carousel removed — using Client Projects showcase below */}

      {/* LOGOS STRIP */}
      <div className="logos-strip">
        <p>Trusted by leading brands and businesses</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Set 1 */}
            <a href="https://www.marriott.com/en-us/hotels/bhocy-courtyard-bhopal/overview/" target="_blank" className="logo-item">🏨 Courtyard by Marriott Bhopal</a>
            <a href="https://www.branchesgrillandcafe.com/" target="_blank" className="logo-item">🍽️ Branches Grill & Cafe</a>
            <a href="https://thenzone.com/" target="_blank" className="logo-item">🎯 The N Zone</a>
            <a href="https://aawaasrealestate.in/" target="_blank" className="logo-item">🏢 Aawaas Real Estate</a>
            <a href="https://basslake.com/" target="_blank" className="logo-item">🏞️ Bass Lake</a>
            <a href="https://www.oakhurstgrillandwhiskey41.com/" target="_blank" className="logo-item">🥃 Oakhurst Grill & Whiskey 41</a>
            <a href="https://www.wipro.com/" target="_blank" className="logo-item">💻 Wipro</a>
            <a href="https://vercel.com/" target="_blank" className="logo-item">▲ Vercel</a>
            <a href="https://stripe.com/" target="_blank" className="logo-item">💳 Stripe</a>
            {/* Set 2 — exact duplicate for seamless infinite loop */}
            <a href="https://www.marriott.com/en-us/hotels/bhocy-courtyard-bhopal/overview/" target="_blank" className="logo-item">🏨 Courtyard by Marriott Bhopal</a>
            <a href="https://www.branchesgrillandcafe.com/" target="_blank" className="logo-item">🍽️ Branches Grill & Cafe</a>
            <a href="https://thenzone.com/" target="_blank" className="logo-item">🎯 The N Zone</a>
            <a href="https://aawaasrealestate.in/" target="_blank" className="logo-item">🏢 Aawaas Real Estate</a>
            <a href="https://basslake.com/" target="_blank" className="logo-item">🏞️ Bass Lake</a>
            <a href="https://www.oakhurstgrillandwhiskey41.com/" target="_blank" className="logo-item">🥃 Oakhurst Grill & Whiskey 41</a>
            <a href="https://www.wipro.com/" target="_blank" className="logo-item">💻 Wipro</a>
            <a href="https://vercel.com/" target="_blank" className="logo-item">▲ Vercel</a>
            <a href="https://stripe.com/" target="_blank" className="logo-item">💳 Stripe</a>
          </div>
        </div>
      </div>

  {/* CLIENT SHOWCASE */}
<section className="client-showcase">
  <div className="section-head center">
    <div className="section-label" style={{ color: '#0284c7' }}>Client Projects</div>
    <h2 className="section-title"><span style={{ color: '#0f172a' }}>Recent Client Success Stories</span></h2>
    <p className="section-sub">
      Explore our latest work with industry-leading brands
    </p>
  </div>

  <div className="client-grid">

    {/* CARD 1 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')" }}
      >
      </div>
      <div className="client-content">
        <h3>Courtyard by Marriott Bhopal</h3>
        <p>Complete hospitality platform with booking engine, dining reservations, and event management system.</p>
        <div className="tags">
          <span>Web Platform</span>
          <span>Booking System</span>
          <span>Hospitality</span>
        </div>
        <a href="https://www.marriott.com/en-us/hotels/bhocy-courtyard-bhopal/overview/" target="_blank">View Project →</a>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')" }}
      >
      </div>
      <div className="client-content">
        <h3>Branches Grill & Cafe</h3>
        <p>Modern restaurant website with online ordering, table reservations, and loyalty integration.</p>
        <div className="tags">
          <span>E-commerce</span>
          <span>Food & Beverage</span>
          <span>Mobile App</span>
        </div>
        <a href="https://www.branchesgrillandcafe.com/" target="_blank">View Project →</a>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')" }}
      >
      </div>
      <div className="client-content">
        <h3>Bass Lake</h3>
        <p>Scenic destination website with booking system, events, and maps.</p>
        <div className="tags">
          <span>Tourism</span>
          <span>Booking Platform</span>
          <span>Travel Guide</span>
        </div>
        <a href="https://basslake.com/" target="_blank">View Project →</a>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b')" }}
      >
      </div>
      <div className="client-content">
        <h3>Oakhurst Grill & Whiskey 41</h3>
        <p>Upscale dining website with reservations and events system.</p>
        <div className="tags">
          <span>Fine Dining</span>
          <span>Reservations</span>
          <span>Events</span>
        </div>
        <a href="https://www.oakhurstgrillandwhiskey41.com/" target="_blank">View Project →</a>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')" }}
      >
      </div>
      <div className="client-content">
        <h3>The N Zone</h3>
        <p>Entertainment platform with ticketing and venue management.</p>
        <div className="tags">
          <span>Events</span>
          <span>Ticketing</span>
          <span>Entertainment</span>
        </div>
        <a href="https://thenzone.com/" target="_blank">View Project →</a>
      </div>
    </div>

    {/* CARD 6 */}
    <div className="client-card">
      <div
        className="client-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')" }}
      >
      </div>
      <div className="client-content">
        <h3>Aawaas Real Estate</h3>
        <p>Real estate platform with listings, virtual tours, and CRM integration.</p>
        <div className="tags">
          <span>Real Estate</span>
          <span>Property Portal</span>
          <span>CRM</span>
        </div>
        <a href="https://aawaasrealestate.in/" target="_blank">View Project →</a>
      </div>
    </div>

  </div>
</section>
        {/* TESTIMONIALS moved below near enquiry form */}

      {/* STATS COUNTER */}
      <section className="stats-counter">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-icon">🚀</span>
            <span className="stat-number" data-target="150">0</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">😊</span>
            <span className="stat-number" data-target="450">0</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">☕</span>
            <span className="stat-number" data-target="10">0</span>
            <span className="stat-label">Coffee Cups</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🏆</span>
            <span className="stat-number" data-target="5">0</span>
            <span className="stat-label">Awards Won</span>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="guarantee-section">
        <div className="guarantee-badge">
          <div className="guarantee-icon">🛡️</div>
          <div className="guarantee-text">
            <h3>100% Satisfaction Guarantee</h3>
            <p>We're not happy until you're happy. Full refund if you're not satisfied!</p>
          </div>
        </div>
        <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--grey-600)', fontSize: '1.1rem', lineHeight: '1.6'}}>
          We stand behind our work with a rock-solid satisfaction guarantee. If you're not completely thrilled with our services, we'll make it right or refund your investment.
        </p>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="process-timeline">
        <div className="section-head center">
          <div className="section-label">Our Process</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>How We Transform Your Ideas Into Reality</span></h2>
          <p className="section-sub">A proven 4-step process that delivers exceptional results every time</p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">1</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Discovery & Planning</h3>
              <p className="timeline-description">We dive deep into understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">2</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Design & Development</h3>
              <p className="timeline-description">Our expert team crafts stunning designs and develops robust solutions using cutting-edge technologies and best practices.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">3</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Testing & Refinement</h3>
              <p className="timeline-description">Rigorous quality assurance ensures your product is bug-free, performs optimally, and delivers an exceptional user experience.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">4</div>
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Launch & Support</h3>
              <p className="timeline-description">We deploy your solution with precision and provide ongoing support to ensure continued success and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES & LIVE PIPELINE */}
      <section className="platform-section">
        <div className="platform-inner">
          <div className="live-pipeline">
            <h4>Live build pipeline</h4>
            <ul>
              <li>🎯 Requirements mapped — AI extracted 24 user stories ✓</li>
              <li>🎨 Design system generated — 48 components scaffolded ✓</li>
              <li>🔧 Backend API built — 12 endpoints, tested & documented ✓</li>
              <li>🤖 AI layer training — Fine-tuning on client data…</li>
              <li>🚀 Production deploy — Scheduled for Friday</li>
            </ul>
          </div>

          <div className="platform-capabilities">
            <h4>Platform capabilities</h4>
            <div className="platform-grid">
              <div className="pcard">
                <div className="pcard-icon">⚡</div>
                <div className="pcard-content"><div>AI Code Generation</div><small>LLM-assisted coding, boilerplate elimination, and intelligent refactors.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">🔍</div>
                <div className="pcard-content"><div>Semantic Search</div><small>Vector search that understands intent and context across datasets.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">🔄</div>
                <div className="pcard-content"><div>Auto CI/CD</div><small>Preview deployments, automated testing and safe rollbacks.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">🛡️</div>
                <div className="pcard-content"><div>Security First</div><small>SOC 2 minded practices, automated scans and hardened infra.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">📈</div>
                <div className="pcard-content"><div>Predictive Analytics</div><small>ML models to forecast trends and detect anomalies automatically.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">🌐</div>
                <div className="pcard-content"><div>Global Edge Network</div><small>Deploy globally for sub-50ms latency across regions.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">💬</div>
                <div className="pcard-content"><div>LLM Integration</div><small>Unified API for OpenAI, Anthropic, Gemini or self-hosted models.</small></div>
              </div>

              <div className="pcard">
                <div className="pcard-icon">📦</div>
                <div className="pcard-content"><div>Multi-tenant Architecture</div><small>SaaS-ready isolation, custom branding and per-tenant AI layers.</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="tech-stack">
        <div className="section-head center">
          <div className="section-label" style={{ color: '#0284c7' }}>Technologies</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>We Work With Cutting-Edge Technologies</span></h2>
          <p className="section-sub">Leveraging the best tools to build powerful, scalable solutions</p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🟨</span>
            <span className="tech-name">JavaScript</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐍</span>
            <span className="tech-name">Python</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📱</span>
            <span className="tech-name">React Native</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <span className="tech-name">UI/UX Design</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🤖</span>
            <span className="tech-name">AI/ML</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">☁️</span>
            <span className="tech-name">Cloud</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔒</span>
            <span className="tech-name">Security</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="section-head center">
          <div className="section-label">Questions</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>Frequently Asked Questions</span></h2>
          <p className="section-sub">Everything you need to know about working with us</p>
        </div>
        
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span>How long does a typical project take?</span>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. We'll provide a detailed timeline during the planning phase.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span>What's your pricing structure?</span>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. Contact us for a custom quote.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span>Do you provide ongoing support?</span>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>Yes! We offer comprehensive maintenance and support packages to ensure your digital products continue to perform optimally. This includes updates, security patches, and technical support.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span>Can you work with our existing team?</span>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>Absolutely! We have extensive experience collaborating with in-house teams. We can seamlessly integrate with your existing processes and provide additional expertise where needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED (separate stacked section) */}
      <section className="get-started-section">
        <div className="get-started-container">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Ready to build something amazing?</h2>
          <p className="section-sub">Let's discuss your project and create a custom solution that drives real results for your business.</p>
          <div className="enquiry-features">
            <div className="enquiry-feature">
              <div className="enquiry-feature-icon">⚡</div>
              <div className="enquiry-feature-text">
                <h4>Fast turnaround</h4>
                <p>From concept to launch in weeks, not months</p>
              </div>
            </div>
            <div className="enquiry-feature">
              <div className="enquiry-feature-icon">🎯</div>
              <div className="enquiry-feature-text">
                <h4>Results-focused</h4>
                <p>Every project is designed to deliver measurable ROI</p>
              </div>
            </div>
            <div className="enquiry-feature">
              <div className="enquiry-feature-icon">🤝</div>
              <div className="enquiry-feature-text">
                <h4>Full transparency</h4>
                <p>Regular updates and direct communication throughout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="what-we-build">
        <div className="section-head center">
          <div className="section-label">What We Build</div>
          <h2 className="section-title"><span style={{ color: '#0f172a' }}>End-to-end AI-powered digital solutions.</span></h2>
          <p className="section-sub">From concept to deployment — we blend design, engineering, and AI automation into products that grow with your business.</p>
        </div>

        <div className="wwb-grid">
          <div className="wwb-card">
            <div className="wwb-icon">🤖</div>
            <h4>AI-Powered Web Apps</h4>
            <p>Custom web applications with intelligent search, recommendations, automation, and chat interfaces.</p>
            <Link href="/products" className="fc-link">Explore →</Link>
          </div>

          <div className="wwb-card">
            <div className="wwb-icon">⚙️</div>
            <h4>Workflow Automation</h4>
            <p>Automate data flows, approvals, reporting, and operations so your team focuses on what matters.</p>
            <Link href="/solutions" className="fc-link">Explore →</Link>
          </div>

          <div className="wwb-card">
            <div className="wwb-icon">📱</div>
            <h4>Smart Mobile Apps</h4>
            <p>Cross-platform mobile experiences with on-device AI, real-time sync, and intelligent notifications.</p>
            <Link href="/products" className="fc-link">Explore →</Link>
          </div>

          <div className="wwb-card">
            <div className="wwb-icon">🧠</div>
            <h4>AI Chatbots & Agents</h4>
            <p>Conversational agents and copilots trained on your data for support, sales, and internal tools.</p>
            <Link href="/solutions" className="fc-link">Explore →</Link>
          </div>

          <div className="wwb-card">
            <div className="wwb-icon">📊</div>
            <h4>Data & Analytics Dashboards</h4>
            <p>Interactive dashboards with AI insights, anomaly detection, and natural language querying.</p>
            <Link href="/products" className="fc-link">Explore →</Link>
          </div>

          <div className="wwb-card">
            <div className="wwb-icon">🔗</div>
            <h4>API & Integration Services</h4>
            <p>Connect tools and data with robust APIs, webhooks and AI middleware to keep everything in sync.</p>
            <Link href="/services" className="fc-link">Explore →</Link>
          </div>
        </div>

        {/* process & platform moved to dedicated sections below for clarity */}
      </section>

      {/* ENQUIRY FORM (stacked below Get Started) */}
      {/* TESTIMONIALS */}
      <section className="testimonials">
    <div className="section-head center">
      <div className="section-label">What Clients Say</div>
      <h2 className="section-title"><span style={{ color: '#0f172a' }}>Trusted by enterprise teams</span></h2>
      <p className="section-sub">Work that moves the needle — stories from product leaders and ops teams.</p>
    </div>

    <div className="testimonials-grid">
      <div className="testimonial-card">
        <div className="testimonial-quote">“Deodha transformed our CRM and automated lead routing — resulting in a 38% increase in qualified pipeline within three months.”</div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">AB</div>
          <div>
            <div style={{ fontWeight: 800 }}>Amrita Bose</div>
            <div className="testimonial-meta">SVP Product — Aawaas Real Estate</div>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-quote">“Their AI-driven analytics surfaced actionable opportunities we previously missed. The team is fast, pragmatic, and collaborative.”</div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">RK</div>
          <div>
            <div style={{ fontWeight: 800 }}>Rohan Kapoor</div>
            <div className="testimonial-meta">Head of Analytics — Bass Lake</div>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-quote">“Enterprise-grade delivery and excellent communication — Deodha helped us ship a new booking flow end-to-end in weeks.”</div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">MS</div>
          <div>
            <div style={{ fontWeight: 800 }}>Maya Singh</div>
            <div className="testimonial-meta">Director Ops — Courtyard Hotels</div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Footer moved to global layout */}
    </div>
  )
}