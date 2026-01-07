import { FAQS } from "../../lib/config";

export default function FAQ() {
  return (
    <section className="w-full bg-white py-12 px-8 rounded-2xl border border-neutral-200">
      <h2 className="text-3xl font-bold mb-8 text-neutral-900">FAQ</h2>
      <div className="space-y-6">
        {FAQS.map((faq) => (
          <div key={faq.q} className="pb-6 border-b border-neutral-200 last:border-b-0 last:pb-0">
            <div className="font-semibold text-lg text-neutral-900 mb-2">{faq.q}</div>
            <div className="text-neutral-600">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}