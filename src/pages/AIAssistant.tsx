import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const AIAssistant = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const exampleQuestions = [
    'Какие навыки нужны для Frontend разработчика?',
    'Какая средняя зарплата Python разработчика?',
    'Как стать DevOps инженером?',
    'Какие технологии сейчас в тренде?'
  ];

  const chatHistory = [
    {
      type: 'user',
      text: 'Какие навыки нужны для Frontend разработчика?'
    },
    {
      type: 'ai',
      text: 'На основе анализа 1,247 вакансий, топ-5 навыков для Frontend разработчика:',
      skills: ['React', 'TypeScript', 'CSS/SCSS', 'Git', 'REST API']
    }
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#20B0B4] to-purple-500 flex items-center justify-center mx-auto mb-4">
            <Icon name="Bot" size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[#072A4A] mb-2">Тота ИИ</h1>
          <p className="text-gray-600">Ваш персональный карьерный помощник</p>
          <Badge className="bg-green-500/10 text-green-600 border-green-200 mt-2">
            <Icon name="Circle" size={8} className="mr-1 fill-green-500" />
            Онлайн
          </Badge>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`${msg.type === 'user' ? 'text-right' : ''}`}>
                  {msg.type === 'user' ? (
                    <div className="inline-block bg-[#072A4A] text-white rounded-lg px-4 py-3 max-w-md">
                      {msg.text}
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#20B0B4] to-purple-500 flex items-center justify-center">
                          <Icon name="Bot" size={16} className="text-white" />
                        </div>
                        <span className="font-semibold text-[#072A4A]">Тота ИИ</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-2xl">
                        <p className="mb-3">{msg.text}</p>
                        {msg.skills && (
                          <div className="flex flex-wrap gap-2">
                            {msg.skills.map((skill, i) => (
                              <Badge key={i} className="bg-[#20B0B4] text-white">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <div className="flex gap-2">
            <Input 
              placeholder="Задайте вопрос Тоте..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-12"
            />
            <Button size="lg" className="bg-[#20B0B4] hover:bg-[#20B0B4]/90">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold text-[#072A4A] mb-4">Примеры вопросов:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(question)}
                  className="text-left p-3 border-2 border-gray-200 rounded-lg hover:border-[#20B0B4] hover:bg-[#20B0B4]/5 transition-all"
                >
                  <div className="flex items-start space-x-2">
                    <Icon name="MessageCircle" size={16} className="text-[#20B0B4] mt-1" />
                    <span className="text-sm text-gray-700">{question}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;
