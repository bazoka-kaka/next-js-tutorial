export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((contact) => {
    return {
      params: { id: contact.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Contact = () => {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default Contact;
