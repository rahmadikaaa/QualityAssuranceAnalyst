import React from 'react';

const StandardDocumentation = () => {
    const documentationAreas = [
        {
            title: 'Test Planning',
            icon: '📋',
            color: '#3b82f6',
            description: 'Comprehensive Test Plans mapping testing strategy for every release cycle'
        },
        {
            title: 'Execution & Tracking',
            icon: '✅',
            color: '#8b5cf6',
            description: 'Detailed Test Cases and actionable Bug Reports in Jira/Trello for streamlined development'
        },
        {
            title: 'Quality Metrics',
            icon: '📊',
            color: '#4ade80',
            description: 'Traceability Matrix ensuring 100% requirement coverage without gaps'
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
                    Standard <span className="gradient-text">Documentation</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#E0E0E0',
                    marginBottom: '3rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    fontSize: '1.05rem'
                }}>
                    Professional documentation practices that separate expert QA from amateur testing.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {documentationAreas.map((area, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: `2px solid ${area.color}30`,
                                borderRadius: '16px',
                                padding: '2rem',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            className="doc-card"
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                                textAlign: 'center'
                            }}>
                                {area.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: area.color,
                                marginBottom: '1rem',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>
                                {area.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#ccc',
                                lineHeight: '1.6',
                                textAlign: 'center'
                            }}>
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                .doc-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </section>
    );
};

export default StandardDocumentation;
