import '../styles/components/demoform.css'

function DemoForm() {
  return (
    <section className="demo-form-section">
      <form className="demo-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="you@company.com" />
        </label>

        <label>
          Company
          <input type="text" placeholder="Company name" />
        </label>

        <label>
          Message
          <textarea placeholder="What are you trying to improve?" />
        </label>

        <button className="btn-3d" type="submit">Book Free Demo</button>
      </form>
    </section>
  )
}

export default DemoForm
