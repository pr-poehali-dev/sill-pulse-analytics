import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import PricingPlans from '@/components/PricingPlans';

const Pricing = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Рост карьеры',
      desc: 'Персональные рекомендации для развития'
    },
    {
      icon: 'DollarSign',
      title: 'Увеличение зарплаты',
      desc: 'Данные для успешных переговоров'
    },
    {
      icon: 'Brain',
      title: 'AI помощник',
      desc: 'Умный ассистент для карьерных решений'
    },
    {
      icon: 'Target',
      title: 'Точные прогнозы',
      desc: 'Аналитика трендов и востребованности'
    }
  ];

  const faqs = [
    {
      question: 'Можно ли отменить подписку?',
      answer: 'Да, вы можете отменить подписку в любой момент без штрафов.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Принимаем банковские карты, СБП, PayPal и криптовалюту.'
    },
    {
      question: 'Есть ли скидки для студентов?',
      answer: 'Да! Студентам предоставляется скидка 50% на все тарифы.'
    },
    {
      question: 'Можно ли перейти на другой тариф?',
      answer: 'Конечно! Вы можете изменить тариф в любое время.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-[#072A4A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
              <h1 className="text-2xl font-bold">Skill Pulse</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/business')} variant="ghost" className="text-white hover:text-[#20B0B4]">
                Для агентств
              </Button>
              <Button onClick={() => navigate('/')} variant="ghost" className="text-white hover:text-[#20B0B4]">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center">
          <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] mb-4">
            💎 Тарифы
          </Badge>
          <h1 className="text-5xl font-bold text-[#072A4A] mb-4">
            Выберите свой план
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Инвестируйте в свою карьеру с прозрачными ценами и без скрытых платежей
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-[#20B0B4]" />
              <span>Отмена в любое время</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-[#20B0B4]" />
              <span>Безопасные платежи</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} className="text-[#20B0B4]" />
              <span>Возврат средств 14 дней</span>
            </div>
          </div>
        </div>

        <PricingPlans type="personal" />

        <Card className="mt-16 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Что вы получаете</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#20B0B4]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-[#20B0B4]" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#072A4A] text-center mb-8">
            Часто задаваемые вопросы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-[#072A4A] mb-2 flex items-start">
                    <Icon name="HelpCircle" size={20} className="text-[#20B0B4] mr-2 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-16 bg-gradient-to-r from-[#20B0B4] to-[#072A4A] text-white border-none">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-lg mb-6 text-gray-100">
              Наши эксперты помогут выбрать оптимальный тариф для ваших целей
            </p>
            <Button size="lg" className="bg-white text-[#072A4A] hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
