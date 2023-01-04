import styles from "./typography.module.scss";

const typography = [
  {
    name: "body",
    style: styles.body,
  },
  {
    name: "h1",
    style: styles.h1,
  },
  {
    name: "h2",
    style: styles.h2,
  },
  {
    name: "h3",
    style: styles.h3,
  },
  {
    name: "h4",
    style: styles.h4,
  },
];

export default function Typography() {
  return (
    <ul>
      {typography.map((item) => (
        <li key={item.name}>
          <p className={item.style}>
            The quick brown fox jumped over the lazy dog.
          </p>
          <p className={styles.body}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
