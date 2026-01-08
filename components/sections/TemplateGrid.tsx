
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import { TEMPLATES } from "../../lib/config";

function TemplateGrid() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <h2 className="text-2xl font-extrabold flex items-center gap-2 mb-8 text-neutral-900">
        <span className="inline-block align-middle">
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-accent"><rect width="28" height="28" rx="6" fill="currentColor" opacity="0.12"/><rect x="8" y="8" width="12" height="12" rx="3" fill="currentColor"/></svg>
        </span>
        What’s included
      </h2>
      <Grid cols={1} className="sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {TEMPLATES.map((card) => {
          // Generate a slug from the template name
          const slug = card.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return (
            <Card key={card.name} className="flex flex-col items-start gap-4 p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow h-full rounded-xl">
              <div className="mb-2">{card.icon}</div>
              <div className="font-bold text-lg mb-1 text-neutral-900">{card.name}</div>
              <div className="text-sm text-neutral-700 mb-4 flex-1">{card.description}</div>
              <a href={`/template/${slug}`} className="text-accent font-semibold text-sm hover:underline mt-auto">View template &rarr;</a>
            </Card>
          );
        })}
      </Grid>
    </section>
  );
}

export default TemplateGrid;
