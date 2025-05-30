import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid input. Please fill all fields correctly.' });
    }

    // Simulate email sending process (dummy implementation)
    console.log('Received contact form submission (simulation):');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // In a real application, you would integrate with an email service here.
    // For now, we'll just simulate a successful submission.
    
    // Simulate a short delay as if an email was being sent
    await new Promise(resolve => setTimeout(resolve, 500));

    return res.status(200).json({ success: true, message: 'Message sent successfully! We will get back to you soon (simulation).' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
