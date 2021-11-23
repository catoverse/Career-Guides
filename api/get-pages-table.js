const tableId = process.env.NEXT_PUBLIC_PAGES_TABLE_ID;

const getPagesTable = async () => {
  const table = await fetch(`https://notion-api.splitbee.io/v1/table/${tableId}`).then((res) =>
    res.json(),
  );

  return table;
};

export default getPagesTable;
