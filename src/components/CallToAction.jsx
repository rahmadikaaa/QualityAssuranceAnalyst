import React from 'react';

const CallToAction = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            background: `
                linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.05) 100%),
                var(--bg-primary, #0a0a0a)
            `
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                }}>
                    Ready to <span style={{
                        background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>Optimize</span> Your QA?
                </h2>

                <p style={{
                    fontSize: '1.15rem',
                    color: '#E0E0E0',
                    marginBottom: '2.5rem',
                    lineHeight: '1.7',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem'
                }}>
                    Let's discuss how expert validation and intelligent automation
                    can elevate your product quality.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="mailto:contact@example.com"
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Book a Free Consultation
                        <span style={{ fontSize: '1.2rem' }}>→</span>
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#E0E0E0',
                            borderRadius: '10px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
