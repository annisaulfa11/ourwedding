import TemplateA from "../pages/templates/TemplateA";
import { themes} from "./themesData";

export const templates = [
  {
    id: 1,
    name: "Soft Blue",
    component: <TemplateA theme={themes[0]}/>,
    img: "/src/assets/1.jpg",
  },
  {
    id: 2,
    name: "Soft Blue",
    component: <TemplateA theme={themes[1]}/>,
    img: "/src/assets/1.jpg",
  },
];
