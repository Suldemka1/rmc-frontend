import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-gray-700 py-6">
      <div className="container mx-auto flex sm:flex-col md:flex-row justify-between text-gray-200 font-semibold text-md">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 font-semibold sm:text-xl md:text-xl">
            <h1>
              Интерактивная карта угольных
              <br /> складов Республики Тыва
            </h1>
            <h2>
              Разработано при поддержке
              <br />
              Центра управления регионом
            </h2>
            <h2>Все права принадлежат Центр управления регионом</h2>
            <h2>
              Сайт разработан{" "}
              <a href="https://cit.rtyva.ru" className="hover:text-blue-500">
                КП РТ "ЦИТ РТ"
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col">
          
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Министерство топлива и энергетики</h1>
              <h1 className="text-lg">Контактная информация</h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <MdEmail />
                  <a href="mailto: someemail@mail.ru">someemail@mail.ru</a>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <MdPhone />
                  <a href="tel: +73942235050">+7 (39422) 34040</a>
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Социальные сети и мессенджеры</h2>
                  <div className="flex flex-row items-center gap-3">
                    <a href="tel: +73942235050">
                      <img src="/vk_logo.png" width="35px" />
                    </a>
                    <a href="">
                      <img src="/viber_logo.png" width="35px" />
                    </a>
                    <a href="">
                      <img src="/tg_logo.png" width="35px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Центр управления регионом</h1>
              <h1 className="text-lg">Контактная информация</h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <MdEmail />
                  <a href="mailto: someemail@mail.ru">someemail@mail.ru</a>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <MdPhone />
                  <a href="tel: +73942235050">+7 (39422) 34040</a>
                </div>
                <div className="flex flex-col gap-2">
                  <h2>Социальные сети и мессенджеры</h2>
                  <div className="flex flex-row items-center gap-3">
                    <a href="tel: +73942235050">
                      <img src="/vk_logo.png" width="35px" />
                    </a>
                    <a href="">
                      <img src="/viber_logo.png" width="35px" />
                    </a>
                    <a href="">
                      <img src="/tg_logo.png" width="35px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
