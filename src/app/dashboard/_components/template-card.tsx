import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";
import Image from "next/image";

interface TemplateCardProps {
  imageSrc: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
  description: string;
  width: number;
  height: number;
  isPro: boolean | null;
}

export function TemplateCard({
  imageSrc,
  title,
  onClick,
  disabled,
  description,
  width,
  height,
  isPro,
}: TemplateCardProps) {
  return (
        <button
            onClick={onClick}
            disabled={disabled} 
            className={cn(
                "template-card",
                disabled ? 'disabled' : ''
            )}
        >
        <div
            className="template-card-image-wrapper"
            style={{ aspectRatio: `${width}/${height}` }}
        >
            <Image src={imageSrc} alt={title} fill />

            {isPro && (
            <div className="template-card-crown">
                <Crown className="size-5 fill-yellow-500 text-yellow-500" />
            </div>
            )}

            <div className="template-card-overlay">
            <p className="text-white font-medium">Open in editor</p>
            </div>
        </div>
       <div className="template-card-text">
            <p className="text-sm font-medium">{title}</p>
            <p className="template-card-description">{description}</p>
        </div>

    </button>

  );
}
