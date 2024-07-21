import { ITeacher } from "@entities/teacher";
import { ICourse } from "@entities/course";
import { IImage } from "@shared/types";
import { IFilter } from "@shared/types";

export const course_data: ICourse[] = [
  { info: "popular", title: "Введение в Python", mounths: 6, color: "#bed0ff", image: "src/assets/images/python.png", catrgories: ["python"] },
  { title: "Введение в JavaScript", mounths: 6, color: "#f6ffbe", image: "src/assets/images/javascript.png", catrgories: ["javascript"] },
  { title: "По волнам TypeScript", mounths: 2, color: "#add8ff", image: "src/assets/images/typescript.png", catrgories: ["javascript", "typescript"] },
  { title: "FullStack приложения", mounths: 12, image: "src/assets/images/gear.png", color: "#c2c2c2", catrgories: ["fullstack"] },
  { info: "popular", title: "Telegram боты", mounths: 16, image: "src/assets/images/robot.png", catrgories: ["python"] },
  { title: "Менеджмент", mounths: 6, image: "src/assets/images/folder.png", catrgories: [] },
  { title: "Моды Minecraft", mounths: 6, image: "src/assets/images/minecraft.png", catrgories: ["minecraft"] },
  { title: "Базы данных", mounths: 2, image: "src/assets/images/database.png", catrgories: ["databases", "mysql"] },
];

export const teacher_data: ITeacher[] = [
  {
    image: "src/assets/images/picteacher1.png",
    name: "Игорь Смирнов",
    bio: "Имеет степень магистра по компьютерным наукам, которую получил в Московском государственном университете. Работал разработчиком в крупных IT-компаниях, после чего решил заняться обучением детей программированию.",
    skills: "Java, C++, мобильная разработка",
    reviews: 95,
  },
  {
    image: "src/assets/images/picteacher2.png",
    name: "Ирина Петрова",
    bio: "Ирина окончила Санкт-Петербургский государственный университет, факультет математики и механики. Работала в IT-компаниях, а затем решила посвятить себя преподаванию. Её ученики регулярно выигрывают олимпиады по программированию.",
    skills: "Python, Scratch, веб-разработка",
    reviews: 120,
  },
  {
    image: "src/assets/images/picteacher3.png",
    name: "Мария Иванова",
    bio: "Мария завершила обучение в Новосибирском государственном университете по специальности «‎Прикладная информатика»‎. Она начала свою карьеру как преподаватель в школах и университетах, а затем перешла в онлайн-обучение.",
    skills: "HTML/CSS, JavaScript, робототехника",
    reviews: 152,
  },
  {
    image: "src/assets/images/picteacher4.png",
    name: "Елена Васильева",
    bio: "Елена имеет диплом Санкт-Петербургского политехнического университета по специальности «‎Информационные технологии»‎. Начала карьеру как разработчик, а затем переключилась на обучение детей программированию.",
    skills: "PHP, базы данных, кибербезопасность",
    reviews: 85,
  },
];

export const image_data: IImage[] = [
  { image: "https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400" },
  { image: "https://www.9minecraft.net/wp-content/uploads/2016/09/Industrial-Craft-2-Mod-Screenshots-6.jpg" },
  { image: "https://m.seonews.ru/upload/medialibrary/845/845000de108cb11cbe2c0481fa125fb2.png"},
  { image: "https://media.2x2tv.ru/content/images/2023/03/23423552.jpg" },
];

export const filter_data: IFilter[] = [
  { id: 0, title: "Все курсы", categoties: ["*"], isActive: true },
  { id: 1, title: "Python", categoties: ["python"], isActive: false },
  { id: 2, title: "Веб-разработка", categoties: ["typescript", "javascript", "react"], isActive: false },
  { id: 3, title: "NodeJS", categoties: ["typescript", "javascript"], isActive: false },
  { id: 4, title: "Backend", categoties: ["typescript", "javascript","python"], isActive: false },
  { id: 5, title: "Minecraft", categoties: ["minecraft"], isActive: false },
  { id: 6, title: "Базы данных", categoties: ["databases", "mysql"], isActive: false },
]