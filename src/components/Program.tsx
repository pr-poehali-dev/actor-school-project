import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Program = () => {
  const modules = [
    {
      icon: "Mic",
      title: "Постановка речи",
      description: "Работа над правильной и грамотной речью",
      features: [
        "Дыхательные упражнения",
        "Артикуляционная гимнастика",
        "Дикция и произношение",
        "Интонационная выразительность",
      ],
    },
    {
      icon: "Zap",
      title: "Импровизация",
      description: "Развитие навыков спонтанного реагирования",
      features: [
        "Упражнения на быстроту реакции",
        "Создание образов на ходу",
        "Работа в парах и группах",
        "Сценические этюды",
      ],
    },
    {
      icon: "Brain",
      title: "Концентрация и память",
      description: "Развитие внимания, памяти и фантазии",
      features: [
        "Упражнения на внимание",
        "Тренировка зрительной памяти",
        "Развитие воображения",
        "Актерская наблюдательность",
      ],
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Программа обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексное развитие актерских навыков через онлайн-видеоуроки и
            практические домашние задания
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500"
            >
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={module.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription className="text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Формат обучения
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Icon name="Play" size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Видеоуроки</h4>
                  <p className="text-gray-600">
                    От студентов выпускных курсов театральных вузов
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Icon name="BookOpen" size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    Домашние задания
                  </h4>
                  <p className="text-gray-600">
                    Практические упражнения по каждой теме
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
