import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const tabs = ['Dashboard', 'Bot Builder', 'Charts', 'Tutorial', 'My Strategies', 'Analysis Tools'];

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
            <h1 style={{ color: '#ff444f' }}>Digit Matrix Pro</h1>
            
            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
                {tabs.map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        style={{ 
                            padding: '10px 15px', 
                            cursor: 'pointer', 
                            backgroundColor: activeTab === tab ? '#ff444f' : '#ddd',
                            color: activeTab === tab ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: '300px' }}>
                <h2>{activeTab}</h2>
                <p>Welcome to the {activeTab} section.</p>
                {/* We will add specific logic for each tool here */}
            </div>

            {/* Compliance Footer */}
            <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px', fontSize: '0.8rem', color: '#666' }}>
                <p><strong>Risk Disclaimer:</strong> Trading binary options and synthetic indices involves significant risk of loss and is not suitable for everyone. Only trade with money you can afford to lose.</p>
                <p>Digit Matrix Pro | Powered by Deriv API</p>
            </footer>
        </div>
    );
};

export default Dashboard;
