import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
  size?: number;
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
  size = 10,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className={cn(
            "rounded-full border-2 border-white dark:border-gray-800 shadow-sm",
            `w-${size} h-${size}`
          )}
          src={url.imageUrl}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {(numPeople ?? 0) > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-black",
            `w-${size} h-${size}`
          )}
        >
          +{numPeople}
        </div>
      )}
    </div>
  );
};
