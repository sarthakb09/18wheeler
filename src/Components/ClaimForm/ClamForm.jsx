import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../Assets/back.png';
import AttachmentIcon from '../../Assets/attachment.png';
import DropdownIcon from '../../Assets/dropdown.svg';

const ClaimForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        state: '',
        accidentDate: '',
        accidentTime: '',
        accidentLocation: '',
        accidentDescription: '',
        otherVehicles: {
            truck: false,
            bus: false,
            car: false,
            others: false
        },
        documents: {
            policeReport: false,
            medicalReport: false,
            accidentPhotos: false
        },
        files: [],
        agreeToTerms: false,
        isHuman: false,
        needHelp: false
    });

    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        }
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.some(file => file.size > 5 * 1024 * 1024)) {
            alert('File size should not exceed 5MB');
            return;
        }
        setFormData(prev => ({
            ...prev,
            files: [...prev.files, ...files]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms || !formData.isHuman) {
            alert('Please agree to terms and verify you are human');
            return;
        }
        
        // Combine date and time for submission if needed
        const combinedData = {
            ...formData,
            accidentDateTime: formData.accidentDate && formData.accidentTime ? 
                `${formData.accidentDate}T${formData.accidentTime}` : ''
        };
        
        console.log('Form submitted:', combinedData);
    };

    return (
        <div className="w-full relative bg-[#f8f5ee] min-h-screen overflow-hidden text-left text-[23.63px] text-[#2c3c58] font-nunito">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center mb-8">
                    <img
                        src={BackIcon}
                        alt="Back"
                        className="w-[54px] h-[54px] cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-['EB_Garamond'] text-[#5d2446] text-center mb-12">
                    Big Rig Lawsuit- Free Case Review
                </h1>

                <form onSubmit={handleSubmit} className="space-y-12">

                    <div className="space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-['EB_Garamond'] text-[#5d2446] underline text-center">
                            Personal Information
                        </h2>

                        <div className="space-y-6 max-w-[970px] mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone number"
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="E mail Address"
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-12 text-[#646464] border-none outline-none appearance-none"
                                >
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}

                                </select>
                                {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    <img src={DropdownIcon} alt="" className="w-[37.8px] h-[37.8px]" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-['EB_Garamond'] text-[#5d2446] underline text-center">
                            Accident Details
                        </h2>

                        <div className="space-y-6 max-w-[970px] mx-auto">
                            <div className="relative">
                                <label htmlFor="accidentDate" className="block mb-2 text-xl font-medium">Date of Accident</label>
                                <input
                                    type="date"
                                    id="accidentDate"
                                    name="accidentDate"
                                    value={formData.accidentDate}
                                    onChange={handleInputChange}
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>
                            
                            <div className="relative">
                                <label htmlFor="accidentTime" className="block mb-2 text-xl font-medium">Time of Accident</label>
                                <input
                                    type="time"
                                    id="accidentTime"
                                    name="accidentTime"
                                    value={formData.accidentTime}
                                    onChange={handleInputChange}
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="accidentLocation"
                                    value={formData.accidentLocation}
                                    onChange={handleInputChange}
                                    placeholder="Accident Location (Street, City)"
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="accidentDescription"
                                    value={formData.accidentDescription}
                                    onChange={handleInputChange}
                                    placeholder="What happened?"
                                    className="w-full h-[72px] rounded-[28px] bg-white pl-[45px] pr-4 text-[#646464] border-none outline-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium">Other vehicle involved</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="otherVehicles.truck"
                                            checked={formData.otherVehicles.truck}
                                            onChange={handleCheckboxChange}
                                            className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                        />
                                        <span>18-Wheeler Truck</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="otherVehicles.bus"
                                            checked={formData.otherVehicles.bus}
                                            onChange={handleCheckboxChange}
                                            className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                        />
                                        <span>Bus</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="otherVehicles.car"
                                            checked={formData.otherVehicles.car}
                                            onChange={handleCheckboxChange}
                                            className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                        />
                                        <span>Car</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="otherVehicles.others"
                                            checked={formData.otherVehicles.others}
                                            onChange={handleCheckboxChange}
                                            className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                        />
                                        <span>Others</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-['EB_Garamond'] text-[#5d2446] underline text-center">
                            Supporting Documents
                        </h2>

                        <div className="space-y-6 max-w-[970px] mx-auto">
                            <p className="text-xl font-medium">Upload Files (Max 5MB each, JPG/PNG/PDF)</p>

                            <div className="relative rounded-[28px] bg-white p-4 h-[122px]">
                                <div className="flex items-center space-x-4">
                                    <div className="w-[37.8px] h-[37.8px]">
                                        <img src={AttachmentIcon} alt="" className="w-[23.9px] h-[23.9px]" />
                                    </div>
                                    <input
                                        type="file"
                                        multiple
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="documents.policeReport"
                                        checked={formData.documents.policeReport}
                                        onChange={handleCheckboxChange}
                                        className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                    />
                                    <span>Police Report</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="documents.medicalReport"
                                        checked={formData.documents.medicalReport}
                                        onChange={handleCheckboxChange}
                                        className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                    />
                                    <span>Medical Report</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="documents.accidentPhotos"
                                        checked={formData.documents.accidentPhotos}
                                        onChange={handleCheckboxChange}
                                        className="w-[18.9px] h-[18.9px] rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                                    />
                                    <span>Accident Photos</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 max-w-[970px] mx-auto">
                        <label className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="needHelp"
                                checked={formData.needHelp}
                                onChange={handleCheckboxChange}
                                className="w-[18.9px] h-[18.9px] min-w-[18.9px] min-h-[18.9px] flex-shrink-0 rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                            />
                            <span>I would be needing help to file a claim?</span>
                        </label>

                        <label className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleCheckboxChange}
                                className="w-[18.9px] h-[18.9px] min-w-[18.9px] min-h-[18.9px] flex-shrink-0 rounded-[4.73px] border-[1.2px] border-[#bf8bd3] mt-[5px]"
                            />
                            <span >
                                I agree to the <span className="text-[#733139]">privacy policy</span> and <span className="text-[#733139]">disclaimer</span> and give my express written consent, affiliates and/or attorneys to contact you at the number provided above, even if this number is a wireless number or if i am presently listed on a <span className="font-medium text-[#733139]">DO NOT CALL</span> list, I understand that i may be contacted by telephone, email, text message or mail regarding case options that i may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                            </span>
                        </label>

                        <label className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="isHuman"
                                checked={formData.isHuman}
                                onChange={handleCheckboxChange}
                                className="w-[18.9px] h-[18.9px] min-w-[18.9px] min-h-[18.9px] flex-shrink-0 rounded-[4.73px] border-[1.2px] border-[#bf8bd3]"
                            />
                            <span>Please click this box so we know you're a person and not computer.</span>
                        </label>
                    </div>


                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="rounded-[14.18px] bg-[#ffc72c] w-[486.8px] h-[67.3px] text-black font-montserrat font-semibold uppercase hover:bg-[#ffd966] transition-colors duration-200"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClaimForm;
