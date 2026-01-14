import React from 'react';

const ProblemsSolutions = () => {
    const items = [
        {
            title: "Ensuring Full-Spectrum Quality",
            problem: "Many QAs are limited to surface-level (Black Box) testing, missing critical logic flaws.",
            solution: "I apply a Full-Stack QA approach, inspecting code logic (White Box) and ensuring UX rigor."
        },
        {
            title: "The \"Blind Automation\" Trap",
            problem: "Rushing to automate without understanding the product leads to fragile, flaky scripts.",
            solution: "I strictly follow a Manual First principle to master business logic before automating."
        },
        {
            title: "Manual Validation Bottlenecks",
            problem: "Complex systems like ERPs require exhaustive data checking that slows down releases.",
            solution: "I build Intelligent Workflows using n8n and AI Agents to automate validation."
        }
    ];

    return (
        <section id="problems" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
                    Problems <span className="gradient-text">&</span> Solutions
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {items.map((item, index) => (
                        <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>{item.title}</h3>
                            <div>
                                <strong style={{ color: '#ef4444', display: 'block', marginBottom: '0.5rem' }}>Problem:</strong>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.problem}</p>
                            </div>
                            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                                <strong style={{ color: '#22c55e', display: 'block', marginBottom: '0.5rem' }}>Solution:</strong>
                                <p>{item.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemsSolutions;
