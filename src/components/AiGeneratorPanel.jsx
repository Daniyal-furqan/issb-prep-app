import { useState } from 'react';
import { generateAIResponse } from '../services/apiService';

const AiGeneratorPanel = () => {
    const [activeTab, setActiveTab] = useState('wat');
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        setLoading(true);
        setError('');
        setResult(null);

        let prompt = "";
        let systemInstruction = "You are an expert ISSB assessor and generator analyzing input through the lens of the 14 leadership qualities. Return ONLY valid JSON format.";

        if (activeTab === 'wat') {
            prompt = `Generate 10 short, active voice, meaning-full sentences for each of these words. Treat them as a Word Association Test. Words: ${inputText}. Format: JSON output {"results": [{"word": "word", "sentences": ["...", "..."]}]}`;
        } else if (activeTab === 'sct') {
            prompt = `Complete these half-sentences dynamically. Create 5 variations per sentence using the 14 ISSB leadership qualities (indirectly, natural tone). Sentences: ${inputText}. Format: JSON output {"results": [{"starter": "started", "completions": ["...", "..."]}]}`;
        } else if (activeTab === 'tat') {
            prompt = `Given the prompt/image description: '${inputText}'. Generate 3 completely different stories. Stories must have a scene, problem handling, outcome, and future plan highlighting subtle leadership. Format JSON: {"stories": [{"style": "leadership", "content": "..."}]}`;
        } else if (activeTab === 'lecturate') {
            prompt = `Write a comprehensive 3-minute lecturate speech and 10 bullet points for the topic: '${inputText}'`;
            systemInstruction = "You are preparing a candidate for ISSB. Write a natural, highly effective speech without using negativity.";
        }

        try {
            const response = await generateAIResponse(prompt, systemInstruction);
            try {
                // Attempt to parse JSON if requested
                if (activeTab === 'wat' || activeTab === 'sct' || activeTab === 'tat') {
                    // clean markdown formatting if present
                    const cleanJson = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
                    setResult(JSON.parse(cleanJson));
                } else {
                    setResult(response.text);
                }
            } catch (e) {
                setResult(response.text); // Fallback to raw text if JSON parsing fails
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="mb-8 text-center">
                <h2>ISSB AI Generator Engine</h2>
                <p>Powered by OpenAI, Claude, and Gemini Fallback Core.</p>
            </div>

            <div className="flex gap-4 mb-8 justify-center flex-wrap">
                <button className={`btn ${activeTab === 'wat' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('wat')}>Bulk WAT</button>
                <button className={`btn ${activeTab === 'sct' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('sct')}>SCT Variations</button>
                <button className={`btn ${activeTab === 'tat' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('tat')}>Picture Stories</button>
                <button className={`btn ${activeTab === 'lecturate' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('lecturate')}>Lecturate/Essay</button>
            </div>

            <div className="glass-card mb-8">
                <textarea
                    className="w-full"
                    rows="5"
                    style={{ background: 'rgba(0,0,0,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem' }}
                    placeholder={
                        activeTab === 'wat' ? "Paste up to 500 words here separated by commas..." :
                            activeTab === 'sct' ? "Paste half sentences here..." :
                                activeTab === 'tat' ? "Describe the picture or upload image context..." :
                                    "Enter topic name..."
                    }
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                <div className="mt-4 flex justify-between items-center">
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Ensure your `.env` file has API Keys configured for generation.</p>
                    <button
                        className="btn btn-primary"
                        onClick={handleGenerate}
                        disabled={loading || !inputText}
                    >
                        {loading ? 'AI Generating...' : 'Generate Content'}
                    </button>
                </div>
            </div>

            {error && (
                <div className="glass-card mb-4" style={{ borderLeft: '4px solid var(--danger)', background: 'rgba(239, 68, 68, 0.1)' }}>
                    <h4 style={{ color: 'var(--danger)' }}>AI Engine Error</h4>
                    <p style={{ fontSize: '0.9rem' }}>{error}</p>
                </div>
            )}

            {result && (
                <div className="glass-card animate-fade-in" style={{ background: 'rgba(16, 185, 129, 0.05)', borderTop: '4px solid var(--success)' }}>
                    <h3 className="mb-4 text-green-400">Generation Successful</h3>
                    <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {typeof result === 'object' ? JSON.stringify(result, null, 2) : result}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default AiGeneratorPanel;
