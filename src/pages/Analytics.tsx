import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold text-[#072A4A] mb-2">Аналитика рынка труда</h1>
          <p className="text-gray-600">Детальная статистика и прогнозы на основе ML-алгоритмов</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Средняя зарплата</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#20B0B4]">₽185,000</div>
              <Badge className="mt-2 bg-green-500/10 text-green-600">+12% за месяц</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Всего вакансий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#20B0B4]">15,247</div>
              <Badge className="mt-2 bg-blue-500/10 text-blue-600">+8% за неделю</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Активных компаний</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#20B0B4]">523</div>
              <Badge className="mt-2 bg-purple-500/10 text-purple-600">+5% за месяц</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Востребованные технологии</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { tech: 'React', demand: 'Очень высокий', color: 'green' },
                { tech: 'Python', demand: 'Высокий', color: 'blue' },
                { tech: 'Kubernetes', demand: 'Растущий', color: 'purple' },
                { tech: 'Go', demand: 'Стабильный', color: 'yellow' },
              ].map((item, index) => (
                <div key={index} className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#20B0B4] transition-colors">
                  <div className="font-bold text-[#072A4A] mb-1">{item.tech}</div>
                  <Badge className={`bg-${item.color}-500/10 text-${item.color}-600`}>
                    {item.demand}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
