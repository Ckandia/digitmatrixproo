import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return (
                    <div className="tab-content">
                        <h3>Market Overview</h3>
                        <p>Real-time account balance and active contract summary will appear here.</p>
                    </div>
                );
            case 'Bot Builder':
                return (
                    <div className="tab-content">
                        <h3>Bot Configuration</h3>
                        <button style={{ background: '#28a745', color: 'white', padding: '10px', border: 'none' }}>
                            Initialize Trading Engine
                        </button>
                        <div style={{ marginTop: '10px' }}>[Run Panel Placeholder]</div>
                    </div>
                );
            case 'Analysis Tools':
                return (
                    <div className="tab-content">
                        <h3>Digit Matrix Scanner</h3>
                        <p>50-Tick Rolling Evaluation Matrix active.</p>
                        <div style={{ height: '200px', background: '#eee', padding: '10px' }}>
                            [Matrix Data Visualization]
                        </div>
                    </div>
                );
            case 'My Strategies':
                return (
                    <div className="tab-content">
                        <h3>Strategy Selector</h3>
                        <select>
                            <option>Trend Following</option>
                            <option>Mean Reversion</option>
                            <option>Martingale Recovery</option>
                        </select>
                    </div>
                );
            case 'Charts':
                return <div className="tab-content"><h3>Live Market Data</h3><p>[TradingView Chart Container]</p></div>;
            case 'Tutorial':
                return <div className="tab-content"><h3>User Guide</h3><p>How to configure your Digit Matrix Pro.</p></div>;
            default:
                return <div>Select a tool to begin.</div>;
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '20px' }}>
                <h1 style={{ color: '#ff444f', margin: '0' }}>Digit Matrix Pro</h1>
                <p style={{ color: '#666' }}>Automated Trading System</p>
            </header>

            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {['Dashboard', 'Bot Builder', 'Charts', 'Tutorial', 'My Strategies', 'Analysis Tools'].map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        style={{ 
                            padding: '10px 15px', cursor: 'pointer',
                            background: activeTab === tab ? '#ff444f' : '#f0f0f0',
                            color: activeTab === tab ? '#fff' : '#333',
                            border: '1px solid #ccc', borderRadius: '4px'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <section style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '300px' }}>
                {renderContent()}
            </section>

            <footer style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #ff444f', fontSize: '0.85rem', color: '#555' }}>
                <p><strong>Risk Disclaimer:</strong> Trading binary options and synthetic indices involves significant risk of capital. Past performance is not indicative of future results. Only trade with risk capital.</p>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>Digit Matrix Pro | Powered by Deriv API</p>
            </footer>
        </div>
    );
};

export default Dashboard;
