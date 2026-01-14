import React from 'react';

const QAToolkit = () => {
    const toolkitCategories = [
        {
            category: 'Management Tools',
            icon: '📋',
            color: '#3b82f6',
            tools: [
                { name: 'Jira', badge: '🎯' },
                { name: 'Trello', badge: '📌' },
                { name: 'Google Spreadsheet', badge: '📊' }
            ],
            description: 'Agile/Scrum project management and tracking'
        },
        {
            category: 'Analysis Tools',
            icon: '🔍',
            color: '#8b5cf6',
            tools: [
                { name: 'Browser DevTools', badge: '🌐' },
                { name: 'Postman', badge: '📡' }
            ],
            description: 'Frontend debugging and API analysis'
        },
        {
            category: 'Automation Engines',
            icon: '⚡',
            color: '#4ade80',
            tools: [
                { name: 'Cypress', badge: '🔄' },
                { name: 'Katalon Studio', badge: '🤖' },
                { name: 'n8n', badge: '🔗' }
            ],
            description: 'End-to-end automation and workflow orchestration'
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
                    The QA <span className="gradient-text">Toolkit & Ecosystem</span>
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#E0E0E0',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                }}>
                    A comprehensive suite of tools powering efficient quality assurance workflows.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {toolkitCategories.map((category, index) => (
                        <div
                            key={index}
                            style={{
                                background: `linear-gradient(135deg, ${category.color}08 0%, ${category.color}03 100%)`,
                                border: `1px solid ${category.color}20`,
                                borderRadius: '16px',
                                padding: '2rem',
                                transition: 'all 0.3s ease'
                            }}
                            className="toolkit-card"
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem'
                            }}>
                                {category.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: category.color,
                                marginBottom: '0.5rem',
                                fontWeight: '700'
                            }}>
                                {category.category}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#aaa',
                                marginBottom: '1.5rem',
                                lineHeight: '1.5'
                            }}>
                                {category.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.75rem'
                            }}>
                                {category.tools.map((tool, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '8px',
                                            fontSize: '0.9rem',
                                            color: '#E0E0E0',
                                            border: `1px solid ${category.color}15`
                                        }}
                                    >
                                        <span>{tool.badge}</span>
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                .toolkit-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
                }
                @media (max-width: 768px) {
                    .toolkit-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default QAToolkit;
