export default function DateFormat({ date }) {
  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(date));

  return <span>{formatted}</span>;
}