const { getItems } = require("@/utils/api");
const { useEffect, useState } = require("react");

const Panel = ({ data }) => {
  // const { items } = data;
  console.log("lo que viene del arreglo ", data);
  const [itemsPanel, setItemsPanel] = useState(data);

  const fetchData = async () => {
    try {
      const itemsData = await getItems();
      return itemsData.items;
    } catch (error) {
      console.log("Error fetching data: ", error);
      return [];
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const newData = await fetchData();
        const updatedItems = newData.map((itm) => {
          const originalItem = itemsPanel.find(
            (original) => original._id === itm._id
          );
          return originalItem && originalItem.status !== itm.status
            ? itm
            : originalItem;
        });
        setItemsPanel(updatedItems);
      } catch (error) {
        console.error(error);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [itemsPanel]);

  return (
    <div className="panel">
      {itemsPanel.map((iter, index) => (
        <div
          key={iter._id}
          className={`panel-item ${
            iter.status === "off" ? "status-off" : "status-on"
          }`}
        >
          <p>Name: {iter.name}</p>
          <p>Description: {iter.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Panel;
