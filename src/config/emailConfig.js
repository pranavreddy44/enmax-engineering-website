// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new service (Gmail recommended)
// 4. Create an email template with the following variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone
//    - {{message}} - Message content
//    - {{to_email}} - Recipient email (pranavkonda12@gmail.com)
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const emailConfig = {
  serviceId: 'service_enmax_contact', // Replace with your EmailJS Service ID
  templateId: 'template_contact_form', // Replace with your EmailJS Template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Replace with your EmailJS Public Key
};

// Example email template for EmailJS:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

Best regards,
Enmax Engineering Website
*/