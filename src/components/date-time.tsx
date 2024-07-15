export default function DateTime({ date }: { date: string }) {
  return (
    <div>
      {new Date(new Date(date).toISOString()).toLocaleDateString("en-US")}
    </div>
  );
}
