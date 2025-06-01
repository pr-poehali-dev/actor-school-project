import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Начните свой путь в актерском мастерстве
              </h2>
              <p className="text-xl text-gray-600">
                Запишитесь на бесплатное обучение в онлайн-школе "Союз актеров"
                и откройте для себя мир театрального искусства
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    100% бесплатно
                  </h3>
                  <p className="text-gray-600">
                    Никаких скрытых платежей и подписок
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Профессиональные педагоги
                  </h3>
                  <p className="text-gray-600">
                    Студенты выпускных курсов театральных вузов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Icon name="Award" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Сертификат по окончании
                  </h3>
                  <p className="text-gray-600">
                    Официальный документ о прохождении курса
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Записаться на курс</CardTitle>
              <CardDescription className="text-purple-100">
                Заполните форму и мы свяжемся с вами для начала обучения
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Район Тамбова
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Выберите ваш район</option>
                    <option>Центральный</option>
                    <option>Ленинский</option>
                    <option>Советский</option>
                    <option>Октябрьский</option>
                    <option>Другой</option>
                  </select>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-4">
                  <Icon name="Send" size={20} className="mr-2" />
                  Записаться бесплатно
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
