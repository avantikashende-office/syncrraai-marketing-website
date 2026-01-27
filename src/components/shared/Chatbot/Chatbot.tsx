
"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Sparkles, Mic, MicOff, ExternalLink } from "lucide-react";
import ChatbotHeader from "./ChatbotHeader";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isContactSales?: boolean;
}

// Consolidated Q&A database
const QA_DATABASE = {
  quickQuestions: [
    {
      q: "What business sizes does your ERP support?",
      a: "Syncrra is designed for ALL business sizes—from small businesses with 5-50 employees to medium enterprises (50-200) and large corporations (200+). The key difference? You NEVER have to switch platforms as you grow. Start small, scale seamlessly, and avoid the migration nightmare that traditional ERPs force on growing businesses."
    },
    {
      q: "How is Syncrra different from competitors?",
      a: "We eliminate the biggest pain point in the ERP industry: forced migration. Traditional ERPs segment by size (QuickBooks → NetSuite → SAP). Syncrra offers ONE unified platform that scales with you. You get real-time inventory tracking, manufacturing management, billing & invoicing, analytics, and more—all integrated seamlessly. No data migration, no system switching, no disruption."
    },
    {
      q: "What modules are included?",
      a: "Syncrra includes everything you need: Manufacturing Operations (production planning, work orders, quality control), Inventory Management (real-time tracking, multi-location), Billing & Invoicing (automated, customizable templates), Purchase Orders, Financial Management, CRM, Real-Time Analytics & Dashboards, and Multi-Location Support. Everything is integrated and accessible from one unified dashboard."
    },
    {
      q: "Can I see a demo?",
      a: "Absolutely! We offer personalized demos tailored to your industry and business size. Our team will show you how Syncrra's real-time tracking, automated workflows, and unified dashboard can transform your operations. Click 'Contact Sales' below to schedule a demo at your convenience."
    },
    {
      q: "What's the pricing structure?",
      a: "Syncrra offers flexible pricing tiers based on business size: Small Business (5-50 employees), Medium Enterprise (50-200), and Large Enterprise (200+). Each tier includes the full platform—you're never forced to upgrade to a different system. Contact our sales team for a custom quote based on your specific needs, user count, and required features."
    },
    {
      q: "How does real-time tracking work?",
      a: "Syncrra provides true real-time data across all modules. When inventory moves, your dashboard updates instantly. When production completes, financials adjust immediately. When an order is placed, inventory and billing sync automatically. No delays, no manual updates, no data lag. Everyone in your organization works with the same up-to-date information."
    }
  ],
  keywords: {
    migration: "This is Syncrra's #1 advantage! Traditional ERPs force you to switch platforms as you grow (QuickBooks → NetSuite → SAP). Each switch means data migration nightmares, workflow disruptions, and retraining your entire team. Syncrra eliminates this completely with ONE unified platform that scales from 5 employees to 500+. No migration, ever.",
    scale: "Syncrra grows with you seamlessly across three tiers: Small Business (5-50 employees), Medium Enterprise (50-200), and Large Enterprise (200+). Same platform, same interface, same data—just expanded features as you need them. No switching systems, no data migration, no learning curve disruptions.",
    inventory: "Syncrra provides real-time inventory management with multi-location tracking, automated stock alerts, barcode scanning, lot tracking, and seamless integration with manufacturing and billing. Track every item across warehouses in real-time with zero lag.",
    manufacturing: "Our manufacturing module includes production planning, work order management, bill of materials (BOM), quality control, capacity planning, and shop floor tracking. Everything syncs in real-time with inventory, purchasing, and financials.",
    billing: "Syncrra's billing & invoicing module offers automated invoice generation, customizable templates, recurring billing, payment tracking, multi-currency support, and instant integration with your financial dashboard. Create professional invoices in seconds.",
    "real-time": "Every module in Syncrra updates in real-time. When inventory moves, your dashboard reflects it instantly. When production completes, financials adjust immediately. When an order is placed, inventory and billing sync automatically. No delays, no manual updates, no data lag.",
    dashboard: "Syncrra's unified dashboard gives you real-time visibility into every aspect of your business: inventory levels, production status, financial metrics, order fulfillment, and custom KPIs. Everything is customizable and accessible from one central location.",
    support: "Syncrra provides comprehensive support including 24/7 technical assistance, dedicated account managers, personalized onboarding training, video tutorials, extensive documentation, and an active community forum. We ensure you're successful from day one.",
    integration: "Syncrra offers robust API integrations with popular tools including payment gateways (Stripe, PayPal), e-commerce platforms (Shopify, WooCommerce), accounting software (QuickBooks, Xero), and custom third-party systems. For specific integration needs, contact our technical team.",
    security: "Syncrra uses enterprise-grade security with AES-256 encryption, role-based access controls, regular third-party security audits, SOC 2 Type II compliance, and automated backups. Your data is protected with bank-level security.",
    customization: "Syncrra is highly customizable: personalized dashboards, custom reports and analytics, automated workflow rules, custom fields, branded invoices, and role-based permissions. Tailor the platform to match your exact business processes.",
    training: "We provide comprehensive training tailored to your team: live onboarding sessions, role-specific training (admin, users, managers), video tutorials, step-by-step documentation, and ongoing support. Your team will be confident using Syncrra from day one.",
    mobile: "Access Syncrra from anywhere with our responsive web platform. View real-time data, approve orders, check inventory, and manage operations from any device—desktop, tablet, or mobile. Your business stays connected 24/7.",
    reporting: "Generate custom reports across all modules: financial statements, inventory reports, production analytics, sales performance, and custom KPIs. Export to Excel, PDF, or integrate with your BI tools. All data is real-time and accurate."
  },
  patterns: [
    { match: ["price", "cost", "pricing"], response: "Our pricing is flexible and tailored to your business size and needs. We offer different tiers for small, medium, and large businesses. For a detailed pricing quote and to discuss your specific requirements, I recommend contacting our sales team—they'll provide a custom proposal that fits your budget." },
    { match: ["demo", "trial", "try"], response: "Great! We offer personalized demos to show you exactly how our platform can benefit your business. Click 'Contact Sales' below to schedule a demo with our team. They'll walk you through the features most relevant to your needs." },
    { match: ["feature", "module", "function"], response: "Our platform includes comprehensive modules: Manufacturing Operations, Billing & Invoicing, Inventory Management, Purchase Orders, Production Planning, Financial Management, CRM, and Real-Time Analytics. All modules are fully integrated and accessible from one unified dashboard. What specific feature would you like to know more about?" },
    { match: ["small business", "startup"], response: "Perfect! Our platform is ideal for small businesses and startups. You start with essential features and can seamlessly expand as you grow—without ever needing to migrate to a different system. This means no disruption to your operations as you scale. Would you like to see a demo tailored for small businesses?" },
    { match: ["enterprise", "large company"], response: "Our platform handles enterprise-level complexity with ease. Large organizations benefit from advanced features like multi-location management, complex workflows, extensive user permissions, and enterprise-grade security. Plus, you get the same unified platform across all departments. Contact sales for an enterprise demo." },
    { match: ["hello", "hi", "hey"], response: "Hello! How can I help you today? Feel free to ask about our ERP platform, features, pricing, or anything else. You can also choose from the quick questions below!" }
  ],
  fallback: "That's a great question! For specific details about your unique requirements, I recommend contacting our sales team. They have in-depth expertise and can provide personalized answers tailored to your business needs. Click 'Contact Sales' below to get connected!"
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi! I'm your Syncrra AI Assistant. I can help answer questions about our unified ERP platform. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-focus input
  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        setInputValue(event.results[0][0].transcript);
        setIsListening(false);
      };

      recognitionInstance.onerror = () => setIsListening(false);
      recognitionInstance.onend = () => setIsListening(false);

      setRecognition(recognitionInstance);
    }
  }, []);

  // Generate bot response
  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check quick questions
    const matchedQuestion = QA_DATABASE.quickQuestions.find(q => 
      lowerMessage.includes(q.q.toLowerCase().slice(0, 10))
    );
    if (matchedQuestion) return matchedQuestion.a;

    // Check keywords
    for (const [keyword, response] of Object.entries(QA_DATABASE.keywords)) {
      if (lowerMessage.includes(keyword)) return response;
    }

    // Check patterns
    for (const pattern of QA_DATABASE.patterns) {
      if (pattern.match.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.response;
      }
    }

    return QA_DATABASE.fallback;
  };

  // Add message helper
  const addMessage = (text: string, sender: "user" | "bot", isContactSales = false) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      isContactSales
    };
    setMessages(prev => [...prev, message]);
  };

  // Send message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, "user");
    const userInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      addMessage(generateResponse(userInput), "bot");
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  // Handle quick question
  const handleQuickQuestion = (question: string, answer: string) => {
    addMessage(question, "user");
    setIsTyping(true);

    setTimeout(() => {
      addMessage(answer, "bot");
      setIsTyping(false);
    }, 800);
  };

  // Contact sales
  const handleContactSales = () => {
    addMessage("I'd like to contact sales", "user");
    setIsTyping(true);

    setTimeout(() => {
      addMessage(
        "Perfect! Our sales team is ready to help you. They can provide detailed answers, schedule a personalized demo, and discuss pricing options tailored to your business.",
        "bot",
        true
      );
      setIsTyping(false);
    }, 800);
  };

  // Voice controls
  const toggleVoice = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(57,211,115,0.37)] hover:shadow-[0_8px_32px_0_rgba(57,211,115,0.6)] transition-all duration-300 hover:scale-105">
            <MessageCircle className="w-6 h-6 text-green-400" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl -z-10 group-hover:bg-green-500/30 transition-all" />
          </div>
          <div className="absolute -top-16 right-0 bg-black/90 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Need help? Chat with AI Assistant! 💬
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] flex flex-col overflow-hidden rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] animate-slideInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f13]/95 via-[#0d1b14]/95 to-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_0_80px_rgba(57,211,115,0.15)]" />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="relative shrink-0 min-h-[70px]">
              <ChatbotHeader onClose={() => setIsOpen(false)} />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-green-500/20 hover:scrollbar-thumb-green-500/40 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                  style={{ animation: `slideInMessage 0.4s ease-out ${index * 0.1}s both` }}
                >
                  {/* Avatar */}
                  <div
                    className={`relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-green-500/40 to-green-600/30 border-green-400/50 shadow-[0_0_20px_rgba(57,211,115,0.4)]"
                        : "bg-gradient-to-br from-white/10 to-white/5 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-5 h-5 text-green-300" />
                    ) : (
                      <div className="relative">
                        <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
                        <div className="absolute inset-0 blur-md bg-green-400/50" />
                      </div>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <div
                      className={`relative rounded-2xl px-4 py-3.5 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] ${
                        message.sender === "user"
                          ? "bg-gradient-to-br from-green-500/30 to-green-600/20 border-green-400/40 text-white shadow-[0_8px_24px_rgba(57,211,115,0.25)] hover:shadow-[0_8px_32px_rgba(57,211,115,0.4)]"
                          : "bg-gradient-to-br from-white/8 to-white/4 border-white/25 text-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                      }`}
                    >
                      <p className="text-[13px] leading-relaxed relative z-10">{message.text}</p>
                      
                      {message.isContactSales && (
                        <a
                          href="mailto:sales@syncrra.com"
                          className="relative mt-3 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg hover:shadow-[0_8px_20px_rgba(57,211,115,0.5)] hover:scale-105 group overflow-hidden"
                        >
                          <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                          <span className="relative z-10">Contact Sales Team</span>
                        </a>
                      )}
                    </div>
                    
                    <span className={`text-[10px] text-gray-500 px-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-fadeIn">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
                  </div>
                  <div className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl border border-white/25 rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                    <div className="flex gap-1.5">
                      {[0, 150, 300].map((delay, i) => (
                        <div key={i} className="w-2.5 h-2.5 bg-green-400 rounded-full animate-bounce shadow-[0_0_8px_rgba(57,211,115,0.6)]" style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 3 && (
              <div className="px-4 py-4 border-t border-white/10 bg-gradient-to-b from-transparent via-black/20 to-black/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-green-400" />
                  <p className="text-xs text-gray-300 font-semibold tracking-wide">QUICK QUESTIONS</p>
                </div>
                <div className="space-y-2">
                  {QA_DATABASE.quickQuestions.slice(0, 3).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(item.q, item.a)}
                      className="group relative w-full text-left text-xs text-gray-300 hover:text-white bg-gradient-to-r from-white/5 to-white/8 hover:from-white/12 hover:to-white/15 backdrop-blur-md border border-white/15 hover:border-green-500/60 rounded-xl px-4 py-3 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(57,211,115,0.25)] hover:scale-[1.02] overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 group-hover:scale-125 transition-transform" />
                        {item.q}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-md">
              {/* Voice Indicator */}
              {isListening && (
                <div className="mb-3 flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/10 backdrop-blur-xl border border-green-400/30 rounded-xl px-4 py-3 animate-pulse">
                  <div className="relative flex items-center gap-1">
                    {[4, 6, 5, 7, 4].map((h, i) => (
                      <div key={i} className={`w-1 h-${h} bg-green-400 rounded-full animate-[bounce_0.6s_ease-in-out_infinite_${i * 0.1}s]`} />
                    ))}
                  </div>
                  <p className="text-sm text-green-400 font-medium">Listening... Speak now</p>
                </div>
              )}
              
              <div className="flex gap-2 mb-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything... 🎤 or type"
                  className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-all shadow-inner"
                />
                
                {/* Voice Button */}
                {recognition && (
                  <button
                    onClick={toggleVoice}
                    className={`relative p-3 rounded-xl transition-all shadow-lg ${
                      isListening 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    }`}
                    aria-label={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isListening ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
                  </button>
                )}
                
                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg hover:shadow-[0_4px_16px_0_rgba(57,211,115,0.4)] disabled:shadow-none group"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              <button
                onClick={handleContactSales}
                className="w-full bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 backdrop-blur-md border border-white/20 hover:border-green-500/50 text-gray-300 hover:text-white px-4 py-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_4px_12px_0_rgba(57,211,115,0.3)] group"
              >
                <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Contact Sales for Detailed Info
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
