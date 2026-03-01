import { useState } from 'react';
import { generateAIResponse } from '../services/apiService';

const FullMockTest = () => {
    const [testActive, setTestActive] = useState(false);
    const [currentSection, setCurrentSection] = useState('intro'); // intro, wat, tat, pointer, sct, urduSct, essay, lecturate, interview, submit
    const [responses, setResponses] = useState({});
    const [assessmentResult, setAssessmentResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Example subset of a full test for UI purposes
    const testStructure = {
        wat: ["work", "lead", "help"], // normally 100
        tat: ["A group of people discussing around a map"], // normally 4
        pointer: ["He was alone in the room when suddenly the door opened and..."], // normally 4
        sct: ["My greatest strength is..."], // normally 4
        urduSct: ["Jab main gusse mein hota hoon..."], // normally 4x25
        essay: ["Impact of Artificial Intelligence on Modern Warfare"],
        lecturate: ["Global Warming and its effects"],
        interview: ["Why do you want to join the armed forces?"]
    };

    const handleInputChange = (section, index, value) => {
        setResponses(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [index]: value
            }
        }));
    };

    const submitTestForAssessment = async () => {
        setLoading(true);
        const prompt = `
      Evaluate the following candidate's responses for an ISSB mock test. 
      Analyze their psychology, behavior, and alignment with the 14 leadership qualities.
      Point out their merits, demerits, shortcomings, and give concrete suggestions on how they can improve to get recommended at the actual ISSB.

      Candidate Responses:
      ${JSON.stringify(responses, null, 2)}
    `;
        const sysInst = "You are a senior ISSB Psychologist and Deputy President. Provide a detailed, brutally honest but constructive assessment report.";

        try {
            const res = await generateAIResponse(prompt, sysInst, 2000);
            setAssessmentResult(res.text);
            setCurrentSection('result');
        } catch (e) {
            alert("Error evaluating test: " + e.message);
        } finally {
            setLoading(false);
        }
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'intro':
                return (
                    <div className="text-center">
                        <h3>Standardized ISSB Mock Test (Sample 1 of 5)</h3>
                        <p className="mb-4">This end-to-end test covers WAT (100x), Picture Stories (4x), Pointer Stories (4x), English SCTs (4x), Urdu SCT Sets (4x25), Essay (1x), Lecturate (2x), and Interview.</p>
                        <button className="btn btn-primary mt-8" onClick={() => setCurrentSection('wat')}>Begin Test Pipeline</button>
                    </div>
                );
            case 'wat':
                return (
                    <div className="animate-fade-in">
                        <h3>Word Association Test</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Write a sentence for each word representing your first thought.</p>
                        {testStructure.wat.map((word, i) => (
                            <div key={i} className="mb-4">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>{i + 1}. {word.toUpperCase()}</label>
                                <input type="text" className="w-full" style={{ padding: '0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={(e) => handleInputChange('wat', i, e.target.value)}
                                />
                            </div>
                        ))}
                        <button className="btn btn-primary" onClick={() => setCurrentSection('tat')}>Next: Picture Stories &rarr;</button>
                    </div>
                );
            case 'tat':
                return (
                    <div className="animate-fade-in">
                        <h3>Picture Story (TAT)</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Analyze the scene and write a story containing action, handling, and outcome.</p>
                        {testStructure.tat.map((prompt, i) => (
                            <div key={i} className="mb-4">
                                <div className="glass-card mb-2" style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', textAlign: 'center' }}>[ Image: {prompt} ]</div>
                                <textarea className="w-full" rows="6" style={{ padding: '0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={(e) => handleInputChange('tat', i, e.target.value)} placeholder="Write your story here..."
                                />
                            </div>
                        ))}
                        <button className="btn btn-primary" onClick={() => setCurrentSection('pointer')}>Next: Pointer Stories &rarr;</button>
                    </div>
                );
            case 'pointer':
                return (
                    <div className="animate-fade-in">
                        <h3>Pointer Stories</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Complete the story starting with the pointer premise.</p>
                        {testStructure.pointer.map((prompt, i) => (
                            <div key={i} className="mb-4">
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>"{prompt}"</p>
                                <textarea className="w-full" rows="4" style={{ padding: '0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={(e) => handleInputChange('pointer', i, e.target.value)} placeholder="Continue the story..."
                                />
                            </div>
                        ))}
                        <button className="btn btn-primary" onClick={() => setCurrentSection('sct')}>Next: English SCTs &rarr;</button>
                    </div>
                );
            case 'sct':
                return (
                    <div className="animate-fade-in">
                        <h3>English Sentence Completion</h3>
                        {testStructure.sct.map((prompt, i) => (
                            <div key={i} className="mb-4">
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>{prompt}</label>
                                <input type="text" className="w-full" style={{ padding: '0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={(e) => handleInputChange('sct', i, e.target.value)}
                                />
                            </div>
                        ))}
                        <button className="btn btn-primary" onClick={() => setCurrentSection('urduSct')}>Next: Urdu SCTs &rarr;</button>
                    </div>
                );
            case 'urduSct':
                return (
                    <div className="animate-fade-in">
                        <h3>Urdu Sentence Completion (Roman/Urdu)</h3>
                        {testStructure.urduSct.map((prompt, i) => (
                            <div key={i} className="mb-4">
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>{prompt}</label>
                                <input type="text" className="w-full" style={{ padding: '0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={(e) => handleInputChange('urduSct', i, e.target.value)}
                                />
                            </div>
                        ))}
                        <button className="btn btn-primary" onClick={() => setCurrentSection('submit')}>Next: Final Review &rarr;</button>
                    </div>
                );
            case 'submit':
                return (
                    <div className="text-center animate-fade-in">
                        <h3 className="text-green-400">Test Complete!</h3>
                        <p className="mb-8">Your responses are ready for the AI Senior Psychologist evaluation.</p>
                        <button className="btn" style={{ background: 'linear-gradient(to right, #10b981, #059669)', color: 'white', fontSize: '1.2rem', padding: '1rem 2rem' }} onClick={submitTestForAssessment} disabled={loading}>
                            {loading ? 'Evaluating...' : 'Submit to AI Assessor'}
                        </button>
                    </div>
                );
            case 'result':
                return (
                    <div className="animate-fade-in glass-card" style={{ borderTop: '4px solid var(--accent-primary)', padding: '2rem' }}>
                        <h2 className="mb-4" style={{ color: 'var(--accent-secondary)' }}>AI Psychologist Assessment Report</h2>
                        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            {assessmentResult}
                        </pre>
                        <button className="btn btn-outline mt-8" onClick={() => setCurrentSection('intro')}>Return to Tests</button>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className="glass-container w-full" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {renderSection()}
        </div>
    );
};

export default FullMockTest;
