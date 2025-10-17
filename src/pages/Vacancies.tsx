import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Vacancies = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    toast({
      title: 'Поиск запущен',
      description: `Ищем вакансии по запросу: "${searchQuery || 'Все вакансии'}"` 
    });
  };
  
  const handleApply = (vacancy: string) => {
    toast({
      title: 'Отклик отправлен!',
      description: `Ваш отклик на вакансию "${vacancy}" успешно отправлен`
    });
  };

  const vacancies = [
    {
      title: 'Senior Frontend Developer',
      company: 'Яндекс',
      location: 'Москва',
      salary: '₽250,000 - ₽350,000',
      tags: ['React', 'TypeScript', 'Redux'],
      type: 'Полная занятость'
    },
    {
      title: 'Backend Developer (Python)',
      company: 'Сбер',
      location: 'Санкт-Петербург',
      salary: '₽200,000 - ₽280,000',
      tags: ['Python', 'Django', 'PostgreSQL'],
      type: 'Удаленно'
    },
    {
      title: 'DevOps Engineer',
      company: 'Тинькофф',
      location: 'Москва',
      salary: '₽220,000 - ₽320,000',
      tags: ['Kubernetes', 'Docker', 'AWS'],
      type: 'Гибрид'
    },
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
          <h1 className="text-4xl font-bold text-[#072A4A] mb-2">Поиск вакансий</h1>
          <p className="text-gray-600">Найдите работу мечты среди тысяч IT-вакансий</p>
        </div>

        <div className="mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Должность, технология или компания..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12"
              />
            </div>
            <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90" onClick={handleSearch}>
              <Icon name="Search" size={20} className="mr-2" />
              Искать
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {vacancies.map((vacancy, index) => (
            <Card key={index} className="hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#20B0B4]">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#072A4A] mb-2">{vacancy.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Building2" size={16} />
                        <span>{vacancy.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={16} />
                        <span>{vacancy.location}</span>
                      </div>
                      <Badge>{vacancy.type}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {vacancy.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-[#20B0B4] text-[#20B0B4]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#20B0B4] mb-2">{vacancy.salary}</div>
                    <Button 
                      className="bg-[#20B0B4] hover:bg-[#20B0B4]/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApply(vacancy.title);
                      }}
                    >
                      Откликнуться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;