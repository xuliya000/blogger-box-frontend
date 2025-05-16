import { Category } from './category';

export interface Post {
    id: string;
    title: string;
    content: string;
    category: Category;
    createdDate: string;
}

export type PostCreateInput = Omit<Post, 'id' | 'createdDate'> & {
    isActive: boolean;
};

const newPost: PostCreateInput = {
    title: 'Boost Your Productivity',
    content: 'Explore powerful habits and techniques to enhance your daily performance.',
    category: {
        id: 'cd0c5c39-1ab0-409e-acb6-3781c3d75356',
        name: 'Productive'
    },
    isActive: true
};
