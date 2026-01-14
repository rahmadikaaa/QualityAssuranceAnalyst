import React, { useState } from 'react';

const QualitySpectrum = () => {
    const [activeTier, setActiveTier] = useState(null);

    const tiers = [
        {
            id: 'core',
            title: 'Core Testing',
            subtitle: 'Testing Methodology',
            icon: '🎯',
            color: '#3b82f6',
            items: ['Functional Testing', 'Regression Testing', 'Black-box Testing', 'UI/UX & Compatibility Testing'],
            description: 'Ensuring applications work flawlessly across different browsers and devices with comprehensive functional coverage.'
        },
        {
            id: 'backend',
            title: 'Backend & API Validation',
            subtitle: 'API & Integration',
            icon: '🔌',
            color: '#8b5cf6',
            items: ['Postman (Manual & Automation)', 'Data Validation & Integrity Checks', 'SQL Database Testing'],
            description: 'Ensuring data integrity and synchronization using SQL and comprehensive API testing with Postman.'
        },
        {
            id: 'specialized',
            title: 'Domain-Specific Expertise',
            subtitle: 'Specialized Testing',
            icon: '🎖️',
            color: '#ec4899',
            items: ['UMB/USSD Automation (SIGOS Mobileum)', 'ERP Testing (Odoo v17 & Sage 300)', 'Telco Systems Testing'],
            description: 'Specialized expertise in telecommunication systems and complex ERP business processes.'
        }
    ];

    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '6rem 0'
        }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: 'white'
                }}>
                    Quality Spectrum <span className="gradient-text">Coverage</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#E0E0E0',
                    marginBottom: '3rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                }}>
                    Comprehensive testing across all layers - from code internals to user experience.
                </p>

                {/* Spectrum Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '3rem'
                }}>
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.id}
                            onMouseEnter={() => setActiveTier(index)}
                            onMouseLeave={() => setActiveTier(null)}
                            style={{
                                background: activeTier === index
                                    ? `linear-gradient(135deg, ${tier.color}20 0%, ${tier.color}08 100%)`
                                    : 'rgba(255,255,255,0.03)',
                                border: `2px solid ${activeTier === index ? tier.color : 'rgba(255,255,255,0.08)'}`,
                                borderRadius: '16px',
                                padding: '2rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: activeTier === index ? 'translateY(-8px)' : 'translateY(0)',
                                boxShadow: activeTier === index
                                    ? `0 20px 40px ${tier.color}25`
                                    : 'none'
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem',
                                filter: activeTier === index ? 'none' : 'grayscale(0.5)'
                            }}>
                                {tier.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.4rem',
                                color: tier.color,
                                marginBottom: '0.25rem',
                                fontWeight: '700'
                            }}>
                                {tier.title}
                            </h3>
                            <h4 style={{
                                fontSize: '0.95rem',
                                color: '#aaa',
                                marginBottom: '1rem',
                                fontWeight: '500'
                            }}>
                                {tier.subtitle}
                            </h4>

                            {/* Items */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 1rem 0'
                            }}>
                                {tier.items.map((item, i) => (
                                    <li key={i} style={{
                                        fontSize: '1rem',
                                        color: '#E0E0E0',
                                        padding: '0.4rem 0',
                                        borderBottom: i < tier.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                    }}>
                                        <span style={{ color: tier.color, marginRight: '0.5rem' }}>→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Description - shows on hover */}
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#888',
                                lineHeight: '1.5',
                                opacity: activeTier === index ? 1 : 0,
                                maxHeight: activeTier === index ? '100px' : '0',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}>
                                {tier.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Full Spectrum Indicator */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        fontSize: '1.3rem',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.75rem',
                        fontWeight: '700'
                    }}>
                        Full-Spectrum Coverage
                    </h3>
                    <p style={{
                        color: '#E0E0E0',
                        fontSize: '1.05rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.7'
                    }}>
                        Leveraging my <strong style={{ color: '#60a5fa' }}>Developer Background</strong> to cover Unit/Integration levels,
                        while applying <strong style={{ color: '#ec4899' }}>QA Rigor</strong> for System/Acceptance testing.
                    </p>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .section > div > div:nth-child(3) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default QualitySpectrum;

