/**
 *
 * @interface EmailTemplate Interface to contact form
 * @property { name } 
 * @property { email } 
 * @property { message } 
 *
 */

export interface EmailTemplate {
    name?: string, 
    email?: string,
    phone?: string,
    message?: string
}

/**
 * 
 * @interface EmailInterface Interface to Email.js configuation
 * @property { service_id } 
 * @property { template_id } 
 * @property { user_id } 
 * @property { template_params } 
 *
 */

export interface EmailInterface {
    service_id: string,
    template_id: string,
    user_id: string,
    template_params?: EmailTemplate
}

