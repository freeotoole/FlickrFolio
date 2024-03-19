export type FlickrImageProps = {
  id: string
  owner: string
  secret: string // if
  originalsecret?: string
  server: string
  farm: number
  title: string | _content<String>
  ispublic: number
  isfriend: number
  isfamily: number
  description: string | _content<String>
  url_l: string
  url_k: string
  width_l: number
  height_l: number
  tags: string
}
