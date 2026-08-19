import { Journey, getJourneys } from "@/src/lib/journeys";
import moment from "moment";
import Link from "next/link";
// import { Tag } from "./[slug]/page";

export default async function JourneysPage() {
  const journeys = getJourneys();
  return (
    <div>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Journeys
      </h1>

      {/* TODO: add tags filter (OR between all selections)
      <p>{JSON.stringify(getAllTags())}</p> */}

      <section className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {journeys.map((journey: Journey) => (
          <Link
            className="flex items-center justify-between px-4 py-2 transition-all sm:p-4 sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
            key={journey.id}
            href={`/journeys/${journey.id}`}
          >
            <div className="flex gap-1 gap-x-2 max-sm:flex-col sm:items-center">
              {journey.title}{" "}
              <span className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                {journey?.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
              </span>
            </div>
            <span className="text-zinc-500 max-sm:text-sm dark:text-zinc-400">
              {moment(journey.date, "YYYY-MM-DD").format("MMM/YYYY")}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
