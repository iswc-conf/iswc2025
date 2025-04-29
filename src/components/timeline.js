import React from "react";

export const Timeline = () => {
    const events = [
      { date: '18-Feb-25', title: 'Workshop proposals', color: '#57D131' },
      { date: '4-Mar-25', title: 'Semantic Web Challenge proposals', color: '#57D131' },
      { date: '11-Mar-25', title: 'Workshop notifications', color: '#4E84D8' },
{ date: '16-Mar-25', title: 'Semantic Web Challenges notifications', color: '#4E84D8' },
      { date: '6-May-25', title: 'Abstracts (Research, In-use, and Resource tracks)', color: '#57D131' },
      { date: '13-May-25', title: 'Papers (Research, In-use, and Resource tracks)', color: '#57D131' },
      { date: '20-May-25', title: 'Tutorial proposals', color: '#57D131' },
      { date: '3-Jun-25', title: 'Doctoral Consortium submissions', color: '#57D131' },
      { date: '10-Jun-25', title: 'Tutorial notifications', color: '#4E84D8' },
      { date: '17-20 Jun-25', title: 'Rebuttal (Research, In-use, and Resource tracks)', color: '#000000' },
      { date: '30-Jun-25', title: 'Journal Sessions Proposals', color: '#57D131' },
      { date: '8-Jul-25', title: 'Doctoral Consortium notifications', color: '#4E84D8' },
      { date: '17-Jul-25', title: 'Paper notifications (Research, In-use, and Resource tracks)', color: '#4E84D8' },
      { date: '1-Jul-25', title: 'Industry papers submissions', color: '#57D131' },
      { date: '1-Jul-25', title: 'Dagstuhl-style workshop submission', color: '#57D131' },
      { date: '17-Jul-25', title: 'Journal Sessions Notifications', color: '#4E84D8' },
      { date: '29-Jul-25', title: 'Industry papers notifications', color: '#4E84D8' },
      { date: '31-Jul-25', title: 'Camera-ready papers (Research, In-use, and Resource tracks)', color: '#E32D20' },
      { date: '31-Jul-25', title: 'Camera-ready - Doctoral Consortium', color: '#912C8B' },
      { date: '31-Jul-2', title: 'Poster & Demo submissions', color: '#57D131' },
      { date: '28-Aug-25', title: 'Poster & Demo notifications', color: '#4E84D8' },
      { date: '28-Aug-25', title: 'Workshop papers notifications', color: '#4E84D8' },
      // { date: '2-Sep-25', title: 'Student grants [TO DO]', color: '#000000' },
      // { date: '16-Sep-25', title: 'End of Early Registration', color: '#000000' },
      { date: '11-Sep-25', title: 'Camera-ready - Industry', color: '#912C8B' },
      { date: '11-Sep-25', title: 'Camera-ready - Poster&Demo', color: '#912C8B' },
      // { date: '31-Oct-25', title: 'End of Standard Registration', color: '#000000' },
      { date: '2-3 Nov-25', title: 'Workshops & Tutorials', color: '#000000'},
      { date: '4-6 Nov-25', title: 'Main conference', color: '#000000' },
    ];

    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
        <div className="my-2 mx-4 mb-8">
            <div className="container">
                <ul className="list-unstyled">
                    <li>
                        <span className="me-2" style={{ color: '#57D131' }}><b>&#8226;</b></span>
                        <span style={{ color: '#57D131' }}><b>Submissions</b></span>
                    </li>
                    <li>
                        <span className="me-2" style={{ color: '#4E84D8' }}><b>&#8226;</b></span>
                        <span style={{ color: '#4E84D8' }}><b>Notifications</b></span>
                    </li>
                    <li>
                        <span className="me-2" style={{ color: '#E32D20' }}><b>&#8226;</b></span>
                        <span style={{ color: '#E32D20' }}><b>Camera-Ready (impacting SPRINGER)</b></span>
                    </li>
                    <li>
                        <span className="me-2" style={{ color: '#912C8B' }}><b>&#8226;</b></span>
                        <span style={{ color: '#912C8B' }}><b>Camera-Ready (CEUR companion volume)</b></span>
                    </li>
                    <li>
                        <span className="me-2" style={{ color: '#000000' }}><b>&#8226;</b></span>
                        <span style={{ color: '#000000' }}><b>All other</b></span>
                    </li>
                </ul>
            </div>
            <br/>
            <div className="container my-2 mx-4 mb-8">
              {events.map((event, index) => (
                <div key={index} className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                  <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">{event.date}</time>
                    <div className="text-xl font-[600] ml-4" style={{ color: event.color }}>{event.title}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">18-Feb-25</time>
                    <div className="text-xl font-[600] text-[#57D131] ml-4 text-[#e94607]">Workshop Proposals</div>
                </div>
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">18-Feb-25</time>
                    <div className="text-xl font-[600] text-[#57D131] ml-4 text-[#e94607]">Semantic Web Challenge proposals</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">11-Mar-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Workshop Notifications</div>
                </div>
            </div> */}


            {/* <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">6-May-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Abstracts (Research, In-use, and Resource tracks)</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">13-May-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Papers (Research, In-use, and Resource tracks)</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">20-May-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Tutorial proposals</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">3-June-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Doctoral Consortium submissions</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">8-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Doctoral Consortium notification</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">17-20-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Rebuttal</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">17-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Paper notifications (Research, In-use, and Resource tracks)</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">31-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Camera-ready - Doctoral Consortium</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">1-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Industry papers submissions</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">1-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Industry papers submissions</div>
                </div>
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">1-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Dagstuhl style workshop submission</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">31-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Poster & Demo submissions</div>
                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">25-July-25</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Camera-ready papers (Research, In-use, and Resource tracks)</div>
                </div>
            </div>



            <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-[#e94607] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[118px] h-6 mb-3 sm:mb-0 text-[#e94607] bg-emerald-100 rounded-full ml-4 lg:ml-0">Nov 4-6, 2025</time>
                    <div className="text-xl font-[600] text-[#0f52ba] ml-4 text-[#e94607]">Main Conference</div>
                </div>
            </div> */}
        </div>
        </div>
      </>
    );
};
















// import React from "react";

// export const Timeline = () => {
//     return(
// <div className="my-2 mx-4 mb-8">
// <div className="relative pl-8 sm:pl-32 py-2 md:py-4 md:pt-6 group">
// <div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//   <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-red-600 bg-emerald-100 rounded-full ml-4 lg:ml-0 line-through">Aug 2025</time>
//   <time className="sm:absolute left-0 translate-y-7 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0 ">Aug 2025</time>
//   <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Full paper Submission</div>
// </div>
// </div>


// <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
// <div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//   <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
//   <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Acceptance / Rejection Notification</div>
// </div>
// </div>

// <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
// <div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//   <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
//   <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Registration</div>
// </div>
// </div>


// <div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
// <div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//   <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
//   <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Final Paper/ Camera Ready Submission date</div>
// </div>
// </div>

// <div className="relative pl-8 sm:pl-32 py-2 md:pt-4 group">
// <div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
//   <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[118px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Nov 2-6, 2025</time>
//   <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Conference Date</div>
// </div>
// </div>
// </div>
//     );
// }