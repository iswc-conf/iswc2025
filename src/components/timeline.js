import React from "react";

export const Timeline = () => {
    return(
<div className="my-2 mx-4 mb-8">
<div className="relative pl-8 sm:pl-32 py-2 md:py-4 md:pt-6 group">
<div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-red-600 bg-emerald-100 rounded-full ml-4 lg:ml-0 line-through">Aug 2025</time>
  {/* <time className="sm:absolute left-0 translate-y-7 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0 ">Aug 2025</time> */}
  <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Full paper Submission</div>
</div>
</div>



<div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
<div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
  <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Acceptance / Rejection Notification</div>
</div>
</div>

<div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
<div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
  <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Registration</div>
</div>
</div>


<div className="relative pl-8 sm:pl-32 py-2 md:py-4 group">
<div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[110px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Aug 2025</time>
  <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Final Paper/ Camera Ready Submission date</div>
</div>
</div>

<div className="relative pl-8 sm:pl-32 py-2 md:pt-4 group">
<div className="flex flex-col sm:flex-row items-start  group-last:before:hidden before:absolute before:left-7 sm:before:left-5 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-7 sm:after:left-5 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-bold uppercase w-[118px] h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full ml-4 lg:ml-0">Nov 2-6, 2025</time>
  <div className="text-xl  font-[600] text-[#0f52ba] ml-4">Conference Date</div>
</div>
</div>
</div>
    );
}