import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Мокаем данные для аналитики
  const vacancyStats = [
    { title: 'Frontend разработчик', count: 1247, growth: '+15%' },
    { title: 'Backend разработчик', count: 892, growth: '+8%' },
    { title: 'DevOps инженер', count: 543, growth: '+22%' },
    { title: 'QA инженер', count: 367, growth: '+12%' },
  ];

  const regionData = [
    { region: 'Москва', vacancies: 3245, salary: '180000' },
    { region: 'Санкт-Петербург', vacancies: 1876, salary: '150000' },
    { region: 'Новосибирск', vacancies: 432, salary: '120000' },
    { region: 'Екатеринburg', vacancies: 387, salary: '115000' },
  ];

  const renderHeader = () => (
    <header className="bg-[#072A4A] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={32} className="text-[#20B0B4]" />
            <h1 className="text-2xl font-bold">Skill Pulse</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`hover:text-[#20B0B4] transition-colors ${
                activeSection === 'dashboard' ? 'text-[#20B0B4]' : ''
              }`}
            >
              Дашборд
            </button>
            <button
              onClick={() => setActiveSection('vacancies')}
              className={`hover:text-[#20B0B4] transition-colors ${
                activeSection === 'vacancies' ? 'text-[#20B0B4]' : ''
              }`}
            >
              Вакансии
            </button>
            <button
              onClick={() => setActiveSection('map')}
              className={`hover:text-[#20B0B4] transition-colors ${
                activeSection === 'map' ? 'text-[#20B0B4]' : ''
              }`}
            >
              Карта
            </button>
            <button
              onClick={() => setActiveSection('profile')}
              className={`hover:text-[#20B0B4] transition-colors ${
                activeSection === 'profile' ? 'text-[#20B0B4]' : ''
              }`}
            >
              Профиль
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`hover:text-[#20B0B4] transition-colors ${
                activeSection === 'about' ? 'text-[#20B0B4]' : ''
              }`}
            >
              О нас
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#072A4A]">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#072A4A] mb-4">Аналитика рынка IT-вакансий</h2>
        <p className="text-gray-600 text-lg">Актуальные данные по востребованным специальностям</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vacancyStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#072A4A]">{stat.count}</span>
                <Badge className="bg-[#20B0B4] text-white">{stat.growth}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="BarChart3" size={20} />
              <span>Динамика вакансий</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-[#20B0B4]/10 to-[#072A4A]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="TrendingUp" size={48} className="text-[#20B0B4] mx-auto mb-4" />
                <p className="text-gray-600">График роста вакансий по месяцам</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span>Топ регионов</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-[#072A4A]">{region.region}</span>
                    <p className="text-sm text-gray-600">{region.vacancies} вакансий</p>
                  </div>
                  <Badge variant="outline" className="text-[#20B0B4] border-[#20B0B4]">
                    {parseInt(region.salary).toLocaleString()} ₽
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderVacancies = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-[#072A4A]">Поиск вакансий</h2>
        <div className="flex space-x-4">
          <Input placeholder="Поиск по ключевым словам..." className="w-64" />
          <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
            <Icon name="Search" size={16} className="mr-2" />
            Найти
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Специальность" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="fullstack">Fullstack</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Опыт" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="junior">Junior</SelectItem>
            <SelectItem value="middle">Middle</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Регион" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="moscow">Москва</SelectItem>
            <SelectItem value="spb">СПб</SelectItem>
            <SelectItem value="remote">Удаленно</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-[#072A4A]">Senior React Developer</CardTitle>
              <p className="text-sm text-gray-600">IT Компания • Москва</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Зарплата:</span>
                  <Badge className="bg-[#20B0B4]">150 000 - 200 000 ₽</Badge>
                </div>
                <p className="text-sm text-gray-700">
                  Разработка современных веб-приложений на React, TypeScript...
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMap = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#072A4A]">Карта вакансий по России</h2>
      
      <Card>
        <CardContent className="p-6">
          <div className="h-96 bg-gradient-to-br from-[#20B0B4]/20 to-[#072A4A]/20 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100"></div>
            <div className="relative z-10 text-center">
              <Icon name="Map" size={64} className="text-[#20B0B4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#072A4A] mb-2">Интерактивная карта России</h3>
              <p className="text-gray-600">Здесь отображаются вакансии по регионам</p>
            </div>
            
            {/* Имитируем маркеры на карте */}
            <div className="absolute top-20 left-1/3 w-4 h-4 bg-[#20B0B4] rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-1/4 w-3 h-3 bg-[#072A4A] rounded-full animate-pulse"></div>
            <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-[#20B0B4] rounded-full animate-pulse"></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Статистика по регионам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regionData.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#072A4A] font-medium">{region.region}</span>
                  <span className="text-gray-600">{region.vacancies} вакансий</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Средняя зарплата</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regionData.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[#072A4A] font-medium">{region.region}</span>
                  <Badge className="bg-[#20B0B4]">
                    {parseInt(region.salary).toLocaleString()} ₽
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#072A4A]">Профиль пользователя</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Персональные данные</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Имя</label>
              <Input defaultValue="Иван Иванов" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input defaultValue="ivan@example.com" type="email" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Телефон</label>
              <Input defaultValue="+7 (999) 123-45-67" />
            </div>
            <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Подписка и уведомления</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-[#20B0B4]/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-[#072A4A]">Текущий план</span>
                <Badge className="bg-[#20B0B4]">Pro</Badge>
              </div>
              <p className="text-sm text-gray-600">Действует до 15.12.2024</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-[#072A4A]">Почтовые уведомления</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Новые вакансии по фильтрам</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Еженедельная аналитика</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Новости и обновления</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#072A4A] mb-4">О проекте Skill Pulse</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Современный сервис для аналитики рынка IT-вакансий, помогающий специалистам и компаниям 
          принимать взвешенные решения на основе актуальных данных.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="BarChart3" size={48} className="text-[#20B0B4] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#072A4A] mb-2">Аналитика</h3>
            <p className="text-gray-600">Подробная статистика по IT-вакансиям и зарплатам</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Search" size={48} className="text-[#20B0B4] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#072A4A] mb-2">Поиск</h3>
            <p className="text-gray-600">Умный поиск вакансий с гибкими фильтрами</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="MapPin" size={48} className="text-[#20B0B4] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#072A4A] mb-2">География</h3>
            <p className="text-gray-600">Интерактивная карта вакансий по всей России</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-center">Тарифные планы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold text-[#072A4A] mb-4">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#20B0B4]">Бесплатно</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>До 10 поисковых запросов в день</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Базовая аналитика</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Просмотр карты</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border-2 border-[#20B0B4] rounded-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#20B0B4]">
                Популярный
              </Badge>
              <h3 className="text-xl font-semibold text-[#072A4A] mb-4">Pro</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#20B0B4]">1 990 ₽</span>
                <span className="text-gray-600">/месяц</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Безлимитные поисковые запросы</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Расширенная аналитика</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Экспорт данных</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Email уведомления</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFooter = () => (
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
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Поиск вакансий</a></li>
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Аналитика</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Справка</a></li>
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#20B0B4] transition-colors">Техподдержка</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Skill Pulse. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'vacancies':
        return renderVacancies();
      case 'map':
        return renderMap();
      case 'profile':
        return renderProfile();
      case 'about':
        return renderAbout();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {renderHeader()}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {renderFooter()}
    </div>
  );
};

export default Index;