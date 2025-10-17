import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const vacancyStats = [
    { title: 'Frontend разработчик', count: 1247, growth: '+15%', color: '#20B0B4' },
    { title: 'Backend разработчик', count: 892, growth: '+8%', color: '#072A4A' },
    { title: 'DevOps инженер', count: 543, growth: '+22%', color: '#20B0B4' },
    { title: 'QA инженер', count: 367, growth: '+12%', color: '#072A4A' },
  ];

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

  useEffect(() => {
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
  }, []);

  const maxValue = Math.max(...monthlyData.map(d => d.value));

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#072A4A] mb-2">Дашборд</h1>
          <p className="text-gray-600">Полная аналитика рынка IT-вакансий в одном месте</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {vacancyStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Briefcase" size={24} className="text-[#20B0B4]" />
                  <Badge className="bg-green-500/10 text-green-600 border-green-200">
                    {stat.growth}
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                  {animatedStats[index].toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Динамика вакансий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{data.month}</span>
                      <span className="font-semibold text-[#072A4A]">{data.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#20B0B4] to-[#072A4A] rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(data.value / maxValue) * 100}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Топ навыков</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { skill: 'React', percent: 85 },
                  { skill: 'TypeScript', percent: 78 },
                  { skill: 'Node.js', percent: 72 },
                  { skill: 'Python', percent: 68 },
                  { skill: 'Docker', percent: 65 },
                  { skill: 'PostgreSQL', percent: 60 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[#072A4A]">{item.skill}</span>
                      <span className="text-sm text-gray-600">{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#20B0B4] rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Быстрый доступ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90" onClick={() => navigate('/vacancies')}>
                <Icon name="Search" size={20} className="mr-2" />
                Поиск вакансий
              </Button>
              <Button variant="outline" onClick={() => navigate('/analytics')}>
                <Icon name="BarChart3" size={20} className="mr-2" />
                Аналитика
              </Button>
              <Button variant="outline" onClick={() => navigate('/map')}>
                <Icon name="MapPin" size={20} className="mr-2" />
                Карта вакансий
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
          <CardContent className="py-12 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Разблокируйте все возможности</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Получите доступ к расширенной аналитике, AI-помощнику и персональным рекомендациям
            </p>
            <Button 
              size="lg" 
              className="bg-[#20B0B4] hover:bg-[#20B0B4]/90"
              onClick={() => navigate('/pricing')}
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Посмотреть тарифы
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;