export const load = async ({ params }) => {
  console.log(params.post)
  const thisPost = await import(`../../../lib/posts/${params.post}.md`)

  const { metadata } = thisPost
  const content = thisPost.default.render().html

  return { 
    metadata,  
    content
  }
}