export default function ContactSection() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center">Get in Touch</h1>

      <div className="p-4 bg-gray-800 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-colors duration-300">
        <p className="text-white text-lg text-center">
          Feel free to reach out to me for any inquiries, collaborations, or just to say hello! You can contact me through the following channels:
        </p>
      </div>

      <ul className="list-disc list-inside text-white text-lg">
        <li>Email: <a href="mailto:rendysulistyawan11@gmail.com">rendysulistyawan11@gmail.com</a>
          <span className="text-blue-500 hover:underline">
            (Send me an email)
          </span>
        </li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/rendysulistyawan" target="_blank" rel="noopener noreferrer">linkedin.com/in/rendysulistyawan</a>
          <span className="text-blue-500 hover:underline">
            (Connect with me on LinkedIn)
          </span>
        </li>
        <li>GitHub: <a href="https://github.com/yachirenn" target="_blank" rel="noopener noreferrer">github.com/yachirenn</a>
          <span className="text-blue-500 hover:underline">
            (View my GitHub profile)
          </span>
        </li>
        <li>Twitter: <a href="https://twitter.com/rndzmusic_" target="_blank" rel="noopener noreferrer">@rndzmusic_</a>
          <span className="text-blue-500 hover:underline">
            (Follow me on Twitter)
          </span>
        </li>
      </ul>
      <p className="text-white text-lg">
        I'm always open to new opportunities and collaborations, so don't hesitate to get in touch!
      </p>
    </section>
  );
}