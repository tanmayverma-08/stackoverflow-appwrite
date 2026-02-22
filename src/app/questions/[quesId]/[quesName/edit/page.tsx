import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";
import { Models } from "appwrite";

interface QuestionDocument extends Models.Document {
  title: string;
  content: string;
  tags: string[];
  authorId: string;
  attachmentId: string;
}

const Page = async ({ params }: { params: { quesId: string; quesName: string } }) => {
    const question = await databases.getDocument(db, questionCollection, params.quesId) as QuestionDocument;

    return <EditQues question={question} />;
};

export default Page;