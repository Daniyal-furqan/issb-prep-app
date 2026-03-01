import { useState } from 'react';

const ScreeningTest = ({ segment, onBack }) => {
    const [currentModule, setCurrentModule] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const module = segment.modules[currentModule];
    const questions = module.content.sets.flatMap(set => set.questions);
    const totalQuestions = questions.length;
    const question = questions[currentQuestion];

    const handleOptionClick = (optionIndex) => {
        if (showExplanation) return;

        // Convert 0, 1, 2, 3 to A, B, C, D
        const optionChar = String.fromCharCode(65 + optionIndex);
        setSelectedOption(optionChar);
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        setShowExplanation(false);
        setSelectedOption(null);
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="flex justify-between items-center mb-4">
                <h2>{module.module_title}</h2>
                <span className="badge badge-blue">Question {currentQuestion + 1} of {totalQuestions}</span>
            </div>

            <div className="glass-card mb-8">
                <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {module.instructions_for_user.join(' ')}
                </p>
                <h3 className="mb-8" style={{ fontSize: '1.2rem', fontWeight: 600 }}>{question.q}</h3>

                <div className="flex flex-col gap-4">
                    {question.options.map((option, idx) => {
                        const optionChar = String.fromCharCode(65 + idx);
                        let optionClass = "btn btn-secondary";
                        let backgroundColor = "rgba(255, 255, 255, 0.1)";

                        if (showExplanation) {
                            if (optionChar === question.answer) {
                                backgroundColor = "rgba(16, 185, 129, 0.2)"; // green
                                optionClass = "btn";
                            } else if (optionChar === selectedOption) {
                                backgroundColor = "rgba(239, 68, 68, 0.2)"; // red
                                optionClass = "btn";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                className={optionClass}
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    background: backgroundColor,
                                    border: showExplanation && optionChar === question.answer ? '1px solid var(--success)' :
                                        showExplanation && optionChar === selectedOption ? '1px solid var(--danger)' :
                                            '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                                onClick={() => handleOptionClick(idx)}
                                disabled={showExplanation}
                            >
                                <div style={{ marginRight: '1rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>
                                    {optionChar}.
                                </div>
                                {option}
                            </button>
                        )
                    })}
                </div>
            </div>

            {showExplanation && (
                <div className="glass-card animate-fade-in mb-8" style={{ background: 'rgba(59, 130, 246, 0.05)', borderLeft: '4px solid var(--accent-primary)' }}>
                    <h4>Explanation:</h4>
                    <p>{question.explain}</p>
                </div>
            )}

            {showExplanation && (
                <div className="flex justify-center animate-fade-in">
                    <button
                        className="btn btn-primary"
                        onClick={nextQuestion}
                        disabled={currentQuestion === totalQuestions - 1}
                    >
                        {currentQuestion === totalQuestions - 1 ? 'End of Module' : 'Next Question &rarr;'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ScreeningTest;
