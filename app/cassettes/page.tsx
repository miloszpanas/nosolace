const fetchCassettes = async (): Promise<MusicItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/cassettes`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Cassettes = async () => {
  const cassettesData = await fetchCassettes();
  return <div>Cassettes</div>;
};

export default Cassettes;
