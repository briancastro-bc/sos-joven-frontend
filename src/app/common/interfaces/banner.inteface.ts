/**
 *
 * @interface BannerInformation
 * @property { title } 
 * @property { body } 
 *
 */

interface BannerInformation {
    title?: string,
    body?: string
}

/**
 * @interface Banner 
 * @property { url } - image url
 * @property { information } - banner information
 */

export interface Banner {
    url: string,
    information: BannerInformation
}