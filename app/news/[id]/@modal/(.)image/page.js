// define page as it should be shown if the navigation request was intercepted
// so, if a user tried to visit this specific route whilse already being on the website

import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const newsItemId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
