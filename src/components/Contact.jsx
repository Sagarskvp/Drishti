import { useState, useEffect, useMemo } from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhTNyTnT8OiMk8rORHdvWg4GNaonxy6rayo2Y6b1_g9oeSTOiNvjWqruXDgdzcWTlx/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    altPhone: '',
    date: '',
    duration: '',
    slot: '',
    type: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  // Format hour number (0-24) to 12-hour string (e.g., 14 -> '2:00 PM')
  const formatTime = (hour) => {
    if (hour === 24) return '12:00 AM (Next Day)';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const h = hour % 12 || 12;
    return `${h}:00 ${ampm}`;
  };

  // Dynamically calculate available time slots based on Date and Duration
  const availableSlots = useMemo(() => {
    if (!formData.date || !formData.duration) return [];

    const selectedDate = new Date(formData.date);
    const today = new Date();
    const duration = parseInt(formData.duration, 10);

    // Check if the selected date is today
    const isToday =
      selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear();

    let startHour = 9; // Default start time: 9:00 AM for future dates

    if (isToday) {
      // If today, start from the next full hour + 1 to give them buffer, or just next hour
      const nextHour = today.getHours() + (today.getMinutes() > 0 ? 1 : 0);
      startHour = Math.max(9, nextHour);
    }

    // Studio closes at 11 PM generally, or allow up to 24 hours logic
    const endHour = 24 - duration;

    const slots = [];
    for (let i = startHour; i <= endHour; i++) {
      slots.push(`${formatTime(i)} - ${formatTime(i + duration)}`);
    }
    return slots;
  }, [formData.date, formData.duration]);

  // Set the first available slot as default when slots change
  useEffect(() => {
    if (availableSlots.length > 0 && !availableSlots.includes(formData.slot)) {
      setFormData(prev => ({ ...prev, slot: availableSlots[0] }));
    } else if (availableSlots.length === 0) {
      setFormData(prev => ({ ...prev, slot: '' }));
    }
  }, [availableSlots, formData.slot]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
      alert("Please add your Google Apps Script URL in Contact.jsx before submitting!");
      return;
    }

    setStatus('loading');

    const formParams = new URLSearchParams();
    formParams.append('name', formData.name);
    formParams.append('phone', formData.phone);
    formParams.append('altPhone', formData.altPhone);
    formParams.append('date', formData.date);
    formParams.append('duration', formData.duration + ' Hours');
    formParams.append('slot', formData.slot);
    formParams.append('type', formData.type);
    formParams.append('message', formData.message);

    try {
      // mode: 'no-cors' suppresses CORS errors for simple form submissions to Google Scripts
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formParams,
      });

      // with no-cors, the response is opaque, so we just assume success if it didn't throw an error.
      setStatus('success');
      setFormData({ name: '', phone: '', altPhone: '', date: '', duration: '2', slot: '', type: 'Wedding', message: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  // Get minimum date (today) for the date picker
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Reach Out to Us</h3>

            <div className="space-y-6 mb-10">
              <a href="tel:+919876543210" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-zinc-800 text-amber-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Call Us</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </a>

              <a href="https://wa.me/919876543210" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-zinc-800 text-amber-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">WhatsApp</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 bg-zinc-800 text-amber-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Studio Location</p>
                  <p className="text-lg font-medium">123 Studio Lane, Mumbai, MH</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.935108422119!2d72.8256372!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-950 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-2">Book a Shoot</h4>
              <p className="text-zinc-400 mb-8 max-w-sm">
                Select your preferred date, duration, and time slot to secure your moment.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Alternative Number (Optional)</label>
                    <input name="altPhone" value={formData.altPhone} onChange={handleChange} type="tel" placeholder="+91 87654 32109" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Event Date</label>
                    <input required name="date" min={todayString} value={formData.date} onChange={handleChange} type="date" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Type of Shoot</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors">
                      <option>Wedding</option>
                      <option>Pre-Wedding</option>
                      <option>Baby Shoot</option>
                      <option>Events</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Duration (Hours)</label>
                    <input required name="duration" value={formData.duration} onChange={handleChange} type="number" min="1" max="24" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Select Time Slot</label>
                    <select
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors disabled:opacity-50"
                      disabled={!formData.date || availableSlots.length === 0}
                      required
                    >
                      {!formData.date && <option value="">Pick a date first</option>}
                      {formData.date && availableSlots.length === 0 && <option value="">No slots available today</option>}
                      {availableSlots.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>


                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us more about your vision..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  {status === 'loading' ? 'Sending...' : 'Confirm Booking'}
                </button>

                {status === 'success' && (
                  <p className="text-green-500 text-center mt-4">Thank you! Your shoot details have been scheduled.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-center mt-4">Something went wrong. Please try again or WhatsApp us.</p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
