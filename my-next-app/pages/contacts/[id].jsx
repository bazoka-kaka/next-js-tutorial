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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }) => {
  return (
    <div>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.website}</p>
      <p>{contact.address.city}</p>
    </div>
  );
};

export default Contact;
