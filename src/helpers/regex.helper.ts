
export const BD_NUMBER_REGEX = /^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8}$/
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
export const USERNAME_REGEX = /^(?=.{3,20}$)(?![ 0-9_.])(?!.*[ _.]{2})[a-zA-Z0-9]+(?<![ _.])$/gm