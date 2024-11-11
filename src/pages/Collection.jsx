import { Link } from "react-router-dom";
import { templates } from "../data/templatesData"; // Mengimpor data template

export default function Collection() {
  return (
    <div className="py-20 lg:px-20 px-6">
      <div className="mb-10">
        <h2 className="text-primary text-2xl text-center">
          Tema Undangan Digital
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-full gap-5">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-list w-60 bg-tertiary p-3 rounded-md outline outline-secondary outline-1"
          >
            <div className="template-card">
              <img
                src={template.img}
                alt={template.name}
                className="template-image w-fit rounded-md"
              />
              <div className="flex justify-between items-center py-2">
                <h3 className=" text-neutral-800">{template.name}</h3>
                <Link
                  to={`/collection/preview/${template.id}`}
                  className="preview-button px-3 py-1 bg-primary hover:bg-softblue rounded-md text-white"
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
