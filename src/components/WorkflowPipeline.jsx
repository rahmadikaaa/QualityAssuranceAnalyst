import React from 'react';

const WorkflowPipeline = () => {
    const steps = [
        {
            id: 1,
            title: "Requirement Analysis",
            description: "Mempelajari dokumen spesifikasi (PRD) atau desain UI/UX untuk memahami fitur, user flow, dan menentukan Acceptance Criteria.",
            icon: "📄",
            color: "#3b82f6"
        },
        {
            id: 2,
            title: "Test Planning & Design",
            description: "Menyusun strategi, estimasi waktu, pemilihan tools, serta menulis Test Case (Pre-condition, Steps, and Expected Result).",
            icon: "📋",
            color: "#6366f1"
        },
        {
            id: 3,
            title: "Test Execution",
            description: "Menjalankan pengujian sesuai Test Case di lingkungan Staging. Menentukan status: Pass, Fail, atau Blocked via Mobile/Web.",
            icon: "⚡",
            color: "#8b5cf6"
        },
        {
            id: 4,
            title: "Bug Reporting",
            description: "Melaporkan bug dengan judul jelas, langkah reproduksi, bukti (screenshot/video), dan tingkat prioritas.",
            icon: "🔄",
            color: "#06b6d4",
            highlight: true,
            automationNote: "Automated via n8n to Slack/Jira"
        },
        {
            id: 5,
            title: "Test Closure",
            description: "Evaluasi akhir, memastikan tidak ada critical bug, memberikan Sign-off, dan menyusun Test Summary Report.",
            icon: "🏆",
            color: "#10b981" // Warna hijau emerald agar lebih kontras untuk 'Closure'
        }
    ];

    return (
        <section id="workflow" className="section" style={{
            padding: '6rem 0',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        color: 'white',
                        marginBottom: '1rem'
                    }}>
                        The QA <span className="gradient-text">Pipeline</span>
                    </h2>
                    <p style={{
                        color: '#E0E0E0',
                        fontSize: '1.05rem',
                        maxWidth: '700px',
                        margin: '0 auto 3rem'
                    }}>
                        Alur kerja QA sistematis yang dioptimalkan dengan otomatisasi laporan menggunakan n8n RPA.
                    </p>
                </div>

                {/* Horizontal Pipeline */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            {/* Hexagon Card */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '240px',
                                    minHeight: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2.5rem 1.5rem',
                                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                                    background: step.highlight
                                        ? `linear-gradient(135deg, ${step.color}30 0%, ${step.color}10 100%)`
                                        : 'rgba(255, 255, 255, 0.03)',
                                    border: `1px solid ${step.highlight ? step.color : 'rgba(255, 255, 255, 0.1)'}`,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer'
                                }}
                                className="pipeline-hexagon"
                            >
                                {/* Icon Container */}
                                <div style={{
                                    fontSize: step.highlight ? '2.5rem' : '2.2rem',
                                    marginBottom: '1.25rem',
                                    filter: step.highlight ? `drop-shadow(0 0 12px ${step.color})` : 'none'
                                }}>
                                    {step.highlight ? (
                                        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                                            <span>🐞</span>
                                            <span style={{ fontSize: '1rem', color: step.color }}>→</span>
                                            <span>💬</span>
                                        </div>
                                    ) : step.icon}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1rem',
                                    color: step.highlight ? step.color : 'white',
                                    fontWeight: '700',
                                    marginBottom: '0.75rem',
                                    textAlign: 'center',
                                    lineHeight: '1.2',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.75rem',
                                    color: '#94a3b8',
                                    textAlign: 'center',
                                    lineHeight: '1.5',
                                    marginBottom: step.automationNote ? '0.75rem' : '0'
                                }}>
                                    {step.description}
                                </p>

                                {/* Automation Badge */}
                                {step.automationNote && (
                                    <div style={{
                                        fontSize: '0.65rem',
                                        color: 'white',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        marginTop: 'auto',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '20px',
                                        background: step.color,
                                        boxShadow: `0 4px 10px ${step.color}40`
                                    }}>
                                        {step.automationNote}
                                    </div>
                                )}
                            </div>

                            {/* Arrow between steps (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="pipeline-arrow" style={{
                                    fontSize: '1.5rem',
                                    color: 'rgba(255, 255, 255, 0.15)',
                                    margin: '0 -0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    →
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Global Styles */}
            <style>{`
                .pipeline-hexagon:hover {
                    transform: translateY(-12px) scale(1.02);
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(255, 255, 255, 0.3);
                }
                
                @media (max-width: 1024px) {
                    .pipeline-arrow {
                        display: none;
                    }
                    #workflow .container > div:last-child {
                        flex-direction: column;
                        gap: 3rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default WorkflowPipeline;