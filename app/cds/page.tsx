const fetchCDs = async (): Promise<MusicItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/cds`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Cds = async () => {
  const cdsData = await fetchCDs();
  return <div>Cds</div>;
};

export default Cds;
