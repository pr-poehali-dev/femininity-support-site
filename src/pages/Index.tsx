import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-blush-cream">
      
      {/* Главный экран */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Я помогаю женщинам раскрыть{' '}
                <span className="text-accent-pink">уверенность</span>,{' '}
                <span className="text-charcoal/80">проявленность</span>{' '}
                и любовь к себе
              </h1>
              <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed">
                Без психологического образования, но с богатым опытом и глубокой практикой. 
                Я соединяю психологию, философию и духовные концепции, опираясь на то, что работает именно для вас.
              </p>
              <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-accent-pink hover:bg-accent-pink/90 text-white font-medium px-8 py-4 rounded-full font-body text-lg border border-accent-pink/20 shadow-lg hover:shadow-xl transition-all"
                >
                  Записаться на бесплатную диагностику
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="https://cdn.poehali.dev/files/667a8f97-2daf-4b9c-8d9d-62639a956aa9.jpg" 
                  alt="Женский коуч" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section className="px-6 py-16 bg-rose-mist/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Обо мне
          </h2>
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-soft-pink/20">
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
            
            {/* Яркий блок - разделен на две строки */}
            <div className="text-center bg-gradient-to-r from-accent-pink/20 to-dusty-rose/20 p-8 rounded-xl border-2 border-accent-pink/30 shadow-lg">
              <p className="font-heading text-2xl md:text-3xl font-bold text-charcoal leading-tight">
                Показываю другим женщинам как пройти путь<br/>
                <span className="text-accent-pink">От я-недостаточна → Я-МОГУ ВСЁ</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок трансформации с фото и цитатой */}
      <section className="px-6 py-16 bg-gradient-to-br from-soft-pink/30 to-blush-cream">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/files/43270a49-c109-4c30-a089-3ce2cacaba7d.jpg" 
              alt="Трансформация" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight text-center">
                "Я больше не гадкий утёнок.<br/>
                Я лебедь, который расправил крылья<br/>
                и летит туда, где ему хорошо."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Обновленный блок запросов */}
      <section className="px-6 py-16 bg-blush-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            ✨ С какими запросами приходят
          </h2>
          <div className="space-y-6 mb-12">
            {[
              "«Я потерялась, не знаю, что делать дальше, всё рухнуло».",
              "«Мне кажется, чтобы заслужить любовь или успех, я должна быть другой».",
              "«Я устала быть удобной и боюсь признаться, что хочу большего».",
              "«Я не знаю, кто я без чужих ожиданий».",
              "«Мне страшно быть слабой. Я боюсь, что если признаюсь себе, что не контролирую всё — потеряю себя»."
            ].map((request, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-xl shadow-md border border-soft-pink/20 hover:shadow-lg transition-shadow">
                <p className="font-body text-lg text-charcoal/90 leading-relaxed">
                  — {request}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-accent-pink/20 p-8 rounded-2xl border-2 border-accent-pink/40 shadow-lg">
            <p className="font-heading text-xl md:text-2xl font-semibold text-charcoal">
              📌 Чаще всего это про одно: <span className="text-accent-pink">быть собой небезопасно.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Новый блок результатов */}
      <section className="px-6 py-16 bg-rose-mist/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            ✨ К чему мы приходим вместе (результаты)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Лёгкость: «как будто груз упал с плеч».",
              "Новый угол зрения: «А что, так можно было?»",
              "Больше веры в себя и близость с собой.",
              "Уверенность, спокойствие, благость.",
              "Смелость перестать соглашаться на меньшее.",
              "Контакт с собственными желаниями."
            ].map((result, index) => (
              <Card key={index} className="bg-white/90 border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 border border-soft-pink/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-pink/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Star" size={16} className="text-accent-pink" />
                    </div>
                    <p className="font-body text-charcoal/90 leading-relaxed">
                      — {result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-gradient-to-r from-accent-pink/20 to-dusty-rose/20 p-8 rounded-2xl border-2 border-accent-pink/30 shadow-xl">
            <p className="font-heading text-xl md:text-2xl font-semibold text-charcoal mb-4">
              И главный вопрос, с которым женщины уходят:
            </p>
            <p className="font-heading text-2xl md:text-3xl font-bold text-accent-pink">
              «Что я на самом деле хочу?»
            </p>
          </div>
        </div>
      </section>

      {/* Продукты и услуги */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            Продукты и услуги
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Индивидуальная работа */}
            <Card className="bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-soft-pink/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-soft-pink/30 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="User" size={32} className="text-accent-pink" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Индивидуальная работа
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      7 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-accent-pink">
                      5 000 руб
                    </p>
                  </div>
                  <p className="font-body text-charcoal/80 leading-relaxed">
                    Личные коуч-сессии для тех, кто хочет глубоко проработать запросы 
                    и получить персональную поддержку.
                  </p>
                  <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent-pink hover:bg-accent-pink/90 text-white font-medium rounded-full border border-accent-pink/20 shadow-md">
                      Выбрать
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Женский мастермаинд */}
            <Card className="bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative border border-charcoal/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-charcoal text-white px-4 py-1 rounded-full font-body text-sm font-medium">
                  Популярно
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-charcoal/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Users" size={32} className="text-charcoal" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Женский мастермаинд
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      20 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-charcoal">
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
                  <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-charcoal hover:bg-charcoal/90 text-white font-medium rounded-full shadow-md">
                      Выбрать
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Марафон "Без фильтров" */}
            <Card className="bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-soft-pink/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-soft-pink/30 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Zap" size={32} className="text-accent-pink" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal">
                    Марафон «Без фильтров»
                  </h3>
                  <div className="space-y-2">
                    <p className="font-body text-lg line-through text-charcoal/60">
                      4 000 руб
                    </p>
                    <p className="font-heading text-3xl font-bold text-accent-pink">
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
                  <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent-pink hover:bg-accent-pink/90 text-white font-medium rounded-full border border-accent-pink/20 shadow-md">
                      Выбрать
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Завершающий блок */}
      <section className="px-6 py-16 bg-gradient-to-br from-soft-pink/20 to-rose-mist/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="font-heading text-3xl md:text-4xl font-light text-charcoal/90 leading-relaxed">
            "Счастье доступно каждой женщине. Важно лишь позволить себе быть счастливой."
          </blockquote>
          <p className="font-body text-xl text-charcoal/80 leading-relaxed">
            Я помогу вам найти внутреннюю опору и раскрыть себя. Давайте начнём этот путь вместе.
          </p>
          <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-charcoal hover:bg-charcoal/90 text-white font-medium px-10 py-4 rounded-full font-body text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Записаться на бесплатную диагностику
            </Button>
          </a>
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
              <a href="https://t.me/katy_kes" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
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