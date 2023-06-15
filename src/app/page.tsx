import Button from '@/components/Button';
import db from '@/modules/db';
import { faker } from '@faker-js/faker';
import { revalidatePath } from 'next/cache';

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });

  const generatePosts = async () => {
    'use server';

    await db.post.createMany({
      data: [
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
      ],
    });
    revalidatePath('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <Button
        className="bg-black disabled:bg-slate-600 text-white p-5 mb-5 rounded-lg"
        onClick={generatePosts}
      >
        Generate Posts
      </Button>

      {posts.map((post) => (
        <div key={post.id} className="bg-white mb-3 px-5 py-3 rounded-md">
          {post.content}
        </div>
      ))}
    </main>
  );
}
