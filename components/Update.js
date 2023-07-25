const { useState, useEffect } = require("react");
const { useRouter } = require("next/router");
const { getItemById } = require("@/utils/api");

const Update = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    const itemData = await getItemById(id);
    setName(itemData.name);
    setDescription(itemData.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateItem = {
      name,
      description,
    };
    await updateItem(id, updateItem);
    router.push("/");
  };

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
