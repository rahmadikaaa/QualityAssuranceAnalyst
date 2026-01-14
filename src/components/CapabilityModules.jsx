import React from 'react';

const CapabilityModules = () => {
    const modules = [
        { category: "MCP Tools", items: ["Filesystem", "PostgreSQL", "Brave Search", "GitHub"] },
        { category: "AI Engineering", items: ["Gemini 1.5 Pro", "Prompt Engineering", "RAG Pipelines"] },
        { category: "Automation", items: ["n8n", "Cypress", "Playwright", "Selenium"] },
        { category: "Core Stack", items: ["Python", "JavaScript/TS", "SQL", "React"] }
    ];

    return (
        <section id="capabilities" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
                    Capability <span className="gradient-text">Modules</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {modules.map((mod, index) => (
                        <div key={index} className="card">
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                                {mod.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {mod.items.map((item, i) => (
                                    <span key={i} style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '1rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CapabilityModules;
