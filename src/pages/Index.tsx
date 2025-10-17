import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: 'BarChart3',
      title: 'Мониторинг рынка труда',
      description: 'Отслеживайте актуальные тренды и изменения на рынке IT в реальном времени'
    },
    {
      icon: 'Search',
      title: 'Анализ вакансий',
      description: 'Детальная аналитика по зарплатам, навыкам и требованиям работодателей'
    },
    {
      icon: 'TrendingUp',
      title: 'Прогнозы и тренды',
      description: 'Предсказание востребованности технологий на основе ML-алгоритмов'
    },
    {
      icon: 'MapPin',
      title: 'Региональная карта',
      description: 'Интерактивная география вакансий по всей России с детальной статистикой'
    },
    {
      icon: 'FileText',
      title: 'Автоматические отчеты',
      description: 'Еженедельные дайджесты и персонализированные аналитические отчеты'
    },
    {
      icon: 'Bell',
      title: 'Уведомления',
      description: 'Получайте оповещения о новых возможностях и изменениях на рынке'
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-[#072A4A] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#20B0B4] bg-clip-text text-transparent">
                Skill Pulse
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-[#20B0B4] hover:bg-white/10">
                Войти
              </Button>
              <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Главный баннер */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#072A4A] via-[#0a3d5f] to-[#20B0B4] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#20B0B4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#20B0B4] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть */}
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-[#20B0B4]/20 text-[#20B0B4] border-[#20B0B4] hover:bg-[#20B0B4]/30">
                ✨ Мониторинг рынка труда в реальном времени
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Skill Pulse —<br />
                <span className="bg-gradient-to-r from-[#20B0B4] to-white bg-clip-text text-transparent">
                  твой билет на рынок труда
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Отслеживайте вакансии, анализируйте зарплаты и планируйте карьеру 
                с помощью современной аналитической платформы
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-lg px-8 py-6">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#20B0B4]">15K+</div>
                  <div className="text-sm text-gray-300">Вакансий</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#20B0B4]">500+</div>
                  <div className="text-sm text-gray-300">Компаний</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#20B0B4]">95%</div>
                  <div className="text-sm text-gray-300">Точность</div>
                </div>
              </div>
            </div>

            {/* Правая часть */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Мини-дашборд */}
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

              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#20B0B4] rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#20B0B4] rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Привет, мы Skill Pulse */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4]">
              О платформе
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#072A4A]">
              Привет, мы Skill Pulse 👋
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Экосистема для мониторинга рынка труда, которая помогает принимать 
              взвешенные карьерные решения на основе реальных данных
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  hoveredFeature === index ? 'border-[#20B0B4] shadow-xl' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-[#20B0B4] to-[#072A4A] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section - Тота ИИ */}
      <section className="py-20 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#20B0B4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#20B0B4] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Иллюстрация */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#20B0B4] to-purple-500 flex items-center justify-center">
                    <Icon name="Bot" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Тота ИИ</div>
                    <div className="text-sm text-gray-300">Онлайн • Готов помочь</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Пример диалога */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-sm text-gray-300 mb-2">Вы:</p>
                    <p className="text-white">Какие навыки нужны для Frontend разработчика?</p>
                  </div>

                  <div className="bg-[#20B0B4]/20 rounded-lg p-4 border border-[#20B0B4]/30">
                    <p className="text-sm text-[#20B0B4] mb-2">Тота ИИ:</p>
                    <p className="text-white">На основе анализа 1,247 вакансий, топ-5 навыков:</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['React', 'TypeScript', 'CSS', 'Git', 'REST API'].map((skill, i) => (
                        <Badge key={i} className="bg-white/10 text-white border-white/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#20B0B4] rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Описание */}
            <div className="space-y-6">
              <Badge className="bg-[#20B0B4]/20 text-[#20B0B4] border-[#20B0B4]">
                🤖 Искусственный интеллект
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold">
                Тота ИИ —<br />
                <span className="text-[#20B0B4]">ваш персональный помощник</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Наш собственный ИИ-ассистент поможет вам разобраться в рынке труда, 
                ответит на вопросы о карьере и даст персональные рекомендации
              </p>

              <div className="space-y-4 pt-4">
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
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#20B0B4]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#20B0B4]/30 transition-colors">
                      <Icon name={item.icon as any} size={20} className="text-[#20B0B4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Спросить Тоту
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Наше сообщество */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4]">
              🌟 Партнеры и сообщество
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#072A4A]">
              Наше сообщество
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы работаем вместе с ведущими образовательными платформами и 
              IT-сообществами для вашего профессионального роста
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#20B0B4] cursor-pointer">
                  <CardContent className="pt-6 space-y-4 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${partner.color} flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon name={partner.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {partner.description}
                    </p>
                    <div className="flex items-center justify-center text-[#20B0B4] text-sm font-medium">
                      Перейти
                      <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нашему сообществу</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Получайте эксклюзивные материалы, участвуйте в вебинарах и 
                  общайтесь с единомышленниками
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
                    <Icon name="Users" size={20} className="mr-2" />
                    Вступить в сообщество
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Подписаться на рассылку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#072A4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" size={24} className="text-[#20B0B4]" />
                <span className="text-xl font-bold">Skill Pulse</span>
              </div>
              <p className="text-gray-400 text-sm">
                Современная аналитика рынка IT-вакансий для принятия взвешенных карьерных решений.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Дашборд</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Тота ИИ</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Техподдержка</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Skill Pulse. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
