import WhovaAgenda from "./WhovaAgenda";

export const Schedule = () => {
    const containerStyle = {
        display: 'flex',
        padding: '5px',
    };

    const wrapperStyle = {
        width: '560px', // Set the width to match the iframe
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

                <p>Google Calendar: <a href="https://calendar.google.com/calendar/embed?src=017a4b6e9aaca94f78d8253062136e7e4fcd64c21ebfdf3555f5ddae33f7f3b9%40group.calendar.google.com&ctz=Asia%2FTokyo"
                    target="_blank"
                    style={{ 'color': '#e94607', 'text-decoration': 'underline' }} rel="noreferrer">
                    here
                </a></p>

                <WhovaAgenda />

                <div style={containerStyle}>
                    <div style={wrapperStyle}>
                        <p style={legendItemStyle}><strong>WS</strong> - workshop</p>
                        <p style={legendItemStyle}><strong>T</strong> - tutorial</p>
                        <p style={legendItemStyle}><strong>DS</strong> - Dagsthul style workshop</p>
                        <p style={legendItemStyle}><strong>SWC</strong> - Semantic Web Challenge</p>
                        <p style={legendItemStyle}><strong>J</strong> - Journal Session</p>
                        <p style={legendItemStyle}><strong>S</strong> - Main track Session</p>
                    </div>
                </div>
            </div>
        </>
    )
}