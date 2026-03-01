import { useState } from 'react';

const GTOTask = ({ segment }) => {
    const [activeTab, setActiveTab] = useState('discussion');

    const modules = segment.modules[0].content;

    const renderContent = () => {
        switch (activeTab) {
            case 'discussion':
                return (
                    <div className="animate-fade-in">
                        {modules.group_discussion.map((gd, idx) => (
                            <div key={idx} className="glass-card mb-4" style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ color: 'var(--accent-secondary)' }}>{gd.topic}</h3>
                                <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>{gd.opinion_paragraph}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'planning':
                return (
                    <div className="animate-fade-in">
                        {modules.planning_exercise.map((pe, idx) => (
                            <div key={idx} className="glass-card">
                                <h3 className="mb-4">Scenario</h3>
                                <p className="mb-4" style={{ fontSize: '1.1rem' }}>{pe.scenario}</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="glass-card" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                        <h4 style={{ color: 'var(--danger)' }}>Constraints</h4>
                                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                            {pe.constraints.map((c, i) => <li key={i}>{c}</li>)}
                                        </ul>
                                    </div>
                                    <div className="glass-card" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                        <h4 style={{ color: 'var(--success)' }}>Resources</h4>
                                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                            {pe.resources.map((r, i) => <li key={i}>{r}</li>)}
                                        </ul>
                                    </div>
                                </div>

                                <div className="glass-card mb-4" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                                    <h4 style={{ color: 'var(--accent-secondary)' }}>Proposed Plan</h4>
                                    <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                                        {pe.plan_steps.map((step, i) => (
                                            <li key={i} style={{ paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'outdoors':
                return (
                    <div className="animate-fade-in">
                        {modules.outdoor_tasks.map((task, idx) => (
                            <div key={idx} className="glass-card mb-8">
                                <h3 style={{ color: 'var(--accent-secondary)' }}>{task.task_name}</h3>
                                <p className="mb-8" style={{ fontSize: '1.1rem' }}>Goal: {task.goal}</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="mb-4 text-center">Important Actions</h4>
                                        <div className="flex flex-col gap-2">
                                            {task.common_actions.map((act, i) => (
                                                <div key={i} className="glass-card text-center" style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)' }}>
                                                    {act}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-4 text-center">Team Communication</h4>
                                        <div className="flex flex-col gap-2">
                                            {task.role_play_lines.map((line, i) => (
                                                <div key={i} className="glass-card text-center" style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)' }}>
                                                    "{line}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="mb-8 text-center">
                <h2>{segment.title}</h2>
                <p>{segment.purpose}</p>
            </div>

            <div className="flex gap-4 mb-8 justify-center">
                <button
                    className={`btn ${activeTab === 'discussion' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('discussion')}
                >
                    Group Discussion
                </button>
                <button
                    className={`btn ${activeTab === 'planning' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('planning')}
                >
                    Planning Exercise
                </button>
                <button
                    className={`btn ${activeTab === 'outdoors' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('outdoors')}
                >
                    Outdoor Tasks
                </button>
            </div>

            {renderContent()}
        </div>
    );
};

export default GTOTask;
