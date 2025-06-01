import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Icon name="Theater" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Союз актеров</h3>
                <p className="text-sm text-gray-400">
                  Онлайн-школа актерского мастерства
                </p>
              </div>
            </div>
            <p className="text-gray-300">
              Бесплатное обучение актерскому мастерству с выездными
              мастер-классами по всему Тамбову.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Программа</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Постановка речи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Импровизация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Концентрация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Видеоуроки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Встречи</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Октябрь - Знакомство</li>
              <li>Февраль - Мастер-классы</li>
              <li>Май - Выпускной экзамен</li>
              <li>Выезд во все районы</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (475) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@actorsunion-tambov.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Тамбов, все районы</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Союз актеров. Все права защищены. Бесплатная
            онлайн-школа актерского мастерства г. Тамбов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
