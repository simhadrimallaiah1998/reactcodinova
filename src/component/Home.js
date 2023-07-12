import React, { useState } from "react";

const Home = () => {
  const [product, setProduct] = useState("");

  const ProductList = [
    {
      name: "COMPUTER",
    },
    {
      name: "LAPTOP",
    },
    {
      name: "MOUSE",
    },
    {
      name: "CAVIOR",
    },
    {
      name: "STRAWBERRY",
    },
    {
      name: "TIE",
    },
    {
      name: "JACKET",
    },
    {
      name: "ORANGE",
    },
    {
      name: "SWEATER",
    },
    {
      name: "APPLE",
    },
    {
      name: "KEYBOARD",
    },
    {
      name: "CLOTHING",
    },
    {
      name: "NOTEBOOK",
    },
    {
      name: "PENCIL",
    },
    {
      name: "SHOES",
    },
    {
      name: "JACKET MEN",
    },
    {
      name: "NIVEA JACKET",
    },
    {
      name: "GIFTS",
    },
    {
      name: "KIWT",
    },
  ];

  const handleProduct = (event) => {
    setProduct(event.target.value);
  };

  const filteredProduct = ProductList.filter((e) =>
    e.name.toLocaleLowerCase().includes(product.toLocaleLowerCase())
  );

  return (
    <div className="grid grid-cols-5 bg-white px-2 w-full h-screen">
      <div className=" col-span-2 h-screen bg-gray-300 mr-1">
        <div className="flex flex-col col-span-1 mt-1 justify-between h-[100%]">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between text-gray-600  items-center px-4 ">
              <h1 className="font-bold font-sm">Product</h1>
              <h1 className="font-bold font-sm">quantity</h1>

              <h1 className="font-bold font-sm">price</h1>

              <h1 className="font-bold font-sm">Total</h1>
            </div>
            <div className="bg-white px-4 py-4 text- w-full m-2 mt-2 font-extrabold">
              THERE ARE NO ITEMS
            </div>
          </div>

          <div className="bg-white flex flex-col text-sm px-4">
            <div className="grid grid-cols-2 w-full">
              <div className="bg-gray-300  px-1 font-bold text-gray-600 text-left cols-span-1">
                SubTotal
              </div>
              <div className="flex px-1 flex-row justify-between items-center">
                <div>0.000 EUR</div>
                <div>0 items</div>
              </div>
            </div>
            <hr className="border-1 border-black w-full" />
            <div className="grid grid-cols-2 w-full">
              <div className="bg-gray-300  px-1 font-bold text-gray-600 text-left cols-span-1">
                VAT Tax
              </div>
              <div className="flex px-1 flex-row justify-between items-center">
                <div>N/A</div>
                <div>EUR</div>
              </div>
            </div>
            <hr className="border-1 border-black w-full" />
            <div className="grid grid-cols-2 w-full">
              <div className="bg-gray-300  px-1 font-bold text-gray-600 text-left cols-span-1">
                Discount
              </div>
              <div className="flex px-1 flex-row justify-between items-center">
                <div>N/A</div>
                <div>EUR</div>
              </div>
            </div>
            <hr className="border-1 border-black w-full" />
            <div className="grid grid-cols-2 w-full">
              <div className="bg-gray-300  px-1 font-bold text-gray-600 text-left cols-span-1">
                Total
              </div>
              <div className="flex px-1 text-left">
                <div>0.000 EUR</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <button className="bg-green-500 py-4 w-full text-white m-1 rounded-lg font-extrabold">
                cancel Sale
              </button>
              <button className="bg-red-500 py-4 w-full m-1 text-white rounded-lg font-extrabold">
                Process Sale
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-3 h-screen bg-gray-300 ml-1">
        <div className="w-full h-10 bg-gray-300 px-2  flex text-gray-600 flex-row justify-between">
          <button>HOME</button>
          <button>COMPUTERS</button>
          <button>FRUITS</button>
          <button>CLOTHES</button>
          <button>SERVICES</button>
          <button>BURGER</button>
          <button>PIZZA</button>
        </div>
        <hr className="border-2 border-white w-full" />
        <div className="w-full py-2 px-2">
          <input
            type="text"
            onChange={handleProduct}
            className="w-full py-2 px-2 "
            placeholder="Search Products..."
          />
        </div>
        <div className="bg-blue-300 py-2 px-1 font-extrabold text-black m-2 w-full">
          Add Product to the Category
        </div>
        <div className="grid overflow-auto grid-cols-5 flex-row justify-around items-center flex-wrap">
          {filteredProduct.map((e) => (
            <div className="flex flex-col col-span-1 m-2 bg-blue-950 rounded-md h-20 w-24">
              <h1 className="text-white text-center pt-2  text-sm">{e.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
