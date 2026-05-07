import TemplateCard
from "./TemplateCard";


const TemplateGrid = ({

  templates,

  user

}) => {

  return (

    <div
      className="
      grid

      grid-cols-1

      sm:grid-cols-2

      lg:grid-cols-3

      gap-8

      mt-8
    "
    >

      {

        templates.map((template) => (

          <TemplateCard

            key={template.id}

            template={template}

            user={user}
          />
        ))
      }

    </div>
  );
};

export default TemplateGrid;