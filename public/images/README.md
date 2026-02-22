# Actual Images – Chamba Taxi

Ab aap yahan apni **real photos** rakh sakte ho. Jab yeh files add karoge aur `.env.local` mein `NEXT_PUBLIC_USE_LOCAL_IMAGES=true` set karoge, tab site par yahi images dikhengi.

## Kaise use karein

1. Apni photos yahan copy karo (niche diye gaye exact names se).
2. Project root par `.env.local` banao (agar nahi hai) aur andar yeh line add karo:
   ```
   NEXT_PUBLIC_USE_LOCAL_IMAGES=true
   ```
3. Site dubara run karo: `npm run dev`

## Required files (yahi names use karo)

| File | Use | Suggested size |
|------|-----|----------------|
| `hero.jpg` | Home page hero background | 1920×1080 ya bada |
| `traveling-with-off-road-car.jpg` | Hero right side – off-road car image | 800×600 ya 4:3 |
| `fleet-sedan.jpg` | Sedan (Swift Dzire) card | 600×400 |
| `fleet-suv.jpg` | SUV (Innova) card | 600×400 |
| `fleet-tempo.jpg` | Tempo Traveller card | 600×400 |
| `about-team.jpg` | Home – “Why Choose” section | 800×800 |
| `about-hero.jpg` | About page hero image | 800×1000 |
| `og.jpg` | Facebook/WhatsApp share image | 1200×630 |

## Optional – Blog

| File | Use |
|------|-----|
| `blog-1.jpg` … `blog-5.jpg` | Blog cards (home + blog page) |

## Optional – Places (subfolder)

`places/` folder banao aur andar yeh files rakh sakte ho (apni clicks se replace):

| File | Place |
|------|--------|
| `places/khajjiar.jpg` | Khajjiar |
| `places/chamera.jpg` | Chamera Lake |
| `places/laxmiNarayan.jpg` | Laxmi Narayan Temple |
| `places/kalatop.jpg` | Kalatop Wildlife Sanctuary |
| `places/manimahesh.jpg` | Manimahesh Lake |
| `places/bharmour.jpg` | Bharmour |

Format: JPG ya PNG dono chalenge. Names bilkul same hon chahiye (lowercase, hyphen).

Jab tak yeh files add nahi karte, site placeholder images use karti rahegi.
