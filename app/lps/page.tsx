const fetchLongPlays = async (): Promise<MusicItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/lps`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const LongPlays = async () => {
  const longPlaysData = await fetchLongPlays();
  return <div>LongPlays</div>;
};

export default LongPlays;
