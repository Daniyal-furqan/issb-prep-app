import { useState, useEffect } from 'react';

const PsychologicalTest = ({ segment }) => {
    const [activeTab, setActiveTab] = useState('wat');
    const [watIndex, setWatIndex] = useState(0);
    const [watRunning, setWatRunning] = useState(false);

    const modules = segment.modules;
    const watModule = modules.find(m => m.module_id === 'wat_1');
    const sctModule = modules.find(m => m.module_id === 'sct_1');
    const tatModule = modules.find(m => m.module_id === 'tat_1');
    const sdtModule = modules.find(m => m.module_id === 'sdt_1');

    // WAT Timer Logic
    useEffect(() => {
        let timer;
        if (watRunning && activeTab === 'wat') {
            const words = watModule.content.sentences_by_word;
            timer = setInterval(() => {
                setWatIndex(prev => {
                    if (prev < words.length - 1) return prev + 1;
                    setWatRunning(false);
                    return prev;
                });
            }, watModule.content.timed_runner.seconds_per_word * 1000);
        }
        return () => clearInterval(timer);
    }, [watRunning, activeTab, watModule]);

    const renderWAT = () => {
        const words = watModule.content.sentences_by_word;
        const currentWord = words[watIndex].word;

        return (
            <div className="animate-fade-in text-center">
                <h3 className="mb-4">Word Association Test (WAT)</h3>
                <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                    Write down the first complete sentence that comes to your mind.
                </p>

                <div className="glass-card mb-8" style={{ padding: '4rem 2rem' }}>
                    {watRunning ? (
                        <h1 style={{ fontSize: '4rem', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            {currentWord}
                        </h1>
                    ) : (
                        <div>
                            <h2 style={{ color: 'var(--text-secondary)' }}>Ready for WAT?</h2>
                            <p>{watModule.content.timed_runner.seconds_per_word} seconds per word.</p>
                        </div>
                    )}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (watIndex === words.length - 1) setWatIndex(0);
                            setWatRunning(!watRunning);
                        }}
                    >
                        {watRunning ? 'Pause Timer' : watIndex === words.length - 1 ? 'Restart Test' : 'Start Timer'}
                    </button>
                    <div className="badge badge-green flex items-center">
                        Word {watIndex + 1} of {words.length}
                    </div>
                </div>

                <div className="mt-8 text-left glass-card">
                    <h4 className="mb-4">Example sentences for "{currentWord}":</h4>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                        {words[watIndex].sentences.slice(0, 5).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
            </div>
        );
    };

    const renderSCT = () => {
        return (
            <div className="animate-fade-in">
                <h3 className="mb-4">Sentence Completion Test (SCT)</h3>
                {sctModule.content.items.map((item, idx) => (
                    <div key={idx} className="glass-card mb-4" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{item.starter}...</h4>
                        <div className="flex flex-col gap-2 pl-4" style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                            {item.completions.map((comp, i) => (
                                <div key={i} style={{ color: 'var(--text-secondary)' }}>{comp}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderTAT = () => {
        return (
            <div className="animate-fade-in">
                <h3 className="mb-4">Picture Story Test (TAT)</h3>
                {tatModule.content.stories.map((story, idx) => (
                    <div key={idx} className="glass-card mb-8">
                        <h4 className="mb-4">Prompt: {story.prompt}</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {story.versions.map((v, i) => (
                                <div key={i} className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                                    <span className="badge badge-blue mb-2">{v.style}</span>
                                    <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>{v.story}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderSDT = () => {
        const sdt = sdtModule.content.sections;
        return (
            <div className="animate-fade-in grid grid-cols-2 gap-4">
                {Object.entries(sdt).map(([key, lines], idx) => (
                    <div key={idx} className="glass-card">
                        <h4 className="mb-4" style={{ textTransform: 'capitalize', color: 'var(--accent-secondary)' }}>
                            {key.replace('_', ' ')} Opinion
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {lines.map((line, i) => <li key={i} className="mb-1">{line}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="mb-8 text-center">
                <h2>{segment.title}</h2>
                <p>{segment.purpose}</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <button className={`btn ${activeTab === 'wat' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('wat')}>WAT</button>
                <button className={`btn ${activeTab === 'sct' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('sct')}>SCT</button>
                <button className={`btn ${activeTab === 'tat' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('tat')}>TAT</button>
                <button className={`btn ${activeTab === 'sdt' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('sdt')}>SDT</button>
            </div>

            {activeTab === 'wat' && renderWAT()}
            {activeTab === 'sct' && renderSCT()}
            {activeTab === 'tat' && renderTAT()}
            {activeTab === 'sdt' && renderSDT()}
        </div>
    );
};

export default PsychologicalTest;
