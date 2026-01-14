import React from 'react';

const Header = () => {
    return (
        <header style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Cognitive<span className="gradient-text">QA</span>
                </div>
                <nav>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        <li><a href="#problems">Problems</a></li>
                        <li><a href="#workflow">Workflow</a></li>
                        <li><a href="#capabilities">Capabilities</a></li>
                        <li><a href="#case-study">Case Study</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
