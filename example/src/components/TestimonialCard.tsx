import { StarIcon } from "./StarIcon";

export interface TestimonialProps {
  name: string;
  title: string;
  avatar: string;
  content: string;
}

function FiveStars() {
  return (
    <div className="flex items-center text-amber-400">
      <StarIcon className="size-4" />
      <StarIcon className="size-4" />
      <StarIcon className="size-4" />
      <StarIcon className="size-4" />
      <StarIcon className="size-4" />
    </div>
  );
}

export function TestimonialCard({
  name,
  title,
  avatar,
  content,
}: TestimonialProps) {
  return (
    <div className="w-80 space-y-3 rounded-lg bg-white px-5 py-3 text-sm shadow-sm">
      <div className="flex items-center gap-2">
        <img src={avatar} alt={name} className="size-8 rounded-full" />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-stone-600">{title}</div>
        </div>
      </div>
      <FiveStars />
      <div className="whitespace-pre-line text-stone-600">{content}</div>
    </div>
  );
}
