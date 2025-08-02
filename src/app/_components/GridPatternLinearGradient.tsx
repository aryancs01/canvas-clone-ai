"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div className="absolute h-[800px] w-full inset-0 -z-10">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        x={-1}
        y={-1}
        className={cn(
          "w-full h-full",
          "[mask-image:linear-gradient(to_bottom_right,white,transparent)]"
        )}
      />
    </div>
  );
}
