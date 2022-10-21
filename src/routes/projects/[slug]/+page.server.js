import { client } from '$lib/graphql-client'
import { projectQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params
    const variables = { slug }
    const { project } = await client.request(projectQuery, variables)

    return {
        data: {
            project
        }
    };
}