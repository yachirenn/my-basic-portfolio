export default function AboutSection() {
  return (
    <section className="min-h-screen px-4 py-10 flex flex-col justify-center gap-4">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-bold pb-6">Rendy Sulistyawan</h1>
          <p className="text-gray-400 text-2xl font-mono">
            Hello, I am yachirenn. Rendy Sulistyawan, commonly known as Rendy. 
            I am a student majoring in System, Information, Network, and Application, 
            with a particular interest in web development. 
            I enjoy creating digital solutions that are simple yet effective, 
            particularly using JavaScript, and I am eager to continue learning about the latest technologies. 
            I am seeking opportunities to contribute in an environment that fosters creativity and innovation.
          </p>
        </div>

        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-600">
          <img src='public/images/acheroninfinity.png' alt="Yachirenn" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
