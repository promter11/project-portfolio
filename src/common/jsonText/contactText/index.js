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
          errors: {
            required: "Поле обязательно для заполнения.",
            maxLength: "Поле содержит слишком большое количество символов.",
            checkEmail: "Пожалуйста, проверьте корректность email адреса.",
          },
        },
      },
    },
    modal: {
      title: "Спасибо!",
      text: "Ваше сообщение успешно отправлено.",
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
          errors: {
            required: "Field is required.",
            maxLength: "Field contains too many characters.",
            checkEmail: "Please check the email address is correct.",
          },
        },
      },
    },
    modal: {
      title: "Thank you!",
      text: "Your message has been successfully delivered.",
    },
  },
};
