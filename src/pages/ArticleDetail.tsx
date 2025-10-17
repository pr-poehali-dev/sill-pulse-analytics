import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const articles: Record<string, any> = {
    '1': {
      title: 'Топ-10 навыков разработчика в 2024',
      category: 'Карьера',
      date: '15 октября 2024',
      readTime: '5 мин',
      image: '📊',
      author: 'Алексей Петров',
      content: `
        <h2>Введение</h2>
        <p>Мир IT-технологий постоянно меняется, и каждый год требует от разработчиков освоения новых навыков. Мы проанализировали более 15,000 вакансий и составили список самых востребованных компетенций 2024 года.</p>
        
        <h2>Топ-10 навыков:</h2>
        
        <h3>1. TypeScript</h3>
        <p>TypeScript продолжает доминировать в мире веб-разработки. 78% крупных компаний перешли на TypeScript, и спрос на специалистов продолжает расти.</p>
        
        <h3>2. Cloud Technologies (AWS, Azure, GCP)</h3>
        <p>Облачные технологии стали must-have. Знание хотя бы одной облачной платформы увеличивает зарплату разработчика в среднем на 35%.</p>
        
        <h3>3. Docker и Kubernetes</h3>
        <p>Контейнеризация и оркестрация — критически важные навыки для DevOps и Backend разработчиков.</p>
        
        <h3>4. React / Next.js</h3>
        <p>React остается самым популярным фронтенд фреймворком, а Next.js набирает обороты с поддержкой Server Components.</p>
        
        <h3>5. Python для Data Science и AI</h3>
        <p>С ростом интереса к AI и машинному обучению, Python становится обязательным навыком для многих позиций.</p>
        
        <h3>6. GraphQL</h3>
        <p>GraphQL заменяет REST API во многих проектах, обеспечивая более гибкую работу с данными.</p>
        
        <h3>7. CI/CD</h3>
        <p>Автоматизация деплоя и тестирования — базовый навык для любого современного разработчика.</p>
        
        <h3>8. System Design</h3>
        <p>Умение проектировать масштабируемые системы — ключевое требование на позициях Senior+.</p>
        
        <h3>9. Security Best Practices</h3>
        <p>С ростом кибератак знание основ безопасности становится критически важным.</p>
        
        <h3>10. Soft Skills</h3>
        <p>Коммуникация, работа в команде и презентация идей — то, что отличает Senior от Middle.</p>
        
        <h2>Заключение</h2>
        <p>Инвестируйте время в развитие этих навыков, и ваша карьера получит мощный импульс в 2024 году!</p>
      `
    },
    '2': {
      title: 'Как увеличить зарплату на 50%',
      category: 'Развитие',
      date: '12 октября 2024',
      readTime: '7 мин',
      image: '💰',
      author: 'Мария Иванова',
      content: `
        <h2>Реальные стратегии повышения дохода</h2>
        <p>Многие разработчики недооценивают свою рыночную стоимость. В этой статье мы разберем практические шаги для значительного увеличения зарплаты.</p>
        
        <h2>Стратегия 1: Смена компании</h2>
        <p>Статистика показывает, что при смене работы зарплата растет в среднем на 20-30%. При правильной подготовке можно получить и 50%.</p>
        
        <h3>Как готовиться:</h3>
        <ul>
          <li>Изучите рыночные зарплаты для вашего уровня</li>
          <li>Обновите резюме и портфолио</li>
          <li>Практикуйте алгоритмические задачи</li>
          <li>Проходите минимум 3-5 собеседований</li>
        </ul>
        
        <h2>Стратегия 2: Освоение новых технологий</h2>
        <p>Добавление высокооплачиваемых технологий в стек может дать прирост в 30-40%.</p>
        
        <h3>Технологии с высоким ROI:</h3>
        <ul>
          <li>Kubernetes - средний прирост 35%</li>
          <li>AWS/Azure - средний прирост 30%</li>
          <li>Machine Learning - средний прирост 40%</li>
          <li>Blockchain - средний прирост 50%</li>
        </ul>
        
        <h2>Стратегия 3: Переход на Senior/Lead позицию</h2>
        <p>Рост по карьерной лестнице — самый надежный способ увеличения дохода.</p>
        
        <h3>Что нужно для перехода:</h3>
        <ul>
          <li>Технические навыки на уровне Senior</li>
          <li>Опыт менторства</li>
          <li>Участие в архитектурных решениях</li>
          <li>Развитые soft skills</li>
        </ul>
        
        <h2>Кейс из практики</h2>
        <p><strong>Иван, Backend разработчик</strong><br/>
        Было: 180k руб/мес в продуктовой компании<br/>
        Стало: 270k руб/мес после смены и добавления Kubernetes<br/>
        Время на подготовку: 4 месяца</p>
        
        <h2>План действий</h2>
        <ol>
          <li>Оцените свою текущую позицию на рынке</li>
          <li>Выберите 1-2 высокооплачиваемые технологии</li>
          <li>Уделите 3-4 месяца на изучение</li>
          <li>Начните проходить собеседования</li>
          <li>Получите 3-5 офферов и выберите лучший</li>
        </ol>
        
        <h2>Заключение</h2>
        <p>Увеличение зарплаты на 50% — реальная цель при правильном подходе. Главное — системность и последовательность действий!</p>
      `
    },
    '3': {
      title: 'Тренды IT-рынка: осень 2024',
      category: 'Аналитика',
      date: '10 октября 2024',
      readTime: '10 мин',
      image: '📈',
      author: 'Дмитрий Сидоров',
      content: `
        <h2>Обзор рынка</h2>
        <p>Осень 2024 года принесла значительные изменения в IT-индустрию. Мы проанализировали данные за квартал и готовы поделиться ключевыми инсайтами.</p>
        
        <h2>Главные тренды</h2>
        
        <h3>1. Возврат к стабильности</h3>
        <p>После турбулентности 2022-2023 годов рынок стабилизировался. Количество открытых вакансий выросло на 23% по сравнению с началом года.</p>
        
        <h3>2. AI и ML доминируют</h3>
        <p>Спрос на AI/ML специалистов вырос на 127%. Каждая третья компания внедряет или планирует внедрить AI-решения.</p>
        
        <h3>3. Remote-first становится нормой</h3>
        <p>65% вакансий теперь предлагают полностью удаленный формат. Гибридный формат — еще 25%.</p>
        
        <h2>Зарплатные ожидания</h2>
        
        <h3>Backend разработчики:</h3>
        <ul>
          <li>Junior: 80-120k</li>
          <li>Middle: 150-250k</li>
          <li>Senior: 280-450k</li>
          <li>Lead: 400-700k</li>
        </ul>
        
        <h3>Frontend разработчики:</h3>
        <ul>
          <li>Junior: 70-110k</li>
          <li>Middle: 140-230k</li>
          <li>Senior: 250-400k</li>
          <li>Lead: 380-650k</li>
        </ul>
        
        <h3>DevOps инженеры:</h3>
        <ul>
          <li>Middle: 180-280k</li>
          <li>Senior: 300-500k</li>
          <li>Lead: 450-800k</li>
        </ul>
        
        <h2>Востребованные технологии</h2>
        
        <h3>Top-10 технологий по росту спроса:</h3>
        <ol>
          <li>ChatGPT API / LangChain (+340%)</li>
          <li>Next.js 14 (+156%)</li>
          <li>Rust (+142%)</li>
          <li>Kubernetes (+89%)</li>
          <li>PostgreSQL (+67%)</li>
          <li>TypeScript (+54%)</li>
          <li>React Native (+48%)</li>
          <li>Go (+45%)</li>
          <li>Docker (+41%)</li>
          <li>GraphQL (+38%)</li>
        </ol>
        
        <h2>Региональный анализ</h2>
        <p><strong>Москва</strong> - 42% от всех вакансий<br/>
        <strong>Санкт-Петербург</strong> - 18%<br/>
        <strong>Регионы</strong> - 40% (рост на 15% за квартал)</p>
        
        <h2>Прогнозы на зиму 2024-2025</h2>
        <ul>
          <li>Продолжение роста AI/ML направления</li>
          <li>Увеличение зарплат на 10-15%</li>
          <li>Рост спроса на Full-stack разработчиков</li>
          <li>Укрепление позиций TypeScript</li>
        </ul>
        
        <h2>Рекомендации</h2>
        <p>Для разработчиков: фокусируйтесь на AI-технологиях и cloud-native решениях.<br/>
        Для работодателей: предлагайте гибкие условия и конкурентные зарплаты для привлечения талантов.</p>
      `
    }
  };

  const article = articles[id || '1'] || articles['1'];

  const relatedArticles = [
    { id: '2', title: 'Как увеличить зарплату на 50%', category: 'Развитие' },
    { id: '3', title: 'Тренды IT-рынка: осень 2024', category: 'Аналитика' },
    { id: '1', title: 'Топ-10 навыков разработчика в 2024', category: 'Карьера' }
  ].filter(a => a.id !== id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-[#072A4A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="TrendingUp" size={32} className="text-[#20B0B4] group-hover:scale-110 transition-transform" />
              <h1 className="text-2xl font-bold">Skill Pulse</h1>
            </div>
            <Button onClick={() => navigate('/blog')} variant="ghost" className="text-white hover:text-[#20B0B4]">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к блогу
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="mb-8">
            <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] border-[#20B0B4] mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-5xl font-bold text-[#072A4A] mb-4">{article.title}</h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="text-8xl text-center my-8">{article.image}</div>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                }}
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#072A4A] to-[#0a3d5f] text-white border-none mb-8">
            <CardContent className="py-8">
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{article.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Автор: {article.author}</h3>
                  <p className="text-gray-300">
                    Эксперт в области IT-карьеры и анализа рынка труда. Более 10 лет опыта в индустрии.
                  </p>
                </div>
                <Button className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#072A4A] mb-6">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.slice(0, 3).map((related) => (
              <Card 
                key={related.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#20B0B4]"
                onClick={() => navigate(`/article/${related.id}`)}
              >
                <CardContent className="pt-6">
                  <Badge className="bg-[#20B0B4]/10 text-[#20B0B4] mb-3">
                    {related.category}
                  </Badge>
                  <h3 className="font-bold text-[#072A4A] group-hover:text-[#20B0B4] transition-colors">
                    {related.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
