// lib/fetchAbout.js
export async function getAboutData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-us`, {
    cache: "no-store", // always fetch fresh
  });
  const data = await res.json();
  return data.data; // return the "data" object
}
