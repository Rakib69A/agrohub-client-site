import React from "react";

const HomeCategory = () => {
  const categoryData = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1059104252/photo/seedling-growth-planting-trees-watering-a-tree-natural-light.jpg?s=612x612&w=0&k=20&c=1kmHG_HrxPqIrdC02S3fl00jvJxoDlFn4-RurZooXew=",
      title: "Seeds",
    },
    {
      id: 2,
      image:
        "https://mindseteco.co/wp-content/uploads/elementor/thumbs/Insecticidal-Soap-Spray-pq0osacyi5dj5u2nia3p4umg4ibh2qn7jzbqdl2zo4.png",
      title: "Insecticides",
    },
    {
      id: 3,
      image:
        "https://www.syngenta.co.in/sites/g/files/kgtney376/files/media/image/2022/08/01/new_banner_all_5_products_with_veggies_r_2.png",
      title: "Fungicides",
    },
    {
      id: 4,
      image:
        "https://cdn11.bigcommerce.com/s-sfwp5/images/stencil/385x215/uploaded_images/plant-growth-regulators-pros-and-cons-1.jpg?t=1586462368",
      title: "Growth Promoters",
    },
  ];
  return (
    <div>
      <div className="text-center mx-4 mt-20 mb-10 text-2xl text-white font-bold">
        <h3>Shop By Category</h3>
      </div>
      <div className="flex gap-4">
        {categoryData.map((item) => {
          return (
            <div
              key={item.id}
              class=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                style={{ borderRadius: 50 }}
                class="p-8 h-64 w-full"
                src={item.image}
                alt="product image"
              />
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategory;
