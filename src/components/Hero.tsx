import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Star" size={16} className="mr-2" />
                Бесплатное обучение
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Раскройте свой
                <span className="text-purple-600 block">актерский талант</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональная онлайн-школа актерского мастерства с выездными
                мастер-классами в районы Тамбова. Обучение от студентов
                выпускных курсов театральных вузов.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Video" size={20} className="mr-2" />
                Посмотреть видео
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Очные встречи</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Бесплатно</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Icon name="Users" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Групповые занятия</h3>
                    <p className="text-sm text-purple-100">
                      Общение с единомышленниками
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Выезд в районы</h3>
                    <p className="text-sm text-purple-100">
                      Мастер-классы по всему Тамбову
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Icon name="Award" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Выпускной экзамен</h3>
                    <p className="text-sm text-purple-100">
                      Итоговая постановка
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
