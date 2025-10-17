import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingPlansProps {
  type?: 'personal' | 'business';
}

const PricingPlans = ({ type = 'personal' }: PricingPlansProps) => {
  const { toast } = useToast();

  const personalPlans: Plan[] = [
    {
      name: 'Базовый',
      price: '₽0',
      period: 'навсегда',
      description: 'Для начинающих специалистов',
      features: [
        'Просмотр аналитики рынка',
        'Базовые отчеты',
        '50 запросов/месяц',
        'Доступ к вакансиям',
        'Email поддержка'
      ]
    },
    {
      name: 'Профи',
      price: '₽490',
      period: 'мес',
      description: 'Для активного поиска работы',
      features: [
        'Все из Базового',
        'Безлимитные запросы',
        'Расширенная аналитика',
        'Персональные рекомендации',
        'Тота ИИ помощник',
        'Приоритетная поддержка',
        'Отчеты по карьерному росту'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '₽990',
      period: 'мес',
      description: 'Для профессионалов',
      features: [
        'Все из Профи',
        'AI карьерный консультант',
        'Индивидуальный план развития',
        'Прогнозы зарплат',
        'Эксклюзивные вакансии',
        'Менторство от экспертов',
        'Приоритет в рекомендациях',
        'Персональный менеджер'
      ]
    }
  ];

  const businessPlans: Plan[] = [
    {
      name: 'Стартовый',
      price: '₽14,990',
      period: 'мес',
      description: 'Для небольших HR-команд',
      features: [
        'До 5 пользователей',
        '1000 запросов/месяц',
        'Базовая аналитика',
        'Email поддержка',
        'Еженедельные отчеты'
      ]
    },
    {
      name: 'Профессиональный',
      price: '₽29,990',
      period: 'мес',
      description: 'Для агентств и средних компаний',
      features: [
        'До 20 пользователей',
        'Безлимитные запросы',
        'Расширенная аналитика',
        'API доступ',
        'Приоритетная поддержка',
        'Кастомные отчеты',
        'Интеграции'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: '₽49,990',
      period: 'мес',
      description: 'Для крупных компаний',
      features: [
        'До 50 пользователей',
        'Безлимитные запросы',
        'Полная аналитика + AI',
        'API доступ',
        'Dedicated support 24/7',
        'Персональный менеджер',
        'White-label решения',
        'SLA гарантии'
      ]
    }
  ];

  const plans = type === 'business' ? businessPlans : personalPlans;

  const handlePlanSelect = (planName: string, price: string) => {
    if (price === '₽0') {
      toast({
        title: 'Добро пожаловать! 🎉',
        description: 'Базовый план уже активен. Начните пользоваться прямо сейчас!'
      });
    } else {
      toast({
        title: 'План выбран!',
        description: `Вы выбрали план "${planName}". Мы свяжемся с вами для оформления подписки.`
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <Card 
          key={index}
          className={`relative hover:shadow-2xl transition-all duration-300 ${
            plan.popular ? 'border-[#20B0B4] border-2 scale-105' : 'border-gray-200'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#20B0B4] text-white px-4 py-1">
                ⭐ Популярный
              </Badge>
            </div>
          )}
          
          <CardHeader>
            <CardTitle className="text-center">
              <div className="text-2xl font-bold text-[#072A4A] mb-2">{plan.name}</div>
              <div className="text-sm text-gray-600 mb-4">{plan.description}</div>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-[#20B0B4]">{plan.price}</span>
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#20B0B4] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${plan.popular ? 'bg-[#20B0B4] hover:bg-[#20B0B4]/90' : ''}`}
              variant={plan.popular ? 'default' : 'outline'}
              onClick={() => handlePlanSelect(plan.name, plan.price)}
            >
              {plan.price === '₽0' ? 'Начать бесплатно' : 'Выбрать план'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingPlans;
