import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour! Comment puis-je vous aider aujourd'hui?",
      isBot: true,
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { id: Date.now(), text: message, isBot: false },
    ];
    setMessages(newMessages);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          id: Date.now() + 1,
          text: "Merci pour votre message! Pour une assistance complète, veuillez nous appeler au +212 522 950 604.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-glow bg-gradient-spanish hover:opacity-90 transition-smooth"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] shadow-elegant">
          <div className="flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-gradient-spanish text-primary-foreground p-4 rounded-t-lg">
              <h3 className="font-semibold text-lg">Vicho's Assistant</h3>
              <p className="text-sm opacity-90">Nous sommes là pour vous aider</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? 'bg-secondary text-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tapez votre message..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="bg-accent">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
