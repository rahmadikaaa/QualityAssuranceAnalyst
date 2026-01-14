import React from 'react';

const BadgesExpertise = () => {
    const badges = [
        {
            category: 'Education',
            label: 'Bachelor of Informatics',
            icon: '🎓',
            color: '#3b82f6',
            description: 'Strong foundation in Software Engineering & Algorithms'
        },
        {
            category: 'Automation',
            label: 'Cypress & Katalon Expert',
            icon: '⚡',
            color: '#4ade80',
            description: 'Specialization in end-to-end UI and API automation'
        },
        {
            category: 'AI Ops',
            label: 'n8n Workflow Automation',
            icon: '🤖',
            color: '#8b5cf6',
            description: 'High efficiency in automated bug reporting and monitoring'
        },
        {
            category: 'Domain',
            label: 'Telco QA Specialist',
            icon: '📡',
            color: '#ec4899',
            description: 'Experienced handling large-scale systems at Telkomsel'
        }
    ];

    return (
        <section className="section" style={{
            padding: '6rem 0',
            background: 'var(--bg-primary)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: 'white'
                }}>
                    Badges & <span className="gradient-text">Expertise</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#E0E0E0',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                }}>
                    Certifications and specialized skills that drive quality results.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem'
                }}>
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            style={{
                                background: `linear-gradient(135deg, ${badge.color}15 0%, ${badge.color}05 100%)`,
                                border: `2px solid ${badge.color}40`,
                                borderRadius: '16px',
                                padding: '2rem',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            className="badge-card"
                        >
                            <div style={{
                                fontSize: '3.5rem',
                                marginBottom: '1rem'
                            }}>
                                {badge.icon}
                            </div>
                            <div style={{
                                fontSize: '0.75rem',
                                color: badge.color,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: '600',
                                marginBottom: '0.5rem'
                            }}>
                                {badge.category}
                            </div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                color: 'white',
                                fontWeight: '700',
                                marginBottom: '1rem'
                            }}>
                                {badge.label}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#aaa',
                                lineHeight: '1.5'
                            }}>
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                .badge-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </section>
    );
};

export default BadgesExpertise;
