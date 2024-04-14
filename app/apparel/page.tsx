const fetchProperties = async (): Promise<ApparelItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/apparel`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Apparel = async () => {
  const apparel = await fetchProperties();

  return (
    <section>
      <div>whatever</div>
    </section>
  );
};

export default Apparel;
