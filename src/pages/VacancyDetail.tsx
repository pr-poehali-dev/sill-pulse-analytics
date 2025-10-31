import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Vacancy {
  id: string;
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

const VacancyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();

  const vacancies: Vacancy[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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

  const vacancy = vacancies.find(v => v.id === id);

  if (!vacancy) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <Icon name="AlertCircle" size={48} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#072A4A] mb-2">Вакансия не найдена</h2>
            <p className="text-gray-600 mb-4">К сожалению, запрошенная вакансия не существует</p>
            <Button onClick={() => navigate('/vacancies')} className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Вернуться к вакансиям
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleApply = () => {
    toast({
      title: 'Отклик отправлен!',
      description: `Ваш отклик на вакансию "${vacancy.title}" успешно отправлен`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-[#072A4A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
              <h1 className="text-xl sm:text-2xl font-bold">Skill Pulse</h1>
            </div>
            <Button onClick={() => navigate('/vacancies')} variant="ghost" className="text-white hover:text-[#20B0B4]">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              <span className="hidden sm:inline">К вакансиям</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/vacancies')}
            className="text-gray-600 hover:text-[#20B0B4] -ml-2"
          >
            <Icon name="ChevronLeft" size={20} className="mr-1" />
            Назад к списку вакансий
          </Button>
        </div>

        <Card className="border-2 border-gray-200 shadow-xl mb-6">
          <CardContent className="pt-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#072A4A] mb-4">
                  {vacancy.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Building2" size={20} />
                    <span className="font-semibold text-base sm:text-lg">{vacancy.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span className="text-base sm:text-lg">{vacancy.location}</span>
                  </div>
                  <Badge className="bg-[#20B0B4] text-white text-sm px-3 py-1">{vacancy.type}</Badge>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#20B0B4]">
                  {vacancy.salary}
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button 
                  size="lg"
                  className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 w-full lg:w-auto"
                  onClick={handleApply}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Откликнуться
                </Button>
                <a 
                  href={vacancy.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#20B0B4] hover:underline text-sm w-full lg:w-auto"
                >
                  <Icon name="ExternalLink" size={16} />
                  Смотреть на {vacancy.sourceName}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-[#072A4A] mb-4 flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-[#20B0B4]" />
                Описание вакансии
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{vacancy.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-[#072A4A] mb-4 flex items-center gap-2">
                <Icon name="CheckSquare" size={24} className="text-[#20B0B4]" />
                Требования
              </h2>
              <ul className="space-y-3">
                {vacancy.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-[#20B0B4] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-base sm:text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-[#072A4A] mb-4 flex items-center gap-2">
                <Icon name="Briefcase" size={24} className="text-[#20B0B4]" />
                Обязанности
              </h2>
              <ul className="space-y-3">
                {vacancy.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Circle" size={12} className="text-[#20B0B4] flex-shrink-0 mt-2" />
                    <span className="text-gray-700 text-base sm:text-lg">{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-[#072A4A] mb-4 flex items-center gap-2">
                <Icon name="Tag" size={24} className="text-[#20B0B4]" />
                Технологии
              </h2>
              <div className="flex flex-wrap gap-2">
                {vacancy.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="border-[#20B0B4] text-[#20B0B4] text-base px-4 py-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-2 border-[#20B0B4] bg-gradient-to-r from-[#20B0B4]/5 to-[#072A4A]/5">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#072A4A] mb-1">Заинтересовала вакансия?</h3>
                <p className="text-gray-600">Откликнитесь прямо сейчас и получите ответ в течение 3 дней</p>
              </div>
              <Button 
                size="lg"
                className="bg-[#20B0B4] hover:bg-[#20B0B4]/90 w-full sm:w-auto"
                onClick={handleApply}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Откликнуться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VacancyDetail;
