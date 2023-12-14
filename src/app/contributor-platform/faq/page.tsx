import { FAQ1, FAQ2, FAQ3 } from "./FAQs";

export default function KanbanBoardFAQ() {
  return (
    <main className="m-10 w-full">
      <div className="flex justify-center items-center p-5 text-black text-2xl">
        FAQ
      </div>
      <div className="flex flex-col justify-center items-center mx-10">
        <Item item={FAQ1} />
        <Item item={FAQ2} />
        <Item item={FAQ3} />
      </div>
    </main>
  );
}

function Item({ item }: { item: { q: string; a: string } }) {
  return (
    <div className="collapse collapse-arrow bg-slate-800 mb-3  w-3/4">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{item.q}</div>
      <div className="collapse-content">
        <p>{item.a}</p>
      </div>
    </div>
  );
}
