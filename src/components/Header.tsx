import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Icon name="Theater" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Союз актеров</h1>
              <p className="text-xs text-gray-500">
                Онлайн-школа актерского мастерства
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#program"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Программа
            </a>
            <a
              href="#meetings"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Встречи
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Записаться бесплатно
            </Button>
          </nav>

          <button className="md:hidden p-2">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
