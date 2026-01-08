import Column from "../ui/Column";
import { WHO_FOR, NOT_FOR } from "../../lib/config";
import { ThumbsUp, ThumbsDown, Check, X } from "lucide-react";

export default function WhoItsFor() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8 rounded-2xl border border-neutral-200 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl w-full mx-auto">
        <Column>
          <div className="flex flex-col items-center text-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Who it's for</h3>
          </div>
          <ul className="space-y-4">
            {WHO_FOR.map((item) => (
              <li key={item} className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </Column>
        <Column>
          <div className="flex flex-col items-center text-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
              <ThumbsDown className="w-5 h-5 text-neutral-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Who it's not for</h3>
          </div>
          <ul className="space-y-4">
            {NOT_FOR.map((item) => (
              <li key={item} className="flex items-center gap-3 justify-center">
                <X className="w-5 h-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600">{item}</span>
              </li>
            ))}
          </ul>
        </Column>
      </div>
    </section>
  );
}