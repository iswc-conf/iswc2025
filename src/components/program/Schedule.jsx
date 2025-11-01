import WhovaAgenda from "./WhovaAgenda";
import FloorMap from "./schedule/FloorMap.pdf"

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

                <p>Google Calendar: <a href="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=MDE3YTRiNmU5YWFjYTk0Zjc4ZDgyNTMwNjIxMzZlN2U0ZmNkNjRjMjFlYmZkZjM1NTVmNWRkYWUzM2Y3ZjNiOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af&mode=AGENDA&dates=20251102/20251106"
                    target="_blank"
                    style={{ 'color': '#e94607', 'text-decoration': 'underline' }} rel="noreferrer">
                    here
                </a></p>

                <br />
                <div style={{ width: '100%', height: '800px' }}>
                    <object
                        data={FloorMap}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        aria-label="PDF viewer"
                    >
                        <p>
                        Your browser does not support embedding PDFs.
                        <a href="/my-document.pdf">Download the PDF instead</a>.
                        </p>
                    </object>
                </div>

                <br />

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

                <WhovaAgenda />

                
            </div>
        </>
    )
}