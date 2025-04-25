export default function Bloc() {
  return (
    <div
      className="w-full relative flex items-center flex-col lg:flex-row"
      id="about"
    >
      <img
        className="lg:w-1/2 "
        src="https://techakim.com/sam/tg/7268/li/imgs/p-2.png"
        alt="port image"
      />

      <div className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-[#222222]">
        <p className="text-gray-400 text-sm mb-1">FullStack Developer</p>
        <h2 className="text-white md:text-5xl text-2xl font-bold mb-4">
          Samuel Abera
        </h2>
        <p className="text-gray-400 text-md mb-6">
          I am a dedicated and innovative FullStack Developer passionate about
          creating impactful digital experiences. With a keen eye for detail and
          a commitment to excellence, I specialize in designing and developing
          solutions that combine creativity with functionality.
        </p>
        <div>
          <button className="md:px-6 px-4 py-2 text-white font-semibold  outline outline-green-400 rounded-full hover:bg-green-500 transform trasition delay-300">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
