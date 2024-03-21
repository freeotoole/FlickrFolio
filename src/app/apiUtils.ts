// Utility functions for fetching data from the Flickr API

// user id and api key
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const USER_ID = process.env.NEXT_PUBLIC_USER_ID

// public photos

export async function fetchPublicPhotos() {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.people.getPublicPhotos&user_id=${USER_ID}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=12`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export async function fetchPhoto(photoId: string) {
  const photoUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getInfo&photo_id=${photoId}&format=json&nojsoncallback=1&api_key=${API_KEY}`
  const response = await fetch(photoUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export async function fetchPhotoContext(photoId: string) {
  const photoUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getContext&photo_id=${photoId}&format=json&nojsoncallback=1&api_key=${API_KEY}`
  const response = await fetch(photoUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo context')
  }
  return response.json()
}

// photoset / album requests
export const fetchPhotoset = async (album: string) => {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getPhotos&photoset_id=${album}&user_id=${USER_ID}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=12`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}
export const fetchPhotosetInfo = async (album: string) => {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getInfo&photoset_id=${album}&user_id=${USER_ID}&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=12`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export const fetchPhotosetContext = async (album: string, photoId: string) => {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getContext&photoset_id=${album}&photo_id=${photoId}&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=12`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}
