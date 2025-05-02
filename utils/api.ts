import { VisitorList } from "@/type/visitorList";
import data from "@/data/data";

export const getVisitor = async (): Promise<VisitorList[]> => {
  try {
    return data();
  } catch (error) {
    console.error("Error fetching visitors:", error);
    throw error;
  }
};

export const createVisitor = async (
  visitor: Pick<VisitorList, "name" | "comment" | "projectInfo">
) => {
  try {
    const newVisitor: VisitorList = {
      ...visitor,
      id: Date.now(),
      likes: 0,
      createdAt: new Date(),
    };
    return newVisitor;
  } catch (error: any) {
    console.error("Error creating visitor:", error);
    throw {
      code: 500,
      message: "방명록 등록에 실패했습니다.",
    };
  }
};

export const getVisitorById = async (id: number) => {
  try {
    const visitors = data();
    return visitors.find((visitor) => visitor.id === id);
  } catch (error) {
    console.error(`Error fetching visitor with id ${id}:`, error);
    throw error;
  }
};

export const createResponseReply = async (
  id: number,
  reply: { comment: string; nickname: string }
) => {
  try {
    return {
      id: Date.now(),
      ...reply,
      createdAt: new Date(),
    };
  } catch (error) {
    console.error("Error creating response reply:", error);
    throw error;
  }
};

export const getResponseReply = async (id: number) => {
  try {
    const visitors = data();
    return visitors.find((visitor) => visitor.id === id);
  } catch (error) {
    console.error(`Error fetching response reply for visitor ${id}:`, error);
    throw error;
  }
};
