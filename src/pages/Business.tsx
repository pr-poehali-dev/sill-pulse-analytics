import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import PricingPlans from '@/components/PricingPlans';

const Business = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmitRequest = () => {
    if (!formData.company || !formData.name || !formData.email) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов'
    });
    setFormData({ company: '', name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-[#072A4A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
              <h1 className="text-2xl font-bold">Skill Pulse</h1>
            </div>
            <Button onClick={() => navigate('/')} variant="ghost" className="text-white hover:text-[#20B0B4]">
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] mb-4">
            🏢 Для бизнеса
          </Badge>
          <h1 className="text-5xl font-bold text-[#072A4A] mb-4">
            Решения для агентств и HR-команд
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мощные инструменты аналитики рынка труда для профессионального рекрутинга
          </p>
        </div>

        <PricingPlans type="business" />

        <Card className="mb-16 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
          <CardContent className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Преимущества для бизнеса</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: 'Users',
                      title: 'Командная работа',
                      desc: 'Управление доступами и совместная работа'
                    },
                    {
                      icon: 'Database',
                      title: 'API интеграция',
                      desc: 'Подключение к вашим внутренним системам'
                    },
                    {
                      icon: 'Shield',
                      title: 'Безопасность',
                      desc: 'Защита данных на уровне enterprise'
                    },
                    {
                      icon: 'HeadphonesIcon',
                      title: 'Поддержка 24/7',
                      desc: 'Персональный менеджер и техподдержка'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-[#20B0B4]/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-[#20B0B4]" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <div className="space-y-4">
                  <Input 
                    placeholder="Название компании" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <Input 
                    placeholder="Телефон" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Button 
                    className="w-full bg-[#20B0B4] hover:bg-[#20B0B4]/90" 
                    size="lg"
                    onClick={handleSubmitRequest}
                  >
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    Мы свяжемся с вами в течение 24 часов
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Business;