import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: 'Топ-10 навыков разработчика в 2024',
      category: 'Карьера',
      date: '15 октября 2024',
      readTime: '5 мин',
      image: '📊',
      excerpt: 'Анализируем рынок и выявляем самые востребованные навыки года. На основе данных 15,000+ вакансий.',
      author: 'Алексей Петров'
    },
    {
      title: 'Как увеличить зарплату на 50%',
      category: 'Развитие',
      date: '12 октября 2024',
      readTime: '7 мин',
      image: '💰',
      excerpt: 'Практические советы от экспертов рынка труда. Реальные кейсы и стратегии.',
      author: 'Мария Иванова'
    },
    {
      title: 'Тренды IT-рынка: осень 2024',
      category: 'Аналитика',
      date: '10 октября 2024',
      readTime: '10 мин',
      image: '📈',
      excerpt: 'Подробный обзор изменений и прогнозы на ближайшие месяцы от аналитиков Skill Pulse.',
      author: 'Дмитрий Сидоров'
    },
    {
      title: 'Remote или офис: что выбирают в 2024',
      category: 'Исследования',
      date: '8 октября 2024',
      readTime: '6 мин',
      image: '🏠',
      excerpt: 'Статистика предпочтений работодателей и кандидатов в новой реальности.',
      author: 'Елена Смирнова'
    },
    {
      title: 'DevOps: самая востребованная специализация',
      category: 'Карьера',
      date: '5 октября 2024',
      readTime: '8 мин',
      image: '⚙️',
      excerpt: 'Почему DevOps-инженеры получают самые высокие зарплаты и как стать одним из них.',
      author: 'Игорь Волков'
    },
    {
      title: 'Искусственный интеллект в рекрутинге',
      category: 'Технологии',
      date: '1 октября 2024',
      readTime: '9 мин',
      image: '🤖',
      excerpt: 'Как AI меняет процесс найма и что это значит для кандидатов.',
      author: 'Анна Козлова'
    }
  ];

  const categories = ['Все', 'Карьера', 'Развитие', 'Аналитика', 'Исследования', 'Технологии'];

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
        <div className="mb-12 text-center">
          <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] mb-4">
            📚 Блог
          </Badge>
          <h1 className="text-5xl font-bold text-[#072A4A] mb-4">Блог Skill Pulse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Экспертные статьи о карьере, трендах и развитии в IT-индустрии
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input placeholder="Поиск статей..." className="h-12" />
              <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={`cursor-pointer hover:bg-[#20B0B4] hover:text-white transition-colors ${
                  index === 0 ? 'bg-[#20B0B4]' : 'border-[#20B0B4] text-[#20B0B4]'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#20B0B4]"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="text-6xl text-center mb-4">{article.image}</div>
                
                <div className="space-y-3">
                  <Badge className="bg-[#20B0B4]/10 text-[#20B0B4]">
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="User" size={14} className="mr-1" />
                    {article.author}
                  </div>
                </div>

                <Button variant="ghost" className="w-full text-[#20B0B4] hover:bg-[#20B0B4]/10">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-[#20B0B4] text-[#20B0B4] hover:bg-[#20B0B4]/10">
            Загрузить еще статьи
            <Icon name="ChevronDown" size={16} className="ml-2" />
          </Button>
        </div>

        <Card className="mt-16 bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none">
          <CardContent className="py-12 text-center">
            <Icon name="Mail" size={48} className="text-[#20B0B4] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Подпишитесь на рассылку</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Получайте еженедельный дайджест лучших статей и эксклюзивные материалы
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                placeholder="Ваш email" 
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
