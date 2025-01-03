"use client"
import { useState } from 'react';

type Comment = {
  id: number;
  name: string;
  email: string;
  text: string;
};

const CommentPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (newComment.trim() && name.trim() && email.trim()) {
      const newCommentObj = {
        id: comments.length + 1, // Simple incrementing ID
        name,
        email,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment(''); // Clear input field after submission
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your email"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Write a comment..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Comment
        </button>
      </form>

      {/* Displaying Comments */}
      <div>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b pb-2 mb-2">
              <p className="font-semibold">Comment {comment.id}</p>
              <p><strong>Name:</strong> {comment.name}</p>
              <p><strong>Email:</strong> {comment.email}</p>
              <p>{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentPage;

