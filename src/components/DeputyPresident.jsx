import { useState } from 'react';

const DeputyPresident = ({ segment }) => {
    const [activeTab, setActiveTab] = useState('interview');

    const modules = segment.modules[0].content;

    const renderInterview = () => (
        <div className="animate-fade-in">
            <h3 className="mb-4">Interview Practice</h3>
            {modules.interview.map((item, idx) => (
                <div key={idx} className="glass-card mb-4" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Q: {item.question}</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{item.answer}</p>
                </div>
            ))}
        </div>
    );

    const renderEssay = () => (
        <div className="animate-fade-in">
            <h3 className="mb-4">Essay Writing</h3>
            {modules.essay.map((item, idx) => (
                <div key={idx} className="glass-card mb-8">
                    <h4 className="mb-4">Topic: {item.topic}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                            <span className="badge badge-blue mb-2">Outline A</span>
                            <ul style={{ paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                {item.outline_a.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                        <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                            <span className="badge badge-green mb-2">Outline B</span>
                            <ul style={{ paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                {item.outline_b.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="glass-card" style={{ background: 'rgba(16, 185, 129, 0.05)', borderLeft: '4px solid var(--success)' }}>
                        <h4 className="mb-2">Full Essay</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>{item.full_essay}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderLecturate = () => (
        <div className="animate-fade-in">
            <h3 className="mb-4">Lecturate Tasks</h3>
            {modules.lecturate.map((item, idx) => (
                <div key={idx} className="glass-card mb-8">
                    <h4 className="mb-4">Topic: {item.topic}</h4>

                    <div className="mb-8">
                        <h5 className="mb-2" style={{ color: 'var(--accent-secondary)' }}>Speech Script</h5>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            {item.speech}
                        </p>
                    </div>

                    <div>
                        <h5 className="mb-2" style={{ color: 'var(--accent-primary)' }}>Quick Points to Remember</h5>
                        <div className="flex flex-col gap-2">
                            {item.quick_lines.map((line, i) => (
                                <div key={i} className="glass-card" style={{ padding: '0.75rem', background: 'rgba(255, 255, 255, 0.02)' }}>
                                    • {line}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="mb-8 text-center">
                <h2>{segment.title}</h2>
                <p>{segment.purpose}</p>
            </div>

            <div className="flex gap-4 mb-8 justify-center">
                <button
                    className={`btn ${activeTab === 'interview' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('interview')}
                >
                    Interview
                </button>
                <button
                    className={`btn ${activeTab === 'essay' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('essay')}
                >
                    Essay Defense
                </button>
                <button
                    className={`btn ${activeTab === 'lecturate' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('lecturate')}
                >
                    Lecturate
                </button>
            </div>

            {activeTab === 'interview' && renderInterview()}
            {activeTab === 'essay' && renderEssay()}
            {activeTab === 'lecturate' && renderLecturate()}
        </div>
    );
};

export default DeputyPresident;
