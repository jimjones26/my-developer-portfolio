import { client } from '$lib/graphql-client'
import { authorsQuery, projectsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const [authorReq, projectsReq] = await Promise.all([
    client.request(authorsQuery),
    client.request(projectsQuery),
  ])
  const { authors } = authorReq
  const { projects } = projectsReq

  return {
    data: {
      projects,
      authors
    }
  };
}