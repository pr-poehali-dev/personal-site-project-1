import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О себе</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {" "}
            Студент 3 курса с современным подходом к преподаванию технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon
                  name="GraduationCap"
                  size={24}
                  className="text-blue-600"
                />
                Образование
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Колледж коломна{" "}
                  </h4>
                  <p className="text-gray-600">
                    Мастер по ремонту и обслуживанию автомобилей
                  </p>
                  <p className="text-sm text-gray-500">2019-2022</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {" "}
                    Государственный социально-гуманитарный университет
                  </h4>
                  <p className="text-gray-600">студент</p>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Lightbulb" size={24} className="text-blue-600" />
                Философия преподавания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Верю, что каждый ученик способен создавать и изобретать. Моя
                задача — показать, как теория превращается в практику, а идеи —
                в реальные проекты. Использую современные технологии и проектный
                подход для развития творческого мышления.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Проектное обучение
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  STEAM подход
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Инновации
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
