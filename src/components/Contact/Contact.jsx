import "../../styles/contact/contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <form method="POST">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Samira Mohammadi"
            required
          />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@name.com"
            required
          />
        </div>
        <div>
          <label for="enquiry">Type of enquiry</label>
          <select name="enquiry" id="enquiry" required>
            <option value="">--Please choose an option--</option>
            <option value="1">Freelance project proposal</option>
            <option value="2">Portfolio request</option>
          </select>
        </div>
        <div>
          <label for="message">Your message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
