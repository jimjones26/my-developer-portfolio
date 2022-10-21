import { client } from '$lib/graphql-client'
import { projectsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { projects } = await client.request(projectsQuery)

    return {
        data: {
            projects,
        }
    };
}