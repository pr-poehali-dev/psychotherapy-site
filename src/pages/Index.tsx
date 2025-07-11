import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-montserrat font-bold text-therapy-darkSlate">
              Психологическая помощь
            </h1>
            <Button className="bg-therapy-warmBeige hover:bg-therapy-softBrown text-white">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-therapy-cream to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-therapy-darkSlate mb-6 leading-tight">
                Путь к внутренней гармонии начинается здесь
              </h2>
              <p className="text-xl text-therapy-darkSlate/80 mb-8 leading-relaxed">
                Профессиональная психологическая поддержка для взрослых, детей и
                семей. Индивидуальный подход к каждому клиенту в уютной и
                безопасной обстановке.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-therapy-warmBeige hover:bg-therapy-softBrown text-white"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-therapy-warmBeige text-therapy-darkSlate hover:bg-therapy-warmBeige/10"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/303c6b5e-48c5-4f93-b777-04edfd297db7.jpg"
                alt="Уютный кабинет психотерапевта"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-therapy-darkSlate mb-4">
              Мои услуги
            </h2>
            <p className="text-lg text-therapy-darkSlate/70 max-w-2xl mx-auto">
              Комплексная психологическая помощь для разных возрастных групп и
              жизненных ситуаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "User",
                title: "Индивидуальная терапия",
                description:
                  "Работа с личными проблемами, тревожностью, депрессией, самооценкой",
              },
              {
                icon: "Users",
                title: "Семейная терапия",
                description:
                  "Решение семейных конфликтов, улучшение отношений между партнёрами",
              },
              {
                icon: "Baby",
                title: "Детская психология",
                description:
                  "Помощь детям и подросткам в преодолении трудностей развития",
              },
              {
                icon: "Monitor",
                title: "Онлайн консультации",
                description: "Удобный формат терапии из любой точки мира",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300 border-therapy-warmBeige/20"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-therapy-warmBeige/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-therapy-warmBeige"
                    />
                  </div>
                  <CardTitle className="text-therapy-darkSlate font-montserrat">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-therapy-darkSlate/70 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Therapy Section */}
      <section className="py-20 bg-therapy-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/bafacb13-6194-4851-aa74-3c2c03889255.jpg"
                alt="Терапевтическая обстановка"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-therapy-darkSlate mb-6">
                О терапии
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-therapy-warmBeige rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-therapy-darkSlate mb-2">
                      Безопасное пространство
                    </h3>
                    <p className="text-therapy-darkSlate/80">
                      Создаю доверительную атмосферу, где вы можете открыто
                      говорить о своих переживаниях без страха осуждения
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-therapy-warmBeige rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-therapy-darkSlate mb-2">
                      Индивидуальный подход
                    </h3>
                    <p className="text-therapy-darkSlate/80">
                      Каждый клиент уникален. Подбираю методы работы, учитывая
                      ваши особенности и потребности
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-therapy-warmBeige rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-therapy-darkSlate mb-2">
                      Развитие и рост
                    </h3>
                    <p className="text-therapy-darkSlate/80">
                      Помогаю не только решить текущие проблемы, но и развить
                      навыки для будущих жизненных вызовов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-therapy-darkSlate mb-4">
              Как проходят сессии
            </h2>
            <p className="text-lg text-therapy-darkSlate/70 max-w-2xl mx-auto">
              Пошаговый процесс терапии, который поможет вам достичь желаемых
              изменений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Знакомство",
                description:
                  "Первая встреча посвящена знакомству, обсуждению запроса и постановке целей терапии",
              },
              {
                step: "2",
                title: "Исследование",
                description:
                  "Глубокое исследование проблемы, выявление причин и паттернов поведения",
              },
              {
                step: "3",
                title: "Изменения",
                description:
                  "Работа над изменениями, освоение новых навыков и способов реагирования",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-therapy-warmBeige text-white rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat font-bold text-xl">
                    {step.step}
                  </div>
                  <CardTitle className="text-therapy-darkSlate font-montserrat">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-therapy-darkSlate/70">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-therapy-darkSlate text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-montserrat font-bold mb-6">
                Свяжитесь со мной
              </h2>
              <p className="text-lg mb-8 text-white/80">
                Готов ответить на ваши вопросы и помочь сделать первый шаг к
                изменениям. Не откладывайте заботу о себе на потом.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-therapy-warmBeige"
                  />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-therapy-warmBeige"
                  />
                  <span>info@therapy.example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-therapy-warmBeige"
                  />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-therapy-warmBeige"
                  />
                  <span>Пн-Пт: 10:00-20:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-montserrat font-semibold mb-6">
                Запишитесь на консультацию
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-therapy-warmBeige"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-therapy-warmBeige"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-therapy-warmBeige h-24 resize-none"
                    placeholder="Опишите кратко ваш запрос..."
                  />
                </div>
                <Button className="w-full bg-therapy-warmBeige hover:bg-therapy-softBrown text-white py-3">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-therapy-darkSlate/90 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white/80">
              © 2024 Психологическая помощь. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
