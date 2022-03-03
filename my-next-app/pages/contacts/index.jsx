import Head from "next/head";
import styles from "../../styles/Contacts.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await url.json();

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>myApp | Contacts</title>
        <meta name="keywords" content="myApp" />
      </Head>
      <div>
        <h1>Contacts Page</h1>
        {contacts.map((contact) => {
          return (
            <Link href={`/contacts/${contact.id}`} key={contact.id}>
              <a className={styles.single}>
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
