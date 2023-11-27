import { Project } from "./project";
import { usersMock } from "@domain/user";
import { categoriesMock1, categoriesMock2 } from "@domain/category";

export const projectMock1: Project = {
  id: "jira-clone",
  name: "Swift Scrum",
  description: "SwiftScrum stands as a web-based application designed for project management and communication, catering to efficient task management for both teams and individuals. With its user-friendly design, swiftScrum ensures simplicity in learning and adaptability to various workflows.",
  users: usersMock,
  categories: categoriesMock1,
  image:
    "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10405?size=xxlarge",
  createdAt: new Date("2023-01-01 10:00").valueOf(),
};

export const projectMock2: Project = {
  id: "second-project",
  name: "Second project",
  description:
    "Description for second project.",
  users: usersMock.slice(0, 3), // Only the first 3 users
  categories: categoriesMock2,
  image:
    "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10406?size=xxlarge",
  createdAt: new Date("2023-01-01 11:00").valueOf(),
};

export const projectsMock: Project[] = [projectMock1, projectMock2];
