import React from 'react';

const CaseStudy = () => {
    const caseStudies = [
        {
            title: "Odoo CRM Implementation",
            subtitle: "Manual QA / Kasana Tekindo Gemilang",
            badge: "Manual Testing",
            badgeColor: "#22c55e",
            icon: "🏢", // Placeholder for Odoo logo
            notionLink: null,
            challenge: "Ensuring absolute data integrity across interconnected modules—from Prospect identification to final Sales Orders.",
            solutions: [
                "End-to-End Manual Testing across 5+ core modules",
                "Test Cases designed from BRD for tax/discount logic",
                "UI/UX Verification for sales team usability"
            ],
            results: [
                { value: "100%", label: "Accuracy" },
                { value: "Zero", label: "Critical Bugs" },
                { value: "5+", label: "Modules" }
            ]
        },
        {
            title: "Distributed USSD Automation",
            subtitle: "Multi-City Telco Pricing / SIGOS",
            badge: "High Impact",
            badgeColor: "#3b82f6",
            icon: "📡", // Placeholder for SIGOS logo
            notionLink: "https://www.notion.so/Portofolio-Proyek-Crawling-Data-Harga-Paket-USSD-UMB-Multi-Kota-2e4f622df71480899ed7c4b541ffa7a8",
            challenge: "Collecting accurate internet package pricing from 5 operators across 6 cities using distributed physical probes.",
            solutions: [
                "Managed physical SIM probes via SIGOS/Mobileum",
                "Adaptive USSD scripting with dynamic navigation",
                "Automated data pipeline to CSV with pivot analysis"
            ],
            results: [
                { value: "94%", label: "Pass Rate" },
                { value: "6", label: "Cities" },
                { value: "5", label: "Operators" }
            ]
        }
    ];

    return (
        <section id="case-study" className="section" style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '6rem 0'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: 'white'
                }}>
                    Project <span className="gradient-text">Case Studies</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#E0E0E0',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                }}>
                    Real-world projects showcasing measurable impact and technical excellence.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="case-study-card"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                                gap: '3rem',
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '20px',
                                padding: '3rem',
                                direction: index % 2 === 0 ? 'ltr' : 'rtl'
                            }}
                        >
                            {/* Left/Right: Metrics Section */}
                            <div style={{
                                direction: 'ltr',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}>
                                {/* Results - LARGE */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1rem'
                                }}>
                                    {study.results.map((result, i) => (
                                        <div key={i} style={{
                                            textAlign: 'center',
                                            padding: '1.5rem 1rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.06)'
                                        }}>
                                            <div style={{
                                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                                fontWeight: '800',
                                                background: `linear-gradient(135deg, ${study.badgeColor} 0%, #a78bfa 100%)`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                lineHeight: '1'
                                            }}>
                                                {result.value}
                                            </div>
                                            <div style={{
                                                fontSize: '0.85rem',
                                                color: '#aaa',
                                                marginTop: '0.5rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Icon/Logo Placeholder */}
                                <div style={{
                                    fontSize: '4rem',
                                    textAlign: 'center',
                                    opacity: 0.6
                                }}>
                                    {study.icon}
                                </div>
                            </div>

                            {/* Right/Left: Content Section */}
                            <div style={{ direction: 'ltr' }}>
                                {/* Header */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <span style={{
                                        backgroundColor: `${study.badgeColor}20`,
                                        color: study.badgeColor,
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {study.badge}
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '1.6rem',
                                    color: 'white',
                                    marginBottom: '0.5rem',
                                    fontWeight: '700'
                                }}>
                                    {study.title}
                                </h3>
                                <p style={{
                                    color: '#888',
                                    fontSize: '0.95rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {study.subtitle}
                                </p>

                                {/* Challenge - Shortened */}
                                <p style={{
                                    color: '#E0E0E0',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    {study.challenge}
                                </p>

                                {/* Solutions - Bullet points */}
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 1.5rem 0'
                                }}>
                                    {study.solutions.map((item, i) => (
                                        <li key={i} style={{
                                            fontSize: '0.95rem',
                                            color: '#ccc',
                                            padding: '0.4rem 0',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: study.badgeColor }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                {study.notionLink && (
                                    <a
                                        href={study.notionLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: study.badgeColor,
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            padding: '0.5rem 1rem',
                                            border: `1px solid ${study.badgeColor}40`,
                                            borderRadius: '8px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Read Full Case Study →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .case-study-card {
                        grid-template-columns: 1fr !important;
                        direction: ltr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CaseStudy;