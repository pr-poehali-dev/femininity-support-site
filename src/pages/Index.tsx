import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-beige">
      
      {/* Главный экран */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Я помогаю женщинам раскрыть{' '}
                <span className="text-gold">уверенность</span>,{' '}
                <span className="text-earthy-brown">проявленность</span>{' '}
                и любовь к себе
              </h1>
              <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
                Без психологического образования, но с богатым опытом и глубокой практикой. 
                Я соединяю психологию, философию и духовные концепции, опираясь на то, что работает именно для вас.
              </p>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-white font-medium px-8 py-4 rounded-full font-body text-lg"
              >
                Записаться на бесплатную диагностику
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/img/5a572e9f-86a1-45b5-a523-765d81e1c763.jpg" 
                  alt="Женский коуч" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Обо мне
          </h2>
          <div className="space-y-8">
            <div className="bg-warm-cream/30 p-8 rounded-2xl">
              <p className="font-body text-lg text-charcoal/90 leading-relaxed mb-6">
                Я выросла девочкой, которая слишком рано взяла на себя роль взрослой, жила в семье с 
                зависимостями и созависимостью, выбирала мужчин, с которыми не могла быть счастлива. 
                Я считала себя недостаточной, сомневалась в себе и боялась быть неудобной для мира.
              </p>
              <p className="font-body text-lg text-charcoal/90 leading-relaxed">
                Но через путь ошибок, поисков и разных практик я научилась принимать свою уникальность, 
                нашла опору внутри себя, обрела веру, научилась справляться с трудностями и теперь живу, 
                раскрываясь как женщина и помогая другим делать то же самое.
              </p>
            </div>
            <div className="text-center bg-gold/10 p-6 rounded-xl">
              <p className="font-body text-xl font-medium text-earthy-brown">
                Моя сила — в личном опыте и гибком мышлении. Я соединяю психологию, философию и духовные концепции, 
                опираясь на то, что работает именно для вас.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* С какими запросами ко мне приходят */}
      <section className="px-6 py-16 bg-soft-beige">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            С какими запросами ко мне приходят
          </h2>
          <p className="font-body text-xl text-center text-charcoal/80 mb-12">
            Со всем этим я работаю. Вместе мы возвращаем вам уверенность, ценность и свободу быть собой.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Чувствую себя недостаточной и неуверенной",
              "Боюсь проявляться и говорить о себе",
              "Постоянно ищу чужого одобрения",
              "Живу в стыде и страхе, что «я не такая»",
              "Не умею опираться на себя и свои решения",
              "Хочу чувствовать ценность, свободу и любовь к себе"
            ].map((pain, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Heart" size={16} className="text-gold" />
                    </div>
                    <p className="font-body text-charcoal/90 leading-relaxed">
                      {pain}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Продукты и услуги */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Продукты и услуги
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Индивидуальная работа */}
            <Card className="bg-warm-cream/20 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="User" size={32} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Индивидуальная работа
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      7 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-gold">
                      5 000 руб
                    </p>
                  </div>
                  <p className="font-body text-charcoal/80 leading-relaxed">
                    Личные коуч-сессии для тех, кто хочет глубоко проработать запросы 
                    и получить персональную поддержку.
                  </p>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white font-medium rounded-full">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Женский мастермаинд */}
            <Card className="bg-earthy-brown/10 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-earthy-brown text-white px-4 py-1 rounded-full font-body text-sm font-medium">
                  Популярно
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-earthy-brown/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Users" size={32} className="text-earthy-brown" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Женский мастермаинд
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      20 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-earthy-brown">
                      14 000 руб
                    </p>
                    <p className="font-body text-sm text-charcoal/70">
                      1 месяц, 4 встречи, группа 6 женщин
                    </p>
                  </div>
                  <p className="font-body text-charcoal/80 leading-relaxed">
                    Сообщество для тех, кто хочет уверенности, регулярности и мощного прорыва. 
                    Цели, поддержка, энергия и раскрытие.
                  </p>
                  <Button className="w-full bg-earthy-brown hover:bg-earthy-brown/90 text-white font-medium rounded-full">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Марафон "Без фильтров" */}
            <Card className="bg-gold/10 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Zap" size={32} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Марафон «Без фильтров»
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      4 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-gold">
                      2 500 руб
                    </p>
                    <p className="font-body text-sm text-charcoal/70">
                      7-дневный онлайн-марафон
                    </p>
                  </div>
                  <p className="font-body text-charcoal/80 leading-relaxed">
                    Для женщин, которые хотят начать вести блог, но сталкиваются с внутренними блоками и страхами. 
                    Здесь нет сухого маркетинга — только проявленность и искренность.
                  </p>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white font-medium rounded-full">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Завершающий блок */}
      <section className="px-6 py-16 bg-gradient-to-br from-warm-cream/30 to-gold/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="font-heading text-3xl md:text-4xl font-light text-charcoal/90 leading-relaxed">
            "Счастье доступно каждой женщине. Важно лишь позволить себе быть счастливой."
          </blockquote>
          <p className="font-body text-xl text-charcoal/80 leading-relaxed">
            Я помогу вам найти внутреннюю опору и раскрыть себя. Давайте начнём этот путь вместе.
          </p>
          <Button 
            size="lg" 
            className="bg-earthy-brown hover:bg-earthy-brown/90 text-white font-medium px-10 py-4 rounded-full font-body text-lg"
          >
            Записаться на бесплатную диагностику
          </Button>
        </div>
      </section>

      {/* Подвал */}
      <footer className="px-6 py-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold">
                Ближе познакомиться со мной можно на бесплатной аудиодиагностике
              </h3>
              <p className="font-body text-white/80">
                Задайте свой вопрос, и я дам честный ответ.
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
                <span className="font-body">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={24} />
                <span className="font-body">Telegram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Icon name="Users" size={24} />
                <span className="font-body">Threads</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;