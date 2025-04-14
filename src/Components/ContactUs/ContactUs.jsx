import React, { useState, useEffect } from "react";
import img from "../../Assets/contactus.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    category: "",
    concern: "",
    caseHistory: "",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[#f8f5ee] text-[#1b1818] font-nunito pt-50 p-4 relative overflow-hidden">
        <div className="relative pt-[55px] text-[42px] font-bricolage text-[#5d2446] mb-2 z-10">Contact Us</div>
        <p className="text-[18px] text-[#2c3c58] mb-6 z-10 relative">
          Feel free to contact us any time. We will get back to you as soon as we can.
        </p>

        {/* Background image */}
        <div 
          className="absolute top-[280px] left-0 w-full h-[65vh] bg-top bg-no-repeat bg-cover z-0"
          style={{ backgroundImage: `url(${img})` }}
        />

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-3xl shadow-md text-[#999] mb-6 z-10 relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border border-[#8d8e9e] text-[#1b1818] font-poppins focus:bg-[#121D2A] focus:text-[#d8d8d8]"
            placeholder="Name"
          />

          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border border-[#8d8e9e] focus:bg-[#121D2A] focus:text-[#d8d8d8]"
            placeholder="Phone Number"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border border-[#8d8e9e] focus:bg-[#121D2A] focus:text-[#d8d8d8]"
            placeholder="E-Mail Id"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border border-[#8d8e9e] focus:bg-[#121D2A] focus:text-[#d8d8d8]"
          >
            <option value="">Select the category</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>

          <select
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-full border border-[#8d8e9e] focus:bg-[#121D2A] focus:text-[#d8d8d8]"
          >
            <option value="">Select Your Concern</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="caseHistory"
            value={formData.caseHistory}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-2xl border border-[#8d8e9e] h-32 resize-none focus:bg-[#121D2A] focus:text-[#d8d8d8]"
            placeholder="Brief Case History"
          />

          <button
            type="submit"
            className="w-full bg-[#f2c438] hover:bg-[#e6b82e] text-black font-bold py-3 rounded-xl transition-colors duration-300"
          >
            CONTINUE
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full relative bg-[#f8f5ee] h-[1300px] overflow-hidden text-center text-[24px] text-[#1b1818] font-nunito">
      <div className="absolute top-[183px] left-[95px] text-[82px] font-bricolage text-[#5d2446] text-left z-10">
        Contact Us
      </div>
      <div className="absolute top-[293px] left-[95px] text-[28px] text-[#2c3c58] text-left inline-block w-[533px] z-10">
        Feel free to contact us any time. We will get back to you as soon as we can.
      </div>

      <div
        className="absolute top-[480px] left-0 w-[100vw] h-[820px] overflow-auto bg-top bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute top-0 left-[-241px] w-[800px] h-[600px]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute top-[329px] left-[595.81px] shadow-[0_5px_20px_rgba(0,0,0,0.25)] rounded-[80px] bg-[#f8f5ee] w-[789.9px] h-[942px] overflow-hidden text-left text-[23.7px] text-[#999] z-20"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="absolute top-[50.5px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[711.2px] px-[33.9px] py-[10px] text-[#1b1818] font-poppins focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
          placeholder="Name"
        />

        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="absolute top-[141.66px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[706.2px] px-[33.9px] py-[10px] focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
          placeholder="Phone Number"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="absolute top-[229.88px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[707.3px] px-[34.5px] py-[11.1px] focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
          placeholder="E-Mail Id"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="absolute top-[320.28px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[707.3px] px-[34.5px] py-[11.1px] focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
        >
          <option value="">Select the category</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>

        <select
          name="concern"
          value={formData.concern}
          onChange={handleChange}
          className="absolute top-[410.69px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[707.3px] px-[34.5px] py-[11.1px] focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
        >
          <option value="">Select Your Concern</option>
          <option value="technical">Technical Issue</option>
          <option value="billing">Billing</option>
          <option value="other">Other</option>
        </select>

        <textarea
          name="caseHistory"
          value={formData.caseHistory}
          onChange={handleChange}
          className="absolute top-[501.11px] left-[39.16px] rounded-[35.12px] border border-[#8d8e9e] box-border w-[707.3px] h-[183.8px] px-[34.53px] py-[11.13px] focus:bg-[#121D2A] focus:text-[#d8d8d8] transition-colors duration-300"
          placeholder="Brief Case History"
        />

        <button
          type="submit"
          className="absolute top-[743.98px] left-[160.55px] rounded-[15.05px] bg-[#f2c438] w-[516.8px] h-[71.5px] flex items-center justify-center px-[87.8px] py-[23.8px] text-[24.69px] text-black hover:bg-[#e6b82e] transition-colors duration-300"
        >
          <b className="uppercase">CONTINUE</b>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
