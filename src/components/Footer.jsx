import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '4rem', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Let's Build Quality <span className="gradient-text">Together</span>
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                        <a href="mailto:rahmadika.putera@gmail.com" style={{
                            color: '#60a5fa',
                            textDecoration: 'none',
                            fontSize: '1.05rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            📧 rahmadika.putera@gmail.com
                        </a>
                        <a href="tel:+6281219530902" style={{
                            color: '#60a5fa',
                            textDecoration: 'none',
                            fontSize: '1.05rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            📱 (+62) 81219530902
                        </a>
                    </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>&copy; {new Date().getFullYear()} QA Automation Engineer - Rahmadika Putera. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
