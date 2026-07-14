import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const tabs = ['Dashboard', 'Bot Builder', 'Charts', 'Tutorial', 'My Strategies', 'Analysis Tools'];

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 99999, // Forces the dashboard to sit on top of the blank screen
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            padding: '20px',
            boxSizing: 'border-box',
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Header */}
            <h1 style={{ color: '#ff444f', margin: '0 0 20px 0' }}>Digit Matrix Pro</h1>
            
            {/* Navigation Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #ccc', paddingBottom: '10px', flexWrap: 'wrap' }}>
                {tabs.map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        style={{ 
                            padding: '10px 15px', 
                            cursor: 'pointer', 
                            backgroundColor: activeTab === tab ? '#ff444f' : '#f2f2f2',
                            color: activeTab === tab ? '#ffffff' : '#333333',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontWeight: 'bold'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', minHeight: '400px', backgroundColor: '#f9f9f9' }}>
                <h2>{activeTab}</h2>
                <p>Welcome to the {activeTab} panel.</p>
                {/* Specific tool logic will be injected here next */}
            </div>

            {/* Deriv Third-Party Compliance Footer */}
            <footer style={{ marginTop: '40px', padding: '20px 0', borderTop: '2px solid #ff444f', textAlign: 'center', color: '#555' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                    Digit Matrix Pro | Powered by Deriv API
                </p>
                <p style={{ fontSize: '12px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}>
                    <strong>Risk Disclaimer:</strong> Trading binary options, synthetic indices, and other financial instruments involves a high level of risk and may not be suitable for all investors. The value of your investments can fluctuate, and you may lose your entire invested capital. Past performance is not indicative of future results. Please ensure you fully understand the risks involved and only trade with money you can afford to lose.
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
