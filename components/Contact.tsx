export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-black px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Contact</span>
        </h2>

        <a
          href="mailto:info@capcivic.com?subject=CapCivic%20Inquiry"
          className="inline-block border-2 border-black bg-white px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
        >
          Interested in learning more about how we can help your organization?
          <br />
          <em>Get in touch.</em>
        </a>
      </div>
    </section>
  );
}
