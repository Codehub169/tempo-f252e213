export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic server-side validation (can be expanded)
    if (!name || !email || !message || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid input. Please fill all fields correctly.' });
    }

    // Simulate email sending process (dummy implementation)
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // In a real application, you would integrate with an email service here.
    // For now, we'll just simulate a successful submission.
    // Example: await sendEmail({ to: process.env.EMAIL_TO, from: process.env.EMAIL_FROM, subject: 'New Contact Form Submission', html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>` });

    return res.status(200).json({ message: 'Message sent successfully! We will get back to you soon.' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
