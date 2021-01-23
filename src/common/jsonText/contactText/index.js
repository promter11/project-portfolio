import Pin from "../../../assets/icons/contact/pin.svg";
import Phone from "../../../assets/icons/contact/phone-call.svg";
import Email from "../../../assets/icons/contact/email.svg";

export const contactText = {
  RU: {
    title: "Контакты",
    subtitle: "Давайте оставаться на связи",
    blocks: {
      left: {
        title: "Контактные данные",
        items: [
          {
            image: Pin,
            value: "Волгоград, Россия",
          },
          {
            image: Phone,
            value: "+7 (937) 098-05-94",
            path: "tel:79370980594",
          },
          {
            image: Email,
            value: "promter11@gmail.com",
            path: "mailto:promter11@gmail.com",
          },
        ],
      },
      right: {
        title: "Отправьте мне сообщение",
        form: {
          name: "Имя",
          email: "Электронная почта",
          message: "Сообщение",
          submit: "Отправить",
        },
      },
    },
  },
  EN: {
    title: "Contact",
    subtitle: "Let's keep in touch",
    blocks: {
      left: {
        title: "Contacts",
        items: [
          {
            image: Pin,
            value: "Volgograd, Russia",
          },
          {
            image: Phone,
            value: "+7 (937) 098-05-94",
            path: "tel:79370980594",
          },
          {
            image: Email,
            value: "promter11@gmail.com",
            path: "mailto:promter11@gmail.com",
          },
        ],
      },
      right: {
        title: "Send me a message",
        form: {
          name: "Name",
          email: "E-Mail",
          message: "Message",
          submit: "Submit",
        },
      },
    },
  },
};
