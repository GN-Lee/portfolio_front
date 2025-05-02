export interface ProjectInfo {
  title: string;
  image: string;
  link: string;
  skills: string[];
}

export interface VisitorList {
  id: number;
  name: string;
  comment: string;
  createdAt: Date;
  likes: number;
  projectInfo: ProjectInfo;
}

export interface Reply {
  id: number;
  comment: string;
  nickname: string;
  createdAt: Date;
}

export type VisitorResponseData = VisitorList & {
  replies: Reply[];
};
