const { useEffect, useState } = require("react");
import { useRouter } from "next/router";
const { getItems, deleteItem } = require("@/utils/api");

const List = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchItems();
  }, [setItems]);

  const fetchItems = async () => {
    const itemsData = await getItems();
    setItems(itemsData.items);
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <span>
              <button onClick={() => router.push(`/update/${item._id}`)}>
                Update
              </button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
