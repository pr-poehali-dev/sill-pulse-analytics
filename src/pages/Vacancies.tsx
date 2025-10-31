import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Vacancy {
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  sourceUrl: string;
  sourceName: string;
}

const Vacancies = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  
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

  const vacancies: Vacancy[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Яндекс',
      location: 'Москва',
      salary: '₽250,000 - ₽350,000',
      tags: ['React', 'TypeScript', 'Redux'],
      type: 'Полная занятость',
      description: 'Мы ищем опытного Senior Frontend Developer для работы над продуктами Яндекса. Вы будете работать с современным стеком технологий и решать интересные технические задачи.',
      requirements: [
        'Опыт работы с React от 5 лет',
        'Отличное знание TypeScript',
        'Опыт работы с Redux или аналогичными state-менеджерами',
        'Знание современных подходов к разработке UI',
        'Опыт code review и менторства'
      ],
      responsibilities: [
        'Разработка новых функций и улучшение существующих',
        'Архитектурные решения на уровне фронтенда',
        'Code review и менторство младших разработчиков',
        'Оптимизация производительности приложений'
      ],
      sourceUrl: 'https://hh.ru',
      sourceName: 'hh.ru'
    },
    {
      title: 'Backend Developer (Python)',
      company: 'Сбер',
      location: 'Санкт-Петербург',
      salary: '₽200,000 - ₽280,000',
      tags: ['Python', 'Django', 'PostgreSQL'],
      type: 'Удаленно',
      description: 'В Сбер Технологии открыта позиция Backend разработчика на Python. Работа над высоконагруженными системами и микросервисной архитектурой.',
      requirements: [
        'Опыт работы с Python от 3 лет',
        'Знание Django или FastAPI',
        'Опыт работы с PostgreSQL',
        'Понимание принципов REST API',
        'Знание Git и CI/CD'
      ],
      responsibilities: [
        'Разработка и поддержка backend сервисов',
        'Проектирование API',
        'Оптимизация запросов к базе данных',
        'Участие в code review'
      ],
      sourceUrl: 'https://superjob.ru',
      sourceName: 'superjob.ru'
    },
    {
      title: 'DevOps Engineer',
      company: 'Тинькофф',
      location: 'Москва',
      salary: '₽220,000 - ₽320,000',
      tags: ['Kubernetes', 'Docker', 'AWS'],
      type: 'Гибрид',
      description: 'Тинькофф ищет DevOps инженера для работы с облачной инфраструктурой и CI/CD процессами. Работа в команде с лучшими специалистами отрасли.',
      requirements: [
        'Опыт работы с Kubernetes от 2 лет',
        'Знание Docker и контейнеризации',
        'Опыт работы с AWS или другими облачными провайдерами',
        'Понимание принципов CI/CD',
        'Знание Linux и bash'
      ],
      responsibilities: [
        'Управление Kubernetes кластерами',
        'Настройка и поддержка CI/CD пайплайнов',
        'Мониторинг и логирование систем',
        'Автоматизация процессов'
      ],
      sourceUrl: 'https://career.habr.com',
      sourceName: 'Habr Карьера'
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
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#20B0B4]"
              onClick={() => setSelectedVacancy(vacancy)}
            >
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

      <Dialog open={!!selectedVacancy} onOpenChange={() => setSelectedVacancy(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedVacancy && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-[#072A4A] mb-2">
                  {selectedVacancy.title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Building2" size={18} />
                      <span className="font-semibold">{selectedVacancy.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={18} />
                      <span>{selectedVacancy.location}</span>
                    </div>
                    <Badge className="bg-[#20B0B4]">{selectedVacancy.type}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#20B0B4] mb-4">
                    {selectedVacancy.salary}
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-xl font-bold text-[#072A4A] mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={22} />
                    Описание вакансии
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedVacancy.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#072A4A] mb-3 flex items-center gap-2">
                    <Icon name="CheckSquare" size={22} />
                    Требования
                  </h3>
                  <ul className="space-y-2">
                    {selectedVacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-[#20B0B4] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#072A4A] mb-3 flex items-center gap-2">
                    <Icon name="Briefcase" size={22} />
                    Обязанности
                  </h3>
                  <ul className="space-y-2">
                    {selectedVacancy.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Circle" size={12} className="text-[#20B0B4] flex-shrink-0 mt-2" />
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#072A4A] mb-3 flex items-center gap-2">
                    <Icon name="Tag" size={22} />
                    Технологии
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVacancy.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-[#20B0B4] text-[#20B0B4] text-sm px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t flex items-center justify-between gap-4">
                  <a 
                    href={selectedVacancy.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#20B0B4] hover:underline"
                  >
                    <Icon name="ExternalLink" size={18} />
                    Смотреть на {selectedVacancy.sourceName}
                  </a>
                  <Button 
                    className="bg-[#20B0B4] hover:bg-[#20B0B4]/90"
                    onClick={() => {
                      handleApply(selectedVacancy.title);
                      setSelectedVacancy(null);
                    }}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Откликнуться
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Vacancies;