import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedTariff, setSelectedTariff] = useState('pro');

  // Данные для аналитики с анимацией
  const vacancyStats = [
    { title: 'Frontend разработчик', count: 1247, growth: '+15%', color: '#20B0B4' },
    { title: 'Backend разработчик', count: 892, growth: '+8%', color: '#072A4A' },
    { title: 'DevOps инженер', count: 543, growth: '+22%', color: '#20B0B4' },
    { title: 'QA инженер', count: 367, growth: '+12%', color: '#072A4A' },
  ];

  // Данные для графика по месяцам
  const monthlyData = [
    { month: 'Янв', value: 850 },
    { month: 'Фев', value: 920 },
    { month: 'Мар', value: 1100 },
    { month: 'Апр', value: 1350 },
    { month: 'Май', value: 1580 },
    { month: 'Июн', value: 1820 },
    { month: 'Июл', value: 2100 },
    { month: 'Авг', value: 2350 },
  ];

  // Анимация счетчиков
  useEffect(() => {
    if (activeSection === 'dashboard') {
      const timers = vacancyStats.map((stat, index) => {
        return setTimeout(() => {
          let start = 0;
          const end = stat.count;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = Math.min(Math.floor(start), end);
              return newStats;
            });
            
            if (start >= end) {
              clearInterval(timer);
            }
          }, 16);
        }, index * 200);
      });
      
      return () => timers.forEach(clearTimeout);
    }
  }, [activeSection]);

  const regionData = [
    { region: 'Москва', vacancies: 3245, salary: '180000', coords: { x: 200, y: 180 } },
    { region: 'СПб', vacancies: 1876, salary: '150000', coords: { x: 180, y: 155 } },
    { region: 'Новосибирск', vacancies: 432, salary: '120000', coords: { x: 450, y: 175 } },
    { region: 'Екатеринбург', vacancies: 387, salary: '115000', coords: { x: 320, y: 170 } },
    { region: 'Казань', vacancies: 298, salary: '110000', coords: { x: 240, y: 175 } },
    { region: 'Краснодар', vacancies: 156, salary: '105000', coords: { x: 190, y: 210 } },
    { region: 'Владивосток', vacancies: 89, salary: '125000', coords: { x: 680, y: 195 } },
    { region: 'Хабаровск', vacancies: 134, salary: '115000', coords: { x: 650, y: 170 } },
  ];

  const renderHeader = () => (
    <header className="bg-[#072A4A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group">
            <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#20B0B4] bg-clip-text text-transparent">
              Skill Pulse
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { key: 'dashboard', label: 'Дашборд' },
              { key: 'features', label: 'Возможности' },
              { key: 'pricing', label: 'Тарифы' },
              { key: 'map', label: 'Карта' },
              { key: 'about', label: 'О нас' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`relative hover:text-[#20B0B4] transition-all duration-300 ${
                  activeSection === item.key ? 'text-[#20B0B4]' : ''
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20B0B4] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-[#072A4A] transform hover:scale-105 transition-all duration-200"
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#072A4A] mb-4 bg-gradient-to-r from-[#072A4A] to-[#20B0B4] bg-clip-text text-transparent">
          Аналитика рынка IT-вакансий
        </h2>
        <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Актуальные данные по востребованным специальностям
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vacancyStats.map((stat, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-[#20B0B4] transition-colors">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#072A4A] group-hover:scale-110 transition-transform">
                  {animatedStats[index].toLocaleString()}
                </span>
                <Badge className="bg-[#20B0B4] text-white group-hover:bg-[#072A4A] transition-colors">
                  {stat.growth}
                </Badge>
              </div>
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: `${(animatedStats[index] / stat.count) * 100}%`,
                    backgroundColor: stat.color
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="BarChart3" size={20} className="text-[#20B0B4]" />
              <span>Динамика вакансий</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Градиент */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#20B0B4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#20B0B4" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Линии сетки */}
                {[0, 50, 100, 150].map(y => (
                  <line key={y} x1="50" y1={y + 20} x2="370" y2={y + 20} stroke="#e5e7eb" strokeWidth="1" />
                ))}
                
                {/* График */}
                <polyline
                  fill="url(#gradient)"
                  stroke="#20B0B4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={monthlyData.map((item, index) => 
                    `${50 + (index * 45)},${170 - (item.value / 2500) * 130}`
                  ).join(' ') + ' 370,170 50,170'}
                />
                
                {/* Точки */}
                {monthlyData.map((item, index) => (
                  <g key={index}>
                    <circle
                      cx={50 + (index * 45)}
                      cy={170 - (item.value / 2500) * 130}
                      r="4"
                      fill="#20B0B4"
                      className="hover:r-6 transition-all cursor-pointer animate-pulse"
                      style={{ animationDelay: `${index * 0.1}s`, animationDuration: '2s' }}
                    />
                    <text
                      x={50 + (index * 45)}
                      y={190}
                      textAnchor="middle"
                      className="text-xs fill-gray-600"
                    >
                      {item.month}
                    </text>
                    <text
                      x={50 + (index * 45)}
                      y={170 - (item.value / 2500) * 130 - 10}
                      textAnchor="middle"
                      className="text-xs fill-[#072A4A] font-semibold opacity-0 hover:opacity-100 transition-opacity"
                    >
                      {item.value}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} className="text-[#20B0B4]" />
              <span>Топ регионов</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionData.slice(0, 4).map((region, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[#20B0B4]/10 transition-all duration-300 cursor-pointer transform hover:scale-102"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <span className="font-medium text-[#072A4A]">{region.region}</span>
                    <p className="text-sm text-gray-600">{region.vacancies} вакансий</p>
                  </div>
                  <Badge variant="outline" className="text-[#20B0B4] border-[#20B0B4] hover:bg-[#20B0B4] hover:text-white transition-colors">
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
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-[#072A4A]">Карта вакансий по России</h2>
      
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="h-96 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-teal-50">
            <svg className="w-full h-full" viewBox="0 0 800 500">
              {/* Градиенты для карты */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="50%" stopColor="#b3e5fc" />
                  <stop offset="100%" stopColor="#81d4fa" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              {/* Более детальная карта России */}
              {/* Европейская часть */}
              <path
                d="M80 150 Q120 140 150 145 Q180 148 200 155 L220 160 Q240 165 250 175 L250 200 Q245 210 235 215 L200 220 Q170 225 140 220 Q110 215 85 200 L80 180 Z"
                fill="url(#mapGradient)"
                stroke="#20B0B4"
                strokeWidth="2"
                className="hover:fill-[#20B0B4]/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredRegion('Европейская часть')}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              
              {/* Сибирь */}
              <path
                d="M250 140 Q300 135 350 140 Q400 145 450 150 Q500 155 550 160 L570 175 Q575 190 570 205 L550 215 Q500 220 450 215 Q400 210 350 205 Q300 200 250 195 L250 175 Z"
                fill="url(#mapGradient)"
                stroke="#20B0B4"
                strokeWidth="2"
                className="hover:fill-[#20B0B4]/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredRegion('Сибирь')}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              
              {/* Дальний Восток */}
              <path
                d="M570 130 Q620 125 670 130 Q720 135 750 140 L770 155 Q775 170 770 185 L750 195 Q720 200 670 195 Q620 190 570 185 L570 165 Z"
                fill="url(#mapGradient)"
                stroke="#20B0B4"
                strokeWidth="2"
                className="hover:fill-[#20B0B4]/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredRegion('Дальний Восток')}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              
              {/* Маркеры городов с вакансиями */}
              {regionData.map((region, index) => {
                const size = Math.max(8, Math.sqrt(region.vacancies / 30));
                return (
                  <g key={region.region}>
                    {/* Пульсирующие кольца */}
                    <circle
                      cx={region.coords.x}
                      cy={region.coords.y}
                      r={size + 15}
                      fill="none"
                      stroke="#20B0B4"
                      strokeWidth="2"
                      opacity="0.3"
                      className="animate-ping"
                      style={{ animationDelay: `${index * 0.5}s`, animationDuration: '3s' }}
                    />
                    
                    {/* Основной маркер */}
                    <circle
                      cx={region.coords.x}
                      cy={region.coords.y}
                      r={size}
                      fill="#20B0B4"
                      stroke="white"
                      strokeWidth="3"
                      className="hover:fill-[#072A4A] hover:scale-125 transition-all duration-300 cursor-pointer filter drop-shadow-lg"
                      onMouseEnter={() => setHoveredRegion(region.region)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      filter="url(#glow)"
                    />
                    
                    {/* Название города */}
                    <text
                      x={region.coords.x}
                      y={region.coords.y - size - 8}
                      textAnchor="middle"
                      className="text-sm fill-[#072A4A] font-semibold drop-shadow-sm"
                      style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                    >
                      {region.region}
                    </text>
                    
                    {/* Количество вакансий в центре */}
                    <text
                      x={region.coords.x}
                      y={region.coords.y + 4}
                      textAnchor="middle"
                      className="text-xs fill-white font-bold"
                    >
                      {region.vacancies > 1000 ? `${Math.round(region.vacancies/1000)}k` : region.vacancies}
                    </text>
                    
                    {/* Детальное всплывающее окно */}
                    {hoveredRegion === region.region && (
                      <g className="animate-fade-in">
                        {/* Тень для карточки */}
                        <rect
                          x={region.coords.x - 65}
                          y={region.coords.y - 85}
                          width="130"
                          height="65"
                          fill="rgba(0,0,0,0.1)"
                          rx="8"
                          transform="translate(2, 2)"
                        />
                        
                        {/* Карточка с информацией */}
                        <rect
                          x={region.coords.x - 65}
                          y={region.coords.y - 85}
                          width="130"
                          height="65"
                          fill="white"
                          stroke="#20B0B4"
                          strokeWidth="2"
                          rx="8"
                          className="drop-shadow-xl"
                        />
                        
                        {/* Заголовок */}
                        <text
                          x={region.coords.x}
                          y={region.coords.y - 65}
                          textAnchor="middle"
                          className="text-sm fill-[#072A4A] font-bold"
                        >
                          {region.region}
                        </text>
                        
                        {/* Количество вакансий */}
                        <text
                          x={region.coords.x}
                          y={region.coords.y - 48}
                          textAnchor="middle"
                          className="text-xs fill-gray-600"
                        >
                          💼 {region.vacancies} вакансий
                        </text>
                        
                        {/* Средняя зарплата */}
                        <text
                          x={region.coords.x}
                          y={region.coords.y - 32}
                          textAnchor="middle"
                          className="text-sm fill-[#20B0B4] font-semibold"
                        >
                          💰 {parseInt(region.salary).toLocaleString()} ₽
                        </text>
                        
                        {/* Стрелка */}
                        <path
                          d={`M${region.coords.x} ${region.coords.y - 20} L${region.coords.x - 5} ${region.coords.y - 15} L${region.coords.x + 5} ${region.coords.y - 15} Z`}
                          fill="white"
                          stroke="#20B0B4"
                          strokeWidth="1"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
              
              {/* Декоративные элементы */}
              <circle cx="100" cy="100" r="2" fill="#20B0B4" opacity="0.6" className="animate-pulse" />
              <circle cx="700" cy="120" r="1.5" fill="#072A4A" opacity="0.4" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="400" cy="80" r="1" fill="#20B0B4" opacity="0.3" className="animate-pulse" style={{ animationDelay: '2s' }} />
            </svg>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle>Статистика по регионам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regionData.map((region, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between hover:bg-[#20B0B4]/10 p-2 rounded transition-colors cursor-pointer"
                  onMouseEnter={() => setHoveredRegion(region.region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  <span className={`font-medium transition-colors ${
                    hoveredRegion === region.region ? 'text-[#20B0B4]' : 'text-[#072A4A]'
                  }`}>
                    {region.region}
                  </span>
                  <span className="text-gray-600">{region.vacancies} вакансий</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle>Средняя зарплата</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regionData.map((region, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between hover:bg-[#20B0B4]/10 p-2 rounded transition-colors cursor-pointer"
                >
                  <span className="text-[#072A4A] font-medium">{region.region}</span>
                  <Badge className="bg-[#20B0B4] hover:bg-[#072A4A] transition-colors">
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

  const renderFeatures = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#072A4A] mb-4 bg-gradient-to-r from-[#072A4A] to-[#20B0B4] bg-clip-text text-transparent">
          Профессиональный инструмент анализа рынка труда
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Полный набор инструментов для мониторинга, анализа и прогнозирования трендов на рынке IT-специалистов
        </p>
      </div>

      {/* Примеры дашбордов */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#072A4A] flex items-center space-x-2">
          <Icon name="LayoutDashboard" size={28} className="text-[#20B0B4]" />
          <span>Интерактивные дашборды</span>
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-teal-50 pb-16">
              <div className="absolute top-4 right-4">
                <Badge className="bg-[#20B0B4]">Популярное</Badge>
              </div>
              <Icon name="TrendingUp" size={48} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="text-xl font-bold text-[#072A4A] mb-2">Динамика рынка</h4>
              <p className="text-gray-600 mb-4">Отслеживайте изменения спроса на специальности в реальном времени</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-[#20B0B4]" />
                  <span>Графики трендов по профессиям</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-[#20B0B4]" />
                  <span>Анализ роста/падения спроса</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-[#20B0B4]" />
                  <span>Прогнозы на 3-6 месяцев</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-blue-50 pb-16">
              <Icon name="MapPin" size={48} className="text-purple-600 group-hover:scale-110 transition-transform" />
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="text-xl font-bold text-[#072A4A] mb-2">Региональная аналитика</h4>
              <p className="text-gray-600 mb-4">Интерактивные карты с данными по городам и регионам</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-600" />
                  <span>Зарплатные предложения по городам</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-600" />
                  <span>Плотность вакансий на карте</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-purple-600" />
                  <span>Сравнение регионов</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-yellow-50 pb-16">
              <Icon name="Zap" size={48} className="text-orange-600 group-hover:scale-110 transition-transform" />
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="text-xl font-bold text-[#072A4A] mb-2">Навыки и технологии</h4>
              <p className="text-gray-600 mb-4">Анализ востребованности технологий и hard skills</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-600" />
                  <span>Рейтинг популярных технологий</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-600" />
                  <span>Связь навыков и зарплат</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-orange-600" />
                  <span>Emerging технологии</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Примеры отчетов */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#072A4A] flex items-center space-x-2">
          <Icon name="FileText" size={28} className="text-[#20B0B4]" />
          <span>Автоматические отчеты</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Calendar" size={20} className="text-[#20B0B4]" />
                  <span>Еженедельный дайджест</span>
                </CardTitle>
                <Badge variant="outline">Автоматически</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <Icon name="TrendingUp" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Топ-5 растущих профессий</p>
                  <p className="text-sm text-gray-600">Список самых быстрорастущих направлений за неделю</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <Icon name="DollarSign" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Зарплатные изменения</p>
                  <p className="text-sm text-gray-600">Анализ динамики предложений по зарплатам</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <Icon name="Users" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Активность работодателей</p>
                  <p className="text-sm text-gray-600">Какие компании публикуют больше всего вакансий</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="FileBarChart" size={20} className="text-[#20B0B4]" />
                  <span>Кастомные отчеты</span>
                </CardTitle>
                <Badge variant="outline">По запросу</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-lg">
                <Icon name="Filter" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Фильтры по любым параметрам</p>
                  <p className="text-sm text-gray-600">Выбирайте профессии, регионы, период, уровень</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-lg">
                <Icon name="Download" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Экспорт в Excel/PDF</p>
                  <p className="text-sm text-gray-600">Готовые отчеты для презентаций и аналитики</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-lg">
                <Icon name="Share2" size={20} className="text-[#20B0B4] mt-1" />
                <div>
                  <p className="font-medium text-[#072A4A]">Шаринг с командой</p>
                  <p className="text-sm text-gray-600">Делитесь инсайтами с коллегами одной кнопкой</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Преимущества */}
      <Card className="bg-gradient-to-br from-[#072A4A] to-[#20B0B4] text-white">
        <CardContent className="py-12">
          <h3 className="text-3xl font-bold text-center mb-8">Почему выбирают Skill Pulse?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Актуальные данные</h4>
              <p className="text-white/80">Обновление базы вакансий каждые 2 часа</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart3" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Глубокая аналитика</h4>
              <p className="text-white/80">ML-алгоритмы для выявления трендов</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Простота использования</h4>
              <p className="text-white/80">Интуитивный интерфейс без обучения</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#072A4A] mb-4 bg-gradient-to-r from-[#072A4A] to-[#20B0B4] bg-clip-text text-transparent">
          Тарифы и возможности
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Выберите подходящий план для вашего бизнеса
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Базовый */}
        <Card className={`hover:shadow-2xl transition-all duration-300 ${
          selectedTariff === 'basic' ? 'ring-2 ring-[#20B0B4]' : ''
        }`}>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="User" size={32} className="text-blue-600" />
            </div>
            <CardTitle className="text-2xl mb-2">Базовый</CardTitle>
            <div className="text-4xl font-bold text-[#072A4A]">Бесплатно</div>
            <p className="text-gray-600 mt-2">Для знакомства с сервисом</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">Базовая статистика</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">10 вакансий в день</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">3 региона</span>
              </li>
              <li className="flex items-center space-x-2 opacity-50">
                <Icon name="X" size={18} className="text-gray-400" />
                <span className="text-gray-400">Экспорт данных</span>
              </li>
              <li className="flex items-center space-x-2 opacity-50">
                <Icon name="X" size={18} className="text-gray-400" />
                <span className="text-gray-400">API доступ</span>
              </li>
            </ul>
            <Button 
              className="w-full mt-6" 
              variant="outline"
              onClick={() => setSelectedTariff('basic')}
            >
              Начать бесплатно
            </Button>
          </CardContent>
        </Card>

        {/* Профессиональный */}
        <Card className={`hover:shadow-2xl transition-all duration-300 relative ${
          selectedTariff === 'pro' ? 'ring-2 ring-[#20B0B4] scale-105' : ''
        }`}>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-[#20B0B4] text-white px-4 py-1">Популярный</Badge>
          </div>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-[#20B0B4]/20 rounded-full flex items-center justify-center mb-4">
              <Icon name="Briefcase" size={32} className="text-[#20B0B4]" />
            </div>
            <CardTitle className="text-2xl mb-2">Профессиональный</CardTitle>
            <div className="text-4xl font-bold text-[#20B0B4]">₽4,990<span className="text-lg text-gray-600">/мес</span></div>
            <p className="text-gray-600 mt-2">Для HR и рекрутеров</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Полная аналитика</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Неограниченно вакансий</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Все регионы</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Экспорт в Excel/PDF</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Email-рассылки</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700 font-medium">Приоритетная поддержка</span>
              </li>
            </ul>
            <Button 
              className="w-full mt-6 bg-[#20B0B4] hover:bg-[#072A4A]" 
              onClick={() => setSelectedTariff('pro')}
            >
              Выбрать план
            </Button>
          </CardContent>
        </Card>

        {/* Корпоративный */}
        <Card className={`hover:shadow-2xl transition-all duration-300 ${
          selectedTariff === 'enterprise' ? 'ring-2 ring-[#20B0B4]' : ''
        }`}>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="Building2" size={32} className="text-purple-600" />
            </div>
            <CardTitle className="text-2xl mb-2">Корпоративный</CardTitle>
            <div className="text-4xl font-bold text-[#072A4A]">₽14,990<span className="text-lg text-gray-600">/мес</span></div>
            <p className="text-gray-600 mt-2">Для крупных компаний</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">Всё из плана PRO</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">API доступ</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">До 10 пользователей</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">Кастомные отчеты</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">Персональный менеджер</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={18} className="text-green-600" />
                <span className="text-gray-700">SLA 99.9%</span>
              </li>
            </ul>
            <Button 
              className="w-full mt-6" 
              variant="outline"
              onClick={() => setSelectedTariff('enterprise')}
            >
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ по тарифам */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="HelpCircle" size={24} className="text-[#20B0B4]" />
            <span>Часто задаваемые вопросы</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-semibold text-[#072A4A] mb-2">Можно ли изменить тариф в любой момент?</h4>
            <p className="text-gray-600">Да, вы можете повысить или понизить тариф в любое время. При повышении доступ к новым функциям открывается мгновенно.</p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-semibold text-[#072A4A] mb-2">Есть ли скидки при годовой оплате?</h4>
            <p className="text-gray-600">Да, при оплате за год предоставляется скидка 20%. Например, тариф PRO обойдется в ₽47,900 вместо ₽59,880.</p>
          </div>
          <div className="pb-4">
            <h4 className="font-semibold text-[#072A4A] mb-2">Какие способы оплаты принимаются?</h4>
            <p className="text-gray-600">Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки и банковские переводы для юридических лиц.</p>
          </div>
        </CardContent>
      </Card>
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
      case 'features':
        return renderFeatures();
      case 'pricing':
        return renderPricing();
      case 'map':
        return renderMap();
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