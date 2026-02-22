/**
 * Actual images: Add your photos in public/images/ with these names,
 * then set NEXT_PUBLIC_USE_LOCAL_IMAGES=true in .env.local
 * 
 * Required files in public/images/:
 * - hero.jpg          (Hero background, 1920x1080+)
 * - fleet-sedan.jpg    (Swift Dzire / sedan)
 * - fleet-suv.jpg     (Innova / SUV)
 * - fleet-tempo.jpg   (Tempo Traveller)
 * - about-team.jpg    (About section - your team/driver)
 * - about-hero.jpg    (About page hero)
 * - og.jpg            (Social share image, 1200x630)
 * Optional blog: blog-1.jpg, blog-2.jpg, blog-3.jpg, blog-4.jpg, blog-5.jpg
 * Optional places: khajjiar.jpg, chamera.jpg, laxmi-narayan.jpg, kalatop.jpg, manimahesh.jpg, bharmour.jpg
 */

const USE_LOCAL = process.env.NEXT_PUBLIC_USE_LOCAL_IMAGES === 'true';

const local = (name: string) => (USE_LOCAL ? `/images/${name}` : null);

const placeholders = {
  hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Khajjiar_Lake_Himachal_Pradesh.jpg/1920px-Khajjiar_Lake_Himachal_Pradesh.jpg',
  fleetSedan: 'https://picsum.photos/seed/dzire/600/400',
  fleetSuv: 'https://picsum.photos/seed/innova/600/400',
  fleetTempo: 'https://picsum.photos/seed/tempo/600/400',
  aboutTeam: 'https://picsum.photos/seed/taxi-driver/800/800',
  aboutHero: 'https://picsum.photos/seed/about-hero/800/1000',
  og: 'https://picsum.photos/seed/chamba-taxi/1200/630',
  blog: (i: number) => `https://picsum.photos/seed/blog${i}/800/500`,
  blogSection: (i: number) => `https://picsum.photos/seed/blog${i}/600/400`,
  places: {
    khajjiar: '/images/Khajjiar.jpg',
    chamera: '/images/ChameraLake.jpg',
    laxmiNarayan: '/images/lakshmi-narayan-mandir-chamba.jpg',
    kalatop: '/images/KalatopWildlifeSanctuary.jpg',
    manimahesh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Manimahesh_Lake.jpg/1200px-Manimahesh_Lake.jpg',
    bharmour: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chaurasi_Temple_Bharmour.jpg/1200px-Chaurasi_Temple_Bharmour.jpg',
  },
};

export function getImage(path: 'hero' | 'fleetSedan' | 'fleetSuv' | 'fleetTempo' | 'aboutTeam' | 'aboutHero' | 'og' | 'heroCar'): string {
  if (path === 'heroCar') return '/images/traveling-with-off-road-car.jpg';
  const localPath = local(
    path === 'hero' ? 'hero.jpg' :
    path === 'fleetSedan' ? 'fleet-sedan.jpg' :
    path === 'fleetSuv' ? 'fleet-suv.jpg' :
    path === 'fleetTempo' ? 'fleet-tempo.jpg' :
    path === 'aboutTeam' ? 'about-team.jpg' :
    path === 'aboutHero' ? 'about-hero.jpg' :
    'og.jpg'
  );
  return localPath || placeholders[path];
}

export function getBlogImage(index: number, useSectionSize = false): string {
  const localPath = local(`blog-${index}.jpg`);
  if (localPath) return localPath;
  return useSectionSize ? placeholders.blogSection(index) : placeholders.blog(index);
}

const placeKeys = ['khajjiar', 'chamera', 'laxmiNarayan', 'kalatop', 'manimahesh', 'bharmour'] as const;
export function getPlaceImage(key: (typeof placeKeys)[number]): string {
  const localPath = local(`places/${key}.jpg`);
  if (localPath) return localPath;
  return placeholders.places[key];
}

export function getPlaceImageByIndex(index: number): string {
  const key = placeKeys[index];
  return key ? getPlaceImage(key) : placeholders.places.khajjiar;
}
