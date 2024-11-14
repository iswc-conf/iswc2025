import img1 from "./assests/nara.jpg"
export const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src={img1} alt="Background" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center m-2 lg:m-0">
        <h1 class="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4">ISWC 2025</h1>
        <h1 class="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4">THE 24th INTERNATIONAL SEMANTIC WEB CONFERENCE</h1>
        <p class="text-2xl font-semibold mb-6">Date:&nbsp;&nbsp;November 2-6,&nbsp;&nbsp;2025</p>
        <p class="text-2xl font-semibold mb-6">Nara,&nbsp;&nbsp;Japan</p>
        <p class="text-xl font-semibold  mb-6">Venue:&nbsp;&nbsp;Nara Prefectural Convention Center</p>
      </div>
    </div>

  );
}