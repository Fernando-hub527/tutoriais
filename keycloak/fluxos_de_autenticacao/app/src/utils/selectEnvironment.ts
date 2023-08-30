export type typeEnv = "prod" | "development" | "test"

/**
 * @description Function responsible for finding the env file according to the sent parameter
 * @param environment A string that defines in which environment the application will run
 * @returns A string with the env file path suitable for the current environment
 */
export function selectEnvironment (ambiente: typeEnv) {
    if (ambiente === 'test') return './env/test/.env'
    else if (ambiente === 'development') return './env/dev/.env'
    else return "prod"
}