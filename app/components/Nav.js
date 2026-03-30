"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav(){
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)

  const navGroups = [
    {
      key: 'solutions',
      label: 'Solutions',
      heading: 'Core Services',
      links: [
        { href: '/digital-engineering', label: 'Digital Engineering' },
        { href: '/ai-automation', label: 'AI Automation' },
        { href: '/crm-solutions', label: 'CRM Solutions' },
        { href: '/saas-development', label: 'SaaS Development' },
        { href: '/careers', label: 'Careers' },
      ],
    },
    {
      key: 'products',
      label: 'Products',
      heading: 'Our Platform',
      links: [
        { href: '#real-estate-crm', label: 'Real Estate CRM' },
        { href: '#ai-lead-automation', label: 'AI Lead Automation' },
        { href: '#automation-platform', label: 'Automation Platform' },
      ],
    },
    {
      key: 'industries',
      label: 'Industries',
      heading: 'Specialization',
      links: [
        { href: '#real-estate', label: 'Real Estate' },
        { href: '#restaurants', label: 'Restaurants & Hospitality' },
        { href: '#healthcare', label: 'Healthcare' },
        { href: '#ecommerce', label: 'E-commerce' },
      ],
    },
  ]

  const toggleMobileMenu = () => setMobileOpen(v => !v)
  const closeMobileMenu = () => {
    setMobileOpen(false)
    setOpenMobileGroup(null)
  }

  const toggleDesktopDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  const toggleMobileGroup = (key) => {
    setOpenMobileGroup((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    const onScroll = () => setOpenDropdown(null)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav>
        <Link href="/" className="logo" aria-label="deodha home" onClick={closeMobileMenu}>
          <span className="site-logo-text">deodha</span>
        </Link>
        
        <ul className="nav-links">
          {navGroups.map((group) => (
            <li key={group.key} className={`nav-item-dropdown ${openDropdown === group.key ? 'is-open' : ''}`}>
              <button
                className="nav-link-btn"
                type="button"
                aria-expanded={openDropdown === group.key}
                onClick={() => toggleDesktopDropdown(group.key)}
              >
                {group.label}
              </button>
              <div className="nav-dropdown">
                <div className="nav-dropdown-col">
                  <h6>{group.heading}</h6>
                  {group.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} onClick={() => setOpenDropdown(null)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}

          <li><Link href="/case-studies" className="nav-link-btn" onClick={() => setOpenDropdown(null)}>Case Studies</Link></li>
          <li><Link href="/about" className="nav-link-btn" onClick={() => setOpenDropdown(null)}>About</Link></li>
        </ul>
        
        <Link href="/book-demo" className="nav-cta btn" style={{background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white'}}>Book a Demo →</Link>
        
        <button
          className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
          id="mobile-menu-btn"
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`} id="mobile-menu">
        <ul className="mobile-menu-links">
          {navGroups.map((group) => (
            <li key={`mobile-${group.key}`} className={`mobile-menu-group ${openMobileGroup === group.key ? 'open' : ''}`}>
              <button
                type="button"
                className="mobile-menu-group-btn"
                aria-expanded={openMobileGroup === group.key}
                onClick={() => toggleMobileGroup(group.key)}
              >
                <span>{group.label}</span>
                <span className="mobile-menu-group-icon">+</span>
              </button>
              <div className="mobile-menu-submenu">
                {group.links.map((link) => (
                  <Link key={`mobile-${link.href}-${link.label}`} href={link.href} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
          <li><Link href="/case-studies" onClick={closeMobileMenu}>Case Studies</Link></li>
          <li><Link href="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link href="/book-demo" className="mobile-menu-cta btn" style={{background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white'}} onClick={closeMobileMenu}>Book a Demo →</Link></li>
        </ul>
      </div>
    </>
  )
}
