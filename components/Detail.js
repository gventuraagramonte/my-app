const { useEffect, useState } = require("react");
const { useRouter } = require("next/router");
const { getItemById } = require("@/utils/api");

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    const itemData = await getItemById(id);
    setItem(itemData);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Item Detail</h1>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default Detail;
