import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Map = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  
  const handleRegionClick = (region: string, vacancies: number) => {
    toast({
      title: `Регион: ${region}`,
      description: `Найдено ${vacancies} вакансий. Переходим к поиску...`
    });
    setTimeout(() => navigate('/vacancies'), 1000);
  };

  const regionData = [
    { region: 'Москва', vacancies: 3245, salary: '180000', coords: { x: 200, y: 180 } },
    { region: 'СПб', vacancies: 1876, salary: '150000', coords: { x: 180, y: 155 } },
    { region: 'Новосибирск', vacancies: 432, salary: '120000', coords: { x: 450, y: 175 } },
    { region: 'Екатеринбург', vacancies: 387, salary: '115000', coords: { x: 320, y: 170 } },
    { region: 'Казань', vacancies: 298, salary: '110000', coords: { x: 240, y: 175 } },
    { region: 'Краснодар', vacancies: 156, salary: '105000', coords: { x: 190, y: 210 } },
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
            <Button onClick={() => navigate('/')} variant="ghost" className="text-white hover:text-[#20B0B4]">
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#072A4A] mb-2">Карта вакансий</h1>
          <p className="text-gray-600">География IT-вакансий по всей России</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Регионы по количеству вакансий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {regionData.map((region, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                      hoveredRegion === region.region ? 'bg-[#20B0B4]/20 scale-105' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onMouseEnter={() => setHoveredRegion(region.region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region.region, region.vacancies)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-[#20B0B4]" />
                      <span className={`font-medium transition-colors ${
                        hoveredRegion === region.region ? 'text-[#20B0B4]' : 'text-[#072A4A]'
                      }`}>
                        {region.region}
                      </span>
                    </div>
                    <Badge className="bg-[#20B0B4] hover:bg-[#072A4A]">
                      {region.vacancies} вакансий
                    </Badge>
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
                  <div 
                    key={index} 
                    className="flex items-center justify-between hover:bg-[#20B0B4]/10 p-2 rounded transition-colors cursor-pointer"
                    onClick={() => handleRegionClick(region.region, region.vacancies)}
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
    </div>
  );
};

export default Map;