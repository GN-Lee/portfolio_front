"use client";
import { getVisitorById } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Reply, VisitorResponseData } from "@/type/visitorList";

const Page = () => {
  const router = useRouter();
  const [visitor, setVisitor] = useState<VisitorResponseData | null>(null);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const fetchVisitor = async () => {
    try {
      const response = await getVisitorById(Number(id));
      if (!response) {
        throw new Error("방문자 정보를 찾을 수 없습니다.");
      }

      const formattedResponse: VisitorResponseData = {
        ...response,
        createdAt: new Date(response.createdAt),
        replies: response.replies || [],
      };
      setVisitor(formattedResponse);
    } catch (error) {
      console.error("방문자 정보를 가져오는데 실패했습니다:", error);
      router.push("/review");
    }
  };

  useEffect(() => {
    fetchVisitor();
  }, [id]);

  const handleDelete = async () => {
    try {
      // 삭제 기능은 현재 구현되어 있지 않음
      alert("삭제 기능은 현재 구현되어 있지 않습니다.");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {visitor && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">{visitor.name}</h2>
            <p className="text-gray-600 mb-4">{visitor.comment}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(visitor.createdAt).toLocaleDateString()}
              </span>
              <button
                onClick={handleDelete}
                className="text-red-500 hover:text-red-700"
              >
                삭제
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">댓글</h3>
            {visitor.replies.map((reply) => (
              <div key={reply.id} className="mb-4 pb-4 border-b">
                <p className="text-gray-600">{reply.comment}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    {reply.nickname}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(reply.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
