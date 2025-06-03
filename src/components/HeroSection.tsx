import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <Icon name="Wrench" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Алиев Анвар</h1>
          <p className="text-xl text-gray-600 mb-2">
            Преподаватель технологии и труда
          </p>
          <p className="text-lg text-blue-600 font-medium">
            Готовлю будущих мастеров своего дела
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Помогаю ученикам открыть мир технологий через практическое обучение,
          творческое мышление и современные подходы к образованию
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Mail" size={20} />
            Связаться со мной
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="Download" size={20} />
            Скачать резюме
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
