import { Collection } from "tinacms";

const Empreendimentos: Collection = {
  name: "empreendimentos",
  label: "Empreendimentos",
  path: "content/empreendimentos",
  fields: [
    { name: "title", label: "Título", type: "string" },
    { name: "description", label: "Descrição", type: "string" },
    { name: "preco", label: "Preço", type: "string" },
    { name: "localizacao", label: "Localização", type: "string" },
    { name: "imagens", label: "Imagens", type: "image", list: true },
    { name: "dormitorios", label: "Dorms.", type: "string" },
    { name: "area", label: "Área.", type: "string" },
    { name: "categoria", label: "Categoria", type: "string" },
  ],
};

export default Empreendimentos;
