// Utility functions for fetching data from the Flickr API

import { settings } from './settings'

// user id and api key
const API_KEY = process.env.API_KEY
const USER_ID = process.env.USER_ID
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// public photos

export async function fetchPublicPhotos(page: number = 1) {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.people.getPublicPhotos&user_id=${USER_ID}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=${settings.perPage}&page=${page}`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  /**
   * if photos.page > photos.pages, return 404 or message
   */
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export async function fetchPhoto(photoId: string) {
  // call fetchPhotoContext and fetch photoSetContext in here
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
export const fetchPhotoset = async (album: string, page: number = 1) => {
  console.log('fetchPhotoset', album, page)

  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getPhotos&photoset_id=${album}&user_id=${USER_ID}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=${settings.perPage}&page=${page}`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}
export const fetchPhotosetInfo = async (album: string) => {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getInfo&photoset_id=${album}&user_id=${USER_ID}&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=${settings.perPage}`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export const fetchPhotosetContext = async (album: string, photoId: string) => {
  const apiUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getContext&photoset_id=${album}&photo_id=${photoId}&format=json&nojsoncallback=1&api_key=${API_KEY}&per_page=${settings.perPage}`
  const response = await fetch(apiUrl, { next: { revalidate: 300 } })
  if (!response.ok) {
    throw new Error('Failed to fetch photo data')
  }
  return response.json()
}

export const fetchPhotoWithContext = async (
  photoId: string,
  album?: string
) => {
  try {
    let contextResponse
    const photoResponse = await fetchPhoto(photoId)
    if (!album) {
      contextResponse = await fetchPhotoContext(photoId)
    } else {
      contextResponse = await fetchPhotosetContext(album, photoId)
    }
    return { ...photoResponse, ...contextResponse }
  } catch (error) {
    throw new Error('Failed to fetch photo data')
  }
}
