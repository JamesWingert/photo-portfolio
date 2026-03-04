// Stamp pools by location key
// Drop stamp images into public/stamps/<location>/
// Each photo references a stampPool key to pick from

export const stampPools: Record<string, string[]> = {
  nyc: [
    "/stamps/nyc/stamp1.jpg",
  ],
  // Add more locations:
  // brooklyn: ["/stamps/brooklyn/stamp-1.png"],
  // tokyo: ["/stamps/tokyo/stamp-1.png"],
};

// Deterministic "random" based on seed so it's stable across renders
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export function getStampForPhoto(
  poolKey: string | undefined,
  photoIndex: number
): { src: string; rotation: number; offsetX: number; offsetY: number } | null {
  if (!poolKey || !stampPools[poolKey] || stampPools[poolKey].length === 0) {
    return null;
  }

  const pool = stampPools[poolKey];
  const rand1 = seededRandom(photoIndex);
  const rand2 = seededRandom(photoIndex + 100);
  const rand3 = seededRandom(photoIndex + 200);

  // Pick a random stamp from the pool
  const stampIndex = Math.floor(rand1 * pool.length);

  // Random rotation: -8 to +8 degrees
  const rotation = (rand2 - 0.5) * 16;

  // Random offset: -3px to +3px in each direction
  const offsetX = (rand3 - 0.5) * 6;
  const offsetY = (seededRandom(photoIndex + 300) - 0.5) * 6;

  return {
    src: pool[stampIndex],
    rotation,
    offsetX,
    offsetY,
  };
}
