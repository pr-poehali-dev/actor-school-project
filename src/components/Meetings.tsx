import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Meetings = () => {
  const meetings = [
    {
      number: "1",
      title: "Знакомство и основы",
      month: "Октябрь",
      description:
        "Первая встреча для знакомства участников и изучения основ актерского мастерства",
      activities: [
        "Знакомство с группой",
        "Базовые упражнения на раскрепощение",
        "Постановка целей обучения",
      ],
    },
    {
      number: "2",
      title: "Мастер-классы",
      month: "Февраль",
      description:
        "Углубленное изучение техник через практические мастер-классы",
      activities: [
        "Мастер-класс по речи",
        "Импровизационные игры",
        "Работа над сценическими этюдами",
      ],
    },
    {
      number: "3",
      title: "Выпускной экзамен",
      month: "Май",
      description:
        "Итоговая встреча с подготовкой и показом выпускной постановки",
      activities: [
        "Репетиции выпускного спектакля",
        "Итоговый показ",
        "Вручение сертификатов",
      ],
    },
  ];

  return (
    <section id="meetings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Очные встречи в Тамбове
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Три раза в год мы организуем выездные мастер-классы в районы города
            для живого общения и практических занятий
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {meetings.map((meeting, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-lg">
                <Badge variant="secondary" className="bg-white text-purple-600">
                  {meeting.month}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">
                      {meeting.number}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{meeting.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {meeting.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon
                    name="Calendar"
                    size={16}
                    className="mr-2 text-purple-500"
                  />
                  Программа встречи:
                </h4>
                <ul className="space-y-2">
                  {meeting.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start">
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Icon
              name="MapPin"
              size={48}
              className="mx-auto mb-4 text-purple-200"
            />
            <h3 className="text-2xl font-bold mb-4">
              Выезд во все районы Тамбова
            </h3>
            <p className="text-lg text-purple-100 mb-6">
              Мы приезжаем к вам в удобное место для проведения мастер-классов.
              География наших встреч покрывает весь город и пригороды.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">12+</div>
                <div className="text-purple-200">районов города</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4 часа</div>
                <div className="text-purple-200">длительность встречи</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15-20</div>
                <div className="text-purple-200">человек в группе</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetings;
