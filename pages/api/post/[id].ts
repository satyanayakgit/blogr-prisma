import prisma from "../../../lib/prisma";

//DELETE /api/post/:id
export default async function handle( req, res ) {
    const postId = req.query.id;

    if( req.method === 'DELETE' ) {
        const post = await prisma.post.delete({
            where: { id: postId },
        });
        res.json(post);
    } else {
                throw new Error(
               'The HTTP ${req.method} is not suppoprted at this routr.',
                );
        }
}