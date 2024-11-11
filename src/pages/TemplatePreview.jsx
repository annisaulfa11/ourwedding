import { useParams } from "react-router-dom";
import { templates } from "../data/templatesData"; // Mengimpor data template

const TemplatePreview = () => {
  const { templateId } = useParams(); // Mendapatkan templateId dari URL

  // Menemukan template yang sesuai berdasarkan templateId
  const template = templates.find((t) => t.id === parseInt(templateId));

  if (!template) {
    return <div>Template tidak ditemukan.</div>;
  }

  return (
    <div className="preview-container overflow-x-hidden">
      {template.component}
    </div>
  );
};

export default TemplatePreview;
