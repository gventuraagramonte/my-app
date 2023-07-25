const { useEffect, useState } = require("react");
const { useRouter } = require("next/router");
const { getItemById, updateItem } = require("@/utils/api");

const Update = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (id) {
      fetchItem();
    }
  }, [id]);

  const fetchItem = async () => {
    const itemData = await getItemById(id);
    setName(itemData.name);
    setDescription(itemData.description);
    setStatus(itemData.status);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      name,
      description,
      status,
    };

    await updateItem(id, updatedItem);
    router.push("/");
  };

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handelSubmit}>
        <label>
          Name:
          <input
            text="text"
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
        <label>
          Description:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
