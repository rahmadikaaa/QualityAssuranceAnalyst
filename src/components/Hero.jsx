import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)
            `,
            overflow: 'hidden'
        }}>
            {/* Mesh gradient organic blobs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none',
                animation: 'float 8s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                animation: 'float 10s ease-in-out infinite reverse'
            }} />

            <div className="hero-container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(280px, 380px) 1fr',
                gap: '5rem',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Photo Section - Floating style */}
                <div style={{
                    position: 'relative'
                }}>
                    {/* Glow effect behind photo */}
                    <div style={{
                        position: 'absolute',
                        inset: '-20px',
                        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                        zIndex: -1
                    }} />
                    <img
                        src="/profile-photo-updated.png"
                        alt="Rahmadika Putera"
                        style={{
                            width: '100%',
                            aspectRatio: '3/4',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    />
                </div>

                {/* Content Section - Floating text */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {/* Badge - accent color allowed */}
                    <div>
                        <span style={{
                            color: '#60a5fa',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            ✦ QA Automation Engineer
                        </span>
                    </div>

                    {/* Headline - benefit-focused */}
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '700',
                        lineHeight: '1.05',
                        color: '#ffffff',
                        margin: 0,
                        letterSpacing: '-0.02em'
                    }}>
                        Accelerate Your Release Cycle<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            with AI-Powered QA & Automation
                        </span>
                    </h1>

                    {/* Body text - light gray for readability */}
                    <p style={{
                        fontSize: '1.15rem',
                        color: '#E0E0E0',
                        lineHeight: '1.8',
                        maxWidth: '560px',
                        margin: 0,
                        fontWeight: '400'
                    }}>
                        Expert Quality Assurance with a proven track record in Telecommunication projects (Telkomsel) and ERP systems. I don't just find bugs; I automate the entire testing ecosystem using n8n and Cypress.
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: '#aaa',
                        lineHeight: '1.6',
                        maxWidth: '560px',
                        marginTop: '0.75rem',
                        fontWeight: '400'
                    }}>
                        Proven track record providing technical support for 50+ users and maintaining high-quality internal documentation.
                    </p>

                    {/* CTA Buttons - floating style */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#case-study" style={{
                            padding: '0.875rem 2rem',
                            fontSize: '1rem',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                            color: 'white',
                            borderRadius: '8px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                        }}>
                            Get Free QA Consultation
                        </a>
                        <a href="#case-study" style={{
                            padding: '0.875rem 2rem',
                            fontSize: '1rem',
                            background: 'transparent',
                            color: '#E0E0E0',
                            borderRadius: '8px',
                            fontWeight: '500',
                            textDecoration: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.3s ease'
                        }}>
                            View My Automation Samples
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade for seamless transition */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '150px',
                background: 'linear-gradient(to bottom, transparent, var(--bg-primary, #0a0a0a))',
                pointerEvents: 'none'
            }} />

            {/* Responsive Styles */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-20px) scale(1.05); }
                }
                @media (max-width: 768px) {
                    .hero-container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 3rem !important;
                        padding: 6rem 1.5rem 4rem !important;
                    }
                    .hero-container > div:first-child {
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    .hero-container h1 {
                        font-size: 2.5rem !important;
                    }
                    .hero-container p {
                        margin: 0 auto !important;
                    }
                    .hero-container > div:last-child > div:last-child {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
