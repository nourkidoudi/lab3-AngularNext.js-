export default function Child({ states }: { states: string[] }) {
  return (
    <>
      <ul>
        {states.map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ul>
    </>
  );
}
