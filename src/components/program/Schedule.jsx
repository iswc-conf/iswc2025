
export const Schedule = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    };

    const wrapperStyle = {
        width: '560px', // Set the width to match the iframe
    };

    const legendStyle = {
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'sans-serif',
        width: '100%', // Take up the full width of the wrapper
        boxSizing: 'border-box', // Ensure padding is included in the width
        textAlign: 'left', // Align text to the left
    };

    const legendItemStyle = {
        margin: '8px 0',
        color: '#333',
    };



    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Schedule</p>
                <p>We will soon release the Whova-generated program.</p>
                <p>For the time being, here is a sneak peek at all the sessions:</p>

                <div style={containerStyle}>
                    <div style={wrapperStyle}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=MDE3YTRiNmU5YWFjYTk0Zjc4ZDgyNTMwNjIxMzZlN2U0ZmNkNjRjMjFlYmZkZjM1NTVmNWRkYWUzM2Y3ZjNiOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af&mode=AGENDA&dates=20251102/20251106" style={{ border: '1px solid #777'}} width="800" height="600" frameborder="0" scrolling="no" ></iframe>
                    <div style={legendStyle}>
                    <p style={legendItemStyle}><strong>WS</strong> - workshop</p>
                    <p style={legendItemStyle}><strong>T</strong> - tutorial</p>
                    <p style={legendItemStyle}><strong>DS</strong> - Dagsthul style workshop</p>
                    <p style={legendItemStyle}><strong>SWC</strong> - Semantic Web Challenge</p>
                    <p style={legendItemStyle}><strong>J</strong> - Journal Session</p>
                    <p style={legendItemStyle}><strong>S</strong> - Main track Session</p>
                    </div>
                </div>
                </div>
                
                
            </div>
        </>
    )
}