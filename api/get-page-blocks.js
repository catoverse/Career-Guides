const getPageBlocks = async (pageId) => {
  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`).then((res) =>
    res.json(),
  );

  return blocks;
};

export default getPageBlocks;
