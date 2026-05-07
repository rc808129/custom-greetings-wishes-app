const FilterButtons = ({

  selectedCategory,

  dispatch

}) => {

  const categories = [

    "all",

    "birthday",

    "festival",

    "relationship"
  ];


  return (

    <div
      className="
      flex
      flex-wrap
      justify-center
      gap-4
      mb-10
    "
    >

      {

        categories.map((category) => (

          <button

            key={category}

            onClick={() =>

              dispatch({

                type: "SET_CATEGORY",

                payload: category
              })
            }

            className={`

              px-6
              py-3

              rounded-2xl

              text-lg
              font-semibold

              capitalize

              transition-all
              duration-300

              cursor-pointer

              shadow-md

              ${
                selectedCategory === category

                ?

                "bg-blue-600 text-white scale-105"

                :

                "bg-white text-gray-700 hover:bg-blue-100"
              }
            `}
          >

            {category}

          </button>
        ))
      }

    </div>
  );
};

export default FilterButtons;