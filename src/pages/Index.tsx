import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import PricingPlans from '@/components/PricingPlans';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  const navLinks = [
    { label: 'Дашборд', path: '/dashboard' },
    { label: 'Аналитика', path: '/analytics' },
    { label: 'Вакансии', path: '/vacancies' },
    { label: 'Тарифы', path: '/pricing' },
    { label: 'Тота ИИ', path: '/ai-assistant' },
    { label: 'Для агентств', path: '/business' },
    { label: 'Блог', path: '/blog' }
  ];

  const features = [
    {
      icon: 'BarChart3',
      title: 'Мониторинг рынка труда',
      description: 'Отслеживайте актуальные тренды и изменения на рынке IT в реальном времени',
      link: '/analytics'
    },
    {
      icon: 'Search',
      title: 'Анализ вакансий',
      description: 'Детальная аналитика по зарплатам, навыкам и требованиям работодателей',
      link: '/vacancies'
    },
    {
      icon: 'TrendingUp',
      title: 'Прогнозы и тренды',
      description: 'Предсказание востребованности технологий на основе ML-алгоритмов',
      link: '/analytics'
    },
    {
      icon: 'MapPin',
      title: 'Региональная карта',
      description: 'Интерактивная география вакансий по всей России с детальной статистикой',
      link: '/map'
    },
    {
      icon: 'FileText',
      title: 'Автоматические отчеты',
      description: 'Еженедельные дайджесты и персонализированные аналитические отчеты',
      link: '/dashboard'
    },
    {
      icon: 'Bell',
      title: 'Уведомления',
      description: 'Получайте оповещения о новых возможностях и изменениях на рынке',
      link: '/dashboard'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Frontend разработчик',
      company: 'Яндекс',
      avatar: '👨‍💻',
      text: 'Skill Pulse помог мне понять, какие навыки нужно развивать. Через 3 месяца я получил оффер с зарплатой на 40% выше!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      role: 'HR Manager',
      company: 'Сбер',
      avatar: '👩‍💼',
      text: 'Использую Skill Pulse для анализа рынка и составления конкурентных офферов. Время на подбор сократилось в 2 раза.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'DevOps инженер',
      company: 'Тинькофф',
      avatar: '👨‍🔧',
      text: 'Тота ИИ дал мне персональный план развития карьеры. Теперь я точно знаю, куда двигаться дальше!',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      role: 'Tech Lead',
      company: 'VK',
      avatar: '👩‍💻',
      text: 'Отличный инструмент для понимания трендов. Помогает команде быть в курсе актуальных технологий на рынке.',
      rating: 5
    }
  ];

  const articles = [
    {
      id: '1',
      title: 'Топ-10 навыков разработчика в 2024',
      category: 'Карьера',
      date: '15 октября 2024',
      readTime: '5 мин',
      image: '📊',
      excerpt: 'Анализируем рынок и выявляем самые востребованные навыки года'
    },
    {
      id: '2',
      title: 'Как увеличить зарплату на 50%',
      category: 'Развитие',
      date: '12 октября 2024',
      readTime: '7 мин',
      image: '💰',
      excerpt: 'Практические советы от экспертов рынка труда'
    },
    {
      id: '3',
      title: 'Тренды IT-рынка: осень 2024',
      category: 'Аналитика',
      date: '10 октября 2024',
      readTime: '10 мин',
      image: '📈',
      excerpt: 'Подробный обзор изменений и прогнозы на ближайшие месяцы'
    }
  ];

  const communityPartners = [
    {
      name: 'Хекслет Карьера',
      description: 'Карьерный центр для IT-специалистов',
      url: 'https://career.hexlet.io',
      icon: 'Briefcase',
      color: 'bg-purple-500'
    },
    {
      name: 'Хекслет',
      description: 'Образовательная платформа для разработчиков',
      url: 'https://hexlet.io',
      icon: 'GraduationCap',
      color: 'bg-blue-500'
    },
    {
      name: 'Run IT',
      description: 'Сообщество IT-профессионалов',
      url: 'https://run-it.ru',
      icon: 'Users',
      color: 'bg-green-500'
    },
    {
      name: 'Хекслет YouTube',
      description: 'Видеоуроки и вебинары',
      url: 'https://www.youtube.com/@HexletUniversity',
      icon: 'Youtube',
      color: 'bg-red-500'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#072A4A] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Icon name="TrendingUp" size={24} className="text-[#20B0B4] group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-[#20B0B4] bg-clip-text text-transparent">
                Skill Pulse
              </h1>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className="text-sm hover:text-[#20B0B4] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex text-white hover:text-[#20B0B4] hover:bg-white/10">
                Войти
              </Button>
              <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-xs sm:text-sm px-3 sm:px-4 py-2">
                Начать
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Главный баннер */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#072A4A] via-[#0a3d5f] to-[#20B0B4] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#20B0B4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#20B0B4] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <Badge className="bg-[#20B0B4]/20 text-[#20B0B4] border-[#20B0B4] hover:bg-[#20B0B4]/30 text-xs sm:text-sm">
                ✨ Мониторинг рынка труда в реальном времени
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Skill Pulse —<br />
                <span className="bg-gradient-to-r from-[#20B0B4] to-white bg-clip-text text-transparent">
                  твой билет на рынок труда
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Отслеживайте вакансии, анализируйте зарплаты и планируйте карьеру 
                с помощью современной аналитической платформы
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" onClick={() => navigate('/pricing')}>
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" onClick={() => navigate('/pricing')}>
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Смотреть тарифы
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#20B0B4]">15K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Вакансий</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#20B0B4]">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Компаний</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#20B0B4]">95%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Точность</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Популярные вакансии</span>
                    <Icon name="TrendingUp" size={16} className="text-[#20B0B4]" />
                  </div>
                  
                  {[
                    { role: 'Frontend разработчик', count: 1247, trend: '+15%' },
                    { role: 'Backend разработчик', count: 892, trend: '+8%' },
                    { role: 'DevOps инженер', count: 543, trend: '+22%' },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer"
                      onClick={() => navigate('/vacancies')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.role}</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-400">
                          {item.trend}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <span>{item.count} вакансий</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>По всей России</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#20B0B4] rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Привет, мы Skill Pulse */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
              О платформе
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A] px-4">
              Привет, мы Skill Pulse 👋
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Экосистема для мониторинга рынка труда, которая помогает принимать 
              взвешенные карьерные решения на основе реальных данных
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  hoveredFeature === index ? 'border-[#20B0B4] shadow-xl' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                onClick={() => navigate(feature.link)}
              >
                <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#20B0B4] to-[#072A4A] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature.icon as any} size={24} className="text-white sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Отзывы */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
              ⭐ Отзывы клиентов
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A] px-4">
              Как Skill Pulse помогает людям
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Истории успеха наших пользователей — от джунов до HR-менеджеров
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${
                  hoveredTestimonial === index ? 'border-[#20B0B4] shadow-xl -translate-y-2' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredTestimonial(index)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-3xl sm:text-4xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-[#072A4A] text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400 sm:w-4 sm:h-4" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Icon name="Building2" size={12} className="mr-1 sm:w-3.5 sm:h-3.5" />
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button size="lg" variant="outline" className="border-[#20B0B4] text-[#20B0B4] hover:bg-[#20B0B4]/10 text-sm sm:text-base px-4 sm:px-6">
              Читать все отзывы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Business Section - Для агентств */}
      <section id="business" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <Badge className="bg-[#20B0B4]/20 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
                🏢 Для бизнеса
              </Badge>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Решение для<br />
                <span className="text-[#20B0B4]">агентств и HR-команд</span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Мощные инструменты аналитики для рекрутинговых агентств, 
                HR-отделов и кадровых агентств
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: 'Users',
                    title: 'Командная работа',
                    desc: 'Управление доступами, общие отчеты и совместный анализ'
                  },
                  {
                    icon: 'Database',
                    title: 'API доступ',
                    desc: 'Интеграция данных в ваши внутренние системы'
                  },
                  {
                    icon: 'Shield',
                    title: 'Приоритетная поддержка',
                    desc: 'Персональный менеджер и техподдержка 24/7'
                  },
                  {
                    icon: 'FileBarChart',
                    title: 'Расширенная аналитика',
                    desc: 'Углубленные отчеты и кастомные дашборды'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#20B0B4]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#20B0B4]/30 transition-colors">
                      <Icon name={item.icon as any} size={20} className="text-[#20B0B4] sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-sm sm:text-base px-4 sm:px-6" onClick={() => navigate('/business')}>
                  <Icon name="Briefcase" size={18} className="mr-2" />
                  Узнать подробнее
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base px-4 sm:px-6">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="pt-6 space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-[#20B0B4]">Корпоративный</div>
                    <div className="text-gray-300 text-lg">От ₽49,990/мес</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'До 50 пользователей',
                      'Безлимитные запросы',
                      'API доступ',
                      'Персональный менеджер',
                      'SLA 99.9%',
                      'Кастомные интеграции',
                      'Обучение команды',
                      'Приоритетная поддержка'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle2" size={20} className="text-[#20B0B4] flex-shrink-0" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#20B0B4] hover:bg-[#20B0B4]/90" size="lg" onClick={() => navigate('/business')}>
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#20B0B4] rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section - Тота ИИ */}
      <section id="ai-assistant" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-300">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#20B0B4] to-purple-500 flex items-center justify-center">
                    <Icon name="Bot" size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg text-[#072A4A]">Тота ИИ</div>
                    <div className="text-xs sm:text-sm text-gray-600">Онлайн • Готов помочь</div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Вы:</p>
                    <p className="text-sm sm:text-base text-[#072A4A]">Какие навыки нужны для Frontend разработчика?</p>
                  </div>

                  <div className="bg-[#20B0B4]/10 rounded-lg p-3 sm:p-4 border border-[#20B0B4]/30">
                    <p className="text-xs sm:text-sm text-[#20B0B4] mb-1 sm:mb-2">Тота ИИ:</p>
                    <p className="text-sm sm:text-base text-[#072A4A]">На основе анализа 1,247 вакансий, топ-5 навыков:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {['React', 'TypeScript', 'CSS', 'Git', 'REST API'].map((skill, i) => (
                        <Badge key={i} className="bg-white text-[#072A4A] border-[#20B0B4] text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#20B0B4] rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
                🤖 Искусственный интеллект
              </Badge>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A]">
                Тота ИИ —<br />
                <span className="text-[#20B0B4]">ваш персональный помощник</span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Наш собственный ИИ-ассистент поможет вам разобраться в рынке труда, 
                ответит на вопросы о карьере и даст персональные рекомендации
              </p>

              <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
                {[
                  {
                    icon: 'MessageSquare',
                    title: 'Интеллектуальные ответы',
                    desc: 'Получайте детальные ответы на основе реальных данных рынка'
                  },
                  {
                    icon: 'Target',
                    title: 'Карьерные рекомендации',
                    desc: 'Персональные советы по развитию навыков и поиску работы'
                  },
                  {
                    icon: 'Sparkles',
                    title: 'Анализ трендов',
                    desc: 'Прогнозы востребованности технологий на ближайшие месяцы'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#20B0B4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#20B0B4]/20 transition-colors">
                      <Icon name={item.icon as any} size={18} className="text-[#20B0B4] sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#072A4A] mb-1 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-base sm:text-lg px-6 sm:px-8" onClick={() => navigate('/ai-assistant')}>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Спросить Тоту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Статьи */}
      <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
              📚 Блог
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A] px-4">
              Полезные материалы
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Читайте экспертные статьи о карьере, трендах и развитии в IT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#20B0B4]" onClick={() => navigate(`/article/${article.id}`)}>
                <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4">
                  <div className="text-5xl sm:text-6xl text-center">{article.image}</div>
                  
                  <div className="space-y-2">
                    <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] text-xs">
                      {article.category}
                    </Badge>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-sm sm:text-base px-4 sm:px-6" onClick={() => navigate('/blog')}>
              Все статьи блога
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section - Наше сообщество */}
      <section id="community" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
              🌟 Партнеры и сообщество
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A] px-4">
              Наше сообщество
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Мы работаем вместе с ведущими образовательными платформами и 
              IT-сообществами для вашего профессионального роста
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {communityPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#20B0B4] cursor-pointer">
                  <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4 text-center">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${partner.color} flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon name={partner.icon as any} size={28} className="text-white sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {partner.description}
                    </p>
                    <div className="flex items-center justify-center text-[#20B0B4] text-xs sm:text-sm font-medium">
                      Перейти
                      <Icon name="ArrowRight" size={14} className="ml-1 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Card className="bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
              <CardContent className="py-8 sm:py-12 px-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Присоединяйтесь к нашему сообществу</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto">
                  Получайте эксклюзивные материалы, участвуйте в вебинарах и 
                  общайтесь с единомышленниками
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto">
                    <Icon name="Users" size={18} className="mr-2" />
                    Вступить в сообщество
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Подписаться на рассылку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Тарифы */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] text-xs sm:text-sm">
              💎 Тарифы
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#072A4A] px-4">
              Выберите свой план
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Инвестируйте в свою карьеру — начните бесплатно или выберите подходящий тариф
            </p>
          </div>

          <PricingPlans type="personal" />

          <div className="mt-8 sm:mt-12 text-center">
            <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-sm sm:text-base px-4 sm:px-6" onClick={() => navigate('/pricing')}>
              Сравнить все тарифы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#072A4A] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Icon name="TrendingUp" size={20} className="text-[#20B0B4] sm:w-6 sm:h-6" />
                <span className="text-lg sm:text-xl font-bold">Skill Pulse</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Современная аналитика рынка IT-вакансий для принятия взвешенных карьерных решений.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#20B0B4] transition-colors">
                  <Icon name="Twitter" size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#20B0B4] transition-colors">
                  <Icon name="Linkedin" size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#20B0B4] transition-colors">
                  <Icon name="Youtube" size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Продукт</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><button onClick={() => navigate('/dashboard')} className="hover:text-[#20B0B4] transition-colors">Дашборд</button></li>
                <li><button onClick={() => navigate('/analytics')} className="hover:text-[#20B0B4] transition-colors">Аналитика</button></li>
                <li><button onClick={() => navigate('/vacancies')} className="hover:text-[#20B0B4] transition-colors">Вакансии</button></li>
                <li><button onClick={() => navigate('/map')} className="hover:text-[#20B0B4] transition-colors">Карта</button></li>
                <li><button onClick={() => navigate('/ai-assistant')} className="hover:text-[#20B0B4] transition-colors">Тота ИИ</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Компания</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-[#20B0B4] transition-colors">О нас</button></li>
                <li><button onClick={() => navigate('/business')} className="hover:text-[#20B0B4] transition-colors">Для агентств</button></li>
                <li><button onClick={() => navigate('/blog')} className="hover:text-[#20B0B4] transition-colors">Блог</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-[#20B0B4] transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('community')} className="hover:text-[#20B0B4] transition-colors">Сообщество</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Поддержка</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-3">
            <p className="text-center sm:text-left">&copy; 2024 Skill Pulse. Все права защищены.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
              <a href="#" className="hover:text-[#20B0B4] transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#20B0B4] transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;