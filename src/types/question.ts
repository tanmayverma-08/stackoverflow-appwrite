import { Models } from "appwrite";

export interface UserDocument {
  $id: string;
  name: string;
  reputation: number;
}

export interface QuestionDocument extends Models.Document {
  title: string;
  content: string;
  tags: string[];
  authorId: string;
  author: UserDocument;
  totalAnswers: number;
  totalVotes: number;
  attachmentId?: string;
  href: string; // required everywhere
}
