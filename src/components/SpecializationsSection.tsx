import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Деревообработка",
      icon: "TreePine",
      description: "Традиционные и современные методы работы с деревом",
      skills: [
        "Столярное дело",
        "Резьба",
        "Мебельное производство",
        "Реставрация",
      ],
    },
    {
      title: "Металлообработка",
      icon: "Wrench",
      description:
        "Слесарные работы и современные технологии обработки металла",
      skills: ["Сварка", "Токарное дело", "Фрезерование", "3D печать металлом"],
    },
    {
      title: "Электротехника",
      icon: "Zap",
      description: "Основы электричества и современной электроники",
      skills: ["Схемотехника", "Arduino", "Робототехника", "Умный дом"],
    },
    {
      title: "Цифровые технологии",
      icon: "Monitor",
      description: "Современные инструменты проектирования и производства",
      skills: ["CAD системы", "3D моделирование", "Лазерная резка", "ЧПУ"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Специализации
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Преподаю современные технологии с опорой на традиционные ремёсла
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon
                    name={spec.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-lg">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                <div className="space-y-2">
                  {spec.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="mr-1 mb-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
