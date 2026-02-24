import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
  <section id="contact" className="py-28 bg-[#0B0B0F] text-white">
       {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Open to full-time roles, research collaborations, and freelance opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10 text-sm">

          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 mt-1 text-white/60" />
            <div>
              <p className="text-white/40">Email</p>
              <p className="text-white font-medium">emiliodaniel02@hotmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 mt-1 text-white/60" />
            <div>
              <p className="text-white/40">Phone</p>
              <p className="text-white font-medium">+1 (807) 357-1844 - Whatsapp</p>
              <div>
              <p className="text-white/40">Phone</p>
              <p className="text-white font-medium">+593 990327688 - Mobile</p>
            </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-1 text-white/60" />
            <div>
              <p className="text-white/40">Location</p>
              <p className="text-white font-medium">Thunder Bay, ON</p>
              <p className="text-white font-medium">Quito, Ecuador</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-white/40 mb-3">Available for</p>
            <ul className="space-y-2 text-white/70">
              <li>Full-time opportunities</li>
              <li>Freelance projects</li>
              <li>Research collaborations</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="border border-white/10 p-8 rounded-2xl backdrop-blur-md bg-white/5">

                  {/* Form Intro */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Let’s Create Something Together
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Tell me about your project, opportunity, or just say hello!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <Input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white"
            />

            <Input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white"
            />

            <Textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-transparent border-white/20 text-white placeholder:text-white/40 focus:border-white"
            />

            <button
              type="submit"
              className="w-full mt-4 py-3 border border-white/20 text-white text-sm tracking-wide hover:bg-white hover:text-black transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  </section>
);
};

export default Contact;
