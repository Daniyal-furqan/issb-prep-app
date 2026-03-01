const Dashboard = ({ data, onSelectSegment }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-8">
                <span className="badge badge-blue mb-4">Official Preparation</span>
                <h1>{data.app_title}</h1>
                <p className="mt-4" style={{ maxWidth: '600px', margin: '1rem auto' }}>
                    Interactive training modules for Screening, Psychological Tests, GTO, and Deputy President interviews. Practical, active scenarios to help you prepare.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full" style={{ maxWidth: '800px' }}>
                {data.segments.map((segment, index) => (
                    <div
                        key={segment.segment_id}
                        className={`glass-card animate-fade-in stagger-${index % 3 + 1}`}
                        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
                        onClick={() => onSelectSegment(segment.segment_id)}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 style={{ margin: 0 }}>{segment.title}</h3>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#60a5fa',
                                    fontWeight: 'bold'
                                }}
                            >
                                0{index + 1}
                            </div>
                        </div>

                        <p style={{ flexGrow: 1 }}>{segment.purpose}</p>

                        <div className="mt-4">
                            <span className="btn btn-outline" style={{ width: '100%', padding: '0.5rem' }}>
                                Start Practice &rarr;
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
