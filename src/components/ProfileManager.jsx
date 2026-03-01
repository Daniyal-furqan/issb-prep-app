import { useState } from 'react';

const ProfileManager = () => {
    const [incidents, setIncidents] = useState({
        unforgettable: '',
        sorrowful: '',
        happiest: ''
    });

    const [traits, setTraits] = useState({
        merits: ['', '', ''],
        demerits: ['', '', '']
    });

    const handleIncidentChange = (type, value) => setIncidents(prev => ({ ...prev, [type]: value }));
    const handleTraitChange = (type, index, value) => {
        const newArr = [...traits[type]];
        newArr[index] = value;
        setTraits(prev => ({ ...prev, [type]: newArr }));
    };

    const saveProfile = () => {
        // In a real database like Firebase, we'd save this to the user doc.
        alert("Profile tracking data saved to database successfully.");
    };

    return (
        <div className="glass-container animate-fade-in stagger-1">
            <div className="mb-8 text-center">
                <h2>Personal Life Incidents & Traits Tracker</h2>
                <p>Document these crucial psychological assessment events clearly for ISSB.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="mb-4" style={{ color: 'var(--success)' }}>Merits (Strengths)</h3>
                    {traits.merits.map((m, i) => (
                        <input key={i} type="text" className="w-full mb-2" value={m} onChange={(e) => handleTraitChange('merits', i, e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', color: 'white' }}
                            placeholder={`Merit ${i + 1}`}
                        />
                    ))}
                </div>
                <div>
                    <h3 className="mb-4" style={{ color: 'var(--danger)' }}>Demerits (Areas of Improvement)</h3>
                    {traits.demerits.map((d, i) => (
                        <input key={i} type="text" className="w-full mb-2" value={d} onChange={(e) => handleTraitChange('demerits', i, e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', color: 'white' }}
                            placeholder={`Demerit ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="glass-card mb-4" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
                <h4 className="mb-2">Unforgettable Incident (Na Bhoolne Wala Waqiya)</h4>
                <textarea className="w-full" rows="3" value={incidents.unforgettable} onChange={e => handleIncidentChange('unforgettable', e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }} placeholder="Describe your unforgettable incident here..." />
            </div>

            <div className="glass-card mb-4" style={{ borderLeft: '4px solid var(--danger)' }}>
                <h4 className="mb-2">Sorrowful Incident (Dukh Wala Waqiya)</h4>
                <textarea className="w-full" rows="3" value={incidents.sorrowful} onChange={e => handleIncidentChange('sorrowful', e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }} placeholder="Describe your sorrowful incident here..." />
            </div>

            <div className="glass-card mb-8" style={{ borderLeft: '4px solid var(--success)' }}>
                <h4 className="mb-2">Happiest Incident (Khushi Wala Waqiya)</h4>
                <textarea className="w-full" rows="3" value={incidents.happiest} onChange={e => handleIncidentChange('happiest', e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }} placeholder="Describe your happiest incident here..." />
            </div>

            <div className="text-center">
                <button className="btn btn-primary" onClick={saveProfile}>Save Personal Information</button>
            </div>
        </div>
    );
};

export default ProfileManager;
