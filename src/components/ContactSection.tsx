import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-lg text-gray-600">
            Готов к сотрудничеству и новым проектам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Phone" size={24} className="text-blue-600" />
                Связь со мной
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-gray-500" />
                <span className="text-gray-700">anv.aliev2016@yandex.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-gray-500" />
                <span className="text-gray-700">+7 (999) 9829080</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-gray-500" />
                <span className="text-gray-700">Москва, Россия</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Users" size={24} className="text-blue-600" />
                Сотрудничество
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Открыт для участия в образовательных проектах, мастер-классах и
                обмена опытом с коллегами
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="MessageCircle" size={20} />
                Написать сообщение
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">
              <Icon name="Github" size={20} />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Linkedin" size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Youtube" size={20} />
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
