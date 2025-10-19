import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: t('chatbotGreeting'), isBot: true },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Update greeting when language changes
    setMessages([{ id: 1, text: t('chatbotGreeting'), isBot: true }]);
  }, [t]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { id: Date.now(), text: message, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setMessage('');

    try {
      const response = await fetch(
        'https://hahaharsdstyigfyfgfyfgtoi.app.n8n.cloud/webhook/835dc06d-b1e3-44b9-9dc9-c60ffab4566a',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);

      const rawData = await response.json();
      console.log('Webhook response:', rawData);

      const botReply =
        rawData?.output ?? rawData?.[0]?.json?.output ?? '⚠️ Je n’ai pas pu obtenir de réponse.';

      const botMsg = { id: Date.now() + 1, text: botReply, isBot: true };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      const errorMsg = {
        id: Date.now() + 1,
        text: '⚠️ Une erreur est survenue. Veuillez réessayer plus tard.',
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
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
              <h3 className="font-semibold text-lg">{t('chatbotTitle')}</h3>
              <p className="text-sm opacity-90">{t('chatbotSubtitle')}</p>
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
              <div ref={messagesEndRef} /> {/* Auto-scroll target */}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('chatbotPlaceholder')}
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
