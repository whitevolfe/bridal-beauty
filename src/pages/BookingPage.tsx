import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const BookingPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [activeTab, setActiveTab] = useState("services");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const bookingData = {
      service: selectedService,
      serviceName: services.find(s => s.id === selectedService)?.name,
      date: selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '',
      time: selectedTime,
      ...formData
    };
    
    console.log(bookingData);
    
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "86f65b27-f92b-47d4-b6cc-f5ef99d08646");
    formDataToSend.append("subject", `New Booking: ${bookingData.serviceName} by ${formData.firstName} ${formData.lastName}`);
    
    Object.entries(bookingData).forEach(([key, value]) => {
      formDataToSend.append(key, value as string);
    });
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Booking Confirmed!",
          description: "Your appointment has been scheduled successfully.",
        });
        
        setSelectedService("");
        setSelectedDate("");
        setSelectedTime("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          notes: ""
        });
        setActiveTab("services");
      } else {
        console.log("Error", data);
        toast({
          title: "Submission Error",
          description: data.message || "There was a problem with your booking. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem with your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    {
      id: "facial",
      name: "Facial Treatments",
      description: "Rejuvenate your skin with our facial treatments",
      price: "From $85",
      duration: "60 min"
    },
    {
      id: "massage",
      name: "Massage Therapy",
      description: "Relax your body and mind with our massage treatments",
      price: "From $95",
      duration: "60 min"
    },
    {
      id: "aromatherapy",
      name: "Aromatherapy",
      description: "Experience the healing benefits of essential oils",
      price: "From $110",
      duration: "75 min"
    },
    {
      id: "hotstone",
      name: "Hot Stone Therapy",
      description: "Melt away stress with our hot stone therapy",
      price: "From $120",
      duration: "90 min"
    },
    {
      id: "bodyscrub",
      name: "Body Scrubs & Wraps",
      description: "Exfoliate and nourish your skin",
      price: "From $130",
      duration: "90 min"
    },
    {
      id: "nailcare",
      name: "Nail Care",
      description: "Pamper your hands and feet",
      price: "From $45",
      duration: "45 min"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const dates = getDates();
  
  const goToNextTab = (currentTab: string) => {
    let nextTab = "";
    
    if (currentTab === "services") {
      nextTab = "datetime";
    } else if (currentTab === "datetime") {
      nextTab = "details";
    }
    
    if (nextTab) {
      setActiveTab(nextTab);
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 animate-on-scroll" id="booking">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">Schedule Your Visit</h3>
            <h2 className="section-title">Book an Appointment</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Take the first step towards relaxation and rejuvenation. Book your appointment today and experience the Royal Bridal Center difference.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="services" className="flex-1">Choose Service</TabsTrigger>
                <TabsTrigger value="datetime" className="flex-1" disabled={!selectedService}>Select Date & Time</TabsTrigger>
                <TabsTrigger value="details" className="flex-1" disabled={!selectedService || !selectedDate || !selectedTime}>Your Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="space-y-6">
                <h3 className="text-xl font-serif text-spa-dark mb-6">Select a Service</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`p-6 border rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id 
                          ? 'border-spa-gold bg-spa-beige' 
                          : 'border-gray-200 hover:border-spa-gold'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <h4 className="text-lg font-serif text-spa-dark">{service.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-spa-gold font-medium">{service.price}</span>
                        <span className="text-gray-500 text-sm">{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-right mt-6">
                  <Button 
                    className="btn-primary"
                    disabled={!selectedService}
                    onClick={() => goToNextTab("services")}
                  >
                    Continue
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="datetime" className="space-y-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-6">Select a Date</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                      {dates.map((date, index) => {
                        const formattedDate = date.toISOString().split('T')[0];
                        const isSelected = formattedDate === selectedDate;
                        return (
                          <div
                            key={index}
                            className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${
                              isSelected 
                                ? 'border-spa-gold bg-spa-beige' 
                                : 'border-gray-200 hover:border-spa-gold'
                            }`}
                            onClick={() => setSelectedDate(formattedDate)}
                          >
                            <div className="text-sm font-medium">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                            <div className="text-lg font-serif">{date.getDate()}</div>
                            <div className="text-xs text-gray-500">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-6">Select a Time</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {timeSlots.map((time, index) => (
                        <div
                          key={index}
                          className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${
                            time === selectedTime 
                              ? 'border-spa-gold bg-spa-beige' 
                              : 'border-gray-200 hover:border-spa-gold'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveTab("services")}
                  >
                    Back
                  </Button>
                  <Button 
                    className="btn-primary"
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => goToNextTab("datetime")}
                  >
                    Continue
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-6">
                <h3 className="text-xl font-serif text-spa-dark mb-6">Your Information</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-spa-dark">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        value={formData.firstName} 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-spa-dark">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-spa-dark">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-spa-dark">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium text-spa-dark">
                      Special Requests or Notes
                    </label>
                    <textarea 
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold h-32"
                      placeholder="Any special requests or information we should know?"
                    ></textarea>
                  </div>
                  
                  <div className="bg-spa-beige p-6 rounded-lg">
                    <h4 className="text-lg font-serif text-spa-dark mb-4">Booking Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }) : ''}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium text-spa-gold">
                          {services.find(s => s.id === selectedService)?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button"
                      className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveTab("datetime")}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="btn-primary"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Confirm Booking"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
