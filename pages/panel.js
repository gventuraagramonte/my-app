import { getItems } from "@/utils/api";
import { useEffect, useState } from "react";

const { default: Panel } = require("@/components/Panel");

const PanelItems = () => {
  const [info, setInfo] = useState([]);
  console.log("Prueba info", info);
  const [isLoading, setIsLoading] = useState(false);

  let test = [
    {
      _id: "64bfdcb609f70737bd4cdc8b",
      name: "product 1",
      description: "whist list 1",
      status: "on",
      __v: 0,
    },
    {
      _id: "64bfdcc309f70737bd4cdc8d",
      name: "product 2",
      description: "whist list 2",
      status: "off",
      __v: 0,
    },
    {
      _id: "64bfdcd209f70737bd4cdc8f",
      name: "product 3",
      description: "whist list 3",
      status: "on",
      __v: 0,
    },
    {
      _id: "64bfdcdf09f70737bd4cdc91",
      name: "product 4",
      description: "whist list 4",
      status: "off",
      __v: 0,
    },
    {
      _id: "64bfdcea09f70737bd4cdc93",
      name: "product 5",
      description: "whist list 5",
      status: "on",
      __v: 0,
    },
  ];

  //   useEffect(async () => {
  //     setIsLoading(true);
  //     await fetchItems();
  //     setIsLoading(false);
  //   }, []);

  //   const fetchItems = async () => {
  //     const itemsData = await getItems();
  //     console.log("Informacion del API", itemsData.items);
  //     setInfo(itemsData.items);
  //   };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getItems();
      setInfo(res.items);
      setIsLoading(false);
    };
    fetchData();
  }, [setInfo]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>Visualizador</h1>
          <Panel data={info} />
        </div>
      )}
    </>
  );
};

export default PanelItems;
